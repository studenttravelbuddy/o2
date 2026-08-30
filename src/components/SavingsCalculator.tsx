import { useState } from "react";
import { Button } from "@/components/ui/button";

type Plan = {
  id: string;
  name: string;
  price: number;
  benefits: string[];
};

const plans: Plan[] = [
  {
    id: "maxx",
    name: "Maxx – 100 GB",
    price: 20,
    benefits: [
      "100 GB dát v 5G plnou rýchlosťou",
      "Nevyčerpané dáta sa prenášajú do ďalšieho mesiaca",
      "Po prečerpaní pokračuješ spomalene bez doplatku",
      "Neobmedzené volania a SMS/MMS na Slovensku a v celej EÚ",
      "1 predplatné na 12 mesiacov v cene (Netflix, Voyo, HBO Max a i.)",
      "Predplatné meniteľné každých 30 dní",
      "Bez viazanosti",
      "Podmienka: platný preukaz ISIC/ITIC/EURO<26 vydaný na Slovensku, vek od 18 rokov",
    ],
  },
  {
    id: "zakladny",
    name: "Základný",
    price: 18,
    benefits: [
      "10 GB dát",
      "200 minút",
      "Neobmedzené správy",
      "Bonus na zariadenie",
      "Zľava vďaka preukazu ISIC/ITIC/EURO<26",
      "Vykúpenie z viazanosti u pôvodného operátora až do 120 €",
    ],
  },
  {
    id: "pohodovy",
    name: "Pohodový",
    price: 28,
    benefits: [
      "15 GB dát",
      "Neobmedzené volania a správy",
      "Bonus na zariadenie",
      "1 predplatné v cene",
      "Zľava vďaka preukazu ISIC/ITIC/EURO<26",
      "Vykúpenie z viazanosti u pôvodného operátora až do 120 €",
    ],
  },
  {
    id: "bezstarostny",
    name: "Bezstarostný",
    price: 38,
    benefits: [
      "Neobmedzené dáta, volania a správy",
      "Cashback 5 € mesačne (do 15 GB dát)",
      "Bonus na zariadenie",
      "1 predplatné v cene",
      "1 SIM navyše zdarma",
      "Najobľúbenejší paušál",
      "Zľava vďaka preukazu ISIC/ITIC/EURO<26",
      "Vykúpenie z viazanosti u pôvodného operátora až do 120 €",
    ],
  },
  {
    id: "junior",
    name: "Junior",
    price: 10.25,
    benefits: [
      "10 GB dát s preukazom dieťaťa (namiesto 4 GB)",
      "Donekonečna piatim: 5 voľných čísel s neobmedzeným volaním a SMS (namiesto 3)",
      "Rodičovské limity na dáta aj volania",
      "Platíš len skutočnú spotrebu",
      "Podmienka: aspoň jeden aktívny hlavný paušál na rovnakom zákazníckom profile",
    ],
  },
];

/**
 * Interaktívna kalkulačka: porovná aktuálnu cenu paušálu s vybranou ponukou.
 */
export function SavingsCalculator() {
  const [open, setOpen] = useState(false);
  const [spend, setSpend] = useState("30");
  const [selectedId, setSelectedId] = useState<string>(plans[0]!.id);

  const current = Number(spend.replace(",", ".")) || 0;
  const selected = plans.find((p) => p.id === selectedId) ?? plans[0]!;
  const monthlySaving = Math.max(0, current - selected.price);
  const yearlySaving = monthlySaving * 12;

  return (
    <section id="kalkulacka" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="rounded-3xl bg-card p-6 shadow-soft-pink sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-brand-pink">KVANTIFIKOVANÁ METAMORFÓZA - POZRI SA ČO MÔŽEŠ ZÍSKAŤ </p>
              <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
                Čo môžeš získať s novými paušálmi?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Porovnaj svoju aktuálnu cenu paušálu s ponukou a pozri si benefity.
              </p>
            </div>
            <Button variant="yellow" size="lg" onClick={() => setOpen(!open)}>
              {open ? "Skryť" : "Poďme na to ->"}
            </Button>
          </div>

          {open && (
            <div className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold">
                    Koľko dnes platíš mesačne za paušál?
                  </span>
                  <div className="mt-2 flex items-center gap-2 rounded-3xl bg-background px-4 shadow-soft-teal">
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      value={spend}
                      onChange={(e) => setSpend(e.target.value)}
                      className="h-12 w-full bg-transparent font-display text-lg font-black outline-none"
                      aria-label="Súčasná mesačná cena paušálu v eurách"
                    />
                    <span className="font-bold text-muted-foreground">€</span>
                  </div>
                </label>

                <div className="rounded-3xl bg-brand-teal p-5 shadow-soft-teal">
                  {yearlySaving === 0 ? (
                    <>
                      <p className="font-display text-xl font-black">
                        Finančne to vychádza zhruba rovnako, ale pozri si skvelé benefity nižšie.
                      </p>
                      <p className="mt-2 text-xs">
                        Paušál {selected.name} stojí {selected.price} €/mesiac.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="eyebrow">Odhadovaná ročná úspora</p>
                      <p className="font-display text-5xl font-black">
                        {yearlySaving.toFixed(0)} €
                      </p>
                      <p className="mt-2 text-xs">
                        Pri porovnaní s paušálom {selected.name} za {selected.price} €/mesiac (
                        {monthlySaving.toFixed(2)} € mesačne).
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div>
                <p className="text-sm font-bold">Vyber si nový paušál:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {plans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedId(plan.id)}
                      className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                        selectedId === plan.id
                          ? "bg-brand-yellow text-foreground shadow-soft-yellow"
                          : "bg-background shadow-soft-teal hover:bg-brand-teal-light"
                      }`}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-brand-teal-light p-5 shadow-soft-teal">
                <p className="font-display text-lg font-black">Čo získaš s {selected.name}?</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selected.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-pink" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-muted-foreground">
                Pre všetky detaily a zmluvné podmienky navštív www.o2.sk.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
