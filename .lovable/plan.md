# Plán: Vrátiť segmentovú logiku (Študent / Učiteľ / Rodič)

Cieľ: vrátiť na stránku jasné „kto si?" rozdelenie návštevníkov, ktoré ich pekne prepojí s relevantnou ponukou — v súčasnom neo-brutalist dizajne.

## 1. Segmentové dlaždice v hero sekcii
Pod CTA tlačidlá v hero pridáme 3 veľké klikateľné karty (celá šírka, grid):
- **Som študent** (ISIC teal, `#40B8B8`) → kotva `#maxx` (O2 Maxx, 100 GB)
- **Som učiteľ** (ITIC orange, `#FF7314`) → kotva `#pausaly` (zľavnené paušály)
- **Som rodič** (EURO<26 pink, `#EC0578`) → kotva `#junior` (O2 Junior)

Každá karta: ikona/číslo, nadpis Roboto Slab Black, krátky popis benefitu, šípka „→", hrubý čierny obrys + tvrdý tieň v danej brand farbe (rovnaký vizuálny jazyk ako zvyšok stránky). Klik = smooth scroll na príslušnú sekciu (existujúce `id` kotvy + `scroll-mt-20` už sú, pridáme `scroll-behavior: smooth`).

## 2. Prepojenie sekcií so segmentmi
- Ku každej produktovej sekcii (Maxx / Paušály / Junior) už existuje eyebrow „Pre študentov / Pre pedagógov / Pre rodičov" — zosúladíme farby eyebrow s farbou segmentu (teal / orange / pink).
- V sekcii „Na ktorý preukaz máš nárok?" doplníme ku každému preukazu CTA odkaz na jeho ponuku: ISIC → #maxx, ITIC → #pausaly, EURO<26 → #maxx.

## 3. Sticky mini-navigácia (voliteľné, odporúčané)
Pod headerom tenký biely pás s 3 chip odkazmi „Študent / Učiteľ / Rodič", aby bola segmentácia dostupná odkiaľkoľvek na stránke.

## Technické detaily
- Súbor: `src/routes/index.tsx` (nová konštanta `segments` + JSX v hero), prípadne drobný doplnok v `src/styles.css` (`html { scroll-behavior: smooth }`).
- Žiadne nové závislosti, žiadna zmena textov mimo segmentových kariet.
