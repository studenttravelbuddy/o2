import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgePercent,
  Bus,
  Check,
  GraduationCap,
  Laptop,
  MessageCircle,
  ShieldCheck,
  Signal,
  Sparkles,
  Users,
} from "lucide-react";

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

const cards = [
  {
    id: "eyca",
    num: "01",
    logo: eycaLogo.url,
    alt: "EURO<26 / European Youth Card",
    title: "Pre mladých do 26 rokov",
    text: "Vek do 26 rokov (vrátane).",
    ring: "border-eyca",
    tint: "bg-eyca/15",
  },
  {
    id: "isic",
    num: "02",
    logo: isicLogo.url,
    alt: "ISIC – International Student Identity Card",
    title: "Pre študentov ZŠ, SŠ a VŠ",
    text: "Denné štúdium na základnej, strednej alebo vysokej škole.",
    ring: "border-isic",
    tint: "bg-isic/15",
  },
  {
    id: "itic",
    num: "03",
    logo: iticLogo.url,
    alt: "ITIC – International Teacher Identity Card",
    title: "Pre učiteľov a pedagógov",
    text: "Pedagogický zamestnanec na plný úväzok.",
    ring: "border-itic",
    tint: "bg-itic/15",
  },
];

const segments = [
  { id: "maxx", label: "Som študent", note: "100 GB na Maxx", accent: "bg-isic text-primary-deep" },
  { id: "junior", label: "Som rodič", note: "Junior s bonusom", accent: "bg-isic-light text-primary-deep" },
  { id: "pausaly", label: "Som pedagóg", note: "Paušál so zľavou", accent: "bg-itic text-primary-foreground" },
  { id: "maxx", label: "Mám EURO<26", note: "100 GB na Maxx", accent: "bg-eyca text-primary-deep" },
];

const reassurance = [
  { icon: ShieldCheck, text: "Tvoj preukaz platí ďalej — nič nemusíš riešiť." },
  { icon: Sparkles, text: "Nové výhody: viac dát, volaní aj digitálneho obsahu." },
  { icon: Check, text: "Je to benefit, nie povinnosť. Voľba je na tebe." },
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
      "Cashback 5 € mesačne (pri spotrebe do 15 GB a aktívnom celý mesiac)",
      "Bonus na zariadenie",
      "1 predplatné v cene",
      "1 SIM navyše zdarma",
    ],
  },
];

const cardBenefits = [
  {
    icon: BadgePercent,
    title: "Denné zľavy",
    text: "Preukaz nie je len doklad. Je to každodenný nástroj na úsporu v stravovaní, kultúre, športe, cestovaní, móde a službách.",
    tint: "bg-isic/10",
  },
  {
    icon: Bus,
    title: "Doprava a cestovanie",
    text: "Výhody a zľavy doma aj v zahraničí, kdekoľvek preukaz platí.",
    tint: "bg-eyca/15",
  },
  {
    icon: GraduationCap,
    title: "Škola a identita",
    text: "ISIC/ITIC potvrdzuje status študenta alebo učiteľa a zjednodušuje využívanie benefitov.",
    tint: "bg-itic/10",
  },
  {
    icon: Laptop,
    title: "Technológie a voľný čas",
    text: "Preukazy sú relevantné aj pre digitálny život: dáta, stream, zariadenia, štúdium a zábava.",
    tint: "bg-isic/10",
  },
  {
    icon: Users,
    title: "Komunita a status",
    text: "Patríš do medzinárodnej komunity študentov, učiteľov a mladých ľudí.",
    tint: "bg-eyca-pink/10",
  },
  {
    icon: Sparkles,
    title: "Smart value",
    text: "Nový telekomunikačný benefit robí preukaz praktickejším — okamžitá finančná hodnota.",
    tint: "bg-isic-light",
  },
];

const steps = [
  "Na webe alebo v aplikácii operátora si vyberieš paušál, o ktorý máš záujem.",
  "V košíku označíš, že chceš preniesť svoje číslo od pôvodného operátora.",
  "Zadáš telefónne číslo, ktoré chceš preniesť.",
  "Vyplníš osobné údaje — musia byť rovnaké ako u pôvodného operátora. Potrebuješ občiansky preukaz a preukaz ISIC/ITIC/EURO<26.",
  "Potvrdíš objednávku — do 1–2 pracovných dní ti kuriér doručí SIM kartu a podpíšeš dokumenty.",
  "Po vrátení dokumentov sa spustí prenos čísla — trvá približne 3 pracovné dni.",
  "O úspešnom prenose ťa informujeme SMS správou.",
  "Vymeníš starú SIM kartu za novú — hotovo.",
];

function PartnerEndorsement({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-bold">Spolu s</span>
      <img src={partnerLogo.url} alt="Logo O2" className="h-9 w-9 rounded-lg shadow-card" />
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background">
      {/* HEADER + HERO */}
      <section className="hero-surface relative overflow-hidden text-primary-foreground">
        <span className="bubble left-[6%] top-[14%] h-24 w-24" />
        <span className="bubble right-[16%] top-[8%] h-14 w-14" />
        <span className="bubble left-[24%] bottom-[-3rem] h-44 w-44" />
        <span className="bubble right-[5%] bottom-[12%] h-28 w-28" />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:pb-24 sm:pt-10">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 rounded-full bg-background/95 px-4 py-2">
              <img src={isicLogo.url} alt="ISIC" className="h-6 w-auto" />
              <span className="h-5 w-px bg-border" />
              <img src={iticLogo.url} alt="ITIC" className="h-6 w-auto" />
              <span className="h-5 w-px bg-border" />
              <img src={eycaLogo.url} alt="EURO<26" className="h-6 w-auto" />
            </div>
            <PartnerEndorsement className="opacity-95" />
          </header>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="eyebrow inline-block rounded-full bg-accent-yellow px-4 py-1.5 text-accent-yellow-foreground">
                Kampaň 2026
              </span>
              <h1 className="mt-5 font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
                Ready for more?
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
                Tento rok štartujeme kampaň vo veľkom. S novým operátorom prinášame držiteľom ISIC,
                ITIC a EURO&lt;26 viac dát, viac volaní a viac digitálneho obsahu.
              </p>
              <p className="mt-3 text-sm font-bold text-primary-foreground/80">
                Od 1. 9. 2026
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="onBrand" size="xl" asChild>
                  <a href="#maxx">
                    Objaviť výhody
                    <ArrowRight />
                  </a>
                </Button>
                <Button variant="yellow" size="xl" asChild>
                  <a href="#preukazy">Na ktorý preukaz mám nárok?</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage.url}
                alt="Kampaň 2026 pre držiteľov ISIC, ITIC a EURO<26"
                className="w-full rounded-3xl object-cover shadow-card"
                width={1920}
                height={700}
              />
            </div>
          </div>

          {/* Segmentové dlaždice */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment) => (
              <a
                key={segment.label}
                href={`#${segment.id}`}
                className={`group rounded-2xl px-5 py-4 transition-transform hover:-translate-y-1 ${segment.accent}`}
              >
                <span className="block font-display text-base">{segment.label}</span>
                <span className="mt-1 flex items-center gap-1 text-sm font-bold opacity-85">
                  {segment.note}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* NOVÁ SPOLUPRÁCA */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <p className="eyebrow text-isic-deep">Nová spolupráca</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Čo to znamená pre tvoj preukaz</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Od 1. septembra 2026 pribúda k preukazom ISIC, ITIC a EURO&lt;26 nová generácia
            telekomunikačných benefitov. Tvoj preukaz platí ďalej presne tak, ako doteraz — len s
            väčším objemom dát a lepším obsahom.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {reassurance.map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-2xl bg-secondary p-6">
                <Icon className="size-6 text-isic-deep" />
                <p className="mt-3 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HLAVNÁ PONUKA */}
      <section id="maxx" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-3xl bg-card shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="hero-surface relative flex items-center justify-center overflow-hidden p-10 text-primary-foreground">
                <span className="bubble left-[8%] top-[10%] h-20 w-20" />
                <span className="bubble right-[10%] bottom-[8%] h-28 w-28" />
                <div className="relative text-center">
                  <p className="font-display text-6xl">100 GB</p>
                  <p className="mt-3 text-lg text-primary-foreground/90">
                    dát v 5G pre držiteľov ISIC, ITIC a EURO&lt;26
                  </p>
                  <div className="mt-8 inline-flex flex-col items-center justify-center rounded-full bg-accent-yellow px-8 py-6 text-accent-yellow-foreground">
                    <span className="font-display text-4xl">20 €</span>
                    <span className="text-sm font-bold">mesačne, bez viazanosti</span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <p className="eyebrow text-isic-deep">Hlavná ponuka</p>
                <h2 className="mt-3 text-3xl">100 GB na Maxx s preukazom</h2>

                <ul className="mt-6 space-y-4 text-base">
                  {[
                    "100 GB dát plnou rýchlosťou v 5G — nevyčerpané dáta sa prenášajú do ďalšieho mesiaca; po prečerpaní pokračuješ spomalene bez doplatku.",
                    "Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ.",
                    "1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.), meniteľné každých 30 dní.",
                  ].map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <Signal className="mt-0.5 size-5 shrink-0 text-isic-deep" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-2xl bg-isic-light p-4 text-sm text-primary-deep">
                  Podmienka: platný slovenský preukaz ISIC / ITIC / EURO&lt;26 a vek od 18 rokov.
                  Rodič môže kúpiť na svoje meno so zadaním čísla preukazu dieťaťa.
                </p>

                <div className="mt-7">
                  {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
                  <Button variant="brand" size="xl" asChild>
                    <a href={OFFER_LINK}>Chcem 100 GB</a>
                  </Button>
                </div>
                <PartnerEndorsement className="mt-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAUŠÁLY ITIC */}
      <section id="pausaly" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-itic-deep">Pre pedagógov s ITIC</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Paušály so zľavou vďaka preukazu</h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pausaly.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border-2 p-7 transition-shadow hover:shadow-card-hover ${
                  plan.popular ? "border-itic shadow-card" : "border-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent-yellow px-4 py-1 text-xs font-bold text-accent-yellow-foreground">
                    Najobľúbenejší
                  </span>
                )}
                <h3 className="font-display text-xl">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-4xl text-itic-deep">{plan.price}</span>
                  <span className="pb-1 text-sm text-muted-foreground line-through">
                    {plan.oldPrice}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">mesačne s preukazom</span>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-itic" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
                <Button
                  variant={plan.popular ? "itic" : "softOutline"}
                  size="lg"
                  className="mt-7"
                  asChild
                >
                  <a href={OFFER_LINK}>Vybrať {plan.name}</a>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-2xl bg-secondary p-5 text-sm text-muted-foreground">
            Výkup z viazanosti u pôvodného operátora až do 120 €. Zľava sa odpočítava mesačne priamo
            z faktúry. Bez viazanosti.
          </p>
        </div>
      </section>

      {/* JUNIOR */}
      <section id="junior" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-8 rounded-3xl bg-card p-8 shadow-card sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-isic-deep">Pre rodičov</p>
              <h2 className="mt-3 text-3xl">Junior výhodnejšie s preukazom dieťaťa</h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl text-isic-deep">10,25 €</span>
                <span className="pb-1 text-sm text-muted-foreground">mesačne</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Rovnaká cena, výhodnejší obsah s preukazom.
              </p>
              {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
              <Button variant="brand" size="lg" className="mt-7" asChild>
                <a href={OFFER_LINK}>Zistiť viac</a>
              </Button>
            </div>

            <ul className="space-y-4 text-base">
              {[
                "S ISIC/ITIC/EURO<26 bonusom 10 GB dát namiesto 4 GB.",
                "5 voľných čísel s neobmedzeným volaním a SMS namiesto 3.",
                "Rodičovské limity na dáta aj volania a bezpečnostná ochrana v cene.",
                "Podmienka: aspoň jeden aktívny paušál na rovnakom zákazníckom profile.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-isic-light p-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-isic-deep" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* NA KTORÝ PREUKAZ MÁŠ NÁROK */}
      <section id="preukazy" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-isic-deep">Vyber si správne</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Na ktorý preukaz máš nárok?</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Výhody sú naviazané na tvoj preukaz. Vyber si ten, ktorého podmienky spĺňaš.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`rounded-3xl border-2 p-7 transition-transform hover:-translate-y-1 ${card.ring} ${card.tint}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-2xl text-primary-deep/40">{card.num}</span>
                  <img src={card.logo} alt={card.alt} className="h-9 w-auto" loading="lazy" />
                </div>
                <h3 className="mt-6 font-display text-lg">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREČO MAŤ PREUKAZ */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="eyebrow text-isic-deep">Viac než zľava</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Prečo mať ISIC, ITIC alebo EURO&lt;26
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {cardBenefits.map(({ icon: Icon, title, text, tint }) => (
                  <div key={title} className={`rounded-2xl p-5 ${tint}`}>
                    <Icon className="size-6 text-primary-deep" />
                    <h3 className="mt-3 font-display text-lg">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={isicImage.url}
              alt="Kampaňový vizuál pre držiteľov ISIC, ITIC a EURO<26"
              className="w-full rounded-3xl shadow-card"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KALKULAČKA */}
      <SavingsCalculator />

      {/* STEPPER */}
      <section id="prechod" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p className="eyebrow text-isic-deep">Jednoduché. Naozaj.</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Ako prejsť k novému operátorovi</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Zvládneš to z pohodlia domova, číslo si necháš.
          </p>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li key={step} className="rounded-3xl border-2 border-border p-6">
                <span className="eyebrow text-isic-deep">
                  Krok {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-medium">{step}</p>
              </li>
            ))}
          </ol>

          <div className="hero-surface relative mt-10 overflow-hidden rounded-3xl p-8 text-primary-foreground sm:p-10">
            <span className="bubble right-[8%] top-[-2rem] h-32 w-32" />
            <p className="relative max-w-2xl text-lg font-bold">
              Ak si u pôvodného operátora viazaný zmluvou, vykúpime ťa z viazanosti až do výšky
              120 €.
            </p>
            {/* TODO: nahradiť finálnym odkazom na isic.sk/ponuka */}
            <Button variant="onBrand" size="xl" className="relative mt-6" asChild>
              <a href={OFFER_LINK}>Preniesť si číslo</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <CampaignFaq />

      {/* PORADÍME */}
      <section id="podmienky" className="scroll-mt-20 bg-secondary py-12">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-5">
          <div className="flex items-start gap-4">
            <MessageCircle className="size-8 text-isic-deep" />
            <div>
              <h2 className="font-display text-2xl">Neviete si vybrať? Poradíme vám</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Napíšte nám a pomôžeme vybrať ponuku podľa vášho preukazu.
              </p>
            </div>
          </div>
          <Button variant="brand" size="xl" asChild>
            <a href="mailto:info@ckm.sk">Napísať nám</a>
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="hero-surface relative overflow-hidden py-14 text-primary-foreground">
        <span className="bubble left-[10%] top-[15%] h-24 w-24" />
        <span className="bubble right-[12%] bottom-[-2rem] h-36 w-36" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="font-display text-3xl">Ready for more?</p>
          <p className="mt-3 max-w-3xl text-primary-foreground/85">
            Kampaň štartuje 1. 9. 2026. Nová spolupráca prináša držiteľom ISIC, ITIC a EURO&lt;26
            viac dát, volaní a digitálneho obsahu.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-8 border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-4 rounded-2xl bg-background/95 px-4 py-2">
                <img src={isicLogo.url} alt="ISIC" className="h-6 w-auto" loading="lazy" />
                <img src={iticLogo.url} alt="ITIC" className="h-6 w-auto" loading="lazy" />
                <img src={eycaLogo.url} alt="EURO<26" className="h-6 w-auto" loading="lazy" />
              </div>
              <div className="flex flex-wrap gap-5 text-sm font-bold">
                <a href="https://isic.sk" className="hover:underline">
                  isic.sk
                </a>
                <a href="https://itic.sk" className="hover:underline">
                  itic.sk
                </a>
                <a href="https://euro26.sk" className="hover:underline">
                  euro26.sk
                </a>
              </div>
            </div>
            <PartnerEndorsement />
          </div>
          <p className="mt-8 text-xs text-primary-foreground/70">
            © 2026 CKM SYTS — prevádzkovateľ preukazov ISIC, ITIC a EURO&lt;26 na Slovensku.
            Ďakujeme spoločnosti Orange za 15 rokov spolupráce.
          </p>
        </div>
      </footer>
    </main>
  );
}
