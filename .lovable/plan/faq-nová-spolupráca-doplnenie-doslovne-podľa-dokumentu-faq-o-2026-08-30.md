# FAQ „Nová spolupráca" — doplnenie DOSLOVNE podľa dokumentu FAQ_Orange-O2.docx

Do skupiny **„Nová spolupráca"** v `src/components/CampaignFaq.tsx` pridám otázky a odpovede **presne tak, ako sú v dokumente — bez akýchkoľvek úprav znenia**. Dizajn sa nemení.

## Čo pridám (doslovné znenie z dokumentu)

1. **Prečo už medzi výhodami ISIC / ITIC / EURO<26 nevidím ponuku Orange?**
   „Po 15 rokoch spolupráce so spoločnosťou Orange sme sa rozhodli posunúť ponuku telekomunikačných benefitov ďalej. S cieľom prinášať držiteľom našich preukazov čo najatraktívnejšie a aktuálne výhody sme spoluprácu s Orange ukončili k 31. 8. 2026. Od 1. 9. 2026 prinášame novú ponuku paušálov v spolupráci s O2."

2. **Čo sa mení od 1. septembra 2026?**
   „Od 1. 9. 2026 je pre držiteľov preukazov dostupná nová ponuka paušálov od O2. Je pripravená tak, aby ju mohli využiť všetky skupiny držiteľov ISIC, ITIC a EURO<26 a každý držiteľ si v nej našiel to svoje. Jej súčasťou je aj úplne nový paušál O2 Maxx ktorý je len pre držiteľov a nižšie ceny/rozšírená ponuka na paušál O2 Junior a ostatné O2 Paušály."

3. **Čo ponúka O2 Maxx?**
   „O2 Maxx zahŕňa 100 GB dát plnou rýchlosťou, prenos nespotrebovaných dát, neobmedzené volania a správy v celej EÚ a 12-mesačné predplatné vybranej digitálnej služby (Netflix, Voyo, HBO max a iné..) ktorú môžete každý mesiac meniť, ako aj možnosť výhodnejšej kúpy zariadenia. Podrobné informácie a zmluvné podmienky nájdete na stránke www.o2.sk"

4. **Pre koho je určený O2 Maxx a zvýhodnené ponuky na O2 Junior a iné O2 Paušály?**
   „Pre všetkých držiteľov platných preukazov ISIC, ITIC a EURO<26, ktoré boli vydané na Slovensku."

5. **Kde si môžem novú ponuku pozrieť?**
   „Kompletné podmienky, možnosti aktivácie a aktuálnu ponuku nájdete na stránke www.o2.sk" (www.o2.sk ako klikateľný link, nová karta)

6. **Mám Yoxo. Čo sa s ním stane?**
   „Yoxo môžete využívať do konca platnosti vašej aktuálnej zmluvy v Orange a následne si môžete vybrať ktorýkoľvek z paušálov v O2 pripravených pre ISIC, ITIC a EURO<26. Alebo môžete zmluvu v Orange ukončiť hneď a prejsť na výhodnejší paušál v O2. Viac podrobných informácií o nových paušáloch nájdete na stránke www.o2.sk"

7. **Môžem si ešte aktivovať Yoxo cez ISIC / ITIC / EURO<26?**
   „Od 1. 9. 2026 si môžete nové paušály na ISIC, ITIC a EURO<26 aktivovať len v O2."

8. **Som zákazníkom Orange. Prestáva mi platiť paušál na ISIC / ITIC / EURO<26?**
   „Yoxo môžete využívať do konca platnosti vašej aktuálnej zmluvy v Orange a následne si môžete vybrať ktorýkoľvek z paušálov v O2 pripravených pre ISIC, ITIC a EURO<26. Alebo môžete zmluvu v Orange ukončiť hneď a prejsť na výhodnejší paušál v O2. Viac podrobných informácií o nových paušáloch nájdete na stránke www.o2.sk"

9. **Prečo ste sa rozhodli spolupracovať s O2?**
   „Vďaka tomu, že s O2 sme sa dohodli na dlhodobej spolupráci, vďaka ktorej budeme spoločne tvoriť a ponúkať držiteľom preukazov ISIC/ITIC/EURO<26 také paušály, ktoré budú maximálne prispôsobované potrebám a požiadavkám držiteľov ISIC, ITIC a EURO<26."

## Nepridám

- „Krátka univerzálna odpoveď pre customer care" — interný text pre zákaznícky servis, nepatrí na web.

## Technické detaily

- Súbor: `src/components/CampaignFaq.tsx` — nové položky sa pridajú do poľa `items` skupiny `vseobecne` („Nová spolupráca"), v poradí podľa dokumentu, pred existujúce otázky.
- www.o2.sk bude klikateľný link (`target="_blank"`, štýl ako existujúce linky) — jediná technická úprava, text zostáva doslovný.
- Ostatné skupiny FAQ (Maxx, Paušály, Junior) sa nemenia.
