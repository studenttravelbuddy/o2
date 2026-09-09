# Prehľad komentárov a návrh na ich zapracovanie

Prešla som všetky otvorené komentáre. Väčšina odkazov z pripomienok O2 už na stránke funguje správne — nižšie je len to, čo ešte treba upraviť, plus body, kde potrebujem odpoveď.

## A. Už zapracované (netreba nič robiť)

| Pripomienka | Stav |
| --- | --- |
| „Chcem 100 GB" → o2-maxx | už vedie na o2-maxx |
| „Zistiť viac" (O2 Junior) → o2-junior | už vedie na o2-junior |
| Buttony Základný / Pohodový / Bezstarostný → o2-pausal-preukaz | už vedú tam |
| 4 segmentové karty (ISIC/ITIC/EURO<26/Junior) → o2-maxx | už vedú tam |
| Kampaňový vizuál „100 GB dát na Maxx" → o2-maxx | vizuál je klikateľný, vedie na o2-maxx |
| Rozrastrované O2 logo v hlavičke | vymenené za dodanú kvalitnú verziu |

## B. Textové úpravy FAQ podľa mockupu O2 — zapracujem

1. **„Čo ponúka O2 Maxx?"** — vypustím časť „, ako aj možnosť výhodnejšej kúpy zariadenia". Veta bude končiť: „…ktorú môžete každý mesiac meniť. Podrobné informácie a zmluvné podmienky nájdete na stránke www.o2.sk"
2. **„Prečo ste sa rozhodli spolupracovať s O2?"** — odstránim „Vďaka tomu, že". Nové znenie: „S O2 sme sa dohodli na dlhodobej spolupráci, vďaka ktorej budeme spoločne tvoriť a ponúkať…"
3. **Yoxo odpovede (2×)** — vypustím „Alebo môžete" a vetu prefrázujem: „…pripravených pre ISIC, ITIC a EURO<26. Zmluvu v Orange môžete ukončiť aj hneď a prejsť na výhodnejší paušál v O2."
4. **„program sa zmení na základný" (2 miesta — O2 Maxx aj O2 Junior)** → „program sa zmení na paušál **O2 Fér**". Pri Junior odpovedi doplním aj odkaz na o2-pausal-preukaz.
5. **Duplicitná odpoveď** — otázka „Môžem si ešte aktivovať Yoxo cez ISIC / ITIC / EURO<26?" a „Som zákazníkom Orange…" majú dnes rovnaký text. Nechám len jednu (Yoxo) a druhej dám vlastné znenie z dokumentu FAQ.

## C. Návrh podľa pripomienky O2 k žltému banneru

Button „Objaviť výhody" v hero dnes skroluje na sekciu O2 Maxx. O2 navrhuje presmerovať ho na O2 Junior. Keďže hero oslovuje všetkých držiteľov, navrhujem **ponechať skrolovanie na ponuku** a na Junior odkázať priamo v sekcii Junior (už tam odkaz je) — do vlákna napíšem odôvodnenie. Ak chceš, prelinkujem podľa O2.

## D. Potrebujem tvoje rozhodnutie

- **„Za nás by sme celú túto sekciu vypustili" (mail 31. 8., strana 11)** — pôvodne šlo o kalkulačku úspor, tú sme už odstránili. Považujem za vyriešené, ale ak šlo o inú sekciu, napíš ktorú.
- **Termín aktivácie predplatného (mail 1. 9., bod 5)** — nemám presné znenie od O2. Bez neho text nemením.
- **„Máš už paušál v O2?" (Z. Majdanová)** — do sekcie O2 Paušály doplním vysvetľujúcu vetu, že zľava sa dá uplatniť aj na existujúci paušál v O2, nie len pri novom. Potrebujem potvrdiť, že to tak platí.
- **Podmienka veku v sekcii O2 Maxx (MR)** — dnes je tam „od 18 rokov si aktivuje sám" + „mladším aktivuje zákonný zástupca". Zjednotím do jednej jasnej vety: „Aktivovať si paušál sám môžeš od 18 rokov. Mladším držiteľom ho aktivuje rodič alebo zákonný zástupca — pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu."

## Technické detaily

Úpravy v `src/components/CampaignFaq.tsx` (body B) a `src/routes/index.tsx` (body C a D). Po úprave spustím `scripts/content-guard.mjs` a odpoviem do jednotlivých vlákien komentárov, čo bolo zapracované; vlákna nezatváram.
