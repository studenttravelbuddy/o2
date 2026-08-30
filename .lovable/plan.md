# Prelinkovanie tlačidiel

## Zmeny v `src/routes/index.tsx`

1. **`OFFER_LINK` → `https://www.o2.sk`** (nová karta, `target="_blank" rel="noopener noreferrer"`)
   - „Chcem 100 GB" (Maxx)
   - „Vybrať Základný / Pohodový / Bezstarostný" (paušály)
   - „Zistiť viac" (Junior)
   - „Preniesť si číslo" (kroky prechodu)

2. **„Pozrieť podmienky"** → `https://www.o2.sk` (nová karta) — doteraz mŕtva kotva `#podmienky`.

3. **„Objednať preukaz"** → nechávam `https://objednaj-preukaz.sk` (váš eshop), len pridám `target="_blank" rel="noopener noreferrer"`.

## Bez zmeny

Hero CTA, segmentové karty, „Ako prejsť", kalkulačka, footer linky — všetky fungujú správne.

## Overenie

Po úprave skontrolujem v prehliadači, že každé tlačidlo vedie na správny cieľ.
