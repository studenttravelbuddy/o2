# Zapracovanie komentárov z preview (10 vlákien, Michal Bucko)

Komentáre sa týkajú výlučne textov a logiky obsahu — dizajn sa nemení.

## 1. Paušály nie sú viazané na cieľové skupiny (hero + celá stránka)

Komentár: „paušály od O2 nebudeme komunikovať tak, že každý je určený pre inú cieľovú skupinu… potrebujeme osloviť všetkých a dať vedieť, že máme niečo pre každého."

- Do hero podtitulu pridať vetu v zmysle: **„Všetky paušály sú dostupné každému držiteľovi platného preukazu — vyber si to, čo ti najviac vyhovuje."**
- Sekcia „Kto si?" ostáva ako navigačný vstup. Karty budú odkazovať na všetky dostupné paušály v opačnom poradí podľa preukazu:
  - **ISIC / študent**: najprv **Maxx – 100 GB**, potom **Paušály so zľavou**.
  - **ITIC / učiteľ**: najprv **Paušály so zľavou**, potom **Maxx – 100 GB**.
  - **EURO<26 / rodič**: posledná karta sa premenuje na **„Junior pre najmenších"**.

## 2. Karta „Je to benefit" (sekcia Nová spolupráca)

Komentár: „voľba operátora už nie je na držiteľovi, od 1/9/26 má k dispozícii paušály na preukaz len v O2."

- Preformulujem text karty 03: „Benefit, nie povinnosť. Ak chceš paušál s výhodami na svoj preukaz, od 1. 9. 2026 ho získaš u O2."
- *(Pozn.: nahrádza tým skoršiu editáciu „Voľba operátora je vždy na tebe…" — prosím o potvrdenie, že takto je to správne.)*

## 3. „Slovenský preukaz" → „preukaz vydaný na Slovensku" (2 komentáre)

- V `#maxx` podmienke: „platný slovenský preukaz ISIC / ITIC / EURO<26" → **„platný preukaz ISIC / ITIC / EURO<26 vydaný na Slovensku"**.
- Vo FAQ (otázka „Kto si môže aktivovať paušál so 100 GB?"): „platných slovenských preukazov" → **„platných preukazov vydaných na Slovensku"**.
- Prejdem celú stránku a FAQ, či sa „slovenský preukaz" nevyskytuje inde.

## 4. Vykúpenie z viazanosti platí pri každom paušále

- Ružový banner „Viazanosť? …" rozšírim o explicitné **„platí pri každom paušále"** a opravím preklep „02" → „O2". Banner presuniem hneď pod mriežku paušálov (už tam je), text upravím tak, aby bolo jasné, že sa vzťahuje na všetky tri paušály aj Maxx.

## 5. „Plný úväzok" → „hlavný pracovný pomer"

- ITIC karta v `#preukazy`: „Pedagogický zamestnanec na plný úväzok" → **„Pedagogický zamestnanec v hlavnom pracovnom pomere"**.
- Prehľadám celý web (aj FAQ), či sa „plný úväzok / plný paušál" nevyskytuje inde a zjednotím terminológiu na „hlavný".

## 6. Kalkulačka úspory — upraviť výpočet

- Používateľ zadá **svoju aktuálnu mesačnú cenu paušálu**.
- Kalkulačka porovná túto sumu s **18 €/mesiac** a vypočíta ročnú úsporu: **(moja cena − 18 €) × 12 mesiacov**.
- Pod výsledkom doplníme vysvetlenie: **„Porovnávame tvoju aktuálnu mesačnú platbu s paušálom za 18 €/mesiac. Výsledok je orientačný a nezahŕňa rozdiely v objeme služieb."**

## 7. FAQ „Musím prejsť k novému operátorovi?"

- Odpoveď nahradím: **„Ak chceš využívať nový paušál na svoj preukaz, tak áno. Do O2 potrebuješ prejsť najneskôr na konci platnosti svojho súčasného paušálu. Viac info…"** (link „Viac info" zatiaľ placeholder na `#podmienky`).

## 8. FAQ — premenovanie skupín podľa plných názvov paušálov

Komentár: delenie „100 GB pre študentov / Paušály zľavy / Junior pre rodičov" je nejasné; použiť vždy plné pomenovanie bez prívlastkov, komu sú určené.

- Skupiny FAQ premenujem: „100 GB pre študentov" → **„Maxx — 100 GB"**, „Paušály a zľavy" → **„Paušály so zľavou"** (názvy podľa produktov), „Junior pre rodičov" → **„Junior"**.
- Z textov odpovedí odstránim prívlastky typu „pre študentov / pre rodičov" tam, kde naznačujú, že produkt je len pre jednu skupinu.

## Technické detaily

- Súbory: `src/routes/index.tsx` (body, hero, maxx, pausaly, preukazy), `src/components/CampaignFaq.tsx` (skupiny + odpovede), `src/components/SavingsCalculator.tsx` (poznámka k výpočtu).
- Žiadne zmeny dizajnu, farieb ani layoutu.
- Po implementácii odpoviem do každého z 10 vlákien, čo bolo zapracované.
- Otvorené body na potvrdenie: karta „Je to benefit" (bod 2) a či výpočet kalkulačky ponechať s vysvetlením alebo kalkulačku zrušiť (bod 7).
