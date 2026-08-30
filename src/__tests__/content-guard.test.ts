import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (p: string) => readFileSync(join(root, p), "utf8");

const indexSrc = read("src/routes/index.tsx");
const calcSrc = read("src/components/SavingsCalculator.tsx");
const faqSrc = read("src/components/CampaignFaq.tsx");
const allSrc = [indexSrc, calcSrc, faqSrc];

/** Cena paušálu Bezstarostný v karte na stránke, napr. price: "38 €" */
function cardPrice(name: string): number {
  const block = indexSrc.split(`name: "${name}"`)[1] ?? "";
  const m = block.match(/price:\s*"([\d,.]+)\s*€"/);
  if (!m) throw new Error(`Nenašla sa cena karty pre ${name}`);
  return Number(m[1]!.replace(",", "."));
}

/** Cena paušálu v kalkulačke, napr. price: 38 */
function calcPrice(name: string): number {
  const block = calcSrc.split(`name: "${name}"`)[1] ?? "";
  const m = block.match(/price:\s*([\d.]+)/);
  if (!m) throw new Error(`Nenašla sa cena v kalkulačke pre ${name}`);
  return Number(m[1]);
}

describe("obsahová kontrola cien a textov", () => {
  it("Bezstarostný paušál stojí 38 € na karte aj v kalkulačke", () => {
    expect(cardPrice("Bezstarostný")).toBe(38);
    expect(calcPrice("Bezstarostný")).toBe(38);
  });

  it("ceny paušálov si neprotirečia medzi kartami a kalkulačkou", () => {
    for (const name of ["Základný", "Pohodový", "Bezstarostný"]) {
      expect(calcPrice(name)).toBe(cardPrice(name));
    }
  });

  it("stará cena 33 € sa nevracia ako aktuálna cena", () => {
    expect(calcSrc).not.toMatch(/price:\s*33\b/);
    expect(indexSrc).not.toMatch(/price:\s*"33\s*€"/);
  });

  it("text „Je to benefit“ sa nikde nevyskytuje", () => {
    for (const src of allSrc) {
      expect(src).not.toContain("Je to benefit");
    }
  });

  it("dátum spustenia je všade 1. 9. 2026", () => {
    for (const src of allSrc) {
      expect(src).not.toMatch(/1\.\s*9\.\s*202[0-57-9]/);
    }
  });
});
