# FAQ „Nová spolupráca" — doplnenie podľa dokumentu FAQ_Orange-O2.docx

Do skupiny **„Nová spolupráca"** v `src/components/CampaignFaq.tsx` doplním otázky z priloženého dokumentu. Dizajn sa nemení — len sa rozšíri pole `items` v existujúcej skupine `vseobecne`.

## Existujúce otázky (zostávajú)

- Čo znamená nová spolupráca pre môj preukaz?
- Musím prejsť k novému operátorovi?
- Ako môžem získať preukaz ISIC, ITIC alebo EURO<26?
- Môžem mať viac paušálov so zľavou?

## Nové otázky z dokumentu (pridám)

1. **Prečo už medzi výhodami ISIC / ITIC / EURO<26 nevidím ponuku Orange?**
   Po 15 rokoch spolupráce s Orange sme spoluprácu ukončili k 31. 8. 2026. Od 1. 9. 2026 prinášame novú ponuku paušálov v spolupráci s O2. *(hovorí CKM — „sme", „prinášame")*

2. **Čo sa mení od 1. septembra 2026?**
   Nová ponuka paušálov od O2 pre všetky skupiny držiteľov ISIC, ITIC a EURO<26 — vrátane nového paušálu O2 Maxx len pre držiteľov preukazov a zvýhodneného O2 Junior a ostatných O2 Paušálov.

3. **Pre koho je nová ponuka určená?**
   Pre všetkých držiteľov platných preukazov ISIC, ITIC a EURO<26 vydaných na Slovensku.

4. **Prečo ste sa rozhodli spolupracovať s O2?**
   Dlhodobá spolupráca, vďaka ktorej budú paušály maximálne prispôsobené potrebám držiteľov ISIC, ITIC a EURO<26.

5. **Mám Yoxo. Čo sa s ním stane?**
   Yoxo môžeš využívať do konca platnosti zmluvy v Orange, potom si vyberieš ľubovoľný paušál v O2 pripravený pre ISIC, ITIC a EURO<26. Alebo zmluvu ukončíš hneď a prejdeš na výhodnejší paušál v O2.

6. **Môžem si ešte aktivovať Yoxo cez ISIC / ITIC / EURO<26?**
   Od 1. 9. 2026 si nové paušály na ISIC, ITIC a EURO<26 aktivuješ len v O2.

7. **Som zákazníkom Orange. Prestáva mi platiť paušál na ISIC / ITIC / EURO<26?**
   Yoxo využívaš do konca zmluvy; potom prechod na ponuku O2 (rovnaká logika ako pri otázke o Yoxo).

8. **Kde si môžem novú ponuku pozrieť?**
   Kompletné podmienky a aktuálna ponuka na www.o2.sk (link, nová karta).

## Nepridám

- Otázku „Čo ponúka O2 Maxx?" — obsah je už pokrytý v skupine „Maxx — 100 GB" na stránke (aby sa FAQ neduplikovali). Ak ju chceš predsa aj tu, doplním.
- „Krátka univerzálna odpoveď pre customer care" — interný text pre zákaznícky servis, nepatrí na web.

## Technické detaily

- Súbor: `src/components/CampaignFaq.tsx` — rozšírenie poľa `items` skupiny `vseobecne`.
- Odkazy na www.o2.sk ako `target="_blank"` s ružovým podtrhnutím (rovnaký štýl ako existujúce linky).
- Poradie: nové otázky o zmene partnera dám na začiatok skupiny, existujúce otázky zostanú za nimi.
- Znenie upravím do 2. osoby a konzistentného tónu stránky; pri Orange/Yoxo otázkach zostane neutrálne informačné znenie podľa dokumentu.
