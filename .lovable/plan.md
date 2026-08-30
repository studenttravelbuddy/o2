# Doladenie veľkosti log

## Cieľ
Upraviť zobrazenie log ISIC, ITIC a EURO<26 v hlavičke a pätičke tak, aby presne zodpovedali veľkosti z aktuálneho screenshotu — menšie, kompaktnejšie biele zaoblené obdĺžniky s primeraným paddingom.

## Aktuálny stav
V `src/routes/index.tsx` sú logá momentálne nastavené na:
- výška loga: `h-16` (mobil) / `sm:h-20` (desktop)
- padding kontajnera: `px-7 py-5` / `sm:px-10 sm:py-6`
- medzera medzi kartami: `gap-5`

Táto veľkosť je väčšia než na referenčnom screenshote.

## Zmeny
1. V sekcii `# HERO` znížiť výšku log na `h-12 sm:h-14` a padding kontajnera na `px-5 py-3 sm:px-6 sm:py-4`. Medzeru ponechať `gap-4`.
2. Rovnaké nastavenie aplikovať aj v sekcii `# FOOTER`.
3. Zachovať poradie EYCA → ISIC → ITIC a biele `rounded-3xl` pozadie.

## Overenie
Po úprave spustiť `bunx tsc --noEmit` a overiť vizuálne screenshotom hero sekcie.