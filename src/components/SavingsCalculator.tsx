import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Orientačná kalkulačka úspory — statický výpočet, žiadne API.
 */
export function SavingsCalculator() {
  const [open, setOpen] = useState(false);
  const [spend, setSpend] = useState("30");

  const current = Number(spend.replace(",", ".")) || 0;
  const maxxMonthly = 20;
  const pausalMonthly = 18;
  const bestMonthly = Math.min(maxxMonthly, pausalMonthly);
  const monthlySaving = Math.max(0, current - bestMonthly);
  const yearlySaving = monthlySaving * 12;

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="rounded-3xl bg-card p-7 shadow-card sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Kalkulačka úspory</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Orientačný odhad, koľko môžeš ušetriť ročne s preukazovou ponukou.
              </p>
            </div>
            <Button variant="softOutline" size="lg" onClick={() => setOpen(!open)}>
              {open ? "Skryť kalkulačku" : "Spočítať úsporu"}
            </Button>
          </div>

          {open && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:items-end">
              <label className="block">
                <span className="text-sm font-semibold">
                  Koľko dnes platíš mesačne za paušál?
                </span>
                <div className="mt-2 flex items-center gap-2 rounded-2xl border border-input bg-background px-4">
                  <input
                    type="number"
                    inputMode="decimal"
                    min={0}
                    value={spend}
                    onChange={(e) => setSpend(e.target.value)}
                    className="h-12 w-full bg-transparent text-lg font-semibold outline-none"
                    aria-label="Súčasná mesačná útrata v eurách"
                  />
                  <span className="text-muted-foreground">€</span>
                </div>
              </label>

              <div className="rounded-2xl bg-accent p-5">
                <p className="text-sm text-accent-foreground/80">Odhadovaná ročná úspora</p>
                <p className="font-display text-4xl font-bold text-primary">
                  {yearlySaving.toFixed(0)} €
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
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
