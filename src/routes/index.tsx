import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { CampaignFaq } from "@/components/CampaignFaq";
import heroImage from "@/assets/o2-hero.png.asset.json";
import isicImage from "@/assets/o2-isic.png.asset.json";
import partnerLogo from "@/assets/o2-logo.png.asset.json";
import isicLogo from "@/assets/isic-logo.png.asset.json";
import iticLogo from "@/assets/itic-logo.png.asset.json";
import eycaLogo from "@/assets/eyca-logo.svg.asset.json";

// EMBARGO: stránka sa nesmie verejne publikovať ani indexovať pred 1. 9. 2026.
// TODO: nahradiť finálnym odkazom na isic.sk/ponuka (všetky CTA nižšie sú placeholdery).
const OFFER_LINK = "#maxx";

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
    text: "Stravovanie, kultúra, šport, cestovanie, móda, služby. Každodenný nástroj na úsporu.",
  },
  {
    title: "Doprava a cestovanie",
    text: "Výhody doma aj v zahraničí, kdekoľvek preukaz platí.",
  },
  {
    title: "Škola a identita",
    text: "ISIC/ITIC potvrdzuje status študenta alebo učiteľa a zjednodušuje benefity.",
  },
  {
    title: "Technológie a voľný čas",
    text: "Dáta, stream, zariadenia, štúdium a zábava — relevantné pre digitálny život.",
  },
  {
    title: "Komunita",
    text: "Patríš do medzinárodnej komunity študentov, učiteľov a mladých ľudí.",
  },
  {
    title: "Smart value",
    text: "Nový telekomunikačný benefit robí preukaz praktickejším a hodnotnejším.",
  },
];

const segments = [
  {
    href: "#maxx",
    bg: "bg-brand-teal",
    arrowBg: "bg-background",
    eyebrow: "ISIC · EURO<26",
    title: "Som študent",
    text: "100 GB dát a výhody na Maxx.",
  },
  {
    href: "#pausaly",
    bg: "bg-brand-orange",
    arrowBg: "bg-brand-yellow",
    eyebrow: "ITIC",
    title: "Som učiteľ",
    text: "Zľavnené paušály pre pedagógov.",
  },
  {
    href: "#junior",
    bg: "bg-brand-pink",
    arrowBg: "bg-background",
    eyebrow: "Pre rodičov",
    title: "Som rodič",
    text: "Donekonečna piatim pre deti.",
  },
];

const cards = [
  {
    num: "01",
    accent: "card-euro26",
    logo: eycaLogo.url,
    alt: "EURO<26 / European Youth Card",
    title: "Pre mladých do 26 rokov",
    text: "Vek do 26 rokov (vrátane).",
  },
  {
    num: "02",
    accent: "card-isic",
    logo: isicLogo.url,
    alt: "ISIC – International Student Identity Card",
    title: "Pre študentov ZŠ, SŠ a VŠ",
    text: "Denné štúdium na základnej, strednej alebo vysokej škole.",
  },
  {
    num: "03",
    accent: "card-itic",
    logo: iticLogo.url,
    alt: "ITIC – International Teacher Identity Card",
    title: "Pre učiteľov a pedagógov",
    text: "Pedagogický zamestnanec na plný úväzok.",
  },
];

const pausaly = [
  {
    name: "Základný",
    oldPrice: "22 €",
    price: "18 €",
    popular: false,
    perks: ["10 GB dát", "200 minút", "Neobmedzené správy", "Bonus na zariadenie"],
  },
  {
    name: "Pohodový",
    oldPrice: "33 €",
    price: "28 €",
    popular: false,
    perks: [
      "15 GB dát",
      "Neobmedzené volania a správy",
      "Bonus na zariadenie",
      "1 predplatné v cene",
    ],
  },
  {
    name: "Bezstarostný",
    oldPrice: "44 €",
    price: "33 €",
    popular: true,
    perks: [
      "Neobmedzené dáta, volania a správy",
      "Cashback 5 € mesačne (do 15 GB dát)",
      "Bonus na zariadenie",
      "1 predplatné v cene",
      "1 SIM navyše zdarma",
    ],
  },
];

function PartnerEndorsement({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wider">Spolu s</span>
      <img
        src={partnerLogo.url}
        alt="Logo partnerského operátora"
        className="h-8 w-8 rounded-md border-2 border-foreground"
      />
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      {/* HERO — teal pás */}
      <header className="relative min-h-[720px] bg-brand-teal text-foreground">
        <div className="absolute -right-20 top-24 h-44 w-44 rounded-full border-[28px] border-brand-yellow sm:h-64 sm:w-64" />
        <div className="absolute -left-16 bottom-16 h-32 w-32 rotate-12 bg-brand-pink" />

        <div className="relative mx-auto flex min-h-[720px] max-w-6xl flex-col px-5 py-8 sm:px-8 sm:py-10">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 rounded-3xl bg-background shadow-soft-teal px-4 py-2">
              <img src={isicLogo.url} alt="ISIC" className="h-6 w-auto" />
              <img src={iticLogo.url} alt="ITIC" className="h-6 w-auto" />
              <img src={eycaLogo.url} alt="EURO<26" className="h-6 w-auto" />
            </div>
            <PartnerEndorsement />
          </div>

          <div className="flex flex-1 flex-col justify-center py-12 lg:max-w-4xl">
            <p className="eyebrow relative z-10">Kampaň 2026</p>
            <h1 className="relative z-10 mt-4 font-display text-5xl font-black leading-[0.98] sm:text-7xl lg:text-8xl">
              Ready for more?
            </h1>
            <p className="relative z-10 mt-6 max-w-2xl text-lg">
              Tento rok štartujeme kampaň vo veľkom. S novým operátorom prinášame držiteľom ISIC,
              ITIC a EURO&lt;26 viac dát, viac volaní a viac digitálneho obsahu.
            </p>
            <p className="relative z-10 mt-4 font-display text-xl font-black">1. 9. 2026</p>

            <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
              <Button variant="yellow" size="xl" asChild>
                <a href="#maxx">Objaviť výhody</a>
              </Button>
              <a
                href="#preukazy"
                className="text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
              >
                Na ktorý preukaz mám nárok?
              </a>
            </div>
          </div>

          <p className="eyebrow relative z-10">ISIC · ITIC · EURO&lt;26</p>
        </div>
      </header>

      {/* BIELA — segmentový rozdeľovač „Kto si?" */}
      <section className="bg-background px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-brand-pink">Vyber si svoju výhodu</p>
          <h2 className="mt-3 font-display text-4xl font-black sm:text-5xl">Kto si?</h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {segments.map((s) => (
              <a key={s.href} href={s.href} className="group relative block">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-foreground transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                <div
                  className={`relative flex h-full min-h-[220px] flex-col justify-between border-4 border-foreground p-8 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0 ${s.bg}`}
                >
                  <div className="space-y-2">
                    <span className="block text-xs font-bold uppercase tracking-widest text-foreground/60">
                      {s.eyebrow}
                    </span>
                    <h3 className="font-display text-4xl font-black uppercase leading-tight text-background lg:text-5xl">
                      {s.title}
                    </h3>
                    <p className="pt-2 text-sm font-bold text-background/90">{s.text}</p>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border-4 border-foreground transition-transform group-hover:rotate-45 ${s.arrowBg}`}
                    >
                      <ArrowRight className="h-6 w-6" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ŽLTÝ PÁS — kampaňový vizuál */}
      <section className="bg-brand-yellow px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.6fr]">
          <div>
            <p className="eyebrow">Kampaň 1. 9. – 17. 11. 2026</p>
            <p className="mt-3 font-display text-3xl font-black">Ready for more?</p>
            <p className="mt-3 text-sm">
              Nová spolupráca, nové výhody k tvojmu preukazu. Bez zmeny toho, čo už máš.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl bg-background shadow-soft-teal">
            <img
              src={heroImage.url}
              alt="Kampaňový vizuál 2026 pre držiteľov ISIC, ITIC a EURO<26"
              className="aspect-[16/7] w-full object-cover"
              width={1920}
              height={700}
            />
          </div>
        </div>
      </section>

      {/* BIELA — čo prináša nová spolupráca */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-pink">Nová spolupráca</p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
              Čo to znamená pre tvoj preukaz
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Od 1. septembra 2026 pribúda k preukazom ISIC, ITIC a EURO&lt;26 nová generácia
              telekomunikačných benefitov.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Nový operátor ",
                d: "Nič nemusíš riešiť. Buď necháš dobehnúť pôvodný paušál alebo prejdeš na nový. \n\n",
              },
              {
                n: "02",
                t: "Nové výhody",
                d: "Viac dát, neobmedzené volania a digitálny obsah v cene.",
              },
              {
                n: "03",
                t: "Je to benefit",
                d: "Voľba operátora je vždy na tebe, s O2 prinášame to najlepšie pre našich držiteľov. ",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-3xl bg-brand-teal-light shadow-soft-teal p-6"
              >
                <span className="font-display text-sm font-black text-brand-pink">{item.n}</span>
                <h3 className="mt-2 font-display text-2xl font-black">{item.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAL — hlavná ponuka 100 GB */}
      <section id="maxx" className="scroll-mt-20 bg-brand-teal py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Hlavná ponuka</p>
              <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
                100 GB dát na Maxx
              </h2>
            </div>
            <p className="max-w-sm text-sm">
              Pre držiteľov ISIC, ITIC a EURO&lt;26. Bez viazanosti, plnou rýchlosťou v 5G.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between rounded-3xl bg-brand-yellow p-7 shadow-soft-pink">
              <div>
                <p className="font-display text-6xl font-black leading-none">100 GB</p>
                <p className="mt-3 text-sm font-bold">dát v 5G každý mesiac</p>
              </div>
              <div className="mt-8 border-t-2 border-foreground pt-5">
                <p className="font-display text-5xl font-black">20 €</p>
                <p className="text-sm font-bold">mesačne, bez viazanosti</p>
              </div>
            </div>

            <div className="rounded-3xl bg-background shadow-soft-teal p-7">
              <ul className="space-y-4">
                {[
                  "100 GB plnou rýchlosťou — nevyčerpané dáta sa prenášajú do ďalšieho mesiaca, po prečerpaní pokračuješ spomalene bez doplatku.",
                  "Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ.",
                  "1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.), meniteľné každých 30 dní.",
                ].map((benefit, i) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="flex size-9 shrink-0 items-center justify-center num-badge">
                      {i + 1}
                    </span>
                    <span className="pt-1.5 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-2xl bg-brand-teal-light p-4 text-sm">
                Podmienka: platný slovenský preukaz ISIC / ITIC / EURO&lt;26 a vek od 18 rokov.
                Rodič môže kúpiť na svoje meno so zadaním čísla preukazu dieťaťa.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
                <Button variant="pink" size="xl" asChild>
                  <a href={OFFER_LINK}>Chcem 100 GB</a>
                </Button>
                <PartnerEndorsement className="text-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BIELA — paušály pre pedagógov */}
      <section id="pausaly" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-orange-dark">Pre pedagógov s ITIC</p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
              Paušály so zľavou vďaka preukazu
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pausaly.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl shadow-soft-teal p-6 ${
                  plan.popular ? "bg-brand-orange shadow-soft-orange" : "bg-background"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-6 border-2 border-foreground bg-brand-yellow px-3 py-1 font-display text-xs font-black uppercase tracking-wider">
                    Najobľúbenejší
                  </span>
                )}
                <h3 className="font-display text-2xl font-black">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-4xl font-black">{plan.price}</span>
                  <span className="pb-1 text-sm line-through opacity-70">{plan.oldPrice}</span>
                </div>
                <span className="text-sm font-bold">mesačne s preukazom</span>

                <ul className="mt-6 flex-1 space-y-2 text-sm">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="border-t-2 border-border pt-2">
                      {perk}
                    </li>
                  ))}
                </ul>

                {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
                <Button
                  variant={plan.popular ? "teal" : "outline"}
                  size="lg"
                  className="mt-6"
                  asChild
                >
                  <a href={OFFER_LINK}>Vybrať {plan.name}</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-3xl bg-brand-pink p-6 shadow-soft-pink text-primary-foreground sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-lg font-black">
              Viazanosť? 02 vykúpi z viazanosti u pôvodného operátora až do 120 €.
            </p>
            {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
            <Button variant="white" size="lg" asChild>
              <a href="#prechod">Ako prejsť</a>
            </Button>
          </div>
        </div>
      </section>

      {/* BIELA — Junior pre rodičov */}
      <section id="junior" className="scroll-mt-20 bg-background pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-brand-pink">Pre rodičov</p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
              Junior výhodnejšie s preukazom dieťaťa
            </h2>
            <p className="mt-4 font-display text-4xl font-black">10,25 €</p>
            <p className="text-sm font-bold">mesačne — rovnaká cena, výhodnejší obsah</p>
            {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
            <Button variant="teal" size="lg" className="mt-6" asChild>
              <a href={OFFER_LINK}>Zistiť viac</a>
            </Button>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "S preukazom bonus 10 GB dát namiesto 4 GB.",
              "Donekonečna piatim: 5 voľných čísel s neobmedzeným volaním a SMS namiesto 3.",
              "Rodičovské limity na dáta aj volania — platíš len skutočnú spotrebu.",
              "Podmienka: aspoň jeden aktívny paušál na rovnakom zákazníckom profile.",
            ].map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-3xl bg-brand-teal-light shadow-soft-teal p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center num-badge">
                  {i + 1}
                </span>
                <span className="pt-1.5 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* TEAL — prečo mať preukaz */}
      <section className="bg-brand-teal py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Viac než zľava</p>
              <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
                Prečo mať preukaz
              </h2>
            </div>
            <img
              src={isicImage.url}
              alt="Kampaňový vizuál pre držiteľov ISIC, ITIC a EURO<26"
              className="hidden w-72 rounded-3xl shadow-soft-teal sm:block"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((card, i) => (
              <li
                key={card.title}
                className="flex items-start gap-4 rounded-3xl bg-background shadow-soft-teal p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center num-badge">
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
      <section id="preukazy" className="scroll-mt-20 bg-background py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-brand-pink">Vyber si správne</p>
            <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
              Na ktorý preukaz máš nárok?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Výhody sú naviazané na tvoj preukaz. Vyber si ten, ktorého podmienky spĺňaš.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.num}
                className={`${card.accent} rounded-3xl bg-background shadow-soft-teal p-6 transition-colors hover:bg-brand-teal-light`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-xs font-black text-card-accent">
                    {card.num}
                  </span>
                  <img src={card.logo} alt={card.alt} className="h-9 w-auto" loading="lazy" />
                </div>
                <h3 className="mt-5 font-display text-xl font-black">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {/* TODO: nahradiť finálnym odkazom na podmienky */}
            <a
              href="#podmienky"
              className="text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
            >
              Pozrieť podmienky
            </a>
            <a
              href="https://objednaj-preukaz.sk"
              className="text-sm font-bold text-foreground underline decoration-brand-pink decoration-2 underline-offset-4"
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
      <section id="prechod" className="scroll-mt-20 bg-brand-yellow py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="eyebrow">Jednoduché. Naozaj.</p>
          <h2 className="mt-2 font-display text-4xl font-black sm:text-5xl">
            Ako prejsť k novému operátorovi
          </h2>
          <p className="mt-4 max-w-2xl text-lg">
            Zvládneš to z pohodlia domova a číslo si necháš.
          </p>

          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-3xl bg-background shadow-soft-teal p-6"
              >
                <span className="font-display text-sm font-black text-brand-pink">
                  KROK {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl font-black">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
            <Button variant="pink" size="xl" asChild>
              <a href={OFFER_LINK}>Preniesť si číslo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* KALKULAČKA + FAQ */}
      <SavingsCalculator />
      <CampaignFaq />

      {/* ŽLTÝ PÁS — kontakt */}
      <section id="podmienky" className="scroll-mt-20 bg-brand-yellow py-20">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">Poradíme ti</p>
          <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
            Neviete si vybrať?
          </h2>
          <p className="mt-3 text-sm">
            Napíšte nám a pomôžeme vybrať ponuku podľa vášho preukazu — ISIC, ITIC alebo
            EURO&lt;26.
          </p>
          <div className="mt-8 rounded-3xl bg-card p-6 shadow-soft-pink sm:p-8">
            <p className="font-display text-lg font-black">Kontakt</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Program a preukazy zastrešuje združenie CKM SYTS, výhradný zástupca preukazov ISIC,
              ITIC a EURO&lt;26 na Slovensku.
            </p>
            <Button variant="teal" size="lg" className="mt-6" asChild>
              <a href="mailto:info@ckm.sk">Napísať nám</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER — teal */}
      <footer className="bg-brand-teal py-12 text-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-black">Ready for more?</p>
            <p className="mt-3 max-w-md text-sm">
              Kampaň štartuje 1. 9. 2026. Nová spolupráca prináša držiteľom ISIC, ITIC a
              EURO&lt;26 viac dát, volaní a digitálneho obsahu.
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-3xl bg-background shadow-soft-teal px-4 py-2 w-fit">
              <img src={isicLogo.url} alt="ISIC" className="h-6 w-auto" loading="lazy" />
              <img src={iticLogo.url} alt="ITIC" className="h-6 w-auto" loading="lazy" />
              <img src={eycaLogo.url} alt="EURO<26" className="h-6 w-auto" loading="lazy" />
            </div>
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
              <a href="#podmienky" className="underline decoration-brand-pink decoration-2 underline-offset-4">
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
    </main>
  );
}
