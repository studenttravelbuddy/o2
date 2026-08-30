# Spresnenie podmienky aktivácie O2 Maxx

Cieľ: v sekcii `#maxx` jasne formulovať, že paušál si do 18 rokov nemôže aktívovať sám držiteľ preukazu, ale môže to zaňho urobiť rodič alebo iný zákonný zástupca, pričom pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu.

## 1. Sekcia `#maxx` — aktualizácia podmienky

Súbor: `src/routes/index.tsx`, riadky 403–407.

Aktuálny text:
```
Podmienka: platný preukaz ISIC / ITIC / EURO<26 vydaný na Slovensku a vek od 18
rokov. Rodič môže paušál kúpiť na svoje meno; pri overovaní zadá priezvisko dieťaťa a
číslo jeho platného preukazu.
```

Nové znenie:
```
Podmienka: platný preukaz ISIC / ITIC / EURO<26 vydaný na Slovensku. Držiteľ preukazu
si paušál môže aktivovať od 18 rokov. Pre mladších držiteľov môže paušál aktivovať
rodič alebo iný zákonný zástupca; pri overovaní zadá priezvisko dieťaťa
a číslo jeho platného preukazu.
```

## 2. FAQ — zosúladenie odpovede

Súbor: `src/components/CampaignFaq.tsx`, skupina `Maxx — 100 GB`, otázka „Kto si môže aktivovať paušál so 100 GB?".

Aktuálna odpoveď:
```
Všetci držitelia platných preukazov ISIC, ITIC alebo EURO<26 vydaných na Slovensku starší ako 18 rokov. Rodič môže paušál kúpiť na svoje meno; pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu.
```

Nové znenie:
```
Všetci držitelia platných preukazov ISIC, ITIC alebo EURO<26 vydaných na Slovensku. Držiteľ si paušál môže aktivovať od 18 rokov. Pre mladších držiteľov môže paušál aktivovať rodič alebo iný zákonný zástupca na svoje meno; pri overovaní zadá priezvisko dieťaťa a číslo jeho platného preukazu.
```

## Technické detaily

- Žiadna zmena dizajnu, farieb ani layoutu.
- Iba textová úprava dvoch miest, aby si navzájom neodporovali.
- Overenie: skontrolovať v preview sekcie `#maxx` a FAQ skupinu „Maxx — 100 GB".
