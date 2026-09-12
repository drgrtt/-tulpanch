# FLOWER SHOP — GAP ANALYSIS & DEVELOPMENT ROADMAP

**Based on GDD:** v0.4  
**Purpose:** identify what is already defined, what is only partially defined, and what must be decided before production.

## Status legend

- **GREEN — defined enough for prototype**
- **YELLOW — direction exists, but production rules are incomplete**
- **RED — missing or too vague to implement reliably**

---

# 1. Product vision and positioning

**Status: GREEN**

Already defined:
- cozy flower-shop management fantasy;
- actual gameplay must match advertising;
- physical interaction over menus;
- visible resource stacks;
- no forced ads / no energy gating;
- flowers remain the identity instead of drifting into generic farming.

Still worth deciding later:
- final tone: realistic florist vs cozy fantasy vs fashion-forward boutique;
- fixed heroine vs customization;
- amount of story / named characters.

**Production impact:** none for Milestone 0.1–0.2.

---

# 2. Core gameplay loop

**Status: GREEN**

Defined:

`Grow → Harvest → Carry → Process → Stock → Sell → Collect → Upgrade → Expand`

Strong enough to prototype.

Still unproven:
- whether carrying is satisfying enough to be the signature mechanic;
- whether bouquet production should remain automatic;
- whether physical coin collection stays fun after the first 20–30 minutes.

**Needs playtesting, not more theory.**

---

# 3. Player controls and camera

**Status: YELLOW**

Defined:
- portrait-first;
- drag-to-move mobile controls;
- elevated top-down / soft isometric camera;
- proximity-based interactions;
- no action button in MVP.

Missing:
- exact camera angle;
- world-to-screen scale;
- character movement speed baseline;
- acceleration / deceleration rules;
- joystick dead zone;
- collision rules;
- path width minimum;
- object occlusion handling;
- whether camera zoom changes during events / construction.

**Required before final art layout, not before ugly prototype.**

---

# 4. First 60 minutes onboarding

**Status: GREEN / YELLOW**

Strongly defined:
- what the player learns first;
- order of feature reveals;
- physical tutorial philosophy;
- no menu overload;
- first employee, first order, first rare flower timing;
- emotional arc of the first session.

Missing:
- exact trigger counts;
- fallback tutorial behavior if player ignores a cue;
- skip / replay tutorial logic;
- analytics events for each onboarding beat;
- what happens if the player does things in an unexpected order.

**Good enough for implementation prototype. Needs instrumentation before soft launch.**

---

# 5. First-shop progression map

**Status: RED**

This is currently the biggest missing design document.

We need one table covering the entire first shop:

| Step | Unlock | Requirement | Cost | Revenue change | New bottleneck | Visual world change |
|---|---|---|---:|---:|---|---|

Must define:
- exact unlock order;
- exact costs;
- exact Shop Reputation thresholds if used;
- exact capacity upgrades;
- exact employee unlock points;
- exact plot / room expansion sequence;
- what the first shop looks like when "complete";
- approximate time-to-unlock for each major milestone.

Without this, development can build systems but cannot build a coherent progression.

**Priority: P0.**

---

# 6. Economy and balancing model

**Status: RED**

Only philosophy exists today.

Missing numerical model for:
- flower production rate;
- flower sell value;
- bouquet ingredient cost;
- bouquet value;
- customer arrival rate;
- workstation throughput;
- display capacity;
- employee throughput;
- upgrade costs;
- expansion costs;
- order rewards;
- target payback period for upgrades;
- target time between meaningful purchases;
- late-game inflation rules.

Need a simple spreadsheet / config model where changing one number shows its impact on the chain.

Recommended early balancing targets:
- small upgrade affordable every 1–3 minutes early;
- meaningful expansion every 8–15 minutes early;
- no early upgrade should require idle waiting;
- each major upgrade should noticeably move the current bottleneck.

**Priority: P0.**

---

# 7. Flower catalog and production recipes

**Status: YELLOW / RED**

Defined:
- Tulip, Rose, Sunflower in early game;
- later flower families;
- bouquets, wrapping, vases, baskets, events;
- rare varieties / collection / hybridization.

Missing:
- canonical flower list for Shop 1;
- exact unlock order;
- base growth times;
- yield per harvest;
- rarity structure;
- recipe catalog;
- ingredient quantities;
- product values;
- whether all colors are separate resources or cosmetic variants;
- what counts as raw material vs finished product.

Need a **content schema**, not just a list of ideas.

**Priority: P0 for Shop 1, P1 for later shops.**

---

# 8. Carry / stack system

**Status: YELLOW**

Defined:
- visible stack is a signature mechanic;
- capacity curve: 10 → 18 → 28 → 42 → 60 → 85 → 120;
- FULL state;
- no movement penalty when full;
- Pickup Radius, Move Speed, Yield, Growth Speed are related upgrades.

Missing:
- mixed-resource stacking rules;
- stack ordering / sorting visually;
- max visible objects before using compressed visual representation;
- whether bouquets and raw flowers share capacity;
- whether 1 peony = 1 unit or size-weighted inventory later;
- unload priority when station accepts several recipes;
- what happens if player carries ingredients for multiple stations.

Need to keep this simple in MVP.

**Priority: P0 because it is the signature mechanic.**

---

# 9. Bouquet production and workstation rules

**Status: YELLOW**

Defined:
- auto-pull ingredients;
- one product at a time in MVP;
- queue / speed / multiple stations later.

Missing:
- recipe selection rule;
- whether player chooses recipe or station auto-selects;
- queue behavior;
- blocked output behavior;
- station storage capacity;
- whether output can pile up physically;
- whether wrapping is another station or workstation upgrade;
- special-order recipe priority.

This directly affects whether the game stays physical or turns into menu management.

**Priority: P0.**

---

# 10. Customer system

**Status: YELLOW / RED**

Defined:
- enter → display → wait → take → pay → leave;
- patience is generous early;
- ordinary buyers are the fast-money loop.

Missing:
- customer spawn algorithm;
- max simultaneous customers;
- queue rules;
- product selection logic;
- willingness to substitute products;
- patience duration;
- consequences of waiting too long;
- customer archetypes;
- VIP behavior;
- whether customer demand affects what should be produced;
- whether customers buy one or multiple products;
- checkout throughput.

Need at least a simple deterministic model for MVP and a richer demand model for later.

**Priority: P0 for simple version, P1 for archetypes/VIP.**

---

# 11. Employees and automation

**Status: YELLOW**

Defined roles:
- gardener;
- carrier / stock runner;
- florist;
- cashier;
- courier / manager.

Defined philosophy:
- automate only after player understands the task;
- player stays most flexible / efficient.

Missing:
- exact task ownership;
- navigation / pathing behavior;
- work priorities;
- interaction with player tasks;
- employee capacity;
- employee upgrade stats;
- hiring costs;
- whether workers can block each other;
- idle behavior;
- how many workers per role;
- manager effect.

**Priority: P1. Not needed for Milestone 0.2, needed for first-hour prototype.**

---

# 12. Orders, delivery and events

**Status: YELLOW**

Direction is strong but content rules are not.

Missing:
- order generation logic;
- fixed vs random orders;
- order duration / deadlines;
- fail states;
- whether ingredients are reserved;
- whether order products can accidentally be sold to walk-ins;
- reward formulas;
- event build stages;
- delivery capacity;
- event difficulty curve.

Need separate definitions for:
1. normal walk-in demand;
2. medium-term special orders;
3. large visual event projects.

**Priority: P1.**

---

# 13. Quality, rarity, Flower Book and breeding

**Status: YELLOW / RED**

Defined conceptually:
- special / Perfect flowers;
- collection book;
- hidden variants;
- breeding unlocks after curiosity exists.

Missing:
- rarity tiers;
- how rare flowers are generated;
- whether quality is random, skill-based or upgrade-based;
- whether rare quality changes price or recipes;
- breeding inputs / outputs;
- duplicate handling;
- discovery rewards;
- collection completion rewards;
- deterministic vs probabilistic hybrid rules.

Need to avoid turning cozy collection into opaque gacha.

**Priority: P1.**

---

# 14. Map and spatial design

**Status: RED**

Current ASCII layout is only conceptual.

Need actual greybox map for Shop 1 showing:
- exact bed positions;
- player routes;
- station positions;
- display / checkout;
- customer path;
- employee paths;
- locked future areas;
- greenhouse footprint;
- event / courier zone;
- upgrade pad positions;
- safe camera framing;
- collision boundaries.

Most important question:

**Does the route stay satisfying when the shop becomes busier?**

The map is part of the game mechanic, not decoration.

**Priority: P0.**

---

# 15. Object state machines

**Status: RED**

Needed for reliable implementation.

Examples:

### Flower bed
`locked → empty/regrowing → growing → mature → harvested`

### Workstation
`idle → loading → processing → output-ready → blocked`

### Display
`empty → partially stocked → full`

### Customer
`spawn → navigate → browse/wait → acquire → queue → pay → leave`

### Upgrade zone
`hidden → locked → affordable → funding → constructing → complete`

### Employee
`idle → acquire-task → travel → collect/work → deliver → repeat`

Need these written explicitly before agent-driven coding grows complex.

**Priority: P0/P1 depending on system.**

---

# 16. Save data and persistence

**Status: YELLOW**

Defined:
- localStorage prototype;
- coins, unlocks, upgrade levels, capacity, expansion state.

Missing:
- exact save schema;
- save versioning / migrations;
- save timing;
- corruption fallback;
- current carried inventory persistence;
- station queues persistence;
- customer persistence or reset-on-load;
- event/order persistence;
- owned IAP flags;
- later cloud migration strategy.

**Priority: P0 for basic schema, P2 for cloud migration.**

---

# 17. Offline progression

**Status: RED / undecided**

The GDD explicitly leaves this open.

Need decision:
- no offline progress;
- flowers grow offline only;
- workers produce offline;
- sales produce offline;
- capped offline earnings;
- no offline earnings but "welcome back" growth catch-up.

Recommendation for this game:

**Do not use full idle income early.** Let flower beds finish growing offline and optionally allow a modest capped shop result later. The game should reward returning without becoming an idle simulator where the best strategy is to stop playing.

**Priority: P1 before retention testing.**

---

# 18. Fail states and frustration rules

**Status: RED**

Need explicit philosophy for:
- customers leaving;
- failed orders;
- expired events;
- spoiled flowers;
- wasted production;
- inventory overflow;
- blocked workstations.

Recommended tone:
- ordinary customers may leave, but penalty is only lost opportunity;
- core flowers never rot in early game;
- special orders should not destroy resources on failure;
- no hard fail screen;
- no negative currency.

**Priority: P1.**

---

# 19. UI / UX system

**Status: YELLOW**

Strong philosophy exists: minimal HUD, contextual information, systems hidden until meaningful.

Missing:
- HUD wireframe;
- upgrade pad visual language;
- recipe display language;
- capacity indicator behavior;
- order tracker design;
- Flower Book navigation;
- store structure;
- accessibility / text size;
- safe-area handling for iPhones;
- localization constraints;
- color-blind readability.

**Priority: P1, with only minimal HUD needed for MVP.**

---

# 20. Visual art bible

**Status: RED**

Current visual direction is mood-level only.

Need production art bible covering:
- camera / perspective grid;
- asset scale;
- character proportions;
- light direction;
- shadow shape;
- palette ranges;
- saturation rules;
- edge / outline treatment;
- texture amount;
- ground tile style;
- flower density;
- object silhouette rules;
- UI shape language;
- animation frame rate;
- AI-generation reference sheet rules;
- forbidden inconsistencies.

Need example sheets for:
- heroine;
- one customer;
- tulip bed;
- workstation;
- shop architecture;
- UI card / upgrade pad.

**Priority: P1 after greybox core loop proves fun.**

---

# 21. Animation system

**Status: RED**

AI pipeline is described, but actual animation requirements are not.

Need animation list:
- player idle;
- walk/run directions;
- harvesting feedback;
- carrying stack bounce;
- unload;
- workstation processing;
- customer walk / idle / happy;
- employee actions;
- construction;
- coin pickup;
- rare discovery;
- event completion.

Also decide:
- 4 vs 8 movement directions;
- target fps per sprite animation;
- whether carrying changes player animation;
- stack animation independent from character.

**Priority: P1.**

---

# 22. Audio and haptics

**Status: YELLOW**

Basic list exists.

Missing:
- sound hierarchy so repeated harvesting never becomes annoying;
- pitch/random variation;
- music direction;
- ambience layers;
- haptic intensity map;
- mute / volume settings;
- event stingers;
- rare discovery sound.

**Priority: P2 for production, but core harvest sound should enter prototype early because it affects game feel.**

---

# 23. Monetization

**Status: YELLOW**

Strong principles exist:
- no forced ads;
- no energy;
- direct purchases;
- cosmetics, convenience, optional content, expansions;
- no premium currency at launch.

Missing:
- precise entitlement definitions;
- free vs paid rare flower boundaries;
- restore purchases flow;
- regional pricing policy;
- bundle discount policy;
- whether Double Tips affects balance too strongly;
- purchase visibility timing based on actual player state;
- launch catalog vs post-launch catalog;
- IAP analytics.

Potential design risk:
**Double Revenue can invalidate the carefully tuned economy.** Consider limiting it to tips, special orders, or another secondary income stream rather than every Coin source.

**Priority: P2 before release, but data hooks should exist from the start.**

---

# 24. Retention / return reasons

**Status: RED**

The current GDD deliberately avoids daily-login mechanics, which is good, but we still need a reason to return tomorrow.

Possible non-manipulative return hooks:
- completed flower growth;
- rotating client requests;
- seasonal shop changes;
- Flower Book discoveries;
- long-term greenhouse projects;
- event construction;
- new branch goals;
- cosmetic restoration / decorating milestones.

Need to define:
- what changes between sessions;
- what the player anticipates before closing the game;
- what greets them on return.

**Priority: P1 before soft launch.**

---

# 25. Session design

**Status: RED / undecided**

Need a target answer to:
- 3–5 minute check-ins?
- 10–20 minute active play?
- both?

Recommendation:

Design for **both**:
- 3–5 minutes: collect, restock, buy one upgrade, progress one order;
- 15–20 minutes: unlock area, complete event/order, optimize business.

No system should punish short sessions.

**Priority: P1.**

---

# 26. Technical performance budget

**Status: RED**

Need target constraints before content scales:
- minimum supported device;
- target 60 fps, acceptable 30 fps fallback?;
- max simultaneously active customers;
- max active employees;
- max visible flower sprites;
- texture atlas sizes;
- asset memory budget;
- loading target;
- save size target;
- collision / pathfinding strategy;
- object pooling rules.

Especially important because hundreds of visible flowers and stack sprites can become expensive on mobile.

**Priority: P1 before content scale-up.**

---

# 27. Data-driven architecture

**Status: YELLOW**

GDD mentions data-driven paid content but not full game data.

Recommended: all content should be configurable rather than hard-coded.

Need schemas for:
- flowers;
- recipes;
- stations;
- upgrades;
- employees;
- customers;
- orders;
- areas;
- products;
- monetization entitlements.

This lets balance change without rewriting gameplay code and makes AI coding safer.

**Priority: P0.**

---

# 28. Analytics and product metrics

**Status: RED**

Need event plan before soft launch.

Minimum funnel:
- game_started;
- first_move;
- first_harvest;
- first_full_stack;
- first_delivery;
- first_bouquet;
- first_sale;
- first_upgrade;
- roses_unlocked;
- first_employee_hired;
- first_order_completed;
- flower_book_opened;
- session_end.

Important derived metrics:
- tutorial completion;
- time to first sale;
- time to first upgrade;
- time to first expansion;
- first-session length;
- D1 / D7 retention;
- % of players reaching Rose / employee / order;
- where players quit;
- upgrade choice distribution;
- bottleneck state when session ends.

**Priority: P1 before external testing.**

---

# 29. Content roadmap beyond Shop 1

**Status: YELLOW / RED**

Themes exist, but not progression architecture.

Need at least high-level definition of:
- Shop 1: neighborhood florist;
- Location 2;
- Location 3;
- first paid expansion;
- what genuinely new mechanic each introduces;
- which systems carry over;
- whether locations coexist or replace one another.

Rule:
**Every major new location must introduce one meaningful mechanical twist, not only new art.**

**Priority: P2 after Shop 1 is proven.**

---

# 30. Narrative / characters

**Status: RED / intentionally undecided**

Could be almost absent, which is valid.

Need only decide before content writing:
- named heroine or player avatar;
- recurring customers;
- narrative motivation for expansions;
- whether event clients have personalities;
- dialogue amount.

Recommendation: keep narrative light and environmental at first.

**Priority: P2.**

---

# 31. Localization

**Status: RED**

Need eventual rules for:
- source language;
- localization key system;
- text length limits;
- pluralization;
- currency display;
- RTL support if desired;
- text baked into art prohibited.

This matters early because contextual labels and upgrade pads have little space.

**Priority: P2, but localization-ready strings should begin from day one.**

---

# 32. Accessibility

**Status: RED**

Need decisions for:
- reduced haptics;
- reduced motion;
- high-contrast interaction markers;
- readable text size;
- alternatives to color-only rarity states;
- one-handed play ergonomics;
- sound-independent feedback.

**Priority: P2.**

---

# 33. QA / edge cases

**Status: RED**

Need test matrix for cases like:
- player inventory is full while harvesting;
- station output is blocked;
- customer has no valid product;
- employee and player reach same resource simultaneously;
- expansion construction while NPC is standing inside;
- reload during production;
- reload during upgrade funding;
- order completes at same moment as normal sale;
- save schema changes between versions.

**Priority: P1 once systems begin interacting.**

---

# What is already strong enough

The project does **not** need more brainstorming in these areas right now:

- high-level fantasy;
- genre identity;
- monetization philosophy;
- onboarding philosophy;
- first-hour reveal order;
- anti-grind principles;
- reason to keep flowers as the core theme;
- basic technical stack.

More ideation here risks delaying the prototype.

---

# The five biggest gaps right now

## 1. First-shop progression map
We know what systems exist, but not the exact sequence and numbers.

## 2. Economy model
We need throughput, prices, costs and payback logic.

## 3. Actual greybox map
The physical route is part of the mechanic and must be tested early.

## 4. System rules / state machines
Especially Carry, Workstation, Customers and Upgrade zones.

## 5. Data-driven content schema
So balance and content can change without rebuilding code.

These five should be solved before expanding the feature list further.

---

# Recommended production roadmap

## PHASE 0 — Lock the playable skeleton

### 0.1 Core rules document
Define:
- Carry system exact rules;
- Flower Bed state machine;
- Workstation state machine;
- Customer basic state machine;
- Upgrade Zone state machine;
- resource / recipe schemas.

### 0.2 First-shop greybox
Create a real map diagram with distances and routes.

### 0.3 Balance sheet v0
Build a simple numerical model for:
- production rates;
- capacity;
- customer demand;
- values;
- upgrade costs.

**Exit condition:** we can explain the first 20 minutes numerically and spatially.

---

## PHASE 1 — Milestone 0.1: Garden Loop

Build only:
- movement;
- one tulip bed;
- harvest;
- visible stack;
- capacity;
- delivery zone;
- coins;
- one upgrade;
- save.

Add basic harvest sound / haptic immediately.

**Test question:** Is running through flowers and carrying a ridiculous stack satisfying by itself?

If no, stop and fix game feel before adding management.

---

## PHASE 2 — Milestone 0.2: Shop Loop

Add:
- bouquet station;
- one recipe;
- one display;
- simple customers;
- checkout;
- physical money collection.

**Test question:** Does the complete 30–60 second loop naturally make the player want to repeat it?

---

## PHASE 3 — First 15 minutes

Add:
- Carry upgrade reveal;
- Move Speed;
- Rose expansion;
- second recipe;
- station speed;
- visual construction.

Instrument analytics.

**Test question:** Does each new upgrade solve a problem the player actually felt?

---

## PHASE 4 — First hour

Add:
- larger customer flow;
- first employee;
- special order;
- Sunflowers;
- Flower Book reveal;
- first rare flower;
- first meaningful shop renovation.

**Test question:** Does the game evolve enough that minute 50 feels meaningfully different from minute 5?

---

## PHASE 5 — Retention layer

Add only after first-hour loop works:
- greenhouse;
- breeding;
- delivery;
- longer projects;
- lightweight offline progression;
- reason to return next day.

**Test question:** Does the player have a clear reason to come back that is not a manipulative daily reward?

---

## PHASE 6 — Art production

Lock:
- art bible;
- heroine reference sheet;
- object scale;
- final perspective;
- AI sprite pipeline;
- animation budget;
- environment asset production process.

Replace greybox gradually. Do not generate the entire content library before mechanics are stable.

---

## PHASE 7 — Commercial layer

Only after retention proves promising:
- IAP framework;
- cosmetics;
- Starter Pack;
- first convenience purchase;
- restore purchases;
- price localization;
- store UX.

Do not tune the free economy around IAP pressure.

---

## PHASE 8 — Soft launch / external testing

Measure:
- first-session completion;
- time to first sale / upgrade / expansion;
- D1 / D7;
- session length;
- churn points;
- stuck bottlenecks;
- content exhaustion;
- IAP interest if enabled.

Only then decide how much content to produce for launch.

---

# Next document to create

The next design artifact should be:

## `SHOP_1_PROGRESSION_AND_ECONOMY.md`

It should include:

1. first shop map / zones;
2. exact unlock sequence from minute 0 to shop completion;
3. every flower available in Shop 1;
4. every recipe;
5. every upgrade level;
6. employee unlocks;
7. customer demand progression;
8. order unlocks;
9. costs and revenues;
10. expected time-to-afford;
11. bottleneck intentionally created at each step;
12. visual transformation after each major purchase.

Once that exists, the project will be ready to move from concept GDD into implementation specification.
