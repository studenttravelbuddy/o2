import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = { q: string; a: string };

const groups: { id: string; label: string; items: FaqItem[] }[] = [
  {
    id: "vseobecne",
    label: "Nová spolupráca",
    items: [
      {
        q: "Čo znamená nová spolupráca pre môj preukaz?",
        a: "Nič nemusíš riešiť. Preukaz ISIC, ITIC alebo EURO<26 platí ďalej presne tak, ako doteraz — len k nemu pribudli nové telekomunikačné výhody.",
      },
      {
        q: "Musím prejsť k novému operátorovi?",
        a: "Nie, je to benefit, nie povinnosť. Voľba operátora je vždy na tebe.",
      },
      {
        q: "Ako môžem získať preukaz ISIC, ITIC alebo EURO<26?",
        a: "Preukazy si objednáš podľa podmienok dodávateľov na isic.sk, itic.sk a euro26.sk. Platnosť preukazu si vieš jednoducho overiť online.",
      },
      {
        q: "Môžem mať viac paušálov so zľavou?",
        a: "Jedna osoba môže mať iba jeden produkt so zľavou preukazu. Rodič si môže vziať viac programov pre deti, pri každom novom programe však treba použiť preukaz inej osoby.",
      },
    ],
  },
  {
    id: "maxx",
    label: "100 GB pre študentov",
    items: [
      {
        q: "Kto si môže aktivovať paušál so 100 GB?",
        a: "Všetci držitelia platných slovenských preukazov ISIC, ITIC alebo EURO<26 starší ako 18 rokov. Rodič môže paušál kúpiť na svoje meno a pri overovaní zadá číslo preukazu dieťaťa.",
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
        a: "Paušál je úplne bez viazanosti. Ak preukaz stratí platnosť, upozorníme ťa a paušál beží do najbližšieho zúčtovacieho obdobia. Ak ho dovtedy neobnovíš, program sa zmení na základný.",
      },
    ],
  },
  {
    id: "pausaly",
    label: "Paušály a zľavy",
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
        q: "Ako funguje bonus na zariadenie?",
        a: "Ide o mesačný príspevok na zariadenie, ktorý sa odčítava z faktúry.",
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
    label: "Junior pre rodičov",
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
        a: "Program sa automaticky zmení na základný. Späť na Junior sa dá vrátiť, keď bude opäť splnená podmienka aktívneho hlavného paušálu na rovnakom fakturačnom profile.",
      },
    ],
  },
];

export function CampaignFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <p className="eyebrow text-brand-pink">FAQ</p>
        <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
          Pýtaš sa?
          <br />
          Odpovedáme.
        </h2>

        <div className="mt-12 space-y-12">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="inline-block border-2 border-foreground bg-brand-yellow px-3 py-1 font-display text-sm font-black uppercase tracking-wider">
                {group.label}
              </h3>
              <Accordion type="single" collapsible className="mt-4">
                {group.items.map((item) => (
                  <AccordionItem
                    key={item.q}
                    value={item.q}
                    className="border-b-2 border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-lg font-bold">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-base text-muted-foreground">
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
          {/* TODO: nahradiť finálnym kontaktom / odkazom na podmienky */}
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
