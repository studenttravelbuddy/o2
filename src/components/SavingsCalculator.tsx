import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Orientačná kalkulačka úspory — statický výpočet, žiadne API.
 */
export function SavingsCalculator() {
  const [open, setOpen] = useState(false);
  const [spend, setSpend] = useState("30");

  const current = Number(spend.replace(",", ".")) || 0;
  const bestMonthly = 18;
  const monthlySaving = Math.max(0, current - bestMonthly);
  const yearlySaving = monthlySaving * 12;

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="rounded-3xl bg-card p-6 shadow-soft-pink sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow text-brand-pink">Spočítaj si to</p>
              <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">
                Kalkulačka úspory
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Orientačný odhad, koľko ročne ušetríš s preukazovou ponukou.
              </p>
            </div>
            <Button variant="yellow" size="lg" onClick={() => setOpen(!open)}>
              {open ? "Skryť kalkulačku" : "Spočítať úsporu"}
            </Button>
          </div>

          {open && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:items-end">
              <label className="block">
                <span className="text-sm font-bold">
                  Koľko dnes platíš mesačne za paušál?
                </span>
                <div className="mt-2 flex items-center gap-2 rounded-3xl bg-background shadow-soft-teal px-4">
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={spend}
                    onChange={(e) => setSpend(e.target.value)}
                    className="h-12 w-full bg-transparent font-display text-lg font-black outline-none"
                    aria-label="Súčasná mesačná útrata v eurách"
                  />
                  <span className="font-bold text-muted-foreground">€</span>
                </div>
              </label>

              <div className="rounded-3xl shadow-soft-teal bg-brand-teal p-5">
                <p className="eyebrow">Odhadovaná ročná úspora</p>
                <p className="font-display text-5xl font-black">{yearlySaving.toFixed(0)} €</p>
                <p className="mt-2 text-xs">
                  Pri porovnaní s cenou {bestMonthly} € mesačne ({monthlySaving.toFixed(2)} €
                  mesačne). Ide o približný odhad, nie o cenovú ponuku.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
