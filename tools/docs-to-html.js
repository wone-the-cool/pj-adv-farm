#!/usr/bin/env node
// docs/**/*.md -> docs-html/**/*.html 변환기. 의존성 없이 Node.js 내장 모듈만 사용.
// 원본(docs/*.md)은 그대로 두고, docs-html/는 실행할 때마다 통째로 재생성되는 빌드 산출물이다.
// 사용법: node tools/docs-to-html.js

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "docs");
const OUT_DIR = path.join(ROOT, "docs-html");
const ASSET_DIR = path.join(OUT_DIR, "assets");

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// relative .md 링크만 .html로 치환 (http/https 링크는 그대로 둔다)
function rewriteMdLinks(text) {
  return text.replace(/\]\(([^)]+?\.md)\)/g, (m, target) => {
    if (/^https?:\/\//.test(target)) return m;
    return `](${target.replace(/\.md$/, ".html")})`;
  });
}

function inline(text) {
  let t = escapeHtml(text);
  t = rewriteMdLinks(t);
  t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return t;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2];
  }
  return { meta, body: raw.slice(m[0].length) };
}

function renderTable(lines) {
  const rows = lines
    .filter((l) => !/^\s*\|?\s*[-: ]+\|[-:| ]+\s*$/.test(l))
    .map((l) =>
      l
        .trim()
        .replace(/^\||\|$/g, "")
        .split("|")
        .map((c) => c.trim())
    );
  if (rows.length === 0) return "";
  const [head, ...body] = rows;
  const th = head.map((c) => `<th>${inline(c)}</th>`).join("");
  const trs = body
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
    .join("\n");
  return `<table>\n<thead><tr>${th}</tr></thead>\n<tbody>\n${trs}\n</tbody>\n</table>`;
}

function markdownToHtml(body) {
  const lines = body.split("\n");
  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // 코드 블록
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      i++; // closing ```
      html.push(`<pre><code>${escapeHtml(buf.join("\n"))}</code></pre>`);
      continue;
    }

    // 표
    if (/^\s*\|.*\|\s*$/.test(line) && lines[i + 1] && /^\s*\|?[-:| ]+\|?\s*$/.test(lines[i + 1])) {
      const buf = [];
      while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      html.push(renderTable(buf));
      continue;
    }

    // 헤더
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      html.push(`<h${level}>${inline(h[2])}</h${level}>`);
      i++;
      continue;
    }

    // 구분선
    if (/^-{3,}\s*$/.test(line)) {
      html.push("<hr>");
      i++;
      continue;
    }

    // 체크리스트 / 리스트
    if (/^\s*-\s+\[[ xX]\]\s+/.test(line) || /^\s*-\s+/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      const items = buf.map((l) => {
        const cb = l.match(/^\s*-\s+\[([ xX])\]\s+(.*)$/);
        if (cb) {
          const checked = cb[1].toLowerCase() === "x" ? "checked disabled" : "disabled";
          return `<li><input type="checkbox" ${checked}> ${inline(cb[2])}</li>`;
        }
        const item = l.match(/^\s*-\s+(.*)$/);
        return `<li>${inline(item[1])}</li>`;
      });
      html.push(`<ul>\n${items.join("\n")}\n</ul>`);
      continue;
    }

    // 빈 줄
    if (line.trim() === "") {
      i++;
      continue;
    }

    // 문단 (다음 빈 줄/블록 시작 전까지 합침)
    const buf = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^\s*-\s+/.test(lines[i]) &&
      !/^-{3,}\s*$/.test(lines[i]) &&
      !/^\s*\|.*\|\s*$/.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    html.push(`<p>${inline(buf.join(" "))}</p>`);
  }
  return html.join("\n");
}

function metaBox(meta, srcRelPath) {
  const entries = Object.entries(meta);
  if (entries.length === 0) return "";
  const rows = entries
    .map(([k, v]) => {
      let val = v;
      const listMatch = v.match(/^\[(.*)\]$/);
      if (listMatch) {
        val = listMatch[1]
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((s) => `<a href="${s.replace(/\.md$/, ".html")}">${escapeHtml(s)}</a>`)
          .join(", ");
      } else {
        val = escapeHtml(v);
      }
      return `<tr><th>${escapeHtml(k)}</th><td>${val}</td></tr>`;
    })
    .join("\n");
  return `<table class="meta"><tbody>\n${rows}\n</tbody></table>`;
}

function template(title, bodyHtml, meta, srcRelPath, cssRelPath) {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>${escapeHtml(title)}</title>
<link rel="stylesheet" href="${cssRelPath}">
</head>
<body>
<p><a href="${"../".repeat(srcRelPath.split("/").length - 1)}index.html">← 목차</a></p>
${metaBox(meta, srcRelPath)}
<main>
${bodyHtml}
</main>
</body>
</html>
`;
}

function buildIndex(entries) {
  const byDir = {};
  for (const e of entries) {
    const dir = path.dirname(e.rel) === "." ? "" : path.dirname(e.rel);
    (byDir[dir] = byDir[dir] || []).push(e);
  }
  const dirs = Object.keys(byDir).sort();
  const sections = dirs
    .map((dir) => {
      const items = byDir[dir]
        .sort((a, b) => a.rel.localeCompare(b.rel))
        .map((e) => `<li><a href="${e.rel}">${escapeHtml(e.title)}</a></li>`)
        .join("\n");
      const heading = dir === "" ? "루트" : dir;
      return `<h2>${escapeHtml(heading)}</h2>\n<ul>\n${items}\n</ul>`;
    })
    .join("\n");
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>문서 목차</title>
<link rel="stylesheet" href="assets/style.css">
</head>
<body>
<main>
<h1>문서 목차</h1>
${sections}
</main>
</body>
</html>
`;
}

const CSS = `
body { font-family: -apple-system, "Segoe UI", "Malgun Gothic", sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; line-height: 1.6; color: #1a1a1a; }
.generated-banner { background: #fff3cd; border: 1px solid #ffe08a; padding: 0.5rem 1rem; border-radius: 4px; font-size: 0.85rem; margin-bottom: 1.5rem; }
table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
table.meta { width: auto; font-size: 0.85rem; margin-bottom: 1.5rem; }
th, td { border: 1px solid #ccc; padding: 0.4rem 0.7rem; text-align: left; vertical-align: top; }
th { background: #f5f5f5; }
code { background: #f0f0f0; padding: 0.1rem 0.3rem; border-radius: 3px; font-family: Consolas, monospace; }
pre { background: #f5f5f5; padding: 0.8rem; overflow-x: auto; border-radius: 4px; }
pre code { background: none; padding: 0; }
hr { border: none; border-top: 1px solid #ddd; margin: 2rem 0; }
h1, h2, h3 { border-bottom: 1px solid #eee; padding-bottom: 0.3rem; }
`;

function main() {
  fs.mkdirSync(ASSET_DIR, { recursive: true });
  fs.writeFileSync(path.join(ASSET_DIR, "style.css"), CSS.trim() + "\n");

  const files = walk(SRC_DIR);
  const indexEntries = [];
  for (const file of files) {
    const relPath = path.relative(SRC_DIR, file).split(path.sep).join("/"); // 예: systems/villages.md
    const outRelPath = relPath.replace(/\.md$/, ".html");
    const outPath = path.join(OUT_DIR, outRelPath);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    const raw = fs.readFileSync(file, "utf8");
    const { meta, body } = parseFrontmatter(raw);
    const bodyHtml = markdownToHtml(body);

    const depth = outRelPath.split("/").length - 1;
    const cssRelPath = (depth > 0 ? "../".repeat(depth) : "") + "assets/style.css";

    const titleMatch = body.match(/^#\s+(.*)$/m);
    const title = titleMatch ? titleMatch[1] : relPath;

    const html = template(title, bodyHtml, meta, relPath, cssRelPath);
    fs.writeFileSync(outPath, html);
    indexEntries.push({ rel: outRelPath, title });
    console.log(`변환됨: docs/${relPath} -> docs-html/${outRelPath}`);
  }

  fs.writeFileSync(path.join(OUT_DIR, "index.html"), buildIndex(indexEntries));
  console.log(`목차 생성: docs-html/index.html`);
  console.log(`\n총 ${files.length}개 파일 변환 완료 -> ${OUT_DIR}`);
}

main();
