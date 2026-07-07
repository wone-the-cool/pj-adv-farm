---
name: docs-html-export
description: "STUB(보류) — old/docs의 과거 md 원본에서 html을 다시 뽑아야 할 때 쓰는 재생성 도구. docs/는 이제 html이 원본이라 평소엔 쓸 일 없음. 'old 문서에서 다시 뽑아줘', 'md에서 재생성해줘' 같은 명시적 요청에만 사용."
---

# 문서 HTML 재생성 스킬 (보류 상태)

**현재 상태가 바뀌었다:** `docs/`는 더 이상 `.md`에서 자동 생성되는 산출물이 아니라 **그 자체가 원본(html)**이다. 과거 md 원본은 `old/docs/`에 그대로 보관되어 있다 (히스토리/롤백용). 따라서 이 스킬은 평소 워크플로우에서 쓰이지 않는다 — `old/docs/`의 md를 기준으로 html을 다시 뽑아야 하는 예외적인 상황에만 쓴다.

**활성화:** "old 문서에서 다시 뽑아줘", "md 원본 기준으로 재생성해줘" 등 명시적 요청 시에만.

**절차 (실행 전 반드시 확인):**
1. `tools/docs-to-html.js`는 `docs/`(SRC_DIR)를 읽어 `docs-html/`(OUT_DIR)에 쓰도록 되어 있다. 지금 `docs/`에는 html만 있으므로 **그대로 실행하면 0개 파일 변환**된다 — 스크립트의 `SRC_DIR`/`OUT_DIR` 상수를 `old/docs`, 출력용 임시 폴더로 바꿔서 실행해야 한다.
2. 재생성한 결과를 그대로 `docs/`에 덮어쓰지 않는다 — 그 사이에 `docs/*.html`을 직접 손으로 고친 내용이 있으면 유실된다. 반드시 diff를 먼저 확인하고, 필요한 부분만 사용자 확인 후 반영한다.
3. 이 스킬을 실제로 다시 쓸 일이 생겼다면, 애초에 "md 원본 + 자동 생성 html" 워크플로우로 되돌아가고 싶다는 신호일 수 있다 — game-designer/open-question-facilitator와 이 워크플로우 자체를 재논의하는 것을 권장한다.

## 배경 (왜 이렇게 됐는지)
사용자가 `docs/`를 html 전용으로 전환하기로 결정 (2026-07-03) — 과거 md는 `old/docs/`에 archive, `docs-html/` 산출물을 `docs/`로 승격. 이 스킬은 그 결정 이전에 쓰던 "md→html 빌드" 스킬의 흔적으로, 완전히 삭제하지 않고 예외 상황 대비용으로만 남겨둔다.

## 미확정 — 상의 필요
- 앞으로 `docs/`의 새 문서를 손으로 html 태그를 고쳐 만들지, 아니면 md로 초안 쓰고 이 파이프라인을 부활시켜 변환할지 (각 콘텐츠 생성 스킬의 산출물 형식과도 연결된 질문 — new-village-doc, quest-design, dialogue-writing, level-dungeon-design, item-equipment-design, playtest-log 참고)
