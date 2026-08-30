/**
 * Obsahová kontrola: zabraňuje návratu starých cien a textov.
 * Spustenie: node scripts/content-guard.mjs  (alebo bun scripts/content-guard.mjs)
 */
import { readFileSync } from "node:fs";

const read = (p) => readFileSync(p, "utf8");
const indexSrc = read("src/routes/index.tsx");
const calcSrc = read("src/components/SavingsCalculator.tsx");
const faqSrc = read("src/components/CampaignFaq.tsx");
const allSrc = { "index.tsx": indexSrc, "SavingsCalculator.tsx": calcSrc, "CampaignFaq.tsx": faqSrc };

const errors = [];
const check = (cond, msg) => {
  if (!cond) errors.push(msg);
};

function cardPrice(name) {
  const block = indexSrc.split(`name: "${name}"`)[1] ?? "";
  const m = block.match(/price:\s*"([\d,.]+)\s*€"/);
  if (!m) {
    errors.push(`Nenašla sa cena karty pre paušál ${name}`);
    return null;
  }
  return Number(m[1].replace(",", "."));
}

function calcPrice(name) {
  const block = calcSrc.split(`name: "${name}"`)[1] ?? "";
  const m = block.match(/price:\s*([\d.]+)/);
  if (!m) {
    errors.push(`Nenašla sa cena v kalkulačke pre paušál ${name}`);
    return null;
  }
  return Number(m[1]);
}

// 1) Bezstarostný stojí 38 €
check(cardPrice("Bezstarostný") === 38, "Karta paušálu Bezstarostný nemá cenu 38 €");
check(calcPrice("Bezstarostný") === 38, "Kalkulačka nemá pri paušále Bezstarostný cenu 38");

// 2) Ceny si neprotirečia medzi kartami a kalkulačkou
for (const name of ["Základný", "Pohodový", "Bezstarostný"]) {
  const a = cardPrice(name);
  const b = calcPrice(name);
  check(a !== null && a === b, `Cena paušálu ${name} sa nezhoduje: karta ${a} vs. kalkulačka ${b}`);
}

// 3) Stará cena 33 sa nevracia ako aktuálna cena
check(!/price:\s*33\b/.test(calcSrc), "V kalkulačke sa opäť objavila cena 33");
check(!/price:\s*"33\s*€"/.test(indexSrc), "Na karte sa opäť objavila aktuálna cena 33 €");

// 4) Zakázané texty
for (const [file, src] of Object.entries(allSrc)) {
  check(!src.includes("Je to benefit"), `V ${file} sa opäť objavil text „Je to benefit“`);
}

// 5) Dátum spustenia je všade 1. 9. 2026
for (const [file, src] of Object.entries(allSrc)) {
  check(!/1\.\s*9\.\s*202[0-57-9]/.test(src), `V ${file} je nesprávny dátum spustenia (má byť 1. 9. 2026)`);
}

if (errors.length) {
  console.error("Obsahová kontrola zlyhala:");
  for (const e of errors) console.error(" - " + e);
  process.exit(1);
}
console.log("Obsahová kontrola OK: ceny a texty sú konzistentné.");
