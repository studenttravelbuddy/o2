# Plán: Zjemnenie dizajnu — hravý, voľný, farebný štýl

Aktuálny neo-brutalistický štýl (hrubé čierne obrysy, tvrdé posunuté tiene, ostré rohy) je príliš drsný. Podľa screenshotu referencie prejdeme na mäkší, hravší vizuál: biele zaoblené karty na farebných pásoch, jemné farebné obrysy, žlté kruhové číselné odznaky.

## Čo zmeníme (globálne, v rovnakom layoute)

### 1. Karty a obrysy
- Ostré rohy → veľké zaoblenie (`rounded-2xl` / `rounded-3xl`).
- Hrubé čierne `border-4 border-foreground` → jemný 2px obrys v brand farbe karty (teal / orange / pink) alebo žiadny obrys na bielych kartách.
- Tvrdé posunuté tiene (`shadow-hard-*`, čierne offset vrstvy) → mäkký farebný tieň (napr. `shadow-[0_12px_30px_-10px] color-mix` v danej brand farbe).

### 2. Segmentové karty „Kto si?"
- Z drsných blokov na hravé zaoblené karty: farebné pozadie zostane (teal/orange/pink), ale so zaoblenými rohmi, jemným tieňom a hoverom (jemné zdvihnutie + scale, šípka v zaoblenom bielom kruhu/štvorci).
- Pridáme jemný wiggle/tilt pri hoveri pre hravosť.

### 3. Číselné odznaky a kroky
- Čísla sekcií a krokov (01/02/03, „KROK 1") → žlté kruhy s čiernym číslom ako na screenshote (`rounded-full bg-brand-yellow`).

### 4. Preukazové karty (ISIC / ITIC / EURO<26)
- Biele karty s tenkým farebným obrysom v brand farbe, farebný akcentový „rožtek" hore vpravo, veľké zaoblenie — ako na screenshote.

### 5. Tlačidlá a ostatné prvky
- Button varianty: zaoblené (`rounded-full`/`rounded-2xl`), mäkké tiene, bez hrubých čiernych obrysov.
- Sekcie, bannery, FAQ a kalkulačka: rovnaké zjemnenie (zaoblenie, mäkké tiene, farebné akcenty).

## Čo zostane
- Layout, texty, poradie sekcií, brand farby (teal/žltá/pink/orange), Roboto Slab Black nadpisy, všetky kotvy a funkcionalita.

## Technické detaily
- `src/styles.css`: upraviť/pridať utility (mäkké tiene, pill odznaky), prípadne nové tokeny tieňov.
- `src/routes/index.tsx`, `src/components/ui/button.tsx`, `src/components/CampaignFaq.tsx`, `src/components/SavingsCalculator.tsx`: výmena tried border/shadow/rounded podľa nového štýlu.
