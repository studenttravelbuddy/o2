import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: ReactNode };

const groups: { id: string; label: string; items: FaqItem[] }[] = [
  {
    id: "vseobecne",
    label: "Nová spolupráca",
    items: [
      {
        q: "Prečo už medzi výhodami ISIC / ITIC / EURO<26 nevidím ponuku Orange?",
        a: "Po 15 rokoch spolupráce so spoločnosťou Orange sme sa rozhodli posunúť ponuku telekomunikačných benefitov ďalej. S cieľom prinášať držiteľom našich preukazov čo najatraktívnejšie a aktuálne výhody sme spoluprácu s Orange ukončili k 31. 8. 2026. Od 1. 9. 2026 prinášame novú ponuku paušálov v spolupráci s O2.",
      },
      {
        q: "Čo sa mení od 1. septembra 2026?",
        a: "Od 1. 9. 2026 je pre držiteľov preukazov dostupná nová ponuka paušálov od O2. Je pripravená tak, aby ju mohli využiť všetky skupiny držiteľov ISIC, ITIC a EURO<26 a každý držiteľ si v nej našiel to svoje. Jej súčasťou je aj úplne nový paušál O2 Maxx ktorý je len pre držiteľov a nižšie ceny/rozšírená ponuka na paušál O2 Junior a ostatné O2 Paušály.",
      },
      {
        q: "Čo ponúka O2 Maxx?",
        a: (
          <>
            O2 Maxx zahŕňa 100 GB dát plnou rýchlosťou, prenos nespotrebovaných dát, neobmedzené volania a správy v celej EÚ a 12-mesačné predplatné vybranej digitálnej služby (Netflix, Voyo, HBO max a iné..) ktorú môžete každý mesiac meniť. Podrobné informácie a zmluvné podmienky nájdete na stránke{" "}
            <a
              href="https://www.o2.sk"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.o2.sk
            </a>
          </>
        ),
      },
      {
        q: "Pre koho je určený O2 Maxx a zvýhodnené ponuky na O2 Junior a iné O2 Paušály?",
        a: "Pre všetkých držiteľov platných preukazov ISIC, ITIC a EURO<26, ktoré boli vydané na Slovensku.",
      },
      {
        q: "Kde si môžem novú ponuku pozrieť?",
        a: (
          <>
            Kompletné podmienky, možnosti aktivácie a aktuálnu ponuku nájdete na stránkach{" "}
            <a
              href="https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              O2 Maxx
            </a>
            ,{" "}
            <a
              href="https://www.o2.sk/ponuka/mobilne-sluzby/o2-junior"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              O2 Junior
            </a>{" "}
            a{" "}
            <a
              href="https://www.o2.sk/mobilne-sluzby/o2-pausal-preukaz"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              zvýhodnené O2 Paušály
            </a>
            .
          </>
        ),
      },
      {
        q: "Mám paušál Yoxo. Čo sa s ním stane?",
        a: (
          <>
            Yoxo môžete využívať do konca platnosti vašej aktuálnej zmluvy v Orange a následne si môžete vybrať ktorýkoľvek z paušálov v O2 pripravených pre ISIC, ITIC a EURO&lt;26. Zmluvu v Orange môžete ukončiť aj hneď a prejsť na výhodnejší paušál v O2. Viac podrobných informácií o nových paušáloch nájdete na stránke{" "}
            <a
              href="https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.o2.sk
            </a>
          </>
        ),
      },

      {
        q: "Môžem si ešte aktivovať Yoxo cez ISIC / ITIC / EURO<26?",
        a: "Od 1. 9. 2026 si môžete nové paušály na ISIC, ITIC a EURO<26 aktivovať len v O2.",
      },
      {
        q: "Som zákazníkom Orange. Prestáva mi platiť paušál na ISIC / ITIC / EURO<26?",
        a: (
          <>
            Zvýhodnenie na preukaz v Orange platí do konca platnosti vašej aktuálnej zmluvy. Následne si môžete vybrať ktorýkoľvek z paušálov v O2 pripravených pre ISIC, ITIC a EURO&lt;26. Zmluvu v Orange môžete ukončiť aj hneď a prejsť na výhodnejší paušál v O2. Viac podrobných informácií o nových paušáloch nájdete na stránke{" "}
            <a
              href="https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.o2.sk
            </a>
          </>
        ),
      },
      {
        q: "Prečo ste sa rozhodli spolupracovať s O2?",
        a: "S O2 sme sa dohodli na dlhodobej spolupráci, vďaka ktorej budeme spoločne tvoriť a ponúkať držiteľom preukazov ISIC/ITIC/EURO<26 také paušály, ktoré budú maximálne prispôsobované potrebám a požiadavkám držiteľov ISIC, ITIC a EURO<26.",
      },
      {
        q: "Čo znamená nová spolupráca pre môj preukaz?",
        a: "Nič nemusíš riešiť. Preukaz ISIC, ITIC alebo EURO<26 platí ďalej presne tak, ako doteraz — len k nemu pribudli nové telekomunikačné výhody.",
      },
      {
        q: "Musím prejsť k novému operátorovi?",
        a: "Ak chceš využívať nový paušál na svoj preukaz, tak áno.",
      },
      {
        q: "Ako môžem získať preukaz ISIC, ITIC alebo EURO<26?",
        a: (
          <>
            Preukazy si objednáš podľa podmienok dodávateľov na{" "}
            <a
              href="https://isic.sk"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              isic.sk
            </a>
            ,{" "}
            <a
              href="https://itic.sk"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              itic.sk
            </a>{" "}
            a{" "}
            <a
              href="https://euro26.sk"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              euro26.sk
            </a>
            . Platnosť preukazu si vieš jednoducho overiť online.
          </>
        ),
      },
      {
        q: "Môžem mať viac paušálov so zľavou?",
        a: "Jedna osoba môže mať jeden produkt so zľavou na jeden preukaz. Rodič môže aktivovať toľko programov, koľko má detí — pri aktivácii každého programu však treba použiť priezvisko a platný preukaz daného dieťaťa, pre ktoré program aktivuje.",
      },
    ],
  },
  {
    id: "maxx",
    label: "O2 Maxx",
    items: [
      {
        q: "Kto si môže aktivovať paušál so 100 GB?",
        a: "Všetci držitelia platných preukazov ISIC, ITIC alebo EURO<26 vydaných na Slovensku. Držiteľ preukazu si paušál môže aktivovať sám od veku 18 rokov. Pre mladších držiteľov môže paušál aktivovať rodič alebo iný zákonný zástupca; pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu.",
      },
      {
        q: "Čo ak neminiem svojich 100 GB dát?",
        a: "Nevyčerpané dáta sa prenášajú do ďalšieho mesiaca. Ak si tento mesiac minul len 50 GB, ďalší mesiac máš k dispozícii 150 GB.",
      },
      {
        q: "Čo sa stane, ak 100 GB prečerpám?",
        a: "Dáta využívaš ďalej spomalenou rýchlosťou 2 Mbit/s pri sťahovaní a 1 Mbit/s pri odosielaní. Nič navyše sa neúčtuje.",
      },
      {
        q: "Sú volania a správy naozaj neobmedzené?",
        a: "Áno — neobmedzené minúty a neobmedzené SMS/MMS do všetkých sietí na Slovensku aj v celej EÚ.",
      },
      {
        q: "Funguje paušál aj v zahraničí?",
        a: "Áno. V EÚ, Nórsku, Lichtenštajnsku, na Islande, Gibraltári a vo Veľkej Británii voláš a píšeš ako doma a čerpáš dáta do výšky EÚ dátového limitu bez príplatku.",
      },
      {
        q: "Ako funguje predplatné v cene?",
        a: "V cene paušálu máš 1 predplatné na 12 mesiacov od aktivácie — video-streaming alebo spravodajské služby. Vymeniť ho môžeš každých 30 dní alebo kedykoľvek zrušiť. Po 12 mesiacoch sa spoplatňuje podľa cenníka.",
      },
      {
        q: "Je paušál s viazanosťou? Čo ak stratím status študenta?",
        a: "Paušál je úplne bez viazanosti. Ak preukaz stratí platnosť, upozorníme ťa a paušál beží do najbližšieho zúčtovacieho obdobia. Ak ho dovtedy neobnovíš, program sa zmení na paušál O2 Fér.",
      },
    ],
  },
  {
    id: "pausaly",
    label: "O2 Paušály",
    items: [
      {
        q: "Majú paušály viazanosť?",
        a: "Nie. Všetky paušály môžeš využívať so všetkými výhodami úplne bez viazanosti.",
      },
      {
        q: "Ako funguje bonus s preukazom ISIC, ITIC a EURO<26?",
        a: "Bonus získa každý držiteľ platného preukazu. Po uplatnení preukazu sa ti bonus každý mesiac odčíta priamo z faktúry.",
      },
      {
        q: "Čo je Cashback?",
        a: "Pri najvyššom paušále ti vrátime 5 € späť, ak si mal paušál aktívny celý mesiac a neminul viac ako 15 GB dát. Automaticky.",
      },
      {
        q: "Ako funguje bonus na zariadenie s preukazom?",
        a: "Po overení preukazu získaš mesačný príspevok na zariadenie, ktorý sa odčítava priamo z faktúry.",
      },
      {
        q: "Ako funguje vykúpenie z viazanosti?",
        a: "Ak si u pôvodného operátora viazaný zmluvou, vykúpime ťa z viazanosti až do výšky 120 €.",
      },
      {
        q: "Koľko zaplatím po prevolaní predplatených minút?",
        a: "Pri základnom paušále 10 centov za minútu. Vyššie paušály majú neobmedzené volania, SMS a MMS do všetkých sietí v EÚ v cene.",
      },
    ],
  },
  {
    id: "junior",
    label: "O2 Junior",
    items: [
      {
        q: "Kedy si môžem aktivovať Junior?",
        a: "Junior je viazaný na hlavný paušál — podmienkou je aspoň jeden aktívny paušál na rovnakom zákazníckom profile (na rovnakej faktúre). Pridáš ho k existujúcemu účtu alebo si oboje kúpiš v jednej objednávke.",
      },
      {
        q: "Môžem si Junior kúpiť samostatne?",
        a: "Nie. Junior funguje len v kombinácii s hlavným paušálom na tom istom zákazníckom profile.",
      },
      {
        q: "Ako získam Junior s bonusom preukazu?",
        a: "S platným ISIC, ITIC alebo EURO<26 sa základný objem dát navýši zo 4 GB na 10 GB a z 3 voľných čísel s neobmedzeným volaním a SMS na 5 čísel. Cena zostáva 10,25 €/mes.",
      },
      {
        q: "Ako funguje „Donekonečna piatim“?",
        a: "Nastavíš až 5 telefónnych čísel (s preukazom), na ktoré dieťa volá a píše neobmedzene v cene mesačného poplatku. Čísla je možné zmeniť raz za zúčtovacie obdobie v aplikácii.",
      },
      {
        q: "Ako funguje limit na volania, správy a dáta navyše?",
        a: "Rodič nastaví maximálnu sumu, ktorú môže dieťa použiť nad rámec programu. Platí sa len za skutočne prevolané minúty, správy a začaté gigabajty. Tiesňové linky sú vždy dostupné. Limit sa mení raz za zúčtovacie obdobie.",
      },
      {
        q: "Čo sa stane s Juniorom, ak už nemám hlavný paušál?",
        a: (
          <>
            Program sa automaticky zmení na paušál{" "}
            <a
              href="https://www.o2.sk/mobilne-sluzby/o2-pausal-preukaz"
              className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              O2 Fér
            </a>
            . Späť na Junior sa dá vrátiť, keď bude opäť splnená podmienka aktívneho hlavného paušálu na rovnakom fakturačnom profile.
          </>
        ),
      },
    ],
  },
];

export function CampaignFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-brand-pink">FAQ</p>
        <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
          Pýtaš sa?
          <br />
          Odpovedáme.
        </h2>

        <div className="mt-8 space-y-10 sm:mt-12 sm:space-y-12">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="inline-block rounded-full bg-brand-yellow px-4 py-1.5 font-display text-sm font-black uppercase tracking-wider shadow-soft-yellow">
                {group.label}
              </h3>
              <Accordion type="single" collapsible className="mt-4">
                {group.items.map((item) => (
                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="border-b-2 border-border"
                  >
                    <AccordionTrigger className="min-h-12 text-left font-display text-base font-bold sm:text-lg">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}

        </div>

        <p className="mt-10 rounded-2xl bg-brand-teal-light p-5 text-sm">
          Nenašiel si odpoveď?{" "}
          <a
            href="mailto:info@ckm.sk"
            className="font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
          >
            Napíš nám
          </a>{" "}
          a poradíme ti s výberom podľa tvojho preukazu.
        </p>
      </div>
    </section>
  );
}
