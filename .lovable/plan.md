# Plán: Interaktívne segmentové karty hore na stránku

Nič existujúce nemeníme — len pridáme hore na stránku (hneď pod hero, pred žltý kampaňový pás) interaktívny rozdeľovač „Kto si?" vo vybranom dizajne (variant so šípkou).

## Čo pridáme
Nová sekcia s nadpisom a tromi veľkými klikateľnými kartami v gridi:
- **Som študent** (ISIC teal `#40B8B8`) → smooth scroll na `#maxx`
- **Som učiteľ** (ITIC orange `#FF7314`) → smooth scroll na `#pausaly`
- **Som rodič** (EURO<26 pink `#EC0578`) → smooth scroll na `#junior`

## Dizajn kariet (podľa vybraného prototypu)
- Plná brand farba pozadia, biely Roboto Slab Black nadpis, malý eyebrow popisok.
- Hrubý čierny obrys (`border-4 border-foreground`) + posunutý čierny tieň (absolútna vrstva).
- Interakcie: hover kartu zdvihne (`-translate-x-1 -translate-y-1`) a tieň sa zväčší; klik ju „zatláčí" (active stav); šípka v rohu sa pri hoveri otočí o 45°.
- Klik = smooth scroll na existujúcu kotvu (pridáme `scroll-behavior: smooth`).

## Technické detaily
- `src/routes/index.tsx`: import `ArrowRight` z lucide-react, nová konštanta `segments` a nová JSX sekcia za `</header>`.
- `src/styles.css`: jedno pravidlo `html { scroll-behavior: smooth }` v `@layer base`.
- Žiadne iné texty ani sekcie sa nemenia.
