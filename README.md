# Tulpanчик 🌷

A portrait 2D/2.5D flower-shop game prototype.

Core fantasy: **grow flowers → harvest by running through beds → build a huge visible flower stack → turn flowers into bouquets → sell them → upgrade and expand the florist shop.**

## Current stage
Milestone 0.1A: Movement → Harvest → Carry → Unload → Repeat.
Gray-box visuals only; no Coins, customers, bouquets, upgrades or production.

## Run
Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. For a phone on the same Wi-Fi, use
`npm run dev -- --host 0.0.0.0` and open the printed Network URL.
`npm run build` checks TypeScript and builds the production bundle.
`npm test` runs the deterministic loop tests.

## Play this slice
- WASD / arrow keys, or press on the map and drag an invisible controller.
- Drag distance controls speed; releasing the pointer smoothly stops movement in about 100 ms.
- Four individual Tulips start mature. Pass near each plant to collect +1.
- Each harvested plant regrows independently after 6 seconds.
- The visible stack grows to 10; FULL flashes once and the stack bounces.
- Full hands leave mature plants untouched.
- Enter the marked unload zone to empty your hands and increase Delivered.
- Repeat as long as you like. Reloading the page resets this temporary slice.

Growth and plant count use `src/data/flowers.json`; carry capacity uses
`src/data/player.json`. The per-plant interpretation is a playtest decision
for 0.1A; the design documents have not been rewritten.

## Tech direction
- TypeScript
- Phaser
- Vite
- Capacitor later for iOS/Android packaging

## First playable milestone
1. Move the florist around a gray-box map.
2. Harvest one Tulip bed by walking through it.
3. Show a visible carry stack and capacity.
4. Unload flowers into a simple production point.
5. Produce and sell a Tulip Bunch.
6. Collect Coins and buy the first Carry upgrade.

## Design documents
See `AGENTS.md` and `docs/README.md` for the design pack. The section above describes only the current 0.1A playtest scope.

The current economy is a balance draft intended for prototyping and playtest tuning.
