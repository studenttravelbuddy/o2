# Plán: Pridať segmentové dlaždice hore na stránku

Nič existujúce nemeníme — len pridáme hore na stránku rozdeľovač „Kto si?".

## Čo pridáme
Hneď pod hero sekciu (pred žltý kampaňový pás) nový blok s 3 veľkými klikateľnými kartami:
- **Som študent** (ISIC teal) → scroll na `#maxx` (O2 Maxx, 100 GB)
- **Som učiteľ** (ITIC orange) → scroll na `#pausaly` (zľavnené paušály)
- **Som rodič** (EURO<26 pink) → scroll na `#junior` (O2 Junior)

Štýl kariet zodpovedá zvyšku stránky: Roboto Slab Black nadpis, krátky popis benefitu, hrubý čierny obrys, tvrdý tieň v brand farbe, hover posun. Kliknutie = smooth scroll na existujúcu kotvu (pridáme `scroll-behavior: smooth` do CSS).

## Technické detaily
- Zmena len v `src/routes/index.tsx` (nový blok za `</header>`) a jeden riadok `scroll-behavior` v `src/styles.css`.
- Žiadne iné texty ani sekcie sa nemenia.
