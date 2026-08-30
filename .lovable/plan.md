# Finálna úprava log ISIC / ITIC / European Youth Card

## Cieľ
Logá na stránke majú vyzerať presne ako na referenčnom screenshote: biele zaoblené "pilulky" bez čierneho orámovania a bez tvrdého tieňa, všetky vizuálne rovnako vysoké, s European Youth Card širším, aby sa opticky vyrovnalo ISIC a ITIC logu.

## Aktuálny stav (overené v kóde)
`src/components/BrandMark.tsx` dnes používa:
- rámik `h-16 w-28` pre všetky tri logá rovnako
- variant `card`: `border-2 border-foreground` (čierny rámček) + tvrdý tieň `8px 8px 0 #40B8B8`
- EYC má len `px-0 py-2`, takže pôsobí menšie než ISIC/ITIC

Použitie: `src/routes/index.tsx` — hero (riadok log), kartičky preukazov (riadok 586), footer (variant `onDark`).

## Zmeny

### 1. `src/components/BrandMark.tsx`
- Odstrániť čierny border aj tvrdý teal tieň z variantu `card` → čistá biela karta `rounded-2xl bg-white` s jemným mäkkým tieňom (bez orámovania).
- Zaviesť per-brand šírku rámu: ISIC a ITIC ostanú `w-28`, EYC dostane širší rám (napr. `w-40`), aby bolo opticky rovnako veľké.
- Výška zostáva jednotná `h-16` (mobil `h-14`).
- Padding: ISIC/ITIC `p-2.5`, EYC `px-3 py-2` (logo je horizontálne, potrebuje dýchať do strán).
- Variant `onDark` zjednotiť na rovnaký vzhľad (biela pilulka, bez rámu).
- Poradie ostáva: ISIC → ITIC → European Youth Card, `gap-4`.

### 2. `src/routes/index.tsx`
- Žiadne štrukturálne zmeny — komponent sa používa už všade (hero, kartičky, footer), takže sa zmena prejaví automaticky. Overiť, že na kartičkách preukazov sa používa správny variant.

### 3. Aktualizovaný "prompt" (štýlový manuál pre logá)
Aktualizovať text manuálu, ktorý si poslala, tak aby zodpovedal finálu — uložiť ho ako dokument, aby si ho mohla znovu použiť. Nové pravidlá:
1. Komponent BrandMark: biely rámik, výška 64px (mobil 56px), `object-contain`.
2. Šírka podľa loga: ISIC/ITIC 112px, European Youth Card 160px (horizontálny wordmark).
3. Vzhľad: `rounded-2xl`, biely podklad, bez orámovania, jemný mäkký tieň. Na tmavom podklade rovnaká biela pilulka.
4. Padding: ISIC/ITIC 10px, EYC 8px vertikálne / 12px horizontálne.
5. Poradie ISIC → ITIC → European Youth Card, medzery 16px, alt texty zachované.

## Overenie
- `bunx tsc --noEmit`
- Screenshot hero sekcie a footra cez Playwright — porovnať s referenciou (bez čierneho rámu, EYC vizuálne vyrovnané).
