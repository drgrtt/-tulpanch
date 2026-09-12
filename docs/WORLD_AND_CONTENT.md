# 03 — WORLD & CONTENT

**Version:** 0.1  
**Scope:** first-shop spatial plan plus long-term content runway

---

# 1. Spatial design goals

The world is not decoration. It is the interface.

The map must:
- teach through proximity;
- make bottlenecks visible;
- create satisfying repeated routes;
- expand physically;
- remain readable in portrait orientation;
- keep the player within a few seconds of a useful action.

Shop 1 begins compact and becomes meaningfully larger.

---

# 2. Camera assumptions for layout

Target:
- portrait 9:16;
- soft isometric / elevated top-down;
- fixed world rotation;
- camera follows player;
- player occupies roughly 7–10% of screen height;
- one screen should show 1–2 adjacent systems, not the entire map.

Exact angle should be tested around 35–45° elevation.

---

# 3. Shop 1 map — macro layout

Conceptual layout:

```text
                    NORTH / GARDEN

        ┌──────────── future greenhouse ────────────┐
        │               [LOCKED EARLY]              │
        └────────────────────┬──────────────────────┘
                             │
      [ROSES]      [TULIPS]  │  [SUNFLOWERS]
          \            |     │       /
           \       main garden path /
            \          |           /
             [GARDEN COLLECTION / HANDOFF]
                         |
                 [BOUQUET STATION]
                         |
            [WRAPPING] --+-- [ORDER BOARD]
                         |
                  [DISPLAY TABLE]
                         |
                [CHECKOUT / COINS]
                         |
                 CUSTOMER ENTRANCE
                         |
                       SOUTH
```

Later side expansion:

```text
WEST: Daisy garden + employee hut
EAST: second display + premium floristry room
NORTH: greenhouse
SOUTH-EAST: delivery / courier pickup
```

---

# 4. Shop 1 zones

## Zone A — Tutorial Garden

Contains:
- Tulip bed;
- first Carry upgrade;
- clear path to production.

Purpose:
teach harvest and visible stack.

No decorative clutter that looks collectible.

## Zone B — Main Floristry Floor

Contains:
- bouquet station;
- display;
- checkout.

Purpose:
make the production chain readable in one glance.

The first customer route should cross the player’s field of view.

## Zone C — Rose Expansion

Visible from the opening but blocked / overgrown.

When purchased:
- weeds clear;
- fence opens;
- soil bed builds;
- roses bloom.

Purpose:
first proof that Coins transform the world.

## Zone D — Sunflower Expansion

Slightly farther from shop.

Purpose:
introduce route-length pressure and make Movement / Carry upgrades meaningful.

## Zone E — Daisy / Utility Garden

Creates branching resource routes.

Place near employee area so worker automation becomes spatially intuitive.

## Zone F — Greenhouse

Large aspirational structure visible before it can be built.

It should be one of the first things the player notices in the distance.

Unlock:
premium flower production + collection depth.

## Zone G — Delivery Edge

Near map boundary / street.

Contains:
- order pickup;
- van / bicycle / courier;
- later branch travel point.

## Zone H — Event Portal / Venue

Events need not physically fit inside the normal shop map.

Use a short transition to a compact event scene where the player delivers materials and watches the decoration build.

---

# 5. Route design

## 5.1 Early route

Tulips → station → display → checkout.

Target round trip:
roughly 8–14 seconds at base speed.

## 5.2 Mid route

Multiple flower beds force choice.

No single bed should be so far away that basic collection becomes walking simulator.

Movement upgrades should reduce friction, not repair bad layout.

## 5.3 Late Shop 1

Player has:
- more distant greenhouse;
- multiple production points;
- employees.

Manual player routes should become strategic:
- solve the current bottleneck;
- grab rare resource;
- fulfill special order;
- build expansion.

---

# 6. Physical construction language

All major unlocks should build visibly.

Construction phases can be short:

1. purchase begins;
2. Coins flow into zone;
3. dust / petals / small construction animation;
4. object rises in 2–4 staged chunks;
5. functional state activates;
6. celebratory flourish.

Avoid black-screen “Unlocked!” transitions for normal upgrades.

---

# 7. Shop visual transformation

## Stage 0 — roadside stall
- simple awning;
- one table;
- rough paths;
- minimal signage.

## Stage 1 — neighborhood florist
- painted facade;
- better display;
- flower buckets;
- small sign;
- cleaner garden borders.

## Stage 2 — boutique
- glass / bright storefront;
- wrapping counter;
- premium display;
- branded packaging;
- staff corner.

## Stage 3 — destination florist
- greenhouse;
- premium floristry station;
- outdoor decor;
- event portfolio wall;
- branch travel marker.

The player should be able to compare screenshots from hour 0 and hour 3 and immediately see transformation.

---

# 8. Content structure after Shop 1

Flowers are the identity, but the content fantasy expands from “grow and sell” to “floristry business”.

## Region 1 — Neighborhood Flower Shop

New concepts:
- basic growing;
- bouquets;
- employees;
- orders;
- Flower Book;
- greenhouse;
- event floristry.

Core flowers:
Tulip, Rose, Sunflower, Daisy, Peony, Eucalyptus.

## Region 2 — City Boutique

Visual:
urban street / fashion-forward florist.

New mechanics:
- vases;
- premium wrapping;
- scheduled corporate orders;
- same-day delivery;
- customer preferences become more meaningful;
- shop styling / display themes.

New flowers:
Hydrangea, Lily, Ranunculus, Orchid, Gypsophila.

New products:
- vase arrangements;
- luxury bouquets;
- desk arrangements.

Important:
do not reset player to feeling weak. Existing staff / collection provides bonuses or shared mastery.

## Region 3 — Wedding Studio

Visual:
studio + venue workshop.

New mechanics:
- multi-stage event projects;
- arches;
- centerpieces;
- bridal bouquets;
- event deadlines with optional bonus, not punishment;
- team allocation.

New flowers:
Garden Rose, Delphinium, Lisianthus, Anemone.

This region broadens scale without abandoning floristry.

## Region 4 — Botanical Atelier / Greenhouse Estate

New mechanics:
- deeper breeding;
- rare varieties;
- climate rooms;
- collector commissions;
- exhibition / flower show.

This is where collection becomes a major long-term system.

---

# 9. Optional themed expansions

Suitable paid or large free content packs:

- Japanese Garden
- Paris Flower Shop
- Italian Summer
- Christmas Market
- Spring Wedding Season
- English Garden
- Tropical Conservatory

A themed expansion should include:
- visual map;
- 3–6 new flowers / variants;
- recipes;
- customers / orders;
- decorations;
- one distinctive mechanic or event type.

Do not sell a reskin with no gameplay value.

---

# 10. Flower content taxonomy

To prevent content chaos, every flower belongs to:

- family;
- color set;
- rarity;
- growth profile;
- visual height;
- bouquet roles.

Bouquet roles:
- focal flower;
- filler flower;
- greenery;
- structural / tall;
- premium accent.

This allows recipes to later use categories rather than dozens of hardcoded exact IDs.

---

# 11. Product taxonomy

Products:

1. Bunch
2. Bouquet
3. Wrapped Bouquet
4. Vase Arrangement
5. Basket Arrangement
6. Bridal Bouquet
7. Centerpiece
8. Event Module
9. Installation

Shop 1 should primarily use 1–3 plus one taste of 8.

---

# 12. Content reveal rule

New content must answer at least one of:

- What new thing can I physically do?
- What new visual result can I create?
- What new bottleneck can I solve?
- What new collection goal can I chase?
- What new place can I transform?

If content only increases a number without changing the player’s experience, question whether it belongs.

---

# 13. Map production checklist

Before final art:
- test base routes using colored blocks;
- measure travel time;
- ensure no important trigger overlaps;
- validate portrait readability;
- test 5 customers + workers simultaneously;
- test huge carry stack against doorways;
- test camera occlusion;
- reserve expansion footprints;
- keep customer and worker traffic from constantly crossing at one choke point.

---

# 14. First-shop completion presentation

Completion should be a visible celebration, not “Level Complete”.

After first major event:
- shop facade upgrades;
- staff briefly reacts;
- camera pulls back enough to show finished business;
- next-destination sign / map appears.

Message can be short:

`Your little flower stall became a real florist.`

Then the player regains control and may keep playing Shop 1 or open the next region.
