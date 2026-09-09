import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { CampaignFaq } from "@/components/CampaignFaq";
import heroImage from "@/assets/o2-hero-full.png.asset.json";
import isicImage from "@/assets/o2-isic.png.asset.json";
import partnerLogo from "@/assets/o2-logo-final.jpg.asset.json";
import { BrandMark, BrandMarkRow, type BrandId } from "@/components/BrandMark";
import { MobileActionBar } from "@/components/MobileActionBar";
import { SectionChips } from "@/components/SectionChips";

// EMBARGO: stránka sa nesmie verejne publikovať ani indexovať pred 1. 9. 2026.
const MAXX_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx";
const JUNIOR_LINK = "https://www.o2.sk/ponuka/mobilne-sluzby/o2-junior";
const PAUSAL_LINK = "https://www.o2.sk/mobilne-sluzby/o2-pausal-preukaz";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ready for more? — kampaň 2026 pre ISIC, ITIC a EURO<26" },
      {
        name: "description",
        content:
          "Tento rok štartujeme kampaň vo veľkom. Nová spolupráca s operátorom prináša držiteľom ISIC, ITIC a EURO<26 100 GB dát, neobmedzené volania a digitálny obsah.",
      },
      { property: "og:title", content: "Ready for more? — kampaň 2026 pre ISIC, ITIC a EURO<26" },
      {
        property: "og:description",
        content:
          "Nová spolupráca, nové výhody k tvojmu preukazu: 100 GB dát, neobmedzené volania, predplatné v cene a zľavy pre pedagógov.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#40b8b8" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    title: "Vyber si paušál",
    text: "Na webe alebo v aplikácii operátora si zvolíš paušál, o ktorý máš záujem.",
  },
  {
    title: "Označ prenos čísla",
    text: "V košíku označíš záujem o prenos čísla a zadáš číslo, ktoré chceš preniesť.",
  },
  {
    title: "Vyplň údaje",
    text: "Údaje musia byť rovnaké ako u pôvodného operátora. Potrebuješ občiansky preukaz a preukaz ISIC/ITIC/EURO<26.",
  },
  {
    title: "Potvrď objednávku",
    text: "Do 1–2 pracovných dní ti kuriér doručí SIM kartu a podpíšeš dokumenty.",
  },
  {
    title: "Prenos čísla",
    text: "Po vrátení dokumentov sa spustí prenos čísla — trvá približne 3 pracovné dni.",
  },
  {
    title: "Hotovo",
    text: "O úspešnom prenose ťa informujeme SMS správou. Vymeníš SIM kartu a ideš.",
  },
];

const whyCards = [
  {
    title: "Denné zľavy",
    text: "Po ruke každý deň v roku. Šetri denne a za rok môžeš ušetriť stovky eur.",
  },
  {
    title: "Doprava a cestovanie",
    text: "Využívaj výhody v doprave a pri cestovaní doma a v zahraničí, kdekoľvek, kde platí tvoj preukaz.",
  },
  {
    title: "Škola a identita",
    text: "Potvrď svoj status študenta alebo učiteľa a zjednoduš si prístup k benefitom.",
  },
  {
    title: "Technológie a voľný čas",
    text: "Využívaj dostupnejšie dáta, stream a zariadenia pre uľahčenie tvojho štúdia a tvoju zábavu.",
  },
  {
    title: "Komunita",
    text: "Patríš do medzinárodnej komunity študentov, učiteľov a mladých ľudí.",
  },
  {
    title: "Jeden preukaz, tisíce využití",
    text: "Potvrdenie štatútu, doprava, tisíce zliav doma aj v zahraničí. Na všetko stačí jeden preukaz — a to aj len v mobile.",
  },
];

const segments = [
  {
    bg: "bg-brand-teal",
    arrowBg: "bg-background",
    eyebrow: "ISIC",
    title: "Som študent",
    mainLink: MAXX_LINK,
    links: [
      { label: "O2 Maxx – 100 GB", href: MAXX_LINK },
      { label: "O2 Paušály so zľavou", href: PAUSAL_LINK },
    ],
  },
  {
    bg: "bg-brand-orange",
    arrowBg: "bg-brand-yellow",
    eyebrow: "ITIC",
    title: "Som učiteľ",
    mainLink: PAUSAL_LINK,
    links: [
      { label: "O2 Paušály so zľavou", href: PAUSAL_LINK },
      { label: "O2 Maxx – 100 GB", href: MAXX_LINK },
    ],
  },
  {
    bg: "bg-brand-pink",
    arrowBg: "bg-background",
    eyebrow: "EURO<26",
    title: "Som mladý do 26 rokov",
    mainLink: MAXX_LINK,
    links: [
      { label: "O2 Maxx – 100 GB", href: MAXX_LINK },
      { label: "O2 Paušály so zľavou", href: PAUSAL_LINK },
    ],
  },
  {
    bg: "bg-brand-yellow",
    arrowBg: "bg-background",
    eyebrow: "Pre najmenších",
    title: "Pre všetkých do 15 rokov",
    mainLink: JUNIOR_LINK,
    links: [
      { label: "O2 Junior", href: JUNIOR_LINK },
    ],
  },
];


const cards: { num: string; accent: string; brand: BrandId; title: string; text: string }[] = [
  {
    num: "01",
    accent: "card-isic",
    brand: "isic",
    title: "Pre študentov ZŠ, SŠ a VŠ",
    text: "Denné štúdium na základnej, strednej alebo vysokej škole.",
  },
  {
    num: "02",
    accent: "card-itic",
    brand: "itic",
    title: "Pre učiteľov a pedagógov",
    text: "Pedagogický zamestnanec v hlavnom pracovnom pomere.",
  },
  {
    num: "03",
    accent: "card-euro26",
    brand: "eyc",
    title: "Pre mladých do 26 rokov",
    text: "Vek do 26 rokov (vrátane).",
  },
];

const pausaly = [
  {
    name: "Základný",
    oldPrice: "22 €",
    price: "18 €",
    popular: false,
    perks: [
      "10 GB dát",
      "200 minút (neobmedzené volania sa dajú doaktivovať za +5,13 €/mes.)",
      "Neobmedzené správy",
      "Bonus na zariadenie 48 €",
    ],
  },
  {
    name: "Pohodový",
    oldPrice: "33 €",
    price: "28 €",
    popular: false,
    perks: [
      "15 GB dát",
      "Neobmedzené volania a správy",
      "Bonus na zariadenie 96 €",
      "1 predplatné v cene (Voyo, HBO Max…)",
    ],
  },
  {
    name: "Bezstarostný",
    oldPrice: "44 €",
    price: "33 €",
    popular: true,
    perks: [
      "Neobmedzené dáta plnou rýchlosťou v 5G sieti, volania a správy",
      "Cashback 5 € mesačne (do 15 GB dát)",
      "Bonus na zariadenie 168 €",
      "1 predplatné v cene (Netflix, Voyo…)",
      "1 O2 Connect SIM v cene",
    ],
  },
];


function PartnerEndorsement({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wider">Spolu s</span>
      <img
        src={partnerLogo.url}
        alt="Logo partnerského operátora O2"
        className="h-11 w-11 rounded-full shadow-soft-teal sm:h-14 sm:w-14"
      />
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background pb-24 md:pb-0">
      {/* HERO — teal pás */}
      <header className="relative min-h-[100svh] bg-brand-teal text-foreground">
        <div className="absolute -right-14 top-20 h-28 w-28 rounded-full border-[18px] border-brand-yellow sm:-right-20 sm:h-64 sm:w-64 sm:border-[28px]" />
        <div className="absolute -left-10 bottom-24 h-20 w-20 rotate-12 rounded-3xl bg-brand-pink sm:-left-16 sm:h-32 sm:w-32" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 py-6 sm:px-8 sm:py-10">
          <div className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
            <BrandMarkRow variant="card" />
            <PartnerEndorsement />
          </div>

          <div className="flex flex-1 flex-col justify-center py-10 sm:py-12 lg:max-w-4xl">
            <p className="eyebrow relative z-10">BACK TO SCHOOL KAMPAŇ 2026</p>
            <h1 className="relative z-10 mt-3 font-display text-[13vw] font-black leading-[0.95] sm:mt-4 sm:text-7xl lg:text-8xl">
              Ready for more?
            </h1>
            <p className="relative z-10 mt-5 max-w-2xl text-base sm:mt-6 sm:text-lg">
              Tento rok štartujeme kampaň vo veľkom.{" "}
              <span className="font-black text-brand-yellow">S novým partnerom, operátorom O2</span>{" "}
              prinášame držiteľom ISIC, ITIC a EURO&lt;26 viac dát, viac volaní a viac digitálneho
              obsahu.
            </p>
            <ul className="relative z-10 mt-4 space-y-1.5 text-sm font-bold sm:text-base">
              <li>· 100 GB dát v 5G sieti</li>
              <li>· Neobmedzené volania a správy</li>
              <li>· Predplatné v cene paušálu</li>
            </ul>
            <p className="relative z-10 mt-4 font-display text-xl font-black">od 1. 9. 2026</p>

            <div className="relative z-10 mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button variant="yellow" size="xl" className="min-h-12 w-full sm:w-auto" asChild>
                <a href="#maxx">Objaviť výhody</a>
              </Button>
              <a
                href="#preukazy"
                className="flex min-h-12 items-center justify-center text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4 sm:justify-start"
              >
                Na ktorý preukaz mám nárok?
              </a>
            </div>

            <SectionChips className="relative z-10 mt-7" />
          </div>

          <p className="eyebrow relative z-10">ISIC · ITIC · EURO&lt;26</p>
        </div>
      </header>

      {/* BIELA — segmentový rozdeľovač „Kto si?" */}
      <section className="bg-background px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand-pink">Vyber si svoju výhodu</p>
          <h2 className="mt-3 font-display text-3xl font-black sm:text-5xl">Ktorý paušál je pre teba?</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:hidden">Potiahni prstom →</p>
          <div className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {segments.map((s) => (
              <div
                key={s.title}
                className={`group relative flex min-h-[220px] w-[78%] shrink-0 snap-start flex-col justify-between rounded-3xl p-5 shadow-soft-teal transition-all duration-300 active:scale-[0.98] sm:h-full sm:min-h-[240px] sm:w-auto sm:p-6 md:hover:-translate-y-2 md:hover:-rotate-1 md:hover:shadow-soft-pink ${s.bg}`}
              >
                <div className="space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-widest text-foreground/60">
                    {s.eyebrow}
                  </span>
                  <h3 className="font-display text-2xl font-black uppercase leading-tight text-background sm:text-3xl lg:text-4xl">
                    {s.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {s.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground shadow-sm transition-colors active:scale-95 md:hover:bg-background"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <a
                    href={s.mainLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-transform duration-300 active:scale-95 md:hover:rotate-45 md:hover:scale-110 ${s.arrowBg}`}
                    aria-label="Prejsť na ponuku O2"
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={3} />
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ŽLTÝ PÁS — kampaňový vizuál */}
      <section className="bg-brand-yellow px-5 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl bg-background shadow-soft-teal">
            <a
              href="https://www.o2.sk/ponuka/mobilne-sluzby/o2-maxx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="O2 Maxx – 100 GB dát na Maxx"
            >
              <img
                src={heroImage.url}
                alt="Kampaňový vizuál 2026 pre držiteľov ISIC, ITIC a EURO<26"
                className="h-auto w-full transition-transform duration-300 md:hover:scale-[1.02]"
                width={1920}
                height={700}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </section>


      {/* BIELA — čo prináša nová spolupráca */}
      <section className="bg-background py-12 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-pink">Nová spolupráca</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
              Čo to znamená pre Teba?
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Od 1. septembra 2026 pribúda k preukazom ISIC, ITIC a EURO&lt;26 nová generácia
              telekomunikačných benefitov.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Nový operátor ",
                d: "Nič nemusíš riešiť. Buď necháš dobehnúť pôvodný paušál alebo prejdeš na nový. \n\n",
              },
              {
                n: "02",
                t: "Nové výhody",
                d: "Väčšia flexibilita, väčší výber a digitálny obsah v cene.",
              },
              {
                n: "03",
                t: "Nový školský rok",
                d: "Ak chceš paušál s výhodami na svoj preukaz, od 1. 9. 2026 ho získaš u O2.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-3xl bg-brand-teal-light shadow-soft-teal p-5 sm:p-6"
              >
                <span className="num-badge text-sm">{item.n}</span>
                <h3 className="mt-2 font-display text-2xl font-black">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TEAL — hlavná ponuka 100 GB */}
      <section id="maxx" className="scroll-mt-20 bg-brand-teal py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Hlavná ponuka</p>
              <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
                100 GB dát na O2 Maxx
              </h2>

            </div>
            <p className="max-w-sm text-sm">
              Pre držiteľov ISIC, ITIC a EURO&lt;26. Bez viazanosti, plnou rýchlosťou v 5G.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between rounded-3xl bg-brand-yellow p-6 shadow-soft-pink sm:p-7">
              <div>
                <p className="font-display text-5xl font-black leading-none sm:text-6xl">100 GB</p>
                <p className="mt-3 text-sm font-bold">dát v 5G sieti každý mesiac</p>

              </div>
              <div className="mt-8 border-t-2 border-foreground/15 pt-5">
                <p className="font-display text-5xl font-black">20 €</p>
                <p className="text-sm font-bold">mesačne, bez viazanosti</p>
              </div>
            </div>

            <div className="rounded-3xl bg-background shadow-soft-teal p-5 sm:p-6 sm:p-7">
              <ul className="space-y-4">
                {[
                  "100 GB plnou rýchlosťou — nevyčerpané dáta sa prenášajú do ďalšieho mesiaca, po prečerpaní pokračuješ spomalene bez doplatku.",
                  "Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ.",
                  "1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.), meniteľné každých 30 dní v O2 Aplikácii.",
                ].map((benefit, i) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="num-badge">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-2xl bg-brand-teal-light p-4 text-sm">
                Podmienka: platný preukaz ISIC / ITIC / EURO&lt;26 vydaný na Slovensku. Paušál si môže
                aktivovať každý držiteľ preukazu od 18 rokov. Pre neplnoleté dieťa ho kupuje rodič
                alebo iný zákonný zástupca na svoje meno a pri overovaní zadá priezvisko dieťaťa a
                číslo jeho platného preukazu.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button variant="pink" size="xl" className="min-h-12 w-full sm:w-auto" asChild>
                  <a href={MAXX_LINK} target="_blank" rel="noopener noreferrer">Chcem 100 GB</a>
                </Button>

                <PartnerEndorsement className="text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIELA — paušály pre pedagógov */}
      <section id="pausaly" className="scroll-mt-20 bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-orange-dark">O2 Paušály so zľavou vďaka preukazu</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
              O2 Paušály so zľavou vďaka preukazu
            </h2>
            <p className="mt-4 text-base font-bold">
              Máš už paušál v O2? Zľavu na preukaz si môžeš uplatniť aj na svoj existujúci paušál —
              nie je to ponuka len pre nových zákazníkov.
            </p>
            <p className="mt-3 text-sm text-muted-foreground sm:hidden">Potiahni prstom →</p>
          </div>

          <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 pt-5 sm:mx-0 sm:mt-10 sm:grid sm:gap-5 sm:overflow-visible sm:px-0 md:grid-cols-3">
            {pausaly.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex w-[82%] shrink-0 snap-start flex-col rounded-3xl p-5 shadow-soft-teal sm:w-auto sm:p-6 ${
                  plan.popular ? "bg-brand-teal-light shadow-soft-teal" : "bg-background"
                }`}

              >
                {plan.popular && (
                  <span className="absolute -top-4 left-5 rounded-full bg-brand-yellow px-4 py-1 font-display text-xs font-black uppercase tracking-wider shadow-soft-yellow sm:left-6">
                    Najobľúbenejší
                  </span>
                )}
                <h3 className="font-display text-2xl font-black">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-4xl font-black">{plan.price}</span>
                  <span className="pb-1 text-sm line-through opacity-70">{plan.oldPrice}</span>
                </div>
                <span className="text-sm font-bold">mesačne s preukazom</span>

                <ul className="mt-5 flex-1 space-y-2 text-sm sm:mt-6">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="border-t-2 border-border pt-2">
                      {perk}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "teal" : "outline"}
                  size="lg"
                  className="mt-6 min-h-12 w-full"
                  asChild
                >
                  <a href={PAUSAL_LINK} target="_blank" rel="noopener noreferrer">Vybrať {plan.name}</a>
                </Button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ŽLTÝ/RUŽOVÝ — vykúpenie z viazanosti */}
      <section className="scroll-mt-20 bg-background pt-2 pb-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 rounded-3xl bg-brand-pink p-6 shadow-soft-pink text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg font-black">
              Viazanosť? Pri prenose čísla od pôvodného operátora ti O2 preplatí zmluvnú pokutu až do
              120 € — platí pre Bezstarostný, Pohodový a Základný O2 Paušál.
            </p>

            <Button variant="white" size="lg" className="min-h-12 w-full sm:w-auto" asChild>
              <a href="#prechod">Ako prejsť</a>
            </Button>
          </div>
        </div>
      </section>

      {/* BIELA — Junior pre rodičov */}
      <section id="junior" className="scroll-mt-20 bg-background pt-10 pb-12 sm:pt-14 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:gap-10 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-pink">Pre rodičov</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
              O2 Junior výhodnejšie s preukazom dieťaťa
            </h2>
            <p className="mt-4 font-display text-4xl font-black">10,25 €</p>
            <p className="text-sm font-bold">mesačne — rovnaká cena, výhodnejší obsah</p>
            <Button variant="teal" size="lg" className="mt-6 min-h-12 w-full sm:w-auto" asChild>
              <a href={JUNIOR_LINK} target="_blank" rel="noopener noreferrer">Zistiť viac</a>
            </Button>

          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "S preukazom bonus 10 GB dát namiesto 4 GB.",
              "Donekonečna piatim: 5 voľných čísel s neobmedzeným volaním a SMS namiesto 3.",
              "Rodičovské limity na dáta aj volania — platíš len skutočnú spotrebu. O2 Security v cene.",
              "Podmienka: aspoň jeden aktívny paušál na rovnakom zákazníckom profile.",
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-3xl bg-brand-teal-light shadow-soft-teal p-5"
              >
                <span className="num-badge">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TEAL — prečo mať preukaz */}
      <section className="bg-brand-teal py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Viac než zľava</p>
              <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
                Prečo mať preukaz
              </h2>
            </div>
            <a
              href={MAXX_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block"
            >
              <img
                src={isicImage.url}
                alt="Kampaňový vizuál pre držiteľov ISIC, ITIC a EURO<26"
                className="w-72 rounded-3xl shadow-soft-teal transition-transform duration-300 md:hover:-translate-y-1"
                width={800}
                height={500}
                loading="lazy"
              />
            </a>

          </div>

          <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <li
                key={card.title}
                className="flex items-start gap-4 rounded-3xl bg-background shadow-soft-teal p-5"
              >
                <span className="num-badge">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-black">{card.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BIELA — na ktorý preukaz máš nárok */}
      <section id="preukazy" className="scroll-mt-20 bg-background py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-pink">Vyber si správne</p>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
              Na ktorý preukaz máš nárok?
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Výhody sú naviazané na tvoj preukaz. Vyber si ten, ktorého podmienky spĺňaš.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.num}
                className={`${card.accent} relative overflow-hidden rounded-3xl border-2 border-card-accent/50 bg-background p-6 shadow-soft-teal transition-all duration-300 md:hover:-translate-y-1 md:hover:shadow-soft-pink`}
              >
                <span className="absolute right-0 top-0 h-6 w-20 rounded-bl-3xl bg-card-accent" />
                <div className="flex items-center justify-between gap-4">
                  <span className="num-badge text-sm">{card.num}</span>
                  <BrandMark brand={card.brand} variant="card" />
                </div>
                <h3 className="mt-5 font-display text-xl font-black">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={PAUSAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
            >
              Pozrieť podmienky
            </a>
            <a
              href="https://objednaj-preukaz.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
            >
              Objednať preukaz
            </a>
          </div>
        </div>
      </section>

      {/* ružový separátor */}
      <div className="relative bg-brand-yellow py-4">
        <div className="mx-auto h-1 w-24 rounded-full bg-brand-pink" />
      </div>

      {/* ŽLTÝ PÁS — kroky prechodu */}
      <section id="prechod" className="scroll-mt-20 bg-brand-yellow py-12 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">Jednoduché. Naozaj.</p>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-5xl">
            Ako prejsť k novému operátorovi
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Zvládneš to z pohodlia domova a číslo si necháš.
          </p>

          <ol className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-3xl bg-background shadow-soft-teal p-5 sm:p-6"
              >
                <span className="num-badge text-sm">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-2xl font-black">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <Button variant="pink" size="xl" className="min-h-12 w-full sm:w-auto" asChild>
              <a href={PAUSAL_LINK} target="_blank" rel="noopener noreferrer">Preniesť si číslo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <CampaignFaq />


      {/* FOOTER — teal */}
      <footer className="bg-brand-teal py-12 text-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-black">Ready for more?</p>
            <p className="mt-3 max-w-md text-sm">
              Kampaň štartuje 1. 9. 2026. Nová spolupráca prináša držiteľom ISIC, ITIC a
              EURO&lt;26 viac dát, volaní a digitálneho obsahu.
            </p>
            <BrandMarkRow variant="onDark" className="mt-6 w-fit" />
          </div>

          <div>
            <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold">
              <a href="https://isic.sk" className="underline decoration-brand-pink decoration-2 underline-offset-4">
                isic.sk
              </a>
              <a href="https://itic.sk" className="underline decoration-brand-pink decoration-2 underline-offset-4">
                itic.sk
              </a>
              <a href="https://euro26.sk" className="underline decoration-brand-pink decoration-2 underline-offset-4">
                euro26.sk
              </a>
              <a
                href="https://www.o2.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-brand-pink decoration-2 underline-offset-4"
              >
                Podmienky
              </a>
            </div>
            <PartnerEndorsement className="mt-6" />
            <p className="mt-6 text-xs">
              © 2026 CKM SYTS. 
            </p>
          </div>
        </div>
      </footer>
      <MobileActionBar offerLink={MAXX_LINK} cardLink="https://objednaj-preukaz.sk" />
    </main>
  );
}
