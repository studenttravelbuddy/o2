const chips = [
  { href: "#maxx", label: "O2 Maxx" },
  { href: "#pausaly", label: "O2 Paušály" },
  { href: "#junior", label: "O2 Junior" },
  { href: "#preukazy", label: "Preukazy" },
  { href: "#prechod", label: "Ako prejsť" },
  { href: "#faq", label: "FAQ" },
];

/** Rýchle skoky na sekcie — swipovateľný riadok chipov pod hero. */
export function SectionChips({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Rýchla navigácia" className={className}>
      <ul className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {chips.map((chip) => (
          <li key={chip.href} className="snap-start">
            <a
              href={chip.href}
              className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-background/90 px-4 text-sm font-bold text-foreground shadow-sm transition-transform active:scale-95"
            >
              {chip.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
