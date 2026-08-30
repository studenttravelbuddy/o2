# Zapracovanie nových komentárov + spresnenie overovania preukazu

Ide výhradne o textové úpravy. Dizajn, farby ani layout sa nemenia.

## 1. Overovanie: priezvisko + číslo preukazu dieťaťa (e-mail M. Rancovej)

Na dvoch miestach je dnes uvedené len „číslo preukazu dieťaťa", čo nezodpovedá štandardnému overovaniu.

- Sekcia Maxx (podmienka, `src/routes/index.tsx`): „Rodič môže kúpiť na svoje meno so zadaním čísla preukazu dieťaťa." → **„Rodič môže paušál kúpiť na svoje meno; pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu."**
- FAQ „Kto si môže aktivovať paušál so 100 GB?": rovnaká formulácia — **„…pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu."**

## 2. FAQ „Môžem mať viac paušálov so zľavou?" (vlákno 4cf2d355)

Nová odpoveď podľa komentára: **„Jedna osoba môže mať jeden produkt so zľavou na jeden preukaz. Rodič môže aktivovať toľko programov, koľko má detí — pri aktivácii každého programu však treba použiť priezvisko a platný preukaz daného dieťaťa, pre ktoré program aktivuje."**

## 3. FAQ „Bonus na zariadenie" (vlákno 7d1c82f3)

- Otázka: **„Ako funguje bonus na zariadenie s preukazom?"**
- Odpoveď: mesačný príspevok na zariadenie, ktorý sa uplatní po overení preukazu a odčíta sa priamo z faktúry.
- Otvorené: ak máme finálnu výšku bonusu / zoznam zariadení od O2, doplním konkrétne čísla — inak necháme všeobecnú formuláciu.

## 4. Hero podtitul (vlákno 7d9f8fd8)

Hero podtitul a meta description zostávajú v aktuálnom znení (nezmenené).

## 5. Sekcia „Nová spolupráca" (vlákna 2a4bfb5d, 2296df1d)

- Nadpis „Čo to znamená pre tvoj preukaz" → **„Čo to znamená pre Teba?"**
- Karta 02 „Nové výhody" → podtext **„Väčšia flexibilita, väčší výber a digitálny obsah v cene."**

## 6. Sekcia výhod preukazu — priame oslovenie (vlákna 26f6d3b8, b680e45d, 571df4b1, 65ab0217)

Prepíšem karty do 2. osoby podľa komentárov:

- Denné zľavy → **„Po ruke každý deň v roku. Šetri denne a za rok môžeš ušetriť stovky eur."**
- Doprava a cestovanie → **„Využívaj výhody v doprave a pri cestovaní doma a v zahraničí, kdekoľvek, kde platí tvoj preukaz."**
- Technológie a voľný čas → **„Využívaj dostupnejšie dáta, stream a zariadenia pre uľahčenie tvojho štúdia a tvoju zábavu."**
- Posledná karta („Smart value") → nadpis **„Jeden preukaz, tisíce využití"**, text **„Potvrdenie štatútu, doprava, tisíce zliav doma aj v zahraničí. Na všetko stačí jeden preukaz — a to aj len v mobile."**
- Ostatné karty (Škola a identita, Komunita) zjednotím do rovnakého priameho oslovenia.

## Technické detaily

- Súbory: `src/routes/index.tsx` (hero + meta, sekcia „Nová spolupráca", `whyCards`, podmienka Maxx), `src/components/CampaignFaq.tsx` (3 odpovede).
- Po implementácii odpoviem do každého z 9 vlákien (7d1c82f3, 4cf2d355, 571df4b1, b680e45d, 26f6d3b8, 65ab0217, 7d9f8fd8, 2296df1d, 2a4bfb5d), čo bolo zapracované; vlákna nezatváram.
- Staršie vlákna od Michala Bucka sú už zapracované — nechávam bez zmeny.
- FAQ sa podľa zadania ešte dolaďujú, takže texty budú ľahko upraviteľné na jednom mieste (`groups` v `CampaignFaq.tsx`).
