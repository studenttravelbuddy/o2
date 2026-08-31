# Zapracovanie komentárov k webu a FAQ (31. 8.)

## 1. Názvy tarifov — všade s „O2“

Sekcie, karty, segmentové odkazy aj nadpisy FAQ:

- „Maxx – 100 GB“ → **O2 Maxx**, „100 GB dát na Maxx“ → „100 GB dát na O2 Maxx“
- „Junior…“ → **O2 Junior**
- „Paušály so zľavou“ → **O2 Paušály**
- FAQ skupiny: „Maxx — 100 GB“ → „O2 Maxx“, „Paušály so zľavou“ → „O2 Paušály“, „Junior“ → „O2 Junior“
- Rovnako v kalkulačke úspor.

## 2. Prelinkovanie (podľa FAQ dokumentu)

| Miesto | Nový odkaz |
| --- | --- |
| 4 segmentové karty („Ktorý paušál je pre teba?“) – všetky prekliky | `o2.sk/ponuka/mobilne-sluzby/o2-maxx` |
| „Chcem 100 GB“ (O2 Maxx) | `o2.sk/ponuka/mobilne-sluzby/o2-maxx` |
| „Zistiť viac“ (O2 Junior) + fialový/teal button | `o2.sk/ponuka/mobilne-sluzby/o2-junior` |
| Buttony Základný / Pohodový / Bezstarostný | `o2.sk/mobilne-sluzby/o2-pausal-preukaz` |
| Vizuál v sekcii „Prečo mať preukaz“ (obrázok so „Zistiť viac“) | obrázok sa stane klikateľným → `o2.sk/ponuka/mobilne-sluzby/o2-maxx` |

Všetky v novej karte (`target="_blank"`).

## 3. Sekcia O2 Maxx

- Vľavo hore: „100 GB dát v 5G sieti každý mesiac“
- Bod 3: predplatné „…meniteľné každých 30 dní v O2 Aplikácii“
- Podmienka: „Držiteľ preukazu si paušál môže aktivovať sám od veku 18 rokov.“ (ďalej text o zákonnom zástupcovi zostáva)

## 4. Sekcia O2 Paušály

- Bezstarostný: cena **38 €** (aj v kalkulačke)
- Bonus na zariadenie doplniť sumy: Základný **48 €**, Pohodový **96 €**, Bezstarostný **168 €**
- Bezstarostný: „1 SIM navyše zdarma“ → „1 O2 Connect SIM v cene“
- Bezstarostný: „1 predplatné v cene (Netflix, Voyo…)“
- Pohodový: „1 predplatné v cene (Voyo, HBO Max…)“
- Farba karty Bezstarostný: oranžová → **teal** (aby neevokovala Orange); zvýraznenie „Najobľúbenejší“ zostáva žlté

## 5. Banner o vykúpení z viazanosti

„…až do 120 € — platí pre Bezstarostný, Pohodový a Základný O2 Paušál.“

## 6. Sekcia O2 Junior

- K bodu 3 pridať: „O2 Security v cene“
- Button „Zistiť viac“ → odkaz na o2-junior (viď tabuľka)

## 7. Kalkulačka úspor — odstrániť

Celá sekcia kalkulačky sa zo stránky vypustí (komponent prestane byť použitý, odkazy `#kalkulacka` v segmentových kartách sa presmerujú na `#maxx`).

## 8. FAQ podľa nového dokumentu (edit 31. 8.)

- Q5 „Kde si môžem novú ponuku pozrieť?“ → odpoveď so zoznamom troch odkazov (O2 Maxx, O2 Junior, zvýhodnené O2 Paušály).
- Q6 nadpis: „Mám paušál Yoxo. Čo sa s ním stane?“
- Q6 a Q8: odkaz na konci zmeniť na `o2.sk/ponuka/mobilne-sluzby/o2-maxx`.
- Q9: znenie „Vďaka tomu, že S O2 sme sa dohodli…“ presne podľa dokumentu.
- Interná odpoveď pre klientsky servis sa na web nedáva.

## 9. O2 logo a logo EURO<26

- Nahradím rozrastrované O2 logo novým dodaným súborom `O2_Logo_Full_RGB_White.jpg` (biele O2 na modrom podklade) — v hlavičke aj pri „Spolu s“ endorsementoch.
- Logo EURO<26 bez bieleho pozadia: v projekte máme SVG `eyc-logos-rbg_primary` (European Youth Card, bez dovetku) — pripravím ho na stiahnutie ako PNG s priehľadným pozadím aj SVG.


## Technické detaily

Zmeny v `src/routes/index.tsx` (texty, ceny, farby, odkazy, odstránenie kalkulačky), `src/components/CampaignFaq.tsx` (FAQ), `src/components/SavingsCalculator.tsx` (cena 38 € — komponent zostane v projekte, len sa nezobrazuje) a `scripts/content-guard.mjs` (kontrola cien). Po úprave prekontrolujem stránku v prehliadači, či všetky buttony vedú na správne O2 URL.
