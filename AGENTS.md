# AGENTS.md — Tulpanчик project rules

## Product goal
Build a portrait mobile 2D/2.5D flower-shop game where the player physically harvests flowers, carries a visible growing stack, turns flowers into bouquets, sells them, upgrades the shop and gradually automates repetitive work.

## Source of truth
Before changing gameplay, progression, economy, onboarding, monetization, world layout, art direction, or system behavior, read the relevant files in `docs/`.

Priority when documents conflict:
1. `docs/MASTER_GDD.md`
2. `docs/PROGRESSION_ECONOMY.md`
3. `docs/GAME_SYSTEMS.md`
4. `docs/WORLD_AND_CONTENT.md`
5. `docs/PRODUCTION_BIBLE.md`
6. `docs/DEPENDENCY_MATRIX.md`
7. `docs/GAP_ANALYSIS.md`

Do not silently redesign the game. If implementation reveals a conflict or missing rule, preserve the existing design and flag the decision explicitly.

## Core loop that must not drift
Grow flowers → run through beds to harvest → visible stack grows → carry to production → make bouquets → display/sell → collect Coins → upgrade/expand.

## Non-negotiable product rules
- Portrait mobile game.
- 2D/2.5D soft isometric / elevated top-down presentation; not 3D.
- Player physically moves through the world; do not replace the core loop with menus.
- Visible carry stack is a hero feature.
- Core progression uses Coins; no premium currency in MVP.
- No forced ads, rewarded-ad dependency, or energy system.
- No hard punishment for leaving the game.
- Automation appears only after the player has manually experienced the chore.
- New mechanics should solve a bottleneck the player can already feel.
- Prefer world interactions and physical construction over modal UI.
- Economy values are tunable data, not hardcoded across gameplay code.

## Technical direction
Preferred stack:
- TypeScript
- Phaser
- Vite
- HTML5 Canvas/WebGL
- Capacitor later for mobile packaging

Keep systems data-driven. Planned config families include flowers, recipes, upgrades, employees, customers, orders, areas and monetization.

## Repository conventions
- `src/scenes/`: Phaser scenes and scene orchestration.
- `src/entities/`: player, flower beds, customers, workers and other world entities.
- `src/systems/`: harvesting, carry, production, economy, save, progression, pathing, etc.
- `src/data/`: tunable configuration and schemas.
- `assets/`: runtime-ready assets only.
- `tests/`: deterministic logic tests, especially economy/progression/state machines.
- `docs/`: product/design source of truth.

Avoid giant all-purpose scene files. Gameplay rules should live in testable systems where practical.

## MVP implementation order
1. Responsive player movement on a gray-box map.
2. One Tulip bed with growth states.
3. Walk-over harvesting.
4. Visible carry stack with capacity 10 and FULL feedback.
5. One unload/production point.
6. Tulip Bunch crafting.
7. Display and one customer.
8. Physical Coin collection.
9. Carry upgrade 10 → 18.
10. Save/reload of the playable loop.

Do not build greenhouse, breeding, events, large employee systems, IAP, or final art before the core loop feels good.

## Quality bar
For every feature:
- it must be understandable without a long tutorial;
- state must be visually readable;
- avoid deadlocks and irreversible wrong-resource states;
- preserve responsive movement;
- add tests for deterministic logic where feasible;
- verify the feature in the running game, not just compile it.

## Balance
Treat current numbers as `Balance Draft v0.1`. Keep them in config files. Do not rebalance globally unless the change is intentional and documented.

## Working style
Prefer small, reviewable changes. When a task is larger, implement the smallest playable vertical slice first and verify it before expanding scope.
