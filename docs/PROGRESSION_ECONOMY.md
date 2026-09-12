# 01 — PROGRESSION & ECONOMY

**Version:** 0.1  
**Scope:** first flower shop / first region  
**Balance status:** playable target values; validate in prototype

---

# 1. Progression goal

The first shop should take approximately **2.5–4 hours of active play** to reach its first meaningful completion state, while the first hour exposes the core fantasy.

The first shop is not “finished forever” at that point. Completion means:

- all core Shop 1 flower families are unlocked;
- core automation is available;
- the greenhouse is constructed;
- the player has completed at least one event-style order;
- the store has visually transformed from stall to boutique;
- the next branch / region becomes visible.

The early game must never require watching ads, premium currency or leaving the app to wait.

---

# 2. Core balance targets

## 2.1 Reward rhythm

- Small feedback: every 1–5 seconds.
- Sale / coin feedback: every 8–20 seconds.
- Small upgrade: every 1–3 minutes early.
- New recipe / flower / worker / area: every 8–15 minutes during the first hour.
- Major visual transformation: at least once in the first 15 minutes.
- First employee: target 25–35 minutes.
- First special order: target 35–45 minutes.
- First rare flower / Flower Book reveal: target 45–60 minutes.

## 2.2 Upgrade payback targets

Early-game upgrades should usually repay their cost through increased throughput in:

- **small upgrade:** 2–4 active minutes;
- **major station upgrade:** 5–8 active minutes;
- **area expansion:** 8–15 active minutes;
- **employee:** 6–12 active minutes of saved labor / added throughput.

We care more about *felt value* than mathematically exact ROI.

---

# 3. Shop 1 flower catalog

## 3.1 Core flowers

| Flower | Unlock | Base growth | Yield / mature patch | Base unit value* | Role |
|---|---:|---:|---:|---:|---|
| Tulip | Start | 6 sec | 4 | 2 | tutorial / volume |
| Rose | Expansion 1 | 8 sec | 4 | 4 | premium early flower |
| Sunflower | Expansion 2 | 10 sec | 5 | 3 | high-yield / mixed recipes |
| Daisy | Expansion 3 | 7 sec | 5 | 2 | filler / wrapping recipes |
| Peony | Greenhouse | 14 sec | 3 | 8 | premium / events |
| Eucalyptus | Greenhouse | 12 sec | 4 | 5 | greenery / composition ingredient |

\*Unit value is an internal balancing reference. The player normally earns from finished products rather than raw flower sales.

## 3.2 Rare variants in Shop 1

Rare variants first exist as collection discoveries, not as a complicated genetics system.

- Perfect Tulip
- Blush Rose
- Golden Sunflower
- Pompon Daisy
- Coral Peony
- Silver Eucalyptus

Initial natural rare chance target: **2–4%** after Flower Book unlock.

Before Flower Book unlock, the game may force one curated rare drop to teach the system.

---

# 4. Recipe catalog

## 4.1 Early recipes

| Product | Ingredients | Production time | Display sale price | Unlock |
|---|---|---:|---:|---|
| Tulip Bunch | 3 Tulips | 2.0 sec | 12 | Start |
| Mixed Bouquet | 2 Tulips + 1 Rose | 2.5 sec | 22 | Rose unlock |
| Sunny Bouquet | 2 Sunflowers + 1 Daisy | 3.0 sec | 24 | Daisy unlock |
| Rose Bouquet | 3 Roses | 3.5 sec | 30 | Rose station upgrade |
| Wrapped Mixed Bouquet | 2 Tulips + 1 Rose + 1 Kraft Wrap | 4.0 sec | 36 | Wrapping unlock |
| Garden Bouquet | 1 Tulip + 1 Rose + 1 Sunflower + 1 Daisy | 4.5 sec | 44 | Reputation 5 |
| Peony Bouquet | 2 Peonies + 1 Eucalyptus | 5.0 sec | 58 | Greenhouse |
| Premium Arrangement | 2 Roses + 2 Peonies + 1 Eucalyptus + 1 Premium Wrap | 7.0 sec | 90 | Late Shop 1 |

## 4.2 Packaging resources

Packaging does not grow in the garden. It is stocked at a supply point.

| Resource | Cost to restock | Units | Effective unit cost |
|---|---:|---:|---:|
| Kraft Wrap | 40 | 20 | 2 |
| Ribbon | 60 | 20 | 3 |
| Premium Wrap | 120 | 20 | 6 |
| Vase | 180 | 10 | 18 |

During onboarding, packaging is not visible.

## 4.3 Special-order products

These are not sold through ordinary display stock unless separately defined.

- Birthday Set — 3 Mixed Bouquets
- Café Table Set — 4 Sunny Bouquets
- Wedding Trial — 2 Rose Bouquets + 2 Wrapped Mixed Bouquets
- Hotel Lobby Arrangement — 2 Premium Arrangements
- Wedding Arch — bulk Roses + Peonies + Eucalyptus + finished arrangements

---

# 5. First-shop progression map

The values below are intended to create a coherent first playable balance.

| Step | Approx. time | Unlock / event | Requirement | Cost | Revenue / throughput effect | Visual change | New bottleneck created |
|---|---:|---|---|---:|---|---|---|
| 0 | 0 min | Tulip bed + first station | Start | 0 | establishes loop | tiny stall, one bed | Carry |
| 1 | 2–4 min | Carry I: 10→18 | Hit FULL twice | 80 | ~+35–50% fewer trips | larger florist basket | Movement |
| 2 | 4–6 min | Move I: +12% | 8 sales | 120 | route throughput ↑ | shoes / movement trail subtle | Production station |
| 3 | 6–8 min | Station Speed I: -20% craft time | station queue > threshold twice | 160 | bouquets/min ↑ | station gets better tools | Display capacity |
| 4 | 8–12 min | Rose Plot | earn 350 lifetime Coins | 300 | unlocks 22–30 Coin products | new garden plot builds | Carry / ingredient routing |
| 5 | 12–15 min | Display I: 4→7 slots | sell 6 mixed bouquets | 220 | reduces stock blocking | larger table | Customer flow |
| 6 | 15–20 min | Customer Flow I | 25 total sales | 300 | +1 possible shopper, shorter spawn gap | path/signage improves | Bouquet station |
| 7 | 18–24 min | Carry II: 18→28 | 2 flowers unlocked + FULL 3x | 420 | fewer garden trips | basket visibly fuller/larger | Harvest rate |
| 8 | 22–28 min | Sunflower Plot | Shop Reputation 3 | 650 | new high-yield recipes | bright side garden opens | Station throughput |
| 9 | 25–35 min | First Worker | perform target chore 25–35x | 800 | partial automation | worker NPC + tiny staff area | worker speed / next manual chore |
| 10 | 30–38 min | Wrapping Station | 45 bouquets sold | 700 | premium recipes + ~30–60% price uplift | wrapping counter appears | packaging restock |
| 11 | 35–45 min | Order Board | 60 sales | 0 | medium-term burst rewards | board/phone appears | allocation choice |
| 12 | 40–50 min | Daisy Plot | complete first special order | 900 | new recipe family | third garden section | Garden route length |
| 13 | 45–60 min | Flower Book | curated rare discovery | 0 | collection meta | book icon + tiny display shelf | desire for rare varieties |
| 14 | 55–70 min | Move II +15% | route distance threshold | 850 | compensates larger map | visual movement upgrade | Harvest yield |
| 15 | 65–85 min | Harvest Yield I +1 per mature patch | harvest 500 flowers | 1,100 | raw supply ↑ ~20–25% | richer flower bursts | Carry / station |
| 16 | 75–100 min | Second Display | display full frequently | 1,250 | stock buffer ↑ | shop interior expands | Checkout |
| 17 | 90–120 min | Cashier | 100 customers + queue events | 1,600 | automates payment flow | register + NPC | production |
| 18 | 100–140 min | Greenhouse foundation | Reputation 6 + 1 event order | 2,500 | future premium resources | visible greenhouse construction | Coin accumulation |
| 19 | 120–170 min | Peony + Eucalyptus | Greenhouse complete | 0 | 58–90 Coin products | greenhouse comes alive | premium production |
| 20 | 150–210 min | Premium Floristry Station | 20 premium products | 2,200 | event-grade arrangements | upgraded station | event demand |
| 21 | 180–240 min | First Event: Wedding Arch | required stock + Rep 8 | resource delivery | large payout + branch unlock | offsite/event scene completes | next region |
| 22 | 210–240+ min | Shop 1 Completion | event complete + Rep 9 | — | next branch visible | boutique fully transformed | choice of expansion |

---

# 6. Currency flow

## 6.1 Sale prices

Normal walk-in customers pay listed display price.

A small preference bonus may apply later, but base launch behavior should be predictable.

## 6.2 Tips

Tips are optional extra currency, not a second currency.

Initial target:
- 15% base chance to leave a tip;
- tip = 10–25% of product price;
- VIP customer may guarantee a larger tip.

Tips should never be required for progression math.

## 6.3 Order rewards

Special orders pay approximately **1.25–1.6×** the normal retail value of the same products, because they temporarily reserve production capacity and create planning pressure.

Example:
- 3 Mixed Bouquets normal retail = 66 Coins.
- Birthday Order reward target = 90 Coins + Reputation.

Large events may pay 1.5–2.0× equivalent retail plus an unlock.

---

# 7. Upgrade catalog

## 7.1 Player upgrades

### Carry Capacity

| Level | Capacity | Cost |
|---|---:|---:|
| Base | 10 | — |
| I | 18 | 80 |
| II | 28 | 420 |
| III | 42 | 1,200 |
| IV | 60 | 3,000 |
| V | 85 | 7,500 |

Later regions can continue to 120 / 160 / 220.

When full:
- no movement penalty;
- pickup stops;
- stack gives a bounce / FULL feedback;
- player remains in control.

### Movement Speed

| Level | Modifier | Cost |
|---|---:|---:|
| Base | 100% | — |
| I | 112% | 120 |
| II | 127% | 850 |
| III | 142% | 2,800 |

Avoid excessive speed that breaks readability.

### Pickup Radius

Unlock after the map becomes larger.

| Level | Radius modifier | Cost |
|---|---:|---:|
| Base | 100% | — |
| I | 125% | 950 |
| II | 150% | 2,600 |
| III | 180% | 6,500 |

### Harvest Yield

| Level | Effect | Cost |
|---|---|---:|
| Base | base yield | — |
| I | +1 per mature patch | 1,100 |
| II | +1 additional | 3,600 |

## 7.2 Production upgrades

Station upgrades improve one obvious property at a time:

- craft speed;
- input buffer;
- output buffer;
- premium recipe access.

Do not combine five stats into one opaque “Level 7” upgrade.

---

# 8. Shop Reputation

Reputation is a progression summary, not a premium currency.

Earned from:
- first-time recipe completion;
- special orders;
- event completion;
- sales milestones;
- discovering rare flowers;
- shop visual upgrades.

Suggested Shop 1 thresholds:

| Reputation | Meaning | Main unlock |
|---:|---|---|
| 1 | Tiny Stall | start |
| 2 | Local Favorite | Rose plot |
| 3 | Neighborhood Florist | Sunflower + employee |
| 4 | Growing Shop | wrapping |
| 5 | Known for Bouquets | Garden Bouquet |
| 6 | Boutique Florist | greenhouse project |
| 7 | Premium Florist | Peony line |
| 8 | Event Florist | wedding event |
| 9 | Destination Shop | next branch |

Do not use Reputation as the sole condition. Pair it with experiential triggers.

---

# 9. Monetization placement inside progression

Launch philosophy: no forced ads, no rewarded-ad dependency, no energy.

## 9.1 Visibility rules

Paid offers are hidden until the underlying free mechanic is understood.

| Product | First eligible moment | Why |
|---|---|---|
| Starter Pack | after first visual shop expansion, not opening minutes | player now understands value |
| Florist Outfit Pack | after 15–20 min | attachment to avatar established |
| Premium Wrapping Pack | after wrapping station unlock | contextual |
| Double Tips | after 40+ normal sales | player understands baseline earnings |
| Greenhouse Cosmetic Upgrade | after greenhouse construction begins | relevant aspiration |
| Rare Flower Content Pack | only after Flower Book / rare system | cannot sell mystery before desire exists |
| Shop Interior Pack | after first renovation | player knows interiors can change |
| Themed Expansion | after Shop 1 completion | clear content purchase |

## 9.2 Hard rules

Never sell:
- saving;
- basic flower beds;
- base carry ability;
- energy refills;
- removal of ads when there are no ads;
- mandatory queue skips;
- required core recipes.

---

# 10. Economy tuning rules

If progression is too slow:
1. increase finished-product value before increasing free Coin grants;
2. reduce the cost of the specific bottleneck upgrade;
3. increase worker / station throughput;
4. check route length;
5. only then change global economy.

If progression is too fast:
1. add a meaningful production choice or content step;
2. increase expansion cost moderately;
3. avoid multiplying every cost by 10.

Inflation rule:
If costs increase by X over a region, player earning power should also increase comparably through better products and throughput.

---

# 11. Economy telemetry needed

Log:
- Coins earned/minute;
- Coins spent/minute;
- time between purchases;
- upgrade selected;
- queue length by station;
- average carried stack at unload;
- % time player is FULL;
- flower waste / unused stock;
- display empty time;
- customer wait time;
- worker utilization;
- order completion time;
- time to each progression milestone.

The balance spreadsheet/config should be generated from the same source values used by the game wherever possible.
