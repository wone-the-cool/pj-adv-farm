---
status: living-document
owner_agent: scope-reviewer
---

# 리스크 관리 표

CLAUDE.md "알려진 리스크 및 미해결 과제" 상세본. scope-reviewer 에이전트가 신규 제안마다 이 표를 참조/갱신한다.

| # | 리스크 | 설명 | 영향도 | 관련 문서 | 상태 |
|---|---|---|---|---|---|
| 1 | 스코프 과다 | 마을 3~5개 × 고유 작물/NPC/던전/결혼 시스템은 개발 규모가 매우 큼 | 높음 (프로젝트 완주 자체를 위협) | docs/roadmap.md, docs/systems/villages.md | 미해결 — 초기 스코프 축소 전략 필요 |
| 2 | 마을 개방 구조 미확정 | 초반 전체 개방 vs 순차 개방 결정 필요, "진짜 자유도" 구현의 핵심 전제 | 높음 (다른 다수 시스템 설계에 선행 조건) | docs/systems/villages.md | 미해결 |
| 3 | 보스 난이도 밸런싱 | "특산물 없이도 클리어 가능하되 훨씬 어려움" 구조의 실제 수치 밸런싱 | 중간 (반복 테스트로 점진 해결 가능) | docs/systems/adventure-combat.md | 미해결 — 테스트 필요 |
| 4 | 노숙 시스템 페이스 | 필수처럼 느껴지지 않으면서도 매력적인 선택지가 되도록 인센티브 설계 | 중간 | docs/systems/time-camping.md | 미해결 |
| 5 | 결혼 후 콘텐츠 부재 위험 | 스타듀밸리의 대표적 비판 지점 반복 방지 | 중간 (장기 리텐션에 영향) | docs/systems/romance-companion.md | 미해결 |

## 표 사용 규칙
- 새 리스크 발견 시 이 표에 행을 추가한다 (임의로 CLAUDE.md에 직접 추가하지 않음).
- "상태"는 game-designer/scope-reviewer가 논의 후에만 "완화" 또는 "확정"으로 갱신한다.
- 항목이 실제로 해결/확정되면 관련 docs/ 파일에 결정 사항을 반영하고 이 표의 상태를 갱신한다.
