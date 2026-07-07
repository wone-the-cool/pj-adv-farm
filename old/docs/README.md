# 문서 지도

CLAUDE.md는 세션마다 자동 로드되므로 철학/원칙/인덱스만 유지하고, 세부 내용은 이 아래 docs/에 분리했다.

```
docs/
├── systems/          # 핵심 시스템 6종 상세 (CLAUDE.md 요약의 확장본)
│   ├── villages.md          # 1. 지역/마을 구조
│   ├── adventure-combat.md  # 2. 보스/던전 공략
│   ├── time-camping.md      # 3. 시간/노숙
│   ├── settlement.md        # 4. 정착 전 콘텐츠(대여 농장)
│   ├── romance-companion.md # 5. NPC 로맨스/컴패니언
│   └── farming-economy.md   # 6. 경제/작물 시스템
├── story/
│   └── plot-hooks.md        # 스토리라인 미확정 논의점 (narrative-writer 담당)
├── format/
│   └── game-format-tbd.md   # 게임 형식 미확정 논의점 (technical-advisor 담당)
├── business/                # 표준 제안서 목차 신규 추가분
│   ├── target-market.md
│   ├── competitor-analysis.md
│   └── monetization.md
├── art/
│   └── mood-board.md         # 아트 레퍼런스 (표준 제안서 목차 신규 추가분)
├── roadmap.md                # 개발 마일스톤/일정 (표준 제안서 목차 신규 추가분)
├── risks.md                  # 리스크 관리 표 (CLAUDE.md 리스크 섹션 상세본, scope-reviewer 담당)
└── pre-production-checklist.md  # 착수 전 체크리스트 (히스토리 기록형, open-question-facilitator 담당)
```

## 사용 규칙
- 세부 내용(마을 시놉시스, 캐릭터 시트, 밸런싱 수치)이 늘어나면 `docs/villages/<마을명>.md`, `docs/characters/<이름>.md` 등으로 추가 분리한다.
- 각 문서 상단 frontmatter의 `status`(draft/living-document 등)와 `owner_agent`로 어떤 에이전트가 주로 다루는 문서인지 표시한다.
- 미확정 항목은 항상 "미확정 — 상의 필요" 섹션에 옵션 형태로만 기록한다 (CLAUDE.md 작업 원칙과 동일).

## HTML 변환본 (`docs-html/`)

`docs/` 원본은 `tools/docs-to-html.js` (`docs-html-export` 스킬)로 `docs-html/`에 동일한 구조로 변환할 수 있다. `docs-html/`은 **자동 생성 산출물**이며 직접 수정하지 않는다 — 내용을 바꾸려면 `docs/`의 `.md`를 고친 뒤 스킬을 다시 실행한다. 점진적 HTML 전환 로드맵은 `docs-html-export` 스킬 문서 참고.
