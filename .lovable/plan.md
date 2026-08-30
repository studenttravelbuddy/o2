# Plán úprav kalkulačky úspor

## Cieľ
Upraviť komponent `SavingsCalculator.tsx` tak, aby pri nulovej úspore zobrazil inú správu, rozšíril benefity každého paušálu a zjednodušil záverečnú poznámku.

## Úpravy

### 1. Správa pri nulovej úspore
- Ak `yearlySaving === 0` (resp. mesačná úspora je 0 €), nezobrazovať "Odhadovaná ročná úspora: 0 €".
- Namiesto toho zobraziť text:  
  **"Finančne to vychádza zhruba rovnako, ale pozri si skvelé benefity nižšie."**
- Ponechať výber paušálu a zoznam benefitov viditeľný.

### 2. Rozšírené benefity pre každý paušál
Doplniť zoznamy `benefits` v poli `plans` o všetky známe výhody, ktoré sú už uvedené na stránke alebo vyplývajú z popisov ponuky:

- **Maxx – 100 GB**
  - 100 GB dát v 5G plnou rýchlosťou
  - Nevyčerpané dáta sa prenášajú do ďalšieho mesiaca
  - Po prečerpaní pokračuješ spomalene bez doplatku
  - Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ
  - 1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.)
  - Predplatné meniteľné každých 30 dní
  - Bez viazanosti
  - Podmienka: platný preukaz ISIC/ITIC/EURO<26 vydaný na Slovensku, vek od 18 rokov

- **Základný**
  - 10 GB dát
  - 200 minút
  - Neobmedzené správy
  - Bonus na zariadenie
  - Zľava vďaka preukazu ISIC/ITIC/EURO<26
  - Vykúpenie z viazanosti u pôvodného operátora až do 120 €

- **Pohodový**
  - 15 GB dát
  - Neobmedzené volania a správy
  - Bonus na zariadenie
  - 1 predplatné v cene
  - Zľava vďaka preukazu ISIC/ITIC/EURO<26
  - Vykúpenie z viazanosti u pôvodného operátora až do 120 €

- **Bezstarostný**
  - Neobmedzené dáta, volania a správy
  - Cashback 5 € mesačne (do 15 GB dát)
  - Bonus na zariadenie
  - 1 predplatné v cene
  - 1 SIM navyše zdarma
  - Najobľúbenejší paušál
  - Zľava vďaka preukazu ISIC/ITIC/EURO<26
  - Vykúpenie z viazanosti u pôvodného operátora až do 120 €

- **Junior**
  - 10 GB dát s preukazom dieťaťa (namiesto 4 GB)
  - Donekonečna piatim: 5 voľných čísel s neobmedzeným volaním a SMS (namiesto 3)
  - Rodičovské limity na dáta aj volania
  - Platíš len skutočnú spotrebu
  - Podmienka: aspoň jeden aktívny hlavný paušál na rovnakom zákazníckom profile

### 3. Záverečná poznámka
- Nahradiť text:  
  `"Porovnanie je orientačné, nezahŕňa rozdiely v objeme služieb."`  
  novým textom:  
  **"Pre všetky detaily a zmluvné podmienky navštív www.o2.sk."**

## Technické detaily
- Súbor: `src/components/SavingsCalculator.tsx`
- Zmeny sú čisto prezentačné: upraviť podmienené vykresľovanie v šablóne a rozšíriť pole `benefits`.
- Žiadna zmena logiky výpočtu okrem podmienky pre nulovú úsporu.
