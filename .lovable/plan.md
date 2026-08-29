# Preukazy do samostatných blokov + správne rozlíšenie „kto hovorí“

Dve úpravy: (1) ISIC, ITIC a EURO<26 dostanú každý svoj samostatný blok s logom namiesto troch malých kariet v jednej mriežke, (2) celý text sa prejde tak, aby sme ako CKM SYTS hovorili len za seba a všetko, čo robí operátor, bolo napísané v tretej osobe (operátor / O2).

## 1. Preukazy — samostatné bloky

Sekcia „Na ktorý preukaz máš nárok?“ sa rozdelí na tri plnošírkové bloky, ktoré idú pod sebou a striedajú plochu (biela → svetlá teal → biela). Každý blok:

- veľké logo preukazu vľavo (ISIC / ITIC / EURO<26), text vpravo — na mobile pod sebou
- eyebrow s číslom `01 / 02 / 03` v akcentnej farbe preukazu (teal / oranžová / ružová)
- nadpis (komu je určený), kto má nárok, čo z kampane preukaz odomyká
- odkaz „Objednať preukaz“ / „Overiť platnosť“ v rámci bloku
- rovnaké vizuálne pravidlá ako zvyšok webu: `border-2 border-foreground`, tvrdý tieň v akcentnej farbe

Logá tak dostanú priestor a nebudú stlačené v 9px riadku vedľa čísla.

## 2. Kto čo hovorí (tón a osoba)

Pravidlo pre celý web:

- **My = CKM SYTS** (vydávame preukazy, dohodli sme spoluprácu, informujeme, poradíme). Len tu môže byť „my / prinášame / poradíme“.
- **Operátor = O2** — všetko o paušáloch, aktivácii, SIM karte, prenose čísla, fakturácii, SMS notifikáciách, cashbacku, vykúpení z viazanosti sa píše ako „operátor“ / „O2“ v tretej osobe, nikdy „my“.

Konkrétne opravy:

| Teraz | Zmena |
| --- | --- |
| „O úspešnom prenose ťa informujeme SMS správou.“ | „O úspešnom prenose ťa operátor informuje SMS správou.“ |
| „Ak preukaz stratí platnosť, upozorníme ťa…“ | „…operátor ťa upozorní…“ |
| „Pri najvyššom paušále ti vrátime 5 €…“ | „…operátor ti vráti 5 €…“ |
| „Ak si viazaný zmluvou, vykúpime ťa…“ | „…operátor ťa vykúpi z viazanosti…“ |
| Hero: „prinášame držiteľom… viac dát“ | „S novým operátorom získavajú držitelia… viac dát“ (benefit dodáva operátor, my ho vyjednávame) |
| Kroky prechodu: „vyplň údaje / doručíme SIM“ | jednotne v tretej osobe za operátora |
| Pätička / kontakt: „Napíšte nám a pomôžeme…“ | zostáva „my“ — je to naša podpora, správne |

Prejdem takto celý `index.tsx` a `CampaignFaq.tsx` riadok po riadku, vrátane sekcií 100 GB, ITIC paušálov a Junior — všade, kde ide o produkt operátora, sa použije „operátor / O2“, a kde ide o preukaz a členstvo, zostávame „my“.

Otázky a odpovede zostávajú v rovnakej štruktúre a rozsahu, mení sa len subjekt vo vetách.

## Technické detaily

- `src/routes/index.tsx`: prepis sekcie `#preukazy` z 3-kartovej mriežky na tri samostatné `<section>` bloky s logom v `h-16`–`h-20`; úprava `steps` a copy v hero, 100 GB, ITIC, Junior.
- `src/components/CampaignFaq.tsx`: úprava odpovedí, kde bolo „my“ namiesto operátora.
- Žiadne nové farby ani tokeny — používajú sa existujúce `card-isic / card-itic / card-euro26`, `shadow-hard-*` a `brand-*`.
