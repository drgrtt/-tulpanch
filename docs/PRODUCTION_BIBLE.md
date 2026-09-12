# 04 — PRODUCTION BIBLE

**Version:** 0.1  
**Scope:** art direction, UI, animation, audio, haptics, technical constraints, analytics and QA

---

# 1. Visual identity

Target feeling:

**cozy + polished + colorful + tactile + contemporary florist**

Not:
- realistic farming simulator;
- hyper-casual plastic clone;
- cluttered hidden-object screen;
- generic medieval/cartoon farm;
- photorealistic 3D.

Rendering:
**2D / 2.5D sprite-based soft isometric / elevated top-down.**

---

# 2. Camera

Prototype target:
- portrait;
- fixed rotation;
- 35–45° elevated angle;
- moderate orthographic / pseudo-orthographic feeling;
- smooth follow with small dead zone;
- no constant zoom pumping.

Construction / major event:
brief controlled camera framing is allowed.

Never take control for more than a few seconds during normal progress.

---

# 3. Scale guide

Use the player as the master unit.

Approximate visual ratios:
- player height = 1.0 unit;
- small flower bed width = 1.8–2.4 player heights;
- standard doorway / aisle = at least 1.2 player widths;
- bouquet station = 1.4–1.8 player widths;
- display table = 1.5–2.0 player widths.

Huge carry stacks may visually exceed normal object scale intentionally.

---

# 4. Character art

Heroine:
- adult;
- readable silhouette;
- contemporary florist clothing;
- warm, competent, not princess-coded by default;
- outfit can evolve through cosmetics.

Animation MVP:
- idle;
- walk 4 directions minimum, preferably 8;
- carry overlay;
- short pickup / success reactions only if they do not interrupt movement.

Suggested:
6–8 frames per walk direction.

Do not attempt thousands of frames in MVP.

Workers should share a compatible rig / frame cadence where possible.

---

# 5. Environment art

Priorities:
1. gameplay readability;
2. silhouette;
3. color separation;
4. decoration.

Interactable objects must be more readable than background decoration.

Avoid decorating flower beds with non-harvestable flowers that look collectible unless visually distinguished.

World should gain density as shop upgrades.

---

# 6. Flower visual system

Each flower needs:
- bed growth stages;
- harvested loose-flower sprite / clump;
- carried-stack representation;
- recipe icon;
- Flower Book art;
- rare variant treatment.

Minimum growth stages:
1. soil / planted;
2. sprout;
3. mid growth;
4. mature bloom.

Rare variant must be recognizable without relying solely on colorblind-sensitive hue changes:
- petal shape;
- sparkle;
- silhouette detail;
- edge highlight.

---

# 7. Stack art rules

The carry stack is a hero feature.

Requirements:
- always readable behind / above avatar;
- grows dramatically;
- does not cover face for long;
- responds to movement with secondary sway;
- unload animation is visually satisfying;
- high counts use representative clumps.

Mixed stacks:
use dominant visible colors while maintaining an attractive composition rather than exact FIFO rendering.

---

# 8. UI style

HUD:
minimal, soft, integrated with world.

Always-visible UI should be limited.

Typography:
- high legibility;
- short labels;
- large enough for phone;
- numeric deltas use clear arrow / before-after.

Avoid:
- excessive red dots;
- five currencies;
- giant modal popups after every unlock;
- tiny inventory grids.

Contextual world UI is preferred.

---

# 9. Color / contrast rules

Gameplay interactables need sufficient value contrast from floor.

Use color categories consistently:
- green / natural cue for ready-to-harvest;
- warm Coin feedback;
- neutral/soft locked expansion;
- distinct premium/rare sparkle treatment.

Do not hardcode accessibility meaning to color alone.

---

# 10. AI-assisted asset rules

AI may assist:
- concept art;
- flower variants;
- texture ideation;
- background props;
- character motion reference;
- marketing exploration.

Production assets must pass:
- identity consistency;
- perspective consistency;
- lighting consistency;
- edge cleanup;
- transparent background check;
- scale check;
- readability at actual phone size.

For animated character sprites:
- one canonical character reference;
- fixed costume / proportions;
- fixed camera;
- fixed direction labels;
- frame extraction pipeline;
- foot alignment;
- remove ghosting / interpolation artifacts;
- manual review.

Never assume generated assets are production-ready without cleanup.

---

# 11. Audio bible

Audio is part of the tactile loop.

## Harvest

Need:
- light stem / petal pop;
- soft layered rustle;
- pitch/variation so rapid harvesting does not sound identical.

## Stack pickup

As stack grows:
- subtle layered fullness cue;
- do not play a loud sound for every single flower at high harvest rates.

## Unload

Signature sound:
- soft cascading “flump / shff” of flowers leaving the stack;
- increasing cadence with multiple units.

## Craft

- snip;
- paper fold;
- ribbon / wrap;
- small completion chime.

Different product tiers may add a richer layer.

## Customer sale

- small pleasant confirmation;
- Coins;
- optional customer reaction.

## Construction

- light build impacts;
- floral flourish on completion.

Music:
- calm, modern, warm;
- avoid over-cheerful hypercasual loop fatigue;
- layers may evolve with shop stage.

---

# 12. Haptics

Use sparingly.

Recommended:
- tiny light tick on harvest burst;
- stronger but short tick when carry becomes FULL;
- medium success haptic on upgrade purchase;
- medium/soft pattern on area construction completion;
- distinct rare-flower discovery haptic;
- event completion celebration.

Do not vibrate on every Coin.

Respect device haptic settings.

---

# 13. Performance targets

Mobile baseline:
- target 60 FPS on supported mid-range devices;
- acceptable fallback 30 FPS only if device cannot maintain 60;
- gameplay logic should not depend on frame rate.

Keep:
- pooled customers;
- pooled pickup VFX;
- batched flower sprites where possible;
- capped particle counts;
- simplified offscreen AI.

Target simultaneous Shop 1 actors:
- player: 1
- customers: <=5 visible
- workers: <=5 visible
- courier/event NPCs: contextual
- total animated agents target <=12 in normal scene.

---

# 14. Asset constraints

Use atlases where useful.

Recommended prototype standards:
- character directional sprites normalized to shared canvas;
- world objects authored to a shared isometric grid;
- UI icons exported at 2× target resolution;
- lossless source; optimized runtime format.

Do not commit gigantic source-generation outputs to runtime bundles.

Separate:
- source art;
- processed game art;
- generated intermediate material.

---

# 15. Data-driven content

Do not hardcode economy values across game logic.

Recommended config families:

```text
flowers.json
recipes.json
upgrades.json
employees.json
customers.json
orders.json
areas.json
iap.json
localization.json
```

Example flower schema:

```json
{
  "id": "rose",
  "growthSeconds": 8,
  "yield": 4,
  "unlock": "rose_plot",
  "rarityRoll": 0.03
}
```

Example recipe schema:

```json
{
  "id": "mixed_bouquet",
  "ingredients": {
    "tulip": 2,
    "rose": 1
  },
  "craftSeconds": 2.5,
  "sellPrice": 22
}
```

Balance iteration should require config changes, not code changes.

---

# 16. Save / schema requirements

- versioned save schema;
- migrations;
- deterministic IDs;
- no save fields based on UI index positions;
- store timestamps in a clear standardized form;
- owned purchases stored as entitlement IDs.

Never trust only local flags for paid entitlement if platform receipt validation is available in production.

---

# 17. Navigation / AI implementation

Prototype options:
- grid A*;
- waypoint graph;
- navmesh equivalent if engine supports cleanly.

Agents need:
- destination;
- local avoidance;
- stuck detection;
- fallback reposition;
- interaction reservation to prevent two customers taking the same product.

Avoid full crowd simulation.

---

# 18. Technical stack

Current preferred direction:

- TypeScript;
- Phaser;
- HTML5 Canvas/WebGL;
- Vite;
- Capacitor for mobile packaging.

MVP save:
- local storage / IndexedDB abstraction;
- versioned save service.

Production later:
- platform IAP;
- cloud save only if justified;
- analytics;
- optional backend for entitlement / event configuration.

---

# 19. Analytics plan

## Funnel

Track:
1. launch;
2. first movement;
3. first harvest;
4. first unload;
5. first bouquet;
6. first sale;
7. first Coin collect;
8. first Carry upgrade;
9. Rose plot;
10. first employee;
11. first order;
12. Flower Book;
13. greenhouse;
14. event complete;
15. Shop 1 complete.

## Core metrics

- tutorial completion rate;
- time to first sale;
- time to first upgrade;
- time to Rose unlock;
- D1 / D7 retention;
- session length;
- sessions/day;
- Coin earn/spend;
- bottleneck time;
- % users hiring first worker;
- % users discovering Flower Book;
- special-order acceptance/completion;
- IAP view → purchase conversion;
- purchase by offer type.

## Good onboarding targets — initial hypotheses

Not commitments; validate in testing.

- >90% of starters perform first harvest;
- >85% reach first sale;
- >75% buy first upgrade;
- >60% reach Rose expansion;
- >40–50% of retained first-session players reach employee / order content depending on session length.

Do not optimize metrics by adding manipulative friction.

---

# 20. QA matrix

Test:
- first launch;
- interrupted tutorial;
- app background during construction;
- force close while carrying;
- full station;
- full display;
- full carry;
- zero stock;
- customer queue;
- worker + player touching same station;
- order reservation;
- offline return;
- clock changes;
- save migration;
- purchase restore;
- low-memory reload;
- localization overflow;
- notch / safe areas;
- slow device performance.

---

# 21. Accessibility / comfort

Provide:
- music volume;
- SFX volume;
- haptics toggle;
- reduced motion where practical;
- readable text;
- important states not color-only;
- no forced rapid tapping;
- no punishment for pausing.

---

# 22. Definition of prototype success

Milestone 0.1 succeeds if:
- movement feels responsive;
- harvesting feels satisfying;
- stack reads clearly;
- carrying creates route decisions;
- upgrade materially changes feel.

Milestone 0.2 succeeds if:
- complete store loop works;
- customers are readable;
- production bottleneck emerges naturally;
- first automation feels rewarding;
- player can understand the game without explanation.

Only after this should expensive final art production accelerate.
