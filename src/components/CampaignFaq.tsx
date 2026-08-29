import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    q: "Čo znamená nová spolupráca pre môj preukaz?",
    a: "Nič nemusíš riešiť. Preukaz ISIC, ITIC alebo EURO<26 platí ďalej presne tak, ako doteraz — len k nemu pribudli nové telekomunikačné výhody.",
  },
  {
    q: "Musím prejsť k novému operátorovi?",
    a: "Nie, je to benefit, nie povinnosť. Voľba operátora je vždy na tebe.",
  },
  {
    q: "Prestáva mi platiť ISIC/ITIC/EURO<26?",
    a: "Nie. Zmena partnera nemení platnosť preukazu ani ostatné benefity a zľavy.",
  },
  {
    q: "Zrušíte mi Yoxo?",
    a: "Nie. CKM SYTS mobilné paušály nespravuje ani neruší. Otázky k Yoxo rieši priamo Orange.",
  },
  {
    q: "Čo sa stane s mojím Yoxo paušálom?",
    a: "Pokračuje podľa tvojej zmluvy s Orange. Po skončení platobného obdobia či viazanosti už nebude naviazaný na tvoj preukaz.",
  },
  {
    q: "Môžem mať viac paušálov so zľavou?",
    a: "Jedna osoba = jeden produkt so zľavou preukazu. Rodič môže mať viac programov pre deti, ku každému však musí použiť preukaz inej osoby.",
  },
  {
    q: "Odkedy dokedy kampaň platí?",
    a: "Kampaň štartuje 1. 9. 2026. Aktuálne podmienky a trvanie ponuky nájdeš na tejto stránke a v cenníku operátora.",
    link: { label: "Podmienky ponuky", href: "#podmienky" },
  },
];

export function CampaignFaq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="eyebrow text-isic-deep">FAQ</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Pýtaš sa? <span className="text-isic-deep">Odpovedáme.</span>
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base font-bold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
                {item.link && (
                  <>
                    {" "}
                    {/* TODO: nahradiť finálnym odkazom na podmienky */}
                    <a href={item.link.href} className="font-bold text-isic-deep underline">
                      {item.link.label}
                    </a>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
