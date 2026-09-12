# FLOWER SHOP — GAME DESIGN DOCUMENT

**Version:** 0.4  
**Status:** first working draft  
**Genre:** cozy casual management / collection / shop simulator  
**Platform:** mobile first, web prototype first  
**Orientation:** portrait  

---

## 1. Game vision

A cozy, satisfying game about growing flowers and running a flower shop.

The player physically controls a character, walks through flower beds, harvests flowers, carries them as a visible stack, brings them to the shop, turns them into bouquets, sells them to customers, earns money and expands the garden and store.

The game should deliver the feeling promised by fake mobile-game ads: the action shown in the ad is the actual game.

### One-sentence pitch

Grow flowers, carry them into your shop, make bouquets, serve customers and turn a tiny flower stall into a beautiful flower business.

---

## 2. Core fantasy

The player should feel:

- I built this place myself.
- My garden is getting richer and prettier.
- I always have something satisfying to collect and carry.
- I can immediately see the result of every upgrade.
- The shop feels alive because customers constantly arrive and buy what I produce.
- Progress comes from playing, not from waiting through timers or watching ads.

---

## 3. Design pillars

### 3.1 Physical interaction instead of menus

The player should do important actions by moving the character through the world.

Examples:

- walk through flowers to harvest them;
- walk into the bouquet station to unload flowers;
- carry finished bouquets to a display table;
- collect money from the checkout area;
- stand on an upgrade zone to purchase an expansion.

Menus are secondary.

### 3.2 Visible accumulation

Resources should be visually represented on the character or in the world.

If the player harvests 20 flowers, they should see a large stack of flowers being carried.

This is a major source of satisfaction and should be exaggerated rather than realistic.

### 3.3 Constant small rewards

The game should provide frequent feedback:

- flowers pop out of the bed;
- stack grows;
- bouquet appears;
- customer reacts;
- coins burst out;
- new area physically opens;
- shop visually improves.

### 3.4 No fake gameplay

Every promotional scene should be reproducible inside the actual game.

### 3.5 Low friction

The player should understand the basic loop without a long tutorial.

Movement + proximity interactions should be enough for the first session.

---

## 4. Camera and controls

### Camera

- top-down / soft isometric view;
- camera follows the player smoothly;
- environment remains readable on a phone screen;
- objects should not hide the character for long periods;
- slight camera easing, no aggressive movement.

### Controls

Primary mobile control:

- drag anywhere on screen to move;
- virtual joystick appears under the finger;
- release finger to stop.

Desktop prototype:

- WASD / arrow keys;
- optional mouse / touch simulation.

### Interaction rule

Most interactions happen automatically when the player enters a trigger area.

No separate action button in the MVP.

---

## 5. Core gameplay loop

1. Flowers grow in a flower bed.
2. Player walks through the bed.
3. Mature flowers are harvested automatically.
4. Flowers are added to the visible carried stack.
5. Player walks to a bouquet station.
6. Required flowers are unloaded.
7. Bouquet is produced.
8. Player carries bouquet to the display / sales area.
9. Customer takes bouquet.
10. Customer pays.
11. Player collects money.
12. Money is spent on upgrades.
13. Upgrades increase production, capacity or unlock new content.
14. Repeat with a larger and prettier business.

---

## 6. MVP goal

The first prototype is successful if the player can:

- move around the map;
- harvest flowers;
- visibly carry flowers;
- deliver flowers to the shop;
- produce bouquets;
- sell bouquets to customers;
- collect money;
- buy at least one meaningful upgrade;
- reload the game and keep progress.

The prototype does **not** need polished art to prove the loop.

---

## 7. MVP map

One compact map containing:

### Garden area

- 3 flower beds;
- paths between beds;
- one locked expansion zone.

### Shop area

- bouquet workstation;
- one bouquet display table;
- checkout / payment spot;
- customer entrance and exit;
- one upgrade zone.

### Suggested initial layout

```text
[ TULIPS ]   [ ROSES ]   [ SUNFLOWERS ]

          garden path

              PLAYER
                 |
                 v

      +---------------------+
      |     FLOWER SHOP     |
      |                     |
      | bouquet station     |
      |         display     |
      |                     |
      | customers -> $      |
      +---------------------+

           [ UPGRADE ]
```

---

## 8. MVP resources

### Currency

**Coins**

Used for:

- flower bed upgrades;
- carrying capacity;
- bouquet workstation speed;
- new flower beds;
- shop expansion.

No premium currency in the first prototype or planned launch economy.

### Economy rule

The core progression must remain fully playable with ordinary coins earned through play.

Real-money purchases should add one of four things:

- **speed** — permanent convenience without blocking free progression;
- **beauty** — outfits, wrapping styles, shop interiors and decorations;
- **variety** — optional rare flowers, bouquet styles or themed content;
- **expansion** — substantial optional locations / content packs.

The player should never need to buy currency simply to continue playing.

### Raw materials

MVP flower types:

1. Tulip
2. Rose
3. Sunflower

Each flower is a separate inventory resource.

### Product

MVP product:

**Simple Bouquet**

Example recipe:

- 2 tulips
- 1 rose

Later bouquets can require several flower types and wrappers.

---

## 9. Flower beds

Each flower bed has:

- flower type;
- capacity;
- regrowth time;
- current amount of mature flowers;
- visual growth state.

### MVP behavior

After harvesting, a flower begins regrowing automatically.

Suggested prototype timings:

- tulip: 4 sec;
- sunflower: 6 sec;
- rose: 8 sec.

These values are placeholders and must be tuned for flow.

### Important rule

The player should rarely stand still waiting for flowers.

If waiting becomes necessary, the economy or map pacing is wrong.

---

## 10. Harvesting

When the player enters the harvest radius of a mature flower:

1. flower pops out of the bed;
2. short arc animation moves it toward the player;
3. flower is added to inventory;
4. carried stack becomes visually larger;
5. small sound / haptic feedback plays.

Harvesting continues while moving.

The player should be able to sweep through an entire flower bed in one satisfying pass.

---

## 11. Carrying system

The carried stack is one of the signature mechanics.

### Requirements

- resources visibly stack behind / above the character;
- stack grows with inventory;
- stack should remain readable even at high quantities;
- stack can exaggerate size beyond realism;
- different flowers should remain visually distinguishable where possible.

### MVP carrying capacity

Start: **10 flowers**

Longer-term capacity curve:

- 10 → 18 → 28 → 42 → 60 → 85 → 120

Capacity upgrades should be gated partly by shop reputation / expansion stage and purchased with normal Coins.

If inventory is full, mature flowers remain in the bed and the carried stack gives a clear **FULL** feedback state.

Do not slow movement when full. A full stack should feel satisfying, not punitive.

### Related player-efficiency upgrades

The carry system belongs to a larger player-efficiency branch:

- **Carry Capacity** — maximum resources carried;
- **Pickup Radius** — how far harvested items can fly toward the player;
- **Move Speed** — traversal speed;
- **Harvest Yield** — amount collected from a mature production unit;
- **Growth Speed** — regrowth speed of beds.

These systems should create shifting bottlenecks rather than simple linear power growth.

---

## 12. Bouquet production

### Bouquet station

The player walks into a delivery zone near the workstation.

The station automatically pulls required flowers from player inventory.

When enough ingredients are available:

- production starts;
- short progress animation plays;
- finished bouquet appears as a physical object.

### MVP production

One bouquet at a time.

Initial production time: approximately 2–3 seconds.

Later upgrades can:

- speed production;
- increase queue size;
- unlock multiple stations;
- automate transport.

---

## 13. Customers

Customers enter the shop, walk to the display, take an available bouquet and pay.

### MVP customer states

1. Enter
2. Walk to display
3. Wait for bouquet
4. Take bouquet
5. Walk to payment point
6. Pay
7. Leave

### Queue

If no bouquet is available, customers wait for a limited time.

For the first prototype, patience can be generous so the loop stays relaxed.

### Customer feedback

When a bouquet is purchased:

- happy reaction / icon;
- coin animation;
- small sound;
- money becomes collectible.

---

## 14. Money collection

For the MVP, money should appear physically at the payment zone.

The player collects it by walking nearby.

This is preferable to money instantly entering the balance because it reinforces physical interaction.

Later, an employee or upgrade can automate money collection.

---

## 15. Upgrades

Upgrades should be purchased through physical floor zones.

The zone displays:

- upgrade icon;
- price;
- progress as coins are deposited;
- visual construction / unlock effect when complete.

### MVP upgrade list

1. Carry Capacity I
2. Tulip Bed Capacity I
3. Bouquet Station Speed I
4. Unlock Rose Bed
5. Unlock Sunflower Bed
6. Expand Shop
7. Add Second Display Slot

Not all need to be implemented in the very first build.

---

## 16. Progression philosophy

Progress should happen through visible transformation of the map.

Bad progression:

> Level 3 → Level 4 shown only as a number.

Good progression:

> A wall disappears, a new flower bed appears, the shop gets larger, new customers arrive.

The world itself should function as the progression screen.

---


## 16A. Bottleneck progression system

The economy should be designed as a chain of throughput limits:

`Grow → Harvest → Carry → Process → Stock → Sell → Collect`

Each link has a measurable capacity. The next useful upgrade should usually be visible because one part of the chain is falling behind.

Examples:

- beds are full but the player cannot carry enough → upgrade Carry Capacity;
- player carries plenty but bouquet station is backed up → upgrade workstation speed;
- bouquets pile up but display is full → expand display capacity;
- display is full but sales are slow → improve customer flow / unlock higher demand;
- customers queue but checkout is slow → hire / upgrade cashier.

The game should continuously move the bottleneck instead of removing all friction at once.

### Automation rule

A worker should usually automate a task only **after the player has personally performed that task enough times to understand its value**.

Suggested automation order:

1. gardener;
2. carrier / stock runner;
3. florist;
4. cashier;
5. courier / manager.

The player should remain the most flexible and efficient unit in the world even after employees are hired.

### Anti-grind rule

Do not create progress by only multiplying prices.

When costs rise sharply, the player's earning power or product value should also rise through new systems, better products or automation.

Bad:

`upgrade cost 500 → 50,000 with the same gameplay`

Better:

`simple tulip bouquet → wedding arrangement → event order`

Large numbers should represent a larger business, not artificial waiting.

---

## 17. Future progression after MVP

Potential content layers:

### Flowers

- lavender;
- peony;
- hydrangea;
- lily;
- orchid;
- daisy;
- chrysanthemum;
- rare seasonal flowers.

### Bouquet types

- simple bouquet;
- romantic bouquet;
- birthday bouquet;
- wedding bouquet;
- luxury bouquet;
- funeral / memorial arrangement;
- seasonal arrangements.

### Materials

- kraft paper;
- ribbon;
- vase;
- basket;
- decorative greenery;
- greeting card.

### Areas

- outdoor garden;
- greenhouse;
- flower shop;
- workshop;
- wedding studio;
- city delivery area;
- second shop branch.

### Employees

- gardener;
- florist;
- cashier;
- courier;
- shop manager.

Employees automate tasks the player previously performed manually.

### Monetization separation rule

Core progression content should have a clear free path. Paid content should usually sit **beside** progression rather than directly on top of it.

Example:

- free player unlocks a standard greenhouse through gameplay;
- paid Greenhouse Upgrade can add a second decorative / specialty wing with rare varieties;
- free player can use standard wrapping;
- paid packs add visual wrapping collections, not mandatory recipe ingredients.

---


## 17A. Scope strategy — flowers are the core, not the ceiling

The game should not be limited to “grow flowers and sell bouquets forever”.

The **core fantasy remains floristry**, because that gives the game a clear identity, but progression should broaden into a larger botanical lifestyle business.

Expansion axes:

### Product depth
- cut flowers;
- mixed bouquets;
- premium bouquets;
- vase arrangements;
- baskets and flower boxes;
- wedding arrangements;
- event installations;
- houseplants;
- dried flowers;
- decorative greenery;
- seasonal wreaths;
- gift sets.

### Production depth

The production chain can evolve from:

`Grow → Harvest → Carry → Sell`

into:

`Grow → Harvest → Sort → Process → Arrange → Wrap → Stock → Sell / Deliver`

The player should not receive all of these systems at once. Each new layer is introduced only after the previous loop is understood.

### Business depth
- tiny roadside flower stall;
- neighborhood flower shop;
- greenhouse;
- premium florist studio;
- wedding workshop;
- delivery service;
- event floristry studio;
- second branch;
- destination / themed stores.

### Collection depth
- flower varieties;
- colors;
- rare cultivars;
- seasonal varieties;
- hybrid / bred flowers;
- plant collection book;
- bouquet recipe collection.

### Customer depth
Ordinary walk-in customers remain the fast money loop. Larger progression comes from themed orders:

- birthdays;
- dates;
- weddings;
- hotels;
- restaurants;
- fashion events;
- offices;
- seasonal festivals;
- VIP clients.

### World depth
Later maps can change the production logic, not only the background:

- greenhouse district;
- city flower market;
- wedding venue;
- Mediterranean garden;
- Japanese garden;
- winter market;
- tropical conservatory.

### Scope guardrail
Do not turn the game into a generic farm simulator. Vegetables, livestock and unrelated factory systems should not become the main progression path.

If non-flower products are added, they should support the florist fantasy: greenery, herbs used in arrangements, houseplants, decorative branches, wrapping materials and gifts.

The recognizable identity should remain:

> **a satisfying flower-and-floristry management game, not a generic farming game with flowers in it.**

---

## 17B. Player onboarding and feature reveal

### Core onboarding principle

The player should not be taught through a long tutorial or a list of mechanics. The world teaches one action at a time.

Universal reveal pattern:

`See a need → perform the action manually → receive a reward → repeat enough to understand it → reveal the improvement or automation`

A feature appears when the player has experienced the problem it solves.

Examples:
- hit the carry limit several times → reveal Carry Capacity;
- bouquet station visibly backs up → reveal station speed;
- repeatedly run flowers to the shop → reveal carrier;
- customers wait at checkout → reveal cashier.

### How the tutorial communicates

Preference order: world animation → camera framing → glow/pulse → NPC behavior → 1–5 word contextual label → hand/arrow only if necessary → modal card only as a last resort.

Never introduce several major systems at once. Return free control within seconds.

### Opening: 0–3 minutes

**Arrival.** Open directly into the world: tiny unfinished flower stall, one mature tulip bed, empty workstation, short path, heroine. No store, events, daily rewards or monetization. Optional `Drag to move` disappears forever after movement.

**First harvest.** Tulips sway/sparkle. Walking through them makes flowers pop out, fly to the heroine and create the visible stack. No inventory explanation.

**First delivery.** After several flowers, the delivery zone pulses. Entering unloads the visible stack. The first bouquet is produced quickly and appears physically.

**First customer.** Only after a bouquet exists does the customer arrive, take it, pay and leave physical coins.

**First money.** Player collects coins by proximity. Only now does the permanent Coin counter appear.

**First upgrade.** Recommended: `Carry 10 → 18`, revealed after FULL has been reached at least twice. The player stands on the pad, coins visibly transfer, purchase completes, and the next harvesting run immediately feels better.

This teaches: `problem → physical upgrade → spend → visible improvement`.

---

## 17C. First 60 minutes: staged progression

Minute values are pacing targets, not hard timers. Behavior should trigger features where possible.

### 0–3 min: Understand the smallest loop
Available: movement, tulips, harvest, visible stack, simple bouquet, one customer, physical coins. Everything else is hidden.

Player understands: `Harvest → Carry → Bouquet → Customer → Coins`.

### 3–8 min: Improve yourself
Reveal one at a time: Carry Capacity, Move Speed, Bouquet Station Speed. Each appears only after its bottleneck is felt.

### 8–15 min: First physical expansion
A nearby locked plot has been visible from the start. Unlock **Roses**. Funding visibly changes the world: weeds clear → soil → fence → roses. A new recipe appears directly on the workstation.

Player learns: `new land → new resource → new product → higher value`.

### 15–25 min: Production becomes management
Introduce second recipe, display capacity, larger customer flow and the first meaningful production bottleneck. The player chooses between harvesting, production, stocking and money collection.

### 25–35 min: First employee
Automate only a chore the player has already repeated. First employee should be Florist or Gardener depending on what prototype testing proves repetitive. NPC appears beside task → Hire pad → pay Coins → employee immediately works. No management menu yet; first upgrade is Speed.

### 35–45 min: First special order
A physical order board/phone/clipboard appears. Example: `Birthday Order: 3 Mixed Bouquets`. Ordinary sales continue while filling it. Reward can include Coins plus Sunflower unlock.

### 45–60 min: First collection hook
A harvested flower unexpectedly becomes a visually special **Perfect Rose**. Brief label: `Perfect Rose ✨`. It is recorded automatically. Only now does **Flower Book** appear, showing discoveries plus silhouettes. Breeding remains locked: first create desire to discover.

---

## 17D. Feature roadmap after the first hour

### Established neighborhood florist
Introduce Sunflowers, more beds, second display, cashier, wrapping materials, bouquet value tiers, Shop Reputation and first visual shop renovation. Wrapping appears as a physical station before it becomes a menu choice.

### Greenhouse
Visible before affordable. Introduces rarer flowers, new growth conditions, higher-value products, quality upgrades and expanded collection. It is visibly constructed in the world.

### Breeding / hybridization
Unlock after several flower families, meaningful Flower Book gaps and naturally rare discoveries. First example: `White Rose + Pink Rose → ?`. Early breeding is forgiving/deterministic.

### Delivery
Introduced through an order too large for walk-in sales. Player first physically carries products to courier pickup. Later hire courier, increase capacity and unlock city clients.

### Wedding / event floristry
First event builds something visible, e.g. Wedding Arch. Delivered resources physically construct the decoration in stages; finished venue is a major visual payoff.

### Second branch
Only after first shop visibly matures. A branch changes environment, flowers, demand, recipes and progression rather than simply resetting numbers.

---

## 17E. How each system is shown to the player

**New flower:** show locked bed before unlock; construction happens physically; first harvest gets enhanced feedback; first relevant recipe appears immediately.

**New recipe:** show on physical workstation, e.g. `🌷 2 + 🌹 1 → 💐`; after first production it enters collection.

**New upgrade:** reveal only when relevant; show icon, price and before/after value on an in-world pad.

**New employee:** NPC appears near the task they automate; demonstrate automation immediately after hiring.

**New area:** keep it visible before unlock whenever possible. The player should repeatedly see the closed greenhouse or blocked garden and want it.

**New order:** introduce through a physical object or character: board, phone, letter, van or event client.

**New collection:** create curiosity first. Let the player find a rare flower before explaining Flower Book.

**Monetization:** never sell a modifier before its free system is understood. Double Tips after normal earnings, wrapping packs after wrapping, outfits after time with heroine, expansions after locations are understood. All paid prompts dismissible.

---

## 17F. UI information hierarchy

**Always visible:** Coins; carry amount/capacity when relevant; one tracked order after Orders unlock.

**Contextual:** upgrade cost, recipe requirement, production progress, hire price, expansion requirement.

**Hidden until meaningful:** Flower Book, employees, events, deliveries, premium store, greenhouse, breeding and branches. Do not begin with ten disabled icons.

Avoid red-dot spam. A notification means there is a genuinely useful new action.

---

## 17G. Progression gates

Prefer experiential gates over arbitrary levels.

- Carry upgrade: previous upgrade owned + FULL repeatedly experienced + minimum Shop Reputation.
- Employee: task performed manually enough times + actual bottleneck occurred.
- Orders: enough ordinary sales to understand walk-in business.
- Breeding: several varieties discovered + Flower Book already understood.
- Second branch: core systems used + first shop reaches meaningful visual completion.

Shop Reputation may summarize progress, but should not be the only reason content unlocks.

---

## 17H. Teaching and pacing guardrails

- One major new concept at a time.
- Several repetitions before the next layer.
- Never explain an upgrade before the problem exists.
- Never automate a task before the player performs it manually.
- Never introduce collection before something worth collecting appears.
- Never introduce paid content before the free mechanic it modifies.
- Mandatory active-play text should fit in one short sentence.
- Experienced players may act ahead of prompts where possible.
- Tutorial prompts disappear immediately after correct behavior.
- Do not punish experimentation.
- No waiting on timers during onboarding.
- First session contains at least one visible transformation of the world.
- In early play, roughly every 10–15 minutes brings a mechanic, resource, automation or meaningful physical expansion.

---

## 17I. First-session emotional arc

1. **Oh, I can just run through the flowers.**
2. **The stack actually gets bigger.**
3. **I made something and somebody bought it.**
4. **I can make this faster.**
5. **There is more land over there.**
6. **Now I have another flower and another product.**
7. **I cannot keep up with everything.**
8. **Oh, I can hire someone.**
9. **The shop is starting to run like a real business.**
10. **Wait, there are rare flowers too?**
11. **I want to see what this place becomes.**

This emotional sequence matters more than exact minute marks.

---

## 18. Orders system — future

Special orders provide goals beyond ordinary customers.

Examples:

> Wedding order  
> 8 Romantic Bouquets  
> Reward: 700 coins + unlock white roses

> Hotel lobby  
> 5 Luxury Arrangements  
> Reward: new vase type

Orders should create medium-term goals without interrupting the core loop.

---

## 19. Visual direction

Target feeling:

- cozy;
- polished;
- colorful;
- tactile;
- slightly stylized;
- readable on a small screen;
- premium casual mobile game rather than hyper-casual adware.

### Perspective

2D / 2.5D rendered from a soft isometric or elevated top-down angle.

### Character proportions

- stylized adult character;
- slightly oversized head for readability;
- clear silhouette;
- simple but expressive animation.

### Environment

- warm paths;
- lush flower beds;
- rounded shapes;
- soft shadows;
- visually rich garden without cluttering collision paths.

### UI

- minimal permanent interface;
- large coin counter;
- optional inventory indicator;
- upgrade prices integrated into the world;
- avoid covering the screen with buttons.

---

## 20. AI asset pipeline — planned

AI can be used to accelerate production, but consistency matters more than generation volume.

Potential workflow:

1. Define visual style guide.
2. Create strict reference sheet for main character.
3. Generate neutral character turnaround.
4. Generate / animate movement reference.
5. Convert movement into consistent sprite frames.
6. Automatically crop, align and clean frames.
7. Generate environment concepts separately.
8. Rebuild important game objects as controlled production assets.
9. Use human review for every final asset.

AI output is source material, not automatically final art.

---

## 21. Sound and haptics

MVP sound set:

- flower harvested;
- item added to stack;
- bouquet completed;
- customer purchase;
- coin collected;
- upgrade purchased.

Mobile haptics:

- subtle tap on harvest cluster;
- stronger tap on upgrade completion.

Audio should reinforce the satisfying loop without becoming noisy.

---

## 22. Technical direction

### Prototype stack

Preferred:

- TypeScript;
- Phaser;
- HTML5 Canvas / WebGL;
- Vite;
- Capacitor later for iOS / Android packaging.

### Why

- fast browser iteration;
- strong AI coding support;
- easy phone testing;
- simple deployment;
- no need to begin inside Unity or Xcode;
- same codebase can later be packaged as a mobile app.

---

## 23. Save system

MVP uses local save.

Save at minimum:

- coin balance;
- unlocked flower beds;
- upgrade levels;
- carrying capacity;
- shop expansion state.

Preferred storage for prototype:

`localStorage`

Cloud saves are explicitly out of scope for the first version.

---

## 24. Monetization model

### 24.1 Product position

The base game is **free to play, playable without ads and complete enough to be enjoyable without spending money**.

There are no forced interstitials, no mandatory rewarded videos and no energy system that stops the player from continuing.

Monetization is based on **permanent purchases**, cosmetics and optional content.

The store should feel like buying nice additions to a game the player already likes, not paying to remove frustration deliberately created by the game.

### 24.2 Monetization pillars

#### A. Convenience

Permanent upgrades for players who value their time.

Examples:

- **Double Tips / Double Revenue** — permanent x2 income from customer tips or a defined part of sales;
- faster bouquet production;
- larger passive storage;
- optional automation helpers.

Important: free progression must still feel reasonable without these purchases.

#### B. Cosmetics

Cosmetics should be a major revenue layer because the flower-shop theme naturally supports visible customization.

Examples:

- florist outfits;
- hairstyles / accessories later;
- bouquet wrapping paper;
- ribbons;
- baskets and flower boxes;
- counter skins;
- shop furniture sets;
- garden decorations;
- seasonal visual themes.

Cosmetic purchases should visibly affect the world or bouquets during normal gameplay.

#### C. Optional content unlocks

Sell additional variety without removing the useful free version of the same system.

Examples:

- rare flower collections;
- premium wrapping collections;
- themed bouquet recipes;
- special greenhouse wing;
- optional decorative plant sets.

Paid flowers should not be strictly required for main progression or basic orders.

#### D. Expansion packs

Larger purchases can unlock substantial themed areas that function like small DLCs.

Potential expansion themes:

- **Wedding Season**;
- **Paris Flower Shop**;
- **Christmas Market**;
- **Italian Summer**;
- **Japanese Garden**.

An expansion should contain meaningful new content: a new environment, visual set, flower varieties, bouquet recipes, customers and progression goals.

### 24.3 Initial store concept

Tentative launch / post-launch catalog:

| Purchase | Purpose | Tentative price tier |
|---|---|---:|
| Flower Starter Pack | low-friction first purchase: outfit + wrapping set + small coin bonus | $2.99 |
| Double Tips | permanent convenience upgrade | $4.99 |
| Florist Outfit Pack | 3–4 outfits | $3.99–4.99 |
| Premium Wrapping Pack | papers, ribbons, boxes, baskets | $2.99–3.99 |
| Greenhouse Upgrade | optional extra production/content area | $5.99 |
| Rare Flowers Pack | optional rare flower collection | $5.99–7.99 |
| Shop Interior Pack | full visual interior theme | $4.99–6.99 |
| Themed Expansion | substantial new location/content pack | $5.99–9.99 |

Prices are placeholders and should be tested by region and platform.

### 24.4 Store timing

Do not show the player a monetization wall in the opening minutes.

Recommended sequence:

1. Player learns movement and harvesting.
2. Player produces and sells the first bouquets.
3. Player buys several upgrades with normal coins.
4. Player reaches the first meaningful shop expansion.
5. Only then introduce the optional store gently.

The player should understand the value of an item before being asked to buy it.

### 24.5 What is never sold

Do not monetize:

- access to the basic harvest → bouquet → customer loop;
- basic saving;
- removal of forced ads, because there should be no forced ads;
- core flower beds needed for ordinary progression;
- normal customer flow;
- basic shop expansion path;
- arbitrary energy refills required to keep playing.

### 24.6 No premium currency at launch

Avoid gems, diamonds or a second paid currency in the first release.

Use:

- ordinary **Coins** for gameplay progression;
- direct local-currency prices for real-money purchases.

This makes the economy easier to understand, balance and trust.

A premium currency should only be reconsidered later if the content model genuinely requires it.

### 24.7 Design hooks that must exist from the start

Even though payments are out of scope for the MVP, the game architecture should support monetization without redesigning the economy later.

Plan data-driven definitions for:

- outfits;
- wrapping styles;
- shop themes;
- flower unlock sets;
- permanent modifiers such as Double Tips;
- optional expansion IDs;
- ownership flags in the save file.

Do **not** hard-code paid items directly into gameplay logic.

### 24.8 Success metric philosophy

The main commercial goal is not to extract maximum revenue from each player.

The target is:

> a game people willingly recommend because it gives them the satisfying gameplay fake ads usually promise, with monetization that does not ruin that trust.

Organic installs and retention are more important than aggressive short-term monetization.

---

## 25. Explicitly out of scope for MVP

Do **not** build yet:

- accounts;
- cloud backend;
- multiplayer;
- social system;
- daily login rewards;
- ads;
- premium currency;
- battle pass;
- dozens of flowers;
- character customization;
- complex story;
- App Store integration;
- Android billing;
- server-side economy.

These are distractions until the basic loop is fun.

---

## 26. First playable milestone

### Milestone 0.1 — Garden Loop

A browser build where the player can:

1. open the game;
2. move the character;
3. walk through one tulip bed;
4. collect flowers;
5. see the carried stack grow;
6. walk to a delivery zone;
7. unload flowers;
8. receive coins;
9. spend coins on one upgrade;
10. refresh the page and keep progress.

No customers or bouquet crafting are required yet.

### Success criterion

The harvest → carry → deliver interaction should already feel satisfying with placeholder graphics.

---

## 27. Second playable milestone

### Milestone 0.2 — Flower Shop Loop

Add:

- bouquet workstation;
- bouquet recipe;
- bouquet display;
- customers;
- sales;
- physical money collection.

At this point the complete core loop exists.

---

## 28. Questions to decide next

These decisions should be made before locking art and progression:

1. Portrait or landscape for final mobile release?
2. Fully top-down or more isometric camera?
3. Should the player character be customizable or a fixed heroine?
4. Should bouquet arranging stay automatic in the core loop, or become an optional tactile mini-game for special/event orders later?
5. Is the tone realistic florist / cozy fantasy / fashion-forward boutique?
6. Should there be a story and named characters, or almost no narrative?
7. After onboarding, should the game optimize for quick 3–5 minute check-ins, 10–20 minute active sessions, or support both?
8. Is offline income desirable, or should progress happen only while playing?
9. Which optional purchase should be the first post-MVP monetization test?
10. What visual identity makes the game immediately recognizable in screenshots?

---

## 29. Current product principle

**First make it satisfying. Then make it beautiful. Then make it large.**

The first development target is not “release a mobile game”.

It is:

> Open a link on a phone, move a character through a flower bed, collect a ridiculous stack of flowers and enjoy carrying it to the shop.

If that feels good, continue.
