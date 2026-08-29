# Ready for more? — prebrandovanie stránky na naše farby

Stránka prestane vyzerať ako O2 web. Bude to náš kampaňový web (CKM SYTS / ISIC · ITIC · EURO<26), ktorý **informuje o novej spolupráci s operátorom**. O2 zostane len ako partner v endorsement bloku, nie ako vizuálny majiteľ stránky.

## Farebnosť a typografia (podľa priloženého PDF)

Nová paleta z ISIC / ITIC / EYCA brand manuálu:

- **ISIC Green `#40B8B8`** — hlavná farba (primary), CTA, akcenty
- **Shadow Green `#006666`** — tmavý odtieň, hero gradient, hover stavy
- **Highlight `#D9F1F1`** — svetlé plochy sekcií, karty, chips
- **Accent Yellow `#FEEF00`** — hravé zvýraznenia, badge „Najobľúbenejší“, podčiarknutia
- **ITIC Orange `#FF7314`** (+ `#B41E00`) — sekcia pre pedagógov / ITIC
- **EYCA Yellow `#FFC805`** + **Pink `#EB0578`** — sekcia EURO<26
- **Dark Grey `#666666`**, biela, čierna — text a plochy

Fonty: **Roboto Slab Bold** pre nadpisy, **Roboto** pre text (namiesto Outfit/Figtree).

Segmentová logika farieb: študent = ISIC zelená, pedagóg = ITIC oranžová, mladý do 26 = EYCA žltá/ružová. Vďaka tomu je stránka hravá a jednoznačne naša.

## Titulka (hero)

- Veľký claim **„Ready for more?“**
- Podtitul: tento rok štartujeme kampaň vo veľkom — s novým operátorom a novými výhodami pre držiteľov ISIC, ITIC a EURO<26, od 1. 9. 2026.
- **Orange sa v titulke nespomína vôbec.**
- Kampaňový banner/vizuál, dátumový chip (1. 9. 2026 – …), primárne CTA „Objaviť výhody“.
- Hravé prvky: farebné bubliny/tvary v ISIC zelenej a žltej namiesto O2 modrých bublín.

## Štruktúra a štýl sekcií (podľa referenčného webu)

Rovnaký rytmus ako náš ambasádorský web: malý farebný „eyebrow“ nadpis → veľký nadpis → obsah.

1. **Hero** — Ready for more? + segmentové dlaždice (Študent / Rodič / Pedagóg / EURO<26)
2. **Nová spolupráca** — čo to znamená pre držiteľov preukazu, 3 uisťovacie karty (preukaz platí ďalej, benefit je dobrovoľný, viac dát a obsahu)
3. **Hlavná ponuka — 100 GB na Maxx** — číslované/kartové zvýraznenie hodnoty, cena, podmienky
4. **Paušály so zľavou (ITIC)** — tri karty v ITIC oranžovej vetve
5. **Junior pre rodičov** — v ISIC zelenej vetve
6. **Prečo mať ISIC / ITIC / EURO<26** — hravá mriežka benefitov s rotujúcimi akcentmi
7. **KROK 01–08: Ako prejsť k novému operátorovi** — stepper v štýle referenčného webu
8. **Kalkulačka úspory** — prebrandovaná do zelenej
9. **FAQ „Pýtaš sa? Odpovedáme.“** — Orange/Yoxo otázky zostávajú len tu
10. **Footer** — naše wordmarky + diskrétny blok „Spolu s O2“ podľa endorsement pravidiel

## Technické detaily

- `src/styles.css`: nové tokeny v oklch (primary = ISIC green, primary-deep = shadow green, highlight, accent-yellow, brand-itic, brand-eyca-pink), nový `--gradient-hero` (shadow green → ISIC green), bubble utilita v zelenej/žltej, radius zvýšený pre hravejší vzhľad.
- `src/routes__root.tsx`: nahradiť Google Fonts link za Roboto + Roboto Slab; upraviť title/description na kampaňové znenie bez „O2 ×“ na začiatku.
- `src/components/ui/button.tsx`: existujúce varianty (`brand`, `onBlue`, `yellow`, `softOutline`) prefarbiť na nové tokeny, `onBlue` premenovať na `onBrand`.
- `src/routes/index.tsx`: prepísať hero copy na „Ready for more?“, odstrániť Orange zo všetkých sekcií okrem FAQ, pridať farebné vetvenie segmentov, stepper prerobiť do štýlu KROK 01/02/03.
- `src/components/O2Faq.tsx` → `src/components/CampaignFaq.tsx`, `SavingsCalculator` prefarbiť.
- O2 logo zostáva len v endorsement komponente (hlavička + footer + karta ponuky), v malej veľkosti podľa brand guideline.
- Nahrané logá (ISIC, ITIC, EYCA/EURO<26) nasadím ako CDN assety a použijem v hlavičke, v segmentových dlaždiciach a v sekcii „Na ktorý preukaz máš nárok“. Favicon nastavím z ISIC loga.
