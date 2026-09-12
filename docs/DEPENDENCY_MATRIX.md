# 05 — FEATURE DEPENDENCY MATRIX

**Version:** 0.1

This document answers one question:

**Why does each feature exist, what creates the need for it, and what new need does it create next?**

If a feature has no clear input, player need, or downstream purpose, it is a candidate for removal.

---

# 1. Core dependency chain

```text
Tulip Bed
  ↓ creates harvestable resource
Manual Harvest
  ↓ fills hands quickly
Carry Capacity
  ↓ lets player move more material
Bouquet Station
  ↓ converts raw resource into value
Display
  ↓ exposes products to demand
Customers
  ↓ create sales
Checkout / Coins
  ↓ fund improvements
Upgrades
  ↓ increase throughput
New Flower Plot
  ↓ adds ingredients / route length
New Recipes
  ↓ increase product value and complexity
Production Bottleneck
  ↓ justifies Worker
Worker
  ↓ automates known chore
More Output
  ↓ creates display / checkout bottleneck
Shop Expansion
  ↓ adds capacity and space
Orders
  ↓ create allocation decisions
Greenhouse
  ↓ introduces premium flowers
Rare Flowers / Flower Book
  ↓ creates collection desire
Breeding
  ↓ lets player target missing discoveries
Events
  ↓ turn production into visible large projects
Shop Completion
  ↓ justifies next branch
```

---

# 2. Bottleneck chain

| Current bottleneck | What player experiences | Solution revealed | What becomes bottleneck next |
|---|---|---|---|
| Carry 10 | leaves flowers behind / extra trips | Carry I | movement distance |
| Movement | routes feel long | Move I | craft station |
| Craft speed | inputs pile up | Station Speed I | display |
| Display size | output blocked | Display I | demand / customer flow |
| Low demand | stock sits | Customer Flow I | raw supply |
| Raw supply | station starves | new plot / yield | carrying |
| Manual repetition | player runs same chore constantly | first worker | another manual layer |
| Packaging | premium recipe blocked | restock / worker later | premium production |
| Checkout | customer queue | cashier | product supply |
| Basic products | income plateaus | greenhouse / premium flowers | premium throughput |
| Walk-in demand | lacks medium goals | orders | resource allocation |
| Known flowers | collection curiosity | Flower Book / breeding | rare acquisition |
| Shop 1 saturated | no meaningful next goal | event + next branch | new region systems |

---

# 3. Feature justification table

| Feature | Must come after | Player need | Immediate reward | Long-term purpose |
|---|---|---|---|---|
| Carry stack | harvest | see accumulation | visual satisfaction | signature identity |
| Carry upgrades | FULL state | fewer trips | bigger stack | throughput |
| Move speed | expanded routes | reduce travel friction | faster control feel | larger maps |
| Pickup radius | many beds / dense garden | reduce precision chore | vacuum satisfaction | late-game harvest |
| Yield | supply starvation | more input | bigger harvest burst | feed automation |
| Bouquet station | first harvest | turn flowers into value | visible product | production chain |
| Display | bouquet creation | sell products physically | shop feels real | stock buffer |
| Customers | first product | demand | money | living business |
| Employees | repeated manual chore | reduce repetition | automation fantasy | scaling |
| Orders | stable walk-in loop | medium goal | large payout | planning |
| Wrapping | basic bouquet mastery | higher-value product | prettier output | premium content |
| Flower Book | rare encounter | understand rarity | discovery record | collection |
| Breeding | missing collection slots | target rare flower | reveal | long-term mastery |
| Greenhouse | basic outdoor garden mastered | premium growth | major construction | deeper florist fantasy |
| Delivery | orders established | serve off-map demand | courier animation | city scale |
| Events | premium production mastered | use stock in a bigger way | visible venue transformation | aspirational milestones |
| Second branch | Shop 1 transformed | new place | new visual world | retention/content runway |

---

# 4. Unlock dependencies

## Carry I
Requires:
- first sale;
- FULL reached twice.

## Rose Plot
Requires:
- first Carry upgrade;
- lifetime Coin threshold;
- player has completed basic loop several times.

## Worker
Requires:
- at least two resource types;
- relevant manual chore repeated 25–35 times;
- enough Coin earning power that hire is achievable without waiting.

## Orders
Requires:
- at least two recipes;
- normal customers understood;
- shop able to produce enough stock without collapsing.

## Flower Book
Requires:
- first rare discovery.

## Breeding
Requires:
- Flower Book;
- multiple flower families;
- visible missing varieties.

## Greenhouse
Requires:
- mature basic shop;
- orders;
- Reputation 6 target.

## Events
Requires:
- premium flower and production systems;
- enough worker automation that bulk requirements are not pure grind.

## Next Region
Requires:
- one completed major event;
- Shop 1 visual completion;
- player understands all foundational systems.

---

# 5. Anti-feature-creep test

Before adding any new mechanic, answer:

1. What existing player problem does this solve?
2. What emotion does it add?
3. How is it introduced physically?
4. What does it connect to upstream?
5. What does it unlock downstream?
6. Is it new gameplay, or merely another currency/menu?
7. Could an existing system do the same job more elegantly?

If questions 1, 4 and 5 do not have good answers, do not add it yet.

---

# 6. Design rule

The game should feel like a chain of understandable discoveries, not a dashboard that slowly unlocks buttons.

Each new system should arrive at the exact moment the player can think:

**“Yes. I need that.”**
