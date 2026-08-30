# Prelinkovanie tlačidiel — audit a návrh

## Čo funguje (netreba meniť)

- Hero: „Objaviť výhody" → `#maxx`, „Na ktorý preukaz mám nárok?" → `#preukazy` ✓
- Segmentové karty (Študent / Pedagóg / Rodič / EURO<26) → kotvy `#maxx`, `#pausaly`, `#junior` + šípky → `#kalkulacka` ✓
- „Ako prejsť" → `#prechod` ✓
- Kalkulačka „Poďme na to ->" → interaktívne otvorenie výsledku (nie je link, je to správne) ✓
- Footer linky na isic.sk / itic.sk / euro26.sk ✓

## Problémy a návrh

### 1. Hlavné CTA tlačidlá vedú len na kotvu `#maxx` (najdôležitejšie)

`OFFER_LINK = "#maxx"` — teda tieto nákupné CTA len poscrollujú stránku namiesto toho, aby viedli k operátorovi:

- „Chcem 100 GB" (sekcia Maxx)
- „Vybrať Základný / Pohodový / Bezstarostný" (3 karty paušálov)
- „Zistiť viac" (Junior)
- „Preniesť si číslo" (kroky prechodu)

**Návrh:** zmeniť `OFFER_LINK` na `https://www.o2.sk` (otváranie v novej karte). Ak máme presnejšie URL z O2 (napr. produktovú stránku Maxx alebo eshop), doplním tie — stačí poslať odkazy. Pre „Preniesť si číslo" ideálne priamy link na prenos čísla u O2, ak existuje; inak tiež www.o2.sk.

### 2. „Pozrieť podmienky" → `#podmienky` — neexistujúca kotva (mŕtvy link)

Sekcia s id `podmienky` na stránke nie je, link neurobí nič.

**Návrh:** buď
- a) odkázať na podmienky na `https://www.o2.sk` (nová karta), alebo
- b) zmeniť kotvu na `#faq`, kde sú podmienky popísané.

Odporúčam (a), pretože zmluvné podmienky žijú u O2.

### 3. „Objednať preukaz" → `https://objednaj-preukaz.sk` — neexistujúca doména (placeholder)

**Návrh:** nahradiť skutočným eshopom — `https://isic.sk` (príp. konkrétna objednávková podstránka, ak mi pošleš presné URL). Rovnaký link už používame vo FAQ.

## Technické detaily

- Súbor: `src/routes/index.tsx` — zmena konštanty `OFFER_LINK`, dvoch liniek v sekcii „preukazy".
- Externé linky dostanú `target="_blank" rel="noopener noreferrer"`.
- Interné kotvy ostanú ako sú.
- Po úprave overím v prehliadači, že každé tlačidlo niekam vedie.
