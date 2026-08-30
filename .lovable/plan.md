# Jednotná veľkosť log a bublín (ISIC / ITIC / EYCA)

## Problém
V `src/components/BrandMark.tsx` má dnes každé logo iný rám:
- ISIC `w-28`, padding `p-2.5`
- ITIC `w-28`, padding `p-2.5`
- European Youth Card `w-40`, padding `px-3 py-2`

Preto biele „bubliny" nie sú rovnako veľké.

## Zmena
1. Zrušiť per-brand šírku a padding — všetky tri logá dostanú identický rám:
   - rozmer `h-16 w-40` (mobil `h-14`), teda presne rovnaká biela bublina pre všetky
   - rovnaký padding `px-4 py-2.5` pre všetky
   - `object-contain`, takže každé logo sa proporčne vpíše do rovnakej bubliny
2. Vzhľad bubliny ostáva jednotný: `rounded-2xl`, biele pozadie, jemný mäkký tieň, bez orámovania — rovnako pre variant `card` aj `onDark`.
3. Poradie ISIC → ITIC → EYCA a `gap-4` v `BrandMarkRow` ostávajú bez zmeny.
4. Žiadne zmeny v `src/routes/index.tsx` nie sú potrebné — komponent sa používa v hero, kartičkách aj footri, takže sa zmena prejaví všade naraz.

## Overenie
Screenshot hero sekcie a footra — overiť, že všetky tri biele bubliny majú identickú šírku aj výšku.
