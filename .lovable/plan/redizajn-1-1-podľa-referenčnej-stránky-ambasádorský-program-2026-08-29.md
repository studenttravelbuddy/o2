# Redizajn 1:1 podľa referenčnej stránky (ambasádorský program)

Stránka dostane presne ten istý vizuálny jazyk ako referenčná stránka: plné farebné pásy, čierne obrysy, tvrdé tiene, geometrické tvary, Roboto Slab Black nadpisy. Žiadne gradienty, žiadne "bublinky", žiadne modré/O2 prvky.

## Farebná paleta (len tieto)

Presne tokeny z referencie:

- teal `#40B8B8`, deep teal `#006666`, light teal `#E8F5F5`
- yellow `#FFC805`
- orange `#FF7314`, dark orange `#8C2F0D`
- pink `#EC0578`, dark pink `#A80355`
- text/foreground `#143333`, background `#FFFFFF`, muted text `#587373`, border `#D5E9E9`, input `#C7E0E0`, gray `#6E6E6E`

Fonty: **Roboto Slab** (nadpisy, weight 900 – font-black) + **Roboto** (text). Radius `1rem` (rounded-lg), karty `rounded-2xl`.

## Vizuálne pravidlá (rovnaké ako referencia)

- Sekcie sú **plné farebné pásy**, ktoré sa striedajú: teal hero → yellow pás → biela → teal → biela → yellow (formulár/CTA) → teal footer.
- Dekorácie: kruh s hrubým žltým obrysom (`border-[28px]`), ružový rotovaný kvadrát, tenký ružový separátor medzi pásmi.
- Nadpisy: `font-display font-black`, hero až `text-8xl`, sekcie `text-4xl/5xl`.
- Eyebrow: `text-xs font-bold uppercase tracking-wider` nad každým nadpisom.
- Odkazy: bold s ružovým podtrhnutím (`decoration-brand-pink decoration-2`).
- Karty: biela plocha, `rounded-lg`, číslo v žltom kruhu `size-9`, kroky s ružovým `KROK 01`.
- Hlavný panel (cenník/formulár): `border-2 border-foreground` + tvrdý tieň `shadow-[8px_8px_0_var(--brand-pink)]`.
- Preukazové karty ISIC/ITIC/EURO<26 majú vlastný akcent (teal / orange / pink) cez `border-2` a `text-card-accent`.

## Čo sa prepíše

1. **`src/styles.css`** – nahradiť súčasné oklch tokeny presnými hex tokenmi z referencie (`--brand-teal`, `--brand-yellow`, `--brand-pink`, `--brand-orange`, …), radius 1rem, odstrániť `hero-surface` gradient a `bubble` utilitu, pridať `card-isic/card-itic/card-euro26` akcenty a `eyebrow`.
2. **`src/components/ui/button.tsx`** – varianty prekopať na plochý štýl: `teal`, `yellow`, `pink`, `outline` (čierny obrys), bez gradientov a soft shadow.
3. **`src/routes/index.tsx`** – kompletné prestavenie sekcií do farebných pásov v poradí:
   - Hero (teal): eyebrow `ISIC · ITIC · EURO<26`, H1 „Ready for more?", dátum kampane, 2 CTA, dekoračné tvary
   - Žltý pás: miesto pre kampaňový banner + claim
   - Biela: čo prináša nová spolupráca (3 karty)
   - Teal: hlavná ponuka 100 GB (karta s tvrdým tieňom)
   - Biela: paušály pre pedagógov (ITIC) + Junior pre rodičov
   - Teal: prečo mať preukaz (mriežka s číslami v žltých kruhoch)
   - Biela: „Na ktorý preukaz máš nárok?" – 3 karty 01/02/03 s akcentmi
   - Žltý pás: kroky prechodu k operátorovi (KROK 01–08)
   - Biela: FAQ accordion v štýle „Pýtaš sa? Odpovedáme."
   - Teal footer s logami a odkazmi
4. **`src/components/CampaignFaq.tsx`** – prestavať do štýlu referencie (font-display nadpisy, tenké oddeľovače) a doplniť obsah z priložených dokumentov (FAQ Junior, FAQ O2 Maxx, FAQ Zľavy paušále) rozdelený do troch záložiek/skupín.
5. **`src/components/SavingsCalculator.tsx`** – preštýlovať na plochý panel s čiernym obrysom a ružovým tvrdým tieňom, žlté akcenty.

## Technické detaily

- Všetky farby idú výhradne cez CSS tokeny v `src/styles.css` (žiadne hardcoded `text-white`/`bg-[#...]` v komponentoch).
- Fonty Roboto Slab + Roboto sa načítavajú v `src/routes/__root.tsx` (už tam sú, len sa overí weight 900).
- O2 zostáva len ako diskrétny endorsement „Spolu s" (malé logo) podľa brand guidelines partnera, nie ako farebnosť stránky.
- Obsah FAQ sa vytiahne z priložených .docx; kampaňové čísla a ceny sa preberajú z už existujúceho textu na stránke.
