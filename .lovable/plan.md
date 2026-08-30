# Prehľad komentárov: čo je hotové a čo ešte chýba

Otvorených je 19 vlákien (10 Michal Bucko, 9 Alexandra). Do každého sme už odpovedali, ale žiadne nie je zatvorené. Väčšina je zapracovaná — nižšie je zoznam toho, čo reálne ešte v kóde chýba.

## Ešte NIE je zapracované

### 1. FAQ „Musím prejsť k novému operátorovi?" (vlákno 5fd83ae8)
Dnes: „Ak chceš využívať nový paušál na svoj preukaz, tak áno."
Komentár žiadal doplniť termín. Doplníme: **„Ak chceš využívať nový paušál na svoj preukaz, tak áno. Do O2 potrebuješ prejsť najneskôr na konci platnosti svojho súčasného paušálu."**

### 2. Bonus pri viazanosti priamo v sekcii Maxx (vlákno 4c6475ff)
Vykúpenie z viazanosti je dnes len v ružovom páse pod paušálmi. Do sekcie `#maxx` doplníme jednu vetu k benefitom: **„Ak máš u pôvodného operátora viazanosť, O2 ťa z nej vykúpi až do 120 €."**

### 3. Kalkulačka — vysvetlenie výpočtu (vlákno 1299a1e0)
Komentár: „ak je ten výpočet správny, treba do poznámky uviesť, ako sme k tomu došli."
Dnes je pod výpočtom len odkaz na o2.sk. Doplníme jednu vetu so vzorcom: **„Výpočet: (tvoja súčasná mesačná cena − cena vybraného paušálu) × 12 mesiacov."** a ponecháme existujúci odkaz na www.o2.sk.

## Čaká na podklady od O2 / rozhodnutie CKM

### 4. Bonus na zariadenie — konkrétne čísla (vlákno 7d1c82f3)
Odpoveď je zatiaľ všeobecná (mesačný príspevok, odčíta sa z faktúry). Akonáhle bude známa výška bonusu a zoznam zariadení, doplníme ich.

### 5. „Plný úväzok" → „hlavný pracovný pomer" mimo tohto webu (vlákno 8082b5df)
Na tejto stránke je to zmenené. Komentár sa pýtal aj na ostatné weby CKM — to je mimo tohto projektu, treba riešiť samostatne.

### 6. Hero podtitul (vlákno 7d9f8fd8)
Alexandra poslala návrh nového znenia, následne prišiel pokyn text nemeniť. Zostáva v aktuálnom znení — ak sa má predsa upraviť, stačí povedať.

## Už zapracované (žiadna akcia)
- Paušály nie sú viazané na cieľové skupiny, sekcia „Kto si?" má 4 karty s odkazmi na všetky produkty (8e3b899f)
- Karta „Je to benefit" → od 1. 9. 2026 len v O2 (46b24874)
- „Slovenský preukaz" → „preukaz vydaný na Slovensku" na stránke aj vo FAQ (3a71303c, 9a1111fa)
- Vykúpenie z viazanosti platí pri každom paušále (d2445b19)
- Premenovanie FAQ skupín na plné názvy produktov (ea97e9a9)
- Overovanie: priezvisko dieťaťa + číslo preukazu (e-mail M. Rancovej, 4cf2d355)
- Karty výhod preukazu prepísané do priameho oslovenia (26f6d3b8, b680e45d, 571df4b1, 65ab0217)
- „Čo to znamená pre Teba?" + karta 02 (2a4bfb5d, 2296df1d)

## Technické detaily
- `src/components/CampaignFaq.tsx`: odpoveď na „Musím prejsť k novému operátorovi?"
- `src/routes/index.tsx`: benefit navyše v sekcii `#maxx`
- `src/components/SavingsCalculator.tsx`: poznámka so vzorcom výpočtu
- Po implementácii odpoviem do dotknutých vlákien; zatvorenie vlákien urobím len na výslovný pokyn.
