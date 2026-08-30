# Oprava ceny Bezstarostného paušálu: 33 € → 38 €

## Čo sa zmení

Cena Bezstarostného paušálu sa zjednotí na **38 €** na všetkých miestach, kde sa zobrazuje.

Kontrola kódu preukázala, že po predchádzajúcej vizuálnej úprave ostáva jediné miesto so starou cenou:

- `src/components/SavingsCalculator.tsx` (riadok 56): v dátach kalkulačky úspor je pri plane `bezstarostny` cena `price: 33` → zmení sa na `price: 38`. Tým sa opraví zobrazená cena aj výpočet ročnej úspory v kalkulačke.

## Čo sa NEMENÍ

- `src/routes/index.tsx` – karta „Bezstarostný" už zobrazuje 38 € (opravené skôr).
- Cena `oldPrice: "33 €"` pri plane **Pohodový** – to je pôvodná (predzľavnená) cena iného paušálu, s Bezstarostným nesúvisí.
- Databáza: projekt nemá pripojenú databázu (žiadne Lovable Cloud tabuľky), ceny existujú iba v kóde – nie je čo opravovať v databáze.

## Overenie

- Vizuálna kontrola kalkulačky v prehliadači: výber „Bezstarostný" zobrazí 38 € a správne dopočítanú úsporu.
