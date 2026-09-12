# 02 — GAME SYSTEMS

**Version:** 0.1  
**Scope:** customer AI, workers, carry stack, object state machines, save/offline, failure philosophy

---

# 1. System philosophy

The game should look busy while remaining readable.

Rules:
- player input always has priority;
- automation assists rather than replaces the fantasy;
- bottlenecks must be visible in the world;
- failure is mostly soft friction, not punishment;
- important state should be readable from animation before text.

---

# 2. Carry stack system

## 2.1 Inventory model

The player has a single visible carry stack with a numerical capacity.

Raw flowers may mix inside the same stack.

The internal inventory stores quantities by resource:

```text
carry = {
  tulip: 8,
  rose: 4,
  sunflower: 0
}
capacityUsed = 12
capacityMax = 18
```

The visual stack does not need one rendered object per exact unit at high counts. It uses visual tiers.

## 2.2 Visual stages

Suggested visual tiers:
- 1–4: small handful;
- 5–9: armful;
- 10–17: visible bundle behind shoulder;
- 18–27: large exaggerated stack;
- 28–41: oversized floral tower;
- 42+: compressed representative stack with increased scale and density.

At very high capacities use representative sprites / clumps rather than hundreds of individual objects.

## 2.3 Pickup

When player enters a mature flower trigger:
1. calculate free capacity;
2. harvest up to available capacity;
3. flowers arc toward stack;
4. increment internal inventory;
5. update visual tier;
6. play pickup SFX / micro-haptic.

If capacity is full:
- do not slow the player;
- do not delete flowers;
- leave mature resource available;
- pulse stack once;
- optionally show `FULL` for <1 sec;
- suppress repeated FULL spam for a cooldown.

## 2.4 Unloading

Stations request specific resources.

When in station trigger:
- unload accepted resources only;
- transfer at a readable but fast cadence;
- animate flower clumps leaving stack;
- update both player and station buffer.

If station cannot accept an ingredient, that resource remains carried.

## 2.5 Wrong-resource frustration prevention

The player needs a way to avoid being trapped with unwanted inventory.

Preferred order:
1. smart station acceptance;
2. optional compost / return crate unlocked early;
3. long-press discard only as a fallback.

The game should never force a restart because the player's hands are full of the wrong flower.

---

# 3. Customer system

## 3.1 Customer lifecycle

```text
SPAWN
→ ENTER
→ CHOOSE_DISPLAY
→ WALK_TO_PRODUCT
→ WAIT_FOR_PRODUCT (if acceptable)
→ TAKE_PRODUCT
→ WALK_TO_CHECKOUT
→ WAIT_TO_PAY
→ PAY
→ OPTIONAL_TIP
→ EXIT
```

## 3.2 Arrival rate

Early:
- one active customer;
- 12–20 sec between potential arrivals.

Mid Shop 1:
- 2–3 active customers;
- 7–12 sec spawn gap.

Late Shop 1:
- up to 4–5 active customers;
- cashier / stock throughput should determine whether queues form.

Exact arrival rates should dynamically respect current display output so customers do not endlessly spawn into an impossible empty shop.

## 3.3 Product choice

Launch weighting:
- 70% chooses any available product;
- 20% prefers a category / flower;
- 10% premium / special preference after unlocked.

Preference is readable through a small thought bubble icon if useful.

Do not require the player to memorize customer archetypes at launch.

## 3.4 Waiting

Walk-in customers have patience, but failure is soft.

Suggested:
- comfortable wait: 0–12 sec;
- impatient animation: 12–22 sec;
- may leave after ~25–30 sec if no valid stock.

Early tutorial customers should not leave.

## 3.5 Leaving without purchase

If customer leaves:
- no Coin penalty;
- no Reputation loss in early Shop 1;
- small sad / neutral animation;
- analytics event records the cause.

Later regions may introduce small reputation impact only if playtesting shows it adds meaningful management rather than stress.

## 3.6 VIP

VIP unlocks later in Shop 1.

Behavior:
- requests premium product or exact flower family;
- pays 1.5–2.0× normal price;
- higher tip chance;
- slightly longer patience;
- visually distinct but not flashy casino styling.

Spawn should be infrequent and feel like an opportunity, not FOMO.

---

# 4. Employee system

## 4.1 General worker rules

Workers:
- perform one understandable role;
- operate in a defined zone;
- prioritize blocked production;
- do not steal resources the player is actively carrying toward a station;
- never teleport during normal gameplay;
- may use simplified pathfinding lanes.

Player should remain the fastest flexible problem-solver.

## 4.2 Roles

### Gardener

Task:
- patrol assigned flower beds;
- harvest mature flowers;
- move harvested flowers to garden collection crate / transport handoff.

Never:
- craft bouquets;
- restock display;
- take special-order stock unless explicitly assigned.

Upgrades:
- speed;
- carry capacity;
- assigned beds.

### Carrier

Task:
- move raw flowers from collection crate / garden to production;
- later move finished goods between stations.

Never:
- harvest;
- serve checkout;
- decide premium-order allocation unless priority rules are enabled.

Upgrades:
- movement speed;
- capacity.

### Florist

Task:
- operate bouquet station;
- pull ingredients from input buffer;
- craft unlocked recipes based on current production priority.

Priority default:
1. tracked special order if player toggled priority;
2. display products that are empty;
3. balanced stock.

Upgrades:
- craft speed;
- input buffer;
- recipe tier.

### Stocker

Task:
- carry finished products to display.

Useful only after shop grows large enough that this is a real chore.

### Cashier

Task:
- process waiting customers.

Upgrades:
- checkout speed;
- queue capacity / dual register later.

### Courier

Late Shop 1 / later:
- moves completed delivery orders to pickup;
- later automates city deliveries.

## 4.3 Hiring rule

No worker is introduced until the player has manually performed or observed the relevant chore enough times.

## 4.4 Worker task selection

Use a simple score:

```text
priorityScore =
  urgency
+ blockedProductionWeight
+ distanceWeight
+ assignedZoneWeight
+ playerPriorityBonus
```

Do not build complex simulation AI unless needed.

## 4.5 What can never be fully automated

At least one layer should always reward active play:
- discovering / opening new areas;
- choosing upgrades;
- first-time event construction;
- rare discovery interactions;
- route optimization;
- optional special production choices.

---

# 5. Object state machines

## 5.1 Flower bed

```text
LOCKED
→ BUILT_EMPTY
→ GROWING
→ READY
→ PARTIALLY_HARVESTED
→ GROWING
```

Properties:
- flowerType;
- growthDuration;
- matureYield;
- currentGrowth;
- upgradeLevel;
- rareRollEligible.

Visual states:
- soil / sprouts / mid-growth / full bloom.

## 5.2 Bouquet station

```text
LOCKED
→ IDLE
→ ACCEPTING_INPUT
→ READY_TO_CRAFT
→ CRAFTING
→ OUTPUT_READY
→ OUTPUT_BLOCKED
```

Buffers:
- input capacity;
- output capacity.

The station stops crafting if output is full.

## 5.3 Display table

```text
LOCKED
→ EMPTY
→ PARTIAL
→ FULL
→ RESERVED_ITEM_REMOVED
```

Properties:
- slots;
- accepted product categories;
- current stock;
- customer reservation flags.

## 5.4 Checkout

```text
IDLE
→ CUSTOMER_WAITING
→ PROCESSING
→ PAYMENT_READY
→ COINS_UNCOLLECTED
```

With cashier:
- payment processing becomes automatic;
- coin collection may remain physical initially, then optionally auto-collect late game.

## 5.5 Upgrade pad

```text
HIDDEN
→ TEASED
→ AVAILABLE_LOCKED_BY_COST
→ PURCHASING
→ COMPLETE
```

Pad should not exist visually before the underlying problem is relevant.

## 5.6 Expansion zone

```text
BACKGROUND_TEASE
→ UNLOCKABLE
→ FUNDING
→ CONSTRUCTING
→ ACTIVE
```

Construction should visibly transform the world.

## 5.7 Order

```text
UNAVAILABLE
→ OFFERED
→ ACCEPTED
→ IN_PROGRESS
→ READY_TO_DELIVER
→ COMPLETE
```

Default design: accepted orders do **not** expire in Shop 1.

---

# 6. Order allocation rules

The player needs to understand where finished bouquets go.

Default:
- normal station output can serve display;
- accepting a special order creates an order crate;
- player can walk product into order crate to reserve it;
- reserved items cannot be taken by walk-in customers.

Later convenience:
- set florist production priority;
- worker can route directly to order crate.

Avoid invisible inventory theft where an order silently consumes shop stock.

---

# 7. Failure philosophy

Shop 1 is cozy and low-punishment.

## 7.1 No hard fail for:
- empty display;
- full station;
- customer leaving;
- ignored order;
- full carry stack;
- offline absence;
- choosing a “wrong” upgrade.

## 7.2 Soft consequences

Possible:
- lost sale;
- temporary queue;
- slower progression;
- missed tip;
- production blockage visible in the world.

## 7.3 Orders

Shop 1 orders:
- no countdown expiry;
- player can abandon and recover reserved products if needed.

Later event contracts may have optional bonus timers, but base reward is still obtainable.

## 7.4 Flowers

Base flowers do not wither after maturity.

Reason:
the game should reward returning, not punish the player for leaving.

---

# 8. Save system

## 8.1 Saved data

Persist:
- Coins;
- Reputation;
- unlocked areas;
- upgrade levels;
- employee ownership and levels;
- bed growth timestamps;
- station buffers;
- display stock;
- carry inventory;
- discovered flowers;
- recipes;
- Flower Book;
- active order and reserved stock;
- shop cosmetic state;
- owned IAP entitlements;
- settings;
- tutorial / onboarding flags.

## 8.2 Save cadence

Local save:
- after every purchase;
- after unlock;
- after order completion;
- on app pause/background;
- periodic autosave every 20–30 sec.

Use versioned save schema.

## 8.3 Recovery

Keep:
- current save;
- one previous valid snapshot;
- schema version;
- checksum / sanity checks.

If load fails, attempt previous snapshot before starting a new game.

---

# 9. Offline progression

## 9.1 Philosophy

Offline progression is supportive, not the main game.

When the player returns:
- flower beds may be mature;
- production does not generate unlimited products from nothing;
- employees can perform bounded work if inputs existed;
- customer sales may generate a capped amount if display stock existed.

## 9.2 Proposed Shop 1 limits

Offline simulation cap: **4 hours** initially.

Beds:
- grow to ready;
- no repeated infinite harvest cycles unless a gardener is unlocked.

Workers:
- can process stored inputs up to buffer/output limits.

Customer sales:
- may consume existing display stock;
- do not conjure new products.

Return screen:
- simple summary, not a giant reward casino.

Example:
`While you were away: 8 bouquets sold · 214 Coins`

No “watch ad to x5”.

---

# 10. Customer / worker pathing constraints

For MVP:
- nav grid or lightweight path graph;
- fixed entrance / exit;
- no dynamic physics crowd simulation;
- characters may use local avoidance;
- customers should not permanently block stations.

If stuck >2 sec:
- recalculate;
- if still stuck, snap to nearest valid path node during off-camera / subtle transition.

---

# 11. Interaction priority

When player overlaps multiple triggers, priority:

1. critical construction / upgrade pad if intentionally stood upon;
2. unloading to a relevant station;
3. picking up finished product;
4. harvesting;
5. coin collection;
6. cosmetic / optional interaction.

Use spatial layout to avoid overlap rather than relying only on code.

---

# 12. System analytics

Log:
- customer_spawn;
- customer_purchase;
- customer_left_no_stock;
- customer_left_queue;
- worker_hired;
- worker_upgrade;
- carry_full;
- carry_unload;
- station_blocked_input;
- station_blocked_output;
- display_empty;
- display_full;
- order_accept;
- order_complete;
- save_load_fail;
- offline_return.

Every event should include game version and progression step.
