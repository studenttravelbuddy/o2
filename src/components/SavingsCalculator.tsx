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
      "100 GB dát v 5G",
      "Neobmedzené volania a SMS/MMS",
      "1 predplatné na 12 mesiacov v cene",
      "Bez viazanosti",
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
    ],
  },
  {
    id: "bezstarostny",
    name: "Bezstarostný",
    price: 33,
    benefits: [
      "Neobmedzené dáta, volania a správy",
      "Cashback 5 € mesačne (do 15 GB)",
      "Bonus na zariadenie",
      "1 predplatné v cene",
      "1 SIM navyše zdarma",
    ],
  },
  {
    id: "junior",
    name: "Junior",
    price: 10.25,
    benefits: [
      "10 GB dát s preukazom dieťaťa",
      "Donekonečna piatim",
      "Rodičovské limity na dáta aj volania",
      "Podmienka: aktívny hlavný paušál na profile",
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
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="rounded-3xl bg-card p-6 shadow-soft-pink sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-brand-pink">Spočítaj si to</p>
              <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
                Čo môžeš získať s novými paušálmi?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Porovnaj svoju aktuálnu cenu paušálu s ponukou a pozri si benefity.
              </p>
            </div>
            <Button variant="yellow" size="lg" onClick={() => setOpen(!open)}>
              {open ? "Skryť" : "Spočítať"}
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
                  <p className="eyebrow">Odhadovaná ročná úspora</p>
                  <p className="font-display text-5xl font-black">
                    {yearlySaving.toFixed(0)} €
                  </p>
                  <p className="mt-2 text-xs">
                    Pri porovnaní s paušálom {selected.name} za {selected.price} €/mesiac (
                    {monthlySaving.toFixed(2)} € mesačne).
                  </p>
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
                Porovnanie je orientačné, nezahŕňa rozdiely v objeme služieb.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
