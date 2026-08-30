# Zjednotenie cien a kontrola konzistentnosti

## Čo som našla pri kontrole

- `src/routes/index.tsx` — karty paušálov už majú správne: Základný 18 € (pôvodne 22 €), Pohodový 28 € (pôvodne 33 €), Bezstarostný 38 € (pôvodne 44 €). Hodnota „33 €“ tu zostáva len ako **preškrtnutá pôvodná cena Pohodového paušálu**, čo je správne — nemení sa.
- `src/components/SavingsCalculator.tsx` — kalkulačka má pri paušále „Bezstarostný“ stále `price: 33`. To je jediná zlá hodnota v projekte a kalkulačka preto počíta nesprávnu úsporu.
- Text „Je to benefit“ sa v projekte už nikde nenachádza (nahradený „Nový školský rok“).

## Čo upravím

1. `SavingsCalculator.tsx`: Bezstarostný `price: 33` → `38`, aby kalkulačka aj ročná úspora zodpovedali cenníku na stránke.
2. Doplním do kalkulačky rovnaké údaje ako na kartách, aby si nič neprotirečilo (Základný 18, Pohodový 28, Bezstarostný 38, Junior 10,25, Maxx 20).

## Automatická kontrola proti návratu starých hodnôt

Pridám jednoduchý test (`src/__tests__/content-guard.test.ts`), ktorý pri každom spustení testov prehľadá zdrojové súbory a zlyhá, ak:

- sa v kalkulačke alebo v cenách paušálov objaví hodnota 33 pri Bezstarostnom paušále,
- sa niekde vyskytne text „Je to benefit“,
- cena Bezstarostného paušálu v `index.tsx` a v `SavingsCalculator.tsx` nie je rovnaká (kontrola konzistencie, nie len fixný reťazec).

Test necháva legitímne „33 €“ ako preškrtnutú pôvodnú cenu Pohodového paušálu nedotknuté.

## Kontrola sekcií — čo som overila a čo si neprotirečí

- Dátum spustenia je všade rovnaký: 1. 9. 2026 (hero, „Nový školský rok“, FAQ, pata stránky).
- Maxx: 100 GB / 20 € — rovnako v sekcii Maxx aj vo FAQ; prenos dát a spomalenie po prečerpaní sú opísané zhodne.
- Junior: 10,25 €, 10 GB namiesto 4 GB, 5 voľných čísel namiesto 3 — zhodné v sekcii aj FAQ.
- Vykúpenie z viazanosti do 120 € a cashback 5 € (do 15 GB) — zhodné v sekcii, kalkulačke aj FAQ.
- Roly hovoriaceho: benefity a podmienky pripisované O2, informovanie a preukazy CKM SYTS — zachované.
- Odkazy: CTA vedú na www.o2.sk, objednávka preukazu na www.objednaj-preukaz.sk. Zastarané komentáre `TODO: nahradiť finálnym odkazom na isic.sk/ponuka` (7 miest) odstránim, keďže odkazy sú už finálne.

## Technické detaily

Zmeny: `src/components/SavingsCalculator.tsx` (cena + zjednotenie údajov), nový testovací súbor s kontrolou obsahu, odstránenie neaktuálnych TODO komentárov v `src/routes/index.tsx` a `src/components/CampaignFaq.tsx`. Projekt nemá databázu — ceny sú konštanty v kóde, takže úprava kódu je „úprava v báze“.
