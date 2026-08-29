import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    q: "Prečo už nevidím Orange medzi výhodami?",
    a: "Po 15 rokoch spolupráce sa spolupráca s Orange skončila 31. 8. 2026. Od 1. 9. prinášame novú ponuku v spolupráci s O2.",
  },
  {
    q: "Zrušíte mi Yoxo?",
    a: "Nie. CKM SYTS mobilné paušály nespravuje ani neruší. Otázky k Yoxo rieši priamo Orange.",
  },
  {
    q: "Čo sa stane s mojím Yoxo paušálom?",
    a: "Pokračuje podľa vašej zmluvy s Orange. Po skončení platobného obdobia/viazanosti už nebude naviazaný na váš preukaz.",
  },
  {
    q: "Musím prejsť do O2?",
    a: "Nie, je to benefit, nie povinnosť. Voľba operátora je na vás.",
  },
  {
    q: "Prestáva mi platiť ISIC/ITIC/EURO<26?",
    a: "Nie. Zmena partnera nemení platnosť preukazu ani ostatné benefity.",
  },
  {
    q: "Prečo práve O2?",
    a: "Nová spolupráca umožňuje priniesť ponuku, ktorá kombinuje veľký objem dát, mobilné služby a digitálny obsah.",
  },
  {
    q: "Môžem mať viac paušálov so zľavou?",
    a: "Jedna osoba = jeden produkt so zľavou preukazu. Rodič môže mať viac programov pre deti, ale ku každému musí použiť preukaz inej osoby.",
  },
  {
    q: "Kde nájdem podmienky?",
    a: "Podmienky ponuky nájdete na tejto stránke a v aktuálnom cenníku O2.",
    link: { label: "Cenník a podmienky O2", href: "#podmienky" },
  },
];

export function O2Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Časté otázky</h2>

        <Accordion type="single" collapsible className="mt-8">
          {faq.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.a}
                {item.link && (
                  <>
                    {" "}
                    {/* TODO: nahradiť finálnym odkazom na isic.sk/o2 */}
                    <a href={item.link.href} className="font-semibold text-primary underline">
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
