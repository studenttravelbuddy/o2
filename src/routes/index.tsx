import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgePercent,
  Bus,
  Check,
  GraduationCap,
  Laptop,
  Lock,
  MessageCircle,
  ShieldCheck,
  Signal,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { O2Faq } from "@/components/O2Faq";
import heroImage from "@/assets/o2-hero.png.asset.json";
import isicImage from "@/assets/o2-isic.png.asset.json";
import o2Logo from "@/assets/o2-logo.png.asset.json";

// EMBARGO: stránka sa nesmie verejne publikovať ani indexovať pred 1. 9. 2026.
// TODO: nahradiť finálnym odkazom na isic.sk/o2 (všetky CTA nižšie sú placeholdery).
const O2_LINK = "#o2-maxx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "O2 × CKM SYTS — nová ponuka pre ISIC, ITIC a EURO<26" },
      {
        name: "description",
        content:
          "Od 1. septembra 2026 majú držitelia ISIC, ITIC a EURO<26 novú ponuku telekomunikačných výhod v spolupráci s O2 — O2 Maxx, O2 Junior a paušály so zľavou.",
      },
      { property: "og:title", content: "O2 × CKM SYTS — nová ponuka pre ISIC, ITIC a EURO<26" },
      {
        property: "og:description",
        content:
          "O2 Maxx pre študentov s ISIC, O2 Junior výhodnejšie s preukazom a O2 Paušál so zľavou vďaka ITIC. Prechod z Orange krok za krokom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Index,
});

const segments = [
  { id: "o2-maxx", label: "Som študent (ISIC)", note: "O2 Maxx" },
  { id: "o2-junior", label: "Som rodič", note: "O2 Junior" },
  { id: "o2-pausaly", label: "Som pedagóg (ITIC)", note: "O2 Paušál so zľavou" },
  { id: "o2-maxx", label: "Mám EURO<26", note: "O2 Maxx s kartou EURO<26" },
];

const reassurance = [
  { icon: ShieldCheck, text: "Váš preukaz zostáva v platnosti — nič sa nemení." },
  { icon: Timer, text: "Yoxo pokračuje podľa vašej zmluvy s Orange až do konca viazanosti." },
  { icon: Lock, text: "Prechod na O2 je dobrovoľný, nie povinný." },
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
      "1 SIM navyše zdarma cez O2 Connect",
    ],
  },
];

const cardBenefits = [
  {
    icon: BadgePercent,
    title: "Denné zľavy",
    text: "Preukaz nie je len doklad. Je to každodenný nástroj na úsporu v stravovaní, kultúre, športe, cestovaní, móde, aktivitách a službách.",
  },
  {
    icon: Bus,
    title: "Doprava a cestovanie",
    text: "ISIC pomáha študentom využívať výhody a zľavy doma aj v zahraničí.",
  },
  {
    icon: GraduationCap,
    title: "Škola a identita",
    text: "ISIC/ITIC potvrdzuje status študenta alebo učiteľa a zjednodušuje využívanie benefitov.",
  },
  {
    icon: Laptop,
    title: "Technológie a voľný čas",
    text: "Preukazy sú relevantné aj pre digitálny život: dáta, stream, zariadenia, štúdium a zábavu.",
  },
  {
    icon: Users,
    title: "Komunita a status",
    text: "Držiteľ patrí do medzinárodnej komunity študentov, učiteľov a mladých ľudí.",
  },
  {
    icon: Sparkles,
    title: "Smart value",
    text: "O2 benefit robí preukaz praktickejším — ukazuje okamžitú finančnú a používateľskú hodnotu.",
  },
];

const steps = [
  "Na webe alebo v O2 Aplikácii si vyberte paušál, o ktorý máte záujem.",
  "V košíku označíte, že chcete preniesť svoje číslo od Orange.",
  "Zadáte telefónne číslo, ktoré chcete preniesť.",
  "Vyplníte svoje osobné údaje — musia byť rovnaké ako u Orange. Budete potrebovať občiansky preukaz a preukaz ISIC/ITIC/EURO<26.",
  "Potvrdíte objednávku — do 1–2 pracovných dní vám kuriér doručí SIM kartu a podpíše dokumenty.",
  "Po vrátení dokumentov sa spustí prenos čísla — trvá približne 3 pracovné dni.",
  "O úspešnom prenose vás informujeme SMS správou.",
  "Vymeníte si starú SIM kartu za novú — hotovo.",
];

function O2Endorsement({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm font-semibold">Spolu s</span>
      <img src={o2Logo.url} alt="Logo O2" className="h-8 w-8 rounded-md" />
    </div>
  );
}

function Index() {
  const [activeSegment, setActiveSegment] = useState(0);

  return (
    <main className="bg-background">
      {/* 1. HERO */}
      <section className="hero-surface relative overflow-hidden text-primary-foreground">
        <span className="bubble left-[6%] top-[12%] h-24 w-24" />
        <span className="bubble right-[14%] top-[8%] h-14 w-14" />
        <span className="bubble left-[22%] bottom-[-3rem] h-44 w-44" />
        <span className="bubble right-[4%] bottom-[10%] h-28 w-28" />

        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pb-24 sm:pt-14">
          <div className="flex items-center justify-between gap-4">
            <span className="font-display text-lg font-bold tracking-tight">
              CKM SYTS · ISIC · ITIC · EURO&lt;26
            </span>
            <O2Endorsement className="opacity-95" />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Po 15 rokoch s Orange prichádza nová éra — s O2.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
                Od 1. septembra 2026 majú držitelia ISIC, ITIC a EURO&lt;26 novú ponuku
                telekomunikačných výhod v spolupráci s O2.
              </p>

              <div className="mt-8">
                <Button variant="onBlue" size="xl" asChild>
                  <a href="#o2-maxx">
                    Objaviť ponuku O2
                    <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage.url}
                alt="Kampaň O2 Maxx pre držiteľov ISIC, ITIC a EURO<26"
                className="w-full rounded-3xl object-cover shadow-card"
                width={1920}
                height={700}
              />
            </div>
          </div>

          {/* Segmentové dlaždice */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map((segment, index) => (
              <a
                key={segment.label}
                href={`#${segment.id}`}
                onClick={() => setActiveSegment(index)}
                className={`rounded-2xl border px-5 py-4 transition-colors ${
                  activeSegment === index
                    ? "border-transparent bg-background text-primary"
                    : "border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                <span className="block font-display text-base font-bold">{segment.label}</span>
                <span className="mt-1 flex items-center gap-1 text-sm opacity-80">
                  {segment.note}
                  <ArrowRight className="size-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. BRIDGE */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <h2 className="text-3xl font-bold sm:text-4xl">Prečo sa to mení</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Ďakujeme spoločnosti Orange za 15 rokov spolupráce. Od 1. septembra 2026 prinášame
            držiteľom ISIC, ITIC a EURO&lt;26 novú ponuku telekomunikačných benefitov v spolupráci s
            O2 — s novým paušálom O2 Maxx. Ak už využívate Yoxo a máte otázky k jeho ďalšiemu
            fungovaniu, obráťte sa prosím priamo na zákaznícke centrum Orange.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {reassurance.map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-2xl bg-secondary p-6">
                <Icon className="size-6 text-primary" />
                <p className="mt-3 font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. O2 MAXX */}
      <section id="o2-maxx" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="overflow-hidden rounded-3xl bg-card shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="hero-surface relative flex items-center justify-center overflow-hidden p-10 text-primary-foreground">
                <span className="bubble left-[8%] top-[10%] h-20 w-20" />
                <span className="bubble right-[10%] bottom-[8%] h-28 w-28" />
                <div className="relative text-center">
                  <p className="font-display text-5xl font-bold sm:text-6xl">O2 Maxx</p>
                  <p className="mt-3 text-lg text-primary-foreground/85">
                    100 GB dát v 5G pre držiteľov ISIC, ITIC a EURO&lt;26
                  </p>
                  <div className="mt-8 inline-flex flex-col items-center justify-center rounded-full bg-accent-yellow px-8 py-6 text-accent-yellow-foreground">
                    <span className="font-display text-4xl font-bold">20 €</span>
                    <span className="text-sm font-semibold">mesačne, bez viazanosti</span>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Hlavná ponuka
                </p>
                <h2 className="mt-2 text-3xl font-bold">O2 Maxx pre študentov s ISIC</h2>

                <ul className="mt-6 space-y-4 text-base">
                  {[
                    "100 GB dát plnou rýchlosťou v 5G — nevyčerpané dáta sa prenášajú do ďalšieho mesiaca; po prečerpaní pokračuje spomalene 2 Mbit/s / 1 Mbit/s bez doplatku.",
                    "Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ.",
                    "1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.), meniteľné každých 30 dní v O2 Aplikácii.",
                  ].map((benefit) => (
                    <li key={benefit} className="flex gap-3">
                      <Signal className="mt-0.5 size-5 shrink-0 text-primary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 rounded-2xl bg-secondary p-4 text-sm text-muted-foreground">
                  Podmienka: platný slovenský preukaz ISIC / ITIC / EURO&lt;26 a vek od 18 rokov.
                  Rodič môže kúpiť na svoje meno so zadaním čísla preukazu dieťaťa.
                </p>

                <div className="mt-7">
                  {/* TODO: nahradiť finálnym odkazom na isic.sk/o2 */}
                  <Button variant="brand" size="xl" asChild>
                    <a href={O2_LINK}>Aktivovať O2 Maxx</a>
                  </Button>
                </div>
                <O2Endorsement className="mt-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O2 PAUŠÁLY */}
      <section id="o2-pausaly" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pre pedagógov s ITIC a ostatných
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">O2 Paušál so zľavou vďaka ITIC</h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {pausaly.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-7 transition-shadow hover:shadow-card-hover ${
                  plan.popular ? "border-primary/40 shadow-card" : "border-border shadow-card/40"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent-yellow px-4 py-1 text-xs font-bold text-accent-yellow-foreground">
                    Najobľúbenejší
                  </span>
                )}
                <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="pb-1 text-sm text-muted-foreground line-through">
                    {plan.oldPrice}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">mesačne s preukazom</span>

                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* TODO: nahradiť finálnym odkazom na isic.sk/o2 */}
                <Button
                  variant={plan.popular ? "brand" : "softOutline"}
                  size="lg"
                  className="mt-7"
                  asChild
                >
                  <a href={O2_LINK}>Vybrať {plan.name}</a>
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

      {/* 5. O2 JUNIOR */}
      <section id="o2-junior" className="scroll-mt-20 bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid gap-8 rounded-3xl bg-card p-8 shadow-card sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Pre rodičov
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                O2 Junior výhodnejšie s ISIC/EURO&lt;26 preukazom
              </h2>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-bold text-primary">10,25 €</span>
                <span className="pb-1 text-sm text-muted-foreground">mesačne</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Rovnaká cena, výhodnejší obsah s preukazom.
              </p>
              {/* TODO: nahradiť finálnym odkazom na isic.sk/o2 */}
              <Button variant="brand" size="lg" className="mt-7" asChild>
                <a href={O2_LINK}>Zistiť viac o O2 Junior</a>
              </Button>
            </div>

            <ul className="space-y-4 text-base">
              {[
                "S ISIC/ITIC/EURO<26 bonusom 10 GB dát namiesto 4 GB.",
                "5 voľných čísel s neobmedzeným volaním a SMS namiesto 3 — služba „Donekonečna piatim“.",
                "Rodičovské limity na dáta aj volania nastaviteľné v O2 Aplikácii, O2 Security v cene.",
                "Podmienka: aspoň jeden aktívny O2 Paušál na rovnakom zákazníckom profile — O2 Junior sa nedá kúpiť samostatne.",
              ].map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-secondary p-4">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. PREČO MAŤ PREUKAZ */}
      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Prečo mať ISIC, ITIC alebo EURO&lt;26
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {cardBenefits.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border p-5 transition-shadow hover:shadow-card"
                  >
                    <Icon className="size-6 text-primary" />
                    <h3 className="mt-3 font-display text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={isicImage.url}
              alt="O2 Maxx pre ISIC, ITIC a EURO<26"
              className="w-full rounded-3xl shadow-card"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* BONUS: kalkulačka úspory */}
      <SavingsCalculator />

      {/* 7. AKO PREJSŤ Z ORANGE NA O2 */}
      <section id="prechod" className="scroll-mt-20 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Prechod na O2 je jednoduchý — zvládnete ho z pohodlia domova.
          </h2>

          <ol className="mt-10 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-2xl bg-secondary p-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>

          <div className="hero-surface relative mt-10 overflow-hidden rounded-3xl p-8 text-primary-foreground sm:p-10">
            <span className="bubble right-[8%] top-[-2rem] h-32 w-32" />
            <p className="relative max-w-2xl text-lg font-semibold">
              Ak ste u Orange viazaní zmluvou, vykúpime vás z viazanosti až do výšky 120 €.
            </p>
            {/* TODO: nahradiť finálnym odkazom na isic.sk/o2 */}
            <Button variant="onBlue" size="xl" className="relative mt-6" asChild>
              <a href={O2_LINK}>Preniesť číslo do O2</a>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <O2Faq />

      {/* Poradíme vám */}
      <section id="podmienky" className="scroll-mt-20 bg-secondary py-12">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-5">
          <div className="flex items-start gap-4">
            <MessageCircle className="size-8 text-primary" />
            <div>
              <h2 className="font-display text-2xl font-bold">Neviete si vybrať? Poradíme vám</h2>
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

      {/* 9. FOOTER */}
      <footer className="hero-surface relative overflow-hidden py-14 text-primary-foreground">
        <span className="bubble left-[10%] top-[15%] h-24 w-24" />
        <span className="bubble right-[12%] bottom-[-2rem] h-36 w-36" />
        <div className="relative mx-auto max-w-6xl px-5">
          <p className="max-w-3xl text-primary-foreground/85">
            Ďakujeme spoločnosti Orange za 15 rokov spolupráce. Od 1. septembra 2026 prinášame
            držiteľom ISIC, ITIC a EURO&lt;26 novú ponuku telekomunikačných benefitov v spolupráci s
            O2.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-8 border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-wrap gap-6 text-sm font-semibold">
              <a href="https://isic.sk" className="hover:underline">
                isic.sk
              </a>
              <a href="https://itic.sk" className="hover:underline">
                itic.sk
              </a>
              <a href="https://euro26.sk" className="hover:underline">
                euro26.sk
              </a>
              <a href="https://o2.sk" className="hover:underline">
                o2.sk
              </a>
            </div>
            <O2Endorsement />
          </div>
          <p className="mt-8 text-xs text-primary-foreground/70">
            © 2026 CKM SYTS — prevádzkovateľ preukazov ISIC, ITIC a EURO&lt;26 na Slovensku.
          </p>
        </div>
      </footer>
    </main>
  );
}
