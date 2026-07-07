# 프로젝트 개요

스타듀밸리(농장 경영)를 근간으로 하되, 젤다의 전설 야생의 숨결(자유도 높은 오픈월드 진행)과 룬팩토리(농장+모험+결혼) 요소를 결합한 판타지 농장 경영/모험 게임 기획.

**장르 정체성**: 농장 경영이 메인. 모험/전투/결혼은 서브 시스템으로서 메인 루프를 보조하고 풍부하게 만드는 역할.

이 문서는 매 세션 자동 로드되는 **철학/원칙/인덱스 전용 문서**다. 세부 내용(마을 시놉시스, 밸런싱 수치, 스토리 논의, 기술/비즈니스 검토 등)은 모두 `docs/`에 분리되어 있다 — 문서 지도는 [docs/README.html](docs/README.html), 브라우저로 훑어보려면 [docs/index.html](docs/index.html)부터 열 것.

**`docs/`는 2026-07-03부로 html이 원본이다.** 과거 markdown 원본은 `old/docs/`에 그대로 보관 중 (히스토리/롤백용, 참고만 하고 편집하지 않음). `docs/*.html`을 직접 고칠 때는 태그 구조(`<table>`, `<ul>` 등)를 깨뜨리지 않도록 주의. 앞으로 새 문서를 만들 때 md로 쓸지 html로 바로 쓸지는 아직 미확정 — 관련 스킬(new-village-doc 등) 사용 시 사용자에게 먼저 확인할 것.

---

# 핵심 디자인 철학 (모든 제안의 심사 기준)

1. **농장 경영이 주(主), 모험은 종(從)이지만 비중은 결코 작지 않다.** 스토리를 전부 보려면 모험이 필수이고, 모험을 완수하려면 농장 경영이 필수인 상호 의존 구조.
2. **자유도는 "순서의 자유"이지 "결과의 편법 허용"이 아니다.** 어느 마을을 먼저 가도 되지만, 특정 공략법이 없으면 어렵거나 오래 걸릴 뿐 불가능하지는 않아야 한다. (야숨의 "어떤 방법으로든 클리어 가능" 철학 계승)
3. **강제되는 재미보다 선택 가능한 인센티브.** 노숙, NPC 로맨스 등은 강제 콘텐츠가 아니라 "안 해도 되지만 하면 확실히 이득"인 옵트인(opt-in) 구조.
4. **스타듀밸리의 여유로운 페이스를 해치지 않는다.** 모험 요소가 강해져도 "오늘은 그냥 농장만 하고 쉬어도 되는" 자유가 유지되어야 함.

---

# 핵심 시스템 (요약 — 상세는 docs/systems/)

| # | 시스템 | 한 줄 요약 | 상세 문서 |
|---|---|---|---|
| 1 | 지역/마을 구조 | 야숨식 자유도, 마을 3~5개 후보(초기 스코프 축소 권장) | [docs/systems/villages.html](docs/systems/villages.html) |
| 2 | 보스/던전 공략 | "필수 열쇠"가 아닌 "최적 해법" 구조 — 자물쇠-열쇠 금지 | [docs/systems/adventure-combat.html](docs/systems/adventure-combat.html) |
| 3 | 시간/노숙 | 리얼타임 + 선택적 노숙(캠핑), 보상형 옵트인 콘텐츠 | [docs/systems/time-camping.html](docs/systems/time-camping.html) |
| 4 | 정착 전 콘텐츠 | 마을별 소규모 농장 대여/대리 운영 | [docs/systems/settlement.html](docs/systems/settlement.html) |
| 5 | NPC 로맨스/컴패니언 | 명시적 트리거 기반 옵트인 호감도, 컴패니언은 별도 실익 제공 | [docs/systems/romance-companion.html](docs/systems/romance-companion.html) |
| 6 | 경제/작물 시스템 | 마을별 고유 작물→가공품→보스 공략 연결 구조 | [docs/systems/farming-economy.html](docs/systems/farming-economy.html) |

---

# 알려진 리스크 및 미해결 과제 (요약 — 상세는 docs/risks.html)

1. 스코프 문제 (마을 수 × 시스템 조합 규모 과다)
2. 마을 개방 구조 미확정 (전체 개방 vs 순차 개방)
3. 보스 난이도 밸런싱 (반복 테스트 필요)
4. 노숙 시스템 페이스 (필수화되지 않는 인센티브 설계)
5. 결혼 후 콘텐츠 부재 위험

전체 표, 영향도, 관련 문서 링크는 [docs/risks.html](docs/risks.html) 참고. **이 항목들은 임의로 확정하지 말고 항상 옵션을 제시할 것.**

---

# 레퍼런스

- **스타듀밸리 (Stardew Valley)**: 농장 경영 루프, 여유로운 페이스, 시즌 시스템
- **젤다의 전설 야생의 숨결 (Zelda: BOTW)**: 자유도 높은 오픈월드 진행, 편법을 허용하는 문제 해결 방식
- **룬팩토리 (Rune Factory)**: 농장+던전+결혼 조합의 선행 사례 (단, 이 프로젝트는 룬팩토리보다 농장 경영 비중을 더 높게 유지)

---

# Claude Code 작업 시 참고사항

- 이 문서는 기획 단계의 컨텍스트 문서입니다. 코드/에셋/문서 작업 전 "핵심 디자인 철학" 섹션을 우선 참고해주세요.
- 신규 시스템 제안 시, 기존에 확정된 방향(옵트인 구조, 최적 해법형 난이도, 자유도 우선)과 상충하지 않는지 점검해주세요.
- "알려진 리스크 및 미해결 과제"와 `docs/` 하위의 "미확정 — 상의 필요" 섹션들은 아직 확정되지 않았으므로, 임의로 확정하지 말고 옵션을 제시해주세요.
- 세부 내용(마을 시놉시스, 캐릭터 시트, 밸런싱 수치, 리서치)을 새로 작성할 때는 CLAUDE.md에 직접 추가하지 말고 `docs/` 하위에 분리 작성하고, 필요하면 이 문서의 표에 링크만 추가해주세요.
- `docs/*.html`은 원본이므로 Edit 시 html 태그를 직접 다뤄야 합니다. 새 문서를 md로 만들지 html로 만들지는 아직 미확정이니 임의로 정하지 말고 사용자에게 먼저 확인해주세요.

---

# 서브에이전트 구성 (`.claude/agents/`)

역할을 분리한 6개 서브에이전트가 구성되어 있다. 필요 시 Agent 도구로 호출.

| 에이전트 | 역할 | 주로 참고하는 문서 |
|---|---|---|
| **game-designer** | 전체 기획 총괄, 시스템 간 상충 여부 검토, 디자인 철학 수호자 | 핵심 디자인 철학, docs/risks.html, docs/design-reference-retention.html |
| **narrative-writer** | 스토리라인/퀘스트/마을별 서사, 대사, NPC 캐릭터성 설계 (스토리 기획 전문가) | docs/story/plot-hooks.html, docs/villages/ |
| **systems-designer** | 전투, 농사, 경제, 밸런싱 등 수치/규칙 설계 | docs/systems/, docs/design-reference-retention.html |
| **technical-advisor** | 실제 구현 관점(엔진 선택, 2D 렌더링, 세이브 구조 등) 조언 | docs/format/game-format-tbd.html |
| **scope-reviewer** | 매 기능 추가 제안마다 "이거 스코프 초과 아닌지" 견제 (의도적으로 비관적 관점 유지) | docs/risks.html, docs/roadmap.html |
| **open-question-facilitator** | `docs/` 전반의 "미확정 — 상의 필요" 항목을 모아 논의를 진행하고, 결론이 나면 문서까지 갱신 (검토만 하는 다른 에이전트와 달리 결정 반영까지 담당) | docs/risks.html 및 각 문서의 "미확정" 섹션 전체 |

## 프로젝트 전용 스킬 (`.claude/skills/`)

| 스킬 | 역할 |
|---|---|
| **new-village-doc** | 새 마을 기획 문서를 표준 템플릿으로 `docs/villages/<마을명>`에 생성(형식 미확정), `docs/systems/villages.html` 표 갱신 |
| **balance-sheet** | 작물 가격/희귀도, 보스 난이도, 경험치 곡선 등 수치를 `docs/balance/`에 CSV로 정리 (문서 페이지 아니므로 html 전환 대상 아님) |
| **design-check** | 신규 제안을 핵심 디자인 철학·스코프 리스크 관점에서 체크리스트로 1차 점검 |
| **story-planning** | 메인 플롯/마을 서사 연결/엔딩 구조 등 스토리 뼈대를 옵션 형태로 스캐폴딩 (깊은 창작은 narrative-writer로 위임) |
| **quest-design** | 퀘스트를 트리거-목표-보상-실패조건 구조로 `docs/quests/`에 설계 (형식 미확정) |
| **dialogue-writing** | NPC 대사/선택지를 환경 스토리텔링 우선 원칙에 맞춰 절제된 분량으로 작성 (형식 미확정) |
| **level-dungeon-design** | 던전/필드 구조(구역, 기믹, 보스방)를 `docs/systems/dungeons/`에 설계 (형식 미확정) |
| **item-equipment-design** | 특산물 포션/장비 스펙을 "없어도 가능, 있으면 수월" 원칙에 맞게 `docs/systems/items/`에 설계 (형식 미확정) |
| **playtest-log** | 플레이테스트/피드백을 `docs/playtest/`에 기록하고 리스크·밸런스 문서와 연결 (형식 미확정) |
| **resolve-open-questions** | `docs/` 전체의 "미확정 — 상의 필요" 항목을 스캔해 안건화하고, 결론을 문서에 반영 (깊은 논의는 open-question-facilitator 에이전트로 위임) |
| **brainstorm-topic** | 미확정 항목 하나를 웹 리서치 + 다중 에이전트 병렬 브레인스토밍(충돌 지점 명시)으로 딥다이브, `docs/meetings/`에 회의록 기록 후 확정 시 관련 문서에 반영 |
| **ui-mockup** | (스텁) 2D 타일맵/UI 목업 — 그래픽 스타일·엔진 미확정 상태라 러프 와이어프레임까지만 지원 |
| **docs-html-export** | (보류) `old/docs`의 과거 md 원본에서 html을 다시 뽑아야 할 때만 쓰는 예외용 재생성 도구. 평소엔 `docs/*.html`을 직접 편집 |

> "형식 미확정"으로 표시된 스킬은 산출물을 `.md`로 만들지 `.html`로 만들지 아직 정해지지 않았다 (docs/가 html 전용으로 바뀐 것과 별개 결정 — 사용 시 먼저 확인). `docs/`가 html 전용으로 전환되기 전 markdown 원본은 `old/docs/`에 보관되어 있다.

---

# 문서 지도

세부 논의점(게임 형식, 스토리라인), 표준 제안서 목차(타겟 시장, 경쟁작 비교, 수익모델, 로드맵, 아트 레퍼런스)는 모두 `docs/`로 이동/신설되었다. 전체 구조는 [docs/README.html](docs/README.html), 브라우저 탐색은 [docs/index.html](docs/index.html) 참고.

과거 markdown 원본은 `old/docs/`에 보관되어 있다 (히스토리 참고용, 편집 대상 아님).
