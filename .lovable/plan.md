# Šípky v segmentových kartách → kalkulačka

Cieľ: Šípky (alebo celé interaktívne karty) v sekcii „Ktorý paušál je pre teba?" budú smerovať používateľa priamo na kalkulačku „Čo môžeš získať s novými paušálmi?".

## Súčasný stav
- Sekcia `SavingsCalculator` nemá žiadne `id`, takže na ňu nejde linkovať cez anchor.
- Segmentové karty (`segments`) obsahujú dva textové linky smerujúce na `#maxx`, `#pausaly` alebo `#junior`.
- Šípka (`ArrowRight`) je len dekoratívny element bez vlastného odkazu.

## Navrhované zmeny

### 1. Pridať anchor ID kalkulačke
Súbor: `src/components/SavingsCalculator.tsx`
- Pridať `id="kalkulacka"` na wrapper `<section className="bg-background py-20">`.

### 2. Upraviť segmentové karty
Súbor: `src/routes/index.tsx`
- Zmeniť `links` v poli `segments` tak, aby aspoň jeden link v každej karte viedol na `#kalkulacka`.
- Prípadne upraviť hlavný call-to-action v karte tak, aby šípka bola obalená `<a href="#kalkulacka">` a vizuálne reagovala na hover/klik.
- Udržať existujúce farby a animácie (hover lift, rotácia šípky, soft shadow).

### 3. Overiť smooth scroll
- Použiť natívny anchor behavior (`scroll-behavior: smooth` už je pravdepodobne nastavené v CSS).
- Prípadne doplniť `scroll-mt-20` na sekcii kalkulačky, aby fixed header neprekrýval obsah.

## Súbory
- `src/components/SavingsCalculator.tsx`
- `src/routes/index.tsx`
