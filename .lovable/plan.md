# Kontrola voči o2.sk — nájdené chyby a ich oprava

Porovnala som našu stránku so tromi oficiálnymi stránkami O2 (O2 Maxx, O2 Junior, O2 Paušál s preukazom). Toto sú rozdiely, ktoré som našla.

## 1. Cena Bezstarostného paušálu (najdôležitejšie)

Na o2.sk je Bezstarostný O2 Paušál s preukazom za **33 €** (pôvodne 44 €). My uvádzame **38 €** — to je podľa staršej požiadavky, ale s O2 stránkou to nesúhlasí.

Opravím kartu na 33 € a upravím aj automatickú kontrolu obsahu, ktorá dnes vyžaduje 38 €. **Ak má napriek tomu platiť 38 €, napíš mi to a nechám 38 €.**

Ostatné ceny sú správne: Základný 22 → 18 €, Pohodový 33 → 28 €, O2 Maxx 20 €, O2 Junior 10,25 €.

## 2. Zlé odkazy na O2 Fér

O2 Fér má vlastnú stránku `o2.sk/ponuka/mobilne-sluzby/o2-fer`. My v odpovedi o Junior odkazujeme na stránku paušálov s preukazom (nesprávne) a v odpovedi o O2 Maxx odkaz chýba.

- Obe odpovede budú odkazovať na stránku O2 Fér.
- Pri Juniorovi doplním presný názov programu: **O2 Fér na faktúru**.

## 3. Podmienka veku pri O2 Maxx

O2 to formuluje takto: paušál si môže kúpiť ktokoľvek starší ako 18 rokov; rodič kupuje paušál pre neplnoleté dieťa **na svoje meno** a pri overovaní zadá **číslo preukazu dieťaťa**.

My tam máme „zadá priezvisko dieťaťa a číslo jeho platného preukazu“ a slová „na svoje meno“ boli na požiadanie vymazané. Text preto nesúhlasí s O2.

Navrhované znenie (na stránke aj v odpovediach): „Paušál si môže aktivovať každý držiteľ preukazu od 18 rokov. Pre neplnoleté dieťa ho kupuje rodič alebo zákonný zástupca na svoje meno a pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu.“ — teda O2 formulácia plus priezvisko podľa e-mailu M. Rancovej.

## 4. Vykúpenie z viazanosti — chýba podmienka

O2 preplatí zmluvnú pokutu do 120 € **pri prenose čísla od iného operátora** (v košíku sa zvolí „Preplatiť zmluvnú pokutu“ a pošle sa záverečná faktúra). Náš banner aj odpoveď to neuvádzajú, čo môže vyvolať nedorozumenie. Doplním podmienku prenosu čísla.

## 5. Nepresné odpovede v skupine O2 Paušály

- **Bonus na zariadenie**: nie je to „mesačný príspevok odčítaný z faktúry“, ale bonus na kúpu zariadenia — Základný 48 €, Pohodový 96 €, Bezstarostný 168 €. Odpoveď prepíšem.
- **Cashback**: „pri najvyššom paušále“ → „s Bezstarostným O2 Paušálom“ (podľa pravidla používať plné názvy).
- **Po prevolaní minút**: „pri základnom paušále“ → „so Základným O2 Paušálom“; doplním, že neobmedzené volania sa dajú doaktivovať za 5,13 €/mes.
- **Predplatné**: doplním, že je dostupné aj so Základným O2 Paušálom (dnes to vyzerá, že len pri vyšších).

## 6. Doplnenia na kartách paušálov

- Bezstarostný: „Neobmedzené dáta plnou rýchlosťou v 5G sieti“.
- Základný: pri 200 minútach doplniť možnosť neobmedzených volaní za +5,13 €/mes.

## 7. Čo je naopak správne (overené)

Objemy dát a čísla pri O2 Junior (4 → 10 GB, 3 → 5 čísel, 10,25 €, O2 Security, podmienka aktívneho O2 Paušálu), O2 Maxx (100 GB, prenos dát, spomalenie 2/1 Mbit/s, predplatné 12 mesiacov meniteľné každých 30 dní), bonusy na zariadenie, O2 Connect SIM, cashback 5 € do 15 GB aj všetky prekliky na o2.sk.

## Technické detaily

Úpravy v `src/routes/index.tsx` (cena a benefity kariet, podmienka Maxx, banner viazanosti), `src/components/CampaignFaq.tsx` (odkazy na O2 Fér, odpovede o bonuse, cashbacku, minútach, predplatnom, veku) a `scripts/content-guard.mjs` (kontrola ceny 33 € namiesto 38 €). Po úprave spustím obsahovú kontrolu a prekontrolujem stránku v prehliadači.
