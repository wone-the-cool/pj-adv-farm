---
name: level-dungeon-design
description: "던전/필드 레벨 구조(구역, 기믹, 보스방 배치)를 표준 구조로 docs/systems/dungeons/에 정리한다. '던전 구조 설계해줘', '레벨 디자인 해줘' 요청에 사용."
---

# 던전/레벨 디자인 스킬

**목적:** 마을별 던전(고대 유적, 얼음 동굴, 태고의 숲, 심해 유적 등)의 구역/기믹/보스방 구조를 표준 포맷으로 `docs/systems/dungeons/<던전명>.md`에 정리한다.

**활성화:** "던전 구조", "레벨 디자인", "던전 기믹" 등.

**표준 구조:**
```markdown
---
status: draft
village: <소속 마을>
related: [../adventure-combat.md, ../villages.md]
---

# <던전명>

## 테마/컨셉
(마을 테마와의 연결 — docs/systems/villages.html 표 참고)

## 구역 구성 (안)
| 구역 | 주요 기믹/적 | 특산물 아이템 활용 지점 |
|---|---|---|
| 1구역 |  |  |
| 2구역 |  |  |
| 보스방 |  | (docs/systems/adventure-combat.html 원칙 적용) |

## 자유도 확인
- 이 던전을 특산물 없이도 통과 가능한 우회 경로/전략이 있는가? (자물쇠-열쇠 금지 원칙)
- 순서를 강제하는 병목 구간이 있는가? 있다면 왜 필요한지 근거 필요

## 미확정 — 상의 필요
-
```

**점검 규칙:**
- 보스방 설계는 반드시 `docs/systems/adventure-combat.html`의 "최적 해법형" 원칙을 재확인한다.
- 구역 난이도 수치(체력, 데미지)는 여기 적지 말고 `balance-sheet` 스킬로 `docs/balance/`에 분리한다.
- 완성 전 `design-check` 스킬로 자물쇠-열쇠 구조 여부를 재검토한다.

**미확정 — 산출물 형식:** `docs/`가 html로 전환됨에 따라 `docs/systems/dungeons/<던전명>.md`를 `.md`로 유지할지 `.html`로 만들지 아직 결정되지 않았다. 결정 전까지는 사용자에게 먼저 확인한다.
