# Mobile-first optimalizácia pre Gen Z

Cieľ: stránka má na mobile pôsobiť ako natívna appka – rýchla, palcom ovládateľná, hravá, so silnými vizuálmi a krátkym textom.

## 1. Mobilná navigácia a konverzia
- Fixná spodná lišta (sticky bottom bar) na mobile s hlavným CTA "Pozri ponuku O2" + druhé tlačidlo "Objednať preukaz". Vždy na dosah palca.
- Hore kompaktný sticky header s logom a jedným CTA; skryje sa pri scrollovaní dole, objaví pri scrollovaní hore.
- Rýchle "chip" odkazy pod hero (O2 Maxx · Paušály · Junior · FAQ) pre skok na sekcie.

## 2. Hero pre malé displeje
- Výška hero na `min-h-[100svh]` namiesto fixných 720px (žiadne odseknutie na iPhone).
- Menšie kroky typografie: `text-4xl` na 393px, plynulé zväčšovanie po `sm/lg`.
- Dekoratívne kruhy zmenšiť a posunúť, aby nezasahovali do textu.
- CTA tlačidlá na mobile na celú šírku, min. výška 48px.

## 3. Karty a bloky
- Paušály: horizontálny snap-scroll carousel na mobile (swipe), grid od `sm:` vyššie. Vedľa seba vidno "peek" ďalšej karty, aby bolo jasné, že sa dá swipovať.
- Preukazy (ISIC/ITIC/EURO<26): logá a text vždy v `grid-cols-[minmax(0,1fr)_auto]` s `min-w-0` a `truncate`, aby sa nič neroztrhlo.
- Hover efekty (rotácia, translate) vypnuté na touch zariadeniach, nahradené `active:scale-[0.98]` odozvou na dotyk.
- Zmenšiť vertikálne odsadenia sekcií na mobile (py-12 namiesto py-20/28), aby sa stránka nescrolovala nekonečne.

## 4. Gen Z tón a skenovateľnosť
- Dlhé odstavce rozdeliť na krátke riadky a bullet listy s max. ~12 slov.
- Kľúčové čísla (100 GB, 20 €, 48 €/96 €/168 €) vizuálne ako veľké "štítky", nie v texte.
- FAQ: na mobile zbalené accordiony, väčšie klikacie hlavičky (min. 48px), zvýraznené odkazy.

## 5. Výkon a technika
- Bannery: `loading="lazy"`, `decoding="async"`, explicitné `width/height` proti CLS; hero vizuál `fetchpriority="high"`.
- `prefers-reduced-motion` respekt pri animáciách.
- Kontrola kontrastu (žltá/teal text) na AA úrovni.
- Head metadata: doplniť `og:image`/`twitter:image` na absolútny URL kampaňového vizuálu, ak je dostupný.

## Technické detaily
- Zmeny prevažne v `src/routes/index.tsx`, `src/components/CampaignFaq.tsx`, `src/styles.css` (utility pre snap carousel, safe-area padding pre bottom bar: `pb-[env(safe-area-inset-bottom)]`).
- Nový komponent `src/components/MobileActionBar.tsx` a `src/components/SectionChips.tsx`.
- Verifikácia Playwrightom na 393x852 a 768px: screenshoty hero, paušálov, FAQ; kontrola, že nič nepreteká horizontálne (`scrollWidth === clientWidth`).
- Bez zmeny obsahových faktov (ceny, názvy O2, linky) – iba layout, tón formátovania a výkon.
