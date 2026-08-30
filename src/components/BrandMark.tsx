import isicLogo from "@/assets/isic-logo.svg.asset.json";
import iticLogo from "@/assets/itic-logo.svg.asset.json";
import eycLogo from "@/assets/eyc-logo.svg.asset.json";

export type BrandId = "isic" | "itic" | "eyc";

const brands: Record<BrandId, { url: string; alt: string; pad: string }> = {
  isic: {
    url: isicLogo.url,
    alt: "ISIC – International Student Identity Card",
    pad: "p-2",
  },
  itic: {
    url: iticLogo.url,
    alt: "ITIC – International Teacher Identity Card",
    pad: "p-2",
  },
  eyc: {
    url: eycLogo.url,
    alt: "EURO<26 / European Youth Card",
    pad: "px-0 py-2",
  },
};

/** Strict order used everywhere on the page. */
export const brandOrder: BrandId[] = ["isic", "itic", "eyc"];

type BrandMarkProps = {
  brand: BrandId;
  /** "plain" = no frame, "card" = white card w/ hard teal shadow, "onDark" = white plate */
  variant?: "plain" | "card" | "onDark";
  className?: string;
};

export function BrandMark({ brand, variant = "plain", className = "" }: BrandMarkProps) {
  const { url, alt, pad } = brands[brand];

  const frame =
    variant === "card"
      ? "rounded-lg border-2 border-foreground bg-white shadow-[8px_8px_0_#40B8B8]"
      : variant === "onDark"
        ? "rounded-md bg-white/95"
        : "";

  return (
    <div className={`flex h-16 w-28 shrink-0 items-center justify-center ${frame} ${className}`}>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-contain ${pad}`}
      />
    </div>
  );
}

type BrandMarkRowProps = {
  variant?: "plain" | "card" | "onDark";
  className?: string;
};

export function BrandMarkRow({ variant = "plain", className = "" }: BrandMarkRowProps) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {brandOrder.map((brand) => (
        <BrandMark key={brand} brand={brand} variant={variant} />
      ))}
    </div>
  );
}
