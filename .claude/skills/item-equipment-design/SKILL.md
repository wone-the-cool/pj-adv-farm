---
name: item-equipment-design
description: "특산물 포션/장비, 일반 아이템의 스펙(효과, 등급, 획득처)을 표준 구조로 docs/systems/items/에 정리한다. '아이템 설계해줘', '장비 스펙 만들어줘' 요청에 사용."
---

# 아이템/장비 설계 스킬

**목적:** 마을 특산물 기반 포션/장비의 스펙을 "훨씬 수월해지지만 필수는 아님" 원칙에 맞게 정의해 `docs/systems/items/<아이템명>.md`에 정리한다.

**활성화:** "아이템 설계", "장비 스펙", "특산물 포션 효과" 등.

**표준 구조:**
```markdown
---
status: draft
village: <소속 마을>
related: [../adventure-combat.md, ../farming-economy.md]
---

# <아이템/장비명>

## 분류
재료 | 가공품 | 포션 | 장비

## 획득처
(마을 특산물 가공 경로 — docs/systems/farming-economy.html 연결)

## 효과
- 있을 때: (예: 화염 데미지 50% 경감)
- 없을 때 대안: (예: 데미지 그대로 받되 회피/시간으로 극복 가능해야 함 — 자물쇠-열쇠 금지)

## 밸런싱 수치
(구체적 배율/가격은 여기 적지 않고 `balance-sheet` 스킬로 docs/balance/에 분리)

## 미확정 — 상의 필요
-
```

**점검 규칙:**
- "이 아이템 없으면 데미지 자체가 안 박히는" 설계는 금지 (CLAUDE.md 2번 원칙) — 항상 "없어도 가능, 있으면 수월"로 작성한다.
- 마을 한정 재화로 얻는 아이템인지, 정착 후에도 범용인지 `docs/systems/settlement.html`와 대조한다.

**미확정 — 산출물 형식:** `docs/`가 html로 전환됨에 따라 `docs/systems/items/<아이템명>.md`를 `.md`로 유지할지 `.html`로 만들지 아직 결정되지 않았다. 결정 전까지는 사용자에게 먼저 확인한다.
