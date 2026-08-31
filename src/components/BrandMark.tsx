import isicLogo from "@/assets/isic-logo.svg.asset.json";
import iticLogo from "@/assets/itic-logo.svg.asset.json";
import eycLogo from "@/assets/eyc-logo.svg.asset.json";

export type BrandId = "isic" | "itic" | "eyc";

const brands: Record<BrandId, { url: string; alt: string }> = {
  isic: {
    url: isicLogo.url,
    alt: "ISIC – International Student Identity Card",
  },
  itic: {
    url: iticLogo.url,
    alt: "ITIC – International Teacher Identity Card",
  },
  eyc: {
    url: eycLogo.url,
    alt: "EURO<26 / European Youth Card",
  },
};

/** Zmenšené preukazové logá, aby sa tri zmestili vedľa seba aj na úzkom mobile. */
const FRAME_SIZE = "h-8 w-[4.5rem] sm:h-12 sm:w-24";

/** The wider EYC wordmark needs less horizontal padding to match visually. */
const framePad: Record<BrandId, string> = {
  isic: "p-1.5",
  itic: "p-1.5",
  eyc: "px-1 py-1.5",
};

/** Strict order used everywhere on the page. */
export const brandOrder: BrandId[] = ["isic", "itic", "eyc"];

type BrandMarkProps = {
  brand: BrandId;
  /** "plain" = no frame, "card"/"onDark" = white rounded pill, no border */
  variant?: "plain" | "card" | "onDark";
  className?: string;
};

export function BrandMark({ brand, variant = "plain", className = "" }: BrandMarkProps) {
  const { url, alt } = brands[brand];

  const frame =
    variant === "card" || variant === "onDark"
      ? "rounded-2xl bg-white shadow-[0_6px_18px_-8px_rgb(0_0_0/0.25)]"
      : "";

  return (
    <div
      className={`flex shrink-0 items-center justify-center ${FRAME_SIZE} ${frame} ${className}`}
    >
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-contain ${framePad[brand]}`}
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
    <div className={`flex flex-nowrap items-center gap-1.5 sm:gap-3 ${className}`}>
      {brandOrder.map((brand) => (
        <BrandMark key={brand} brand={brand} variant={variant} />
      ))}
    </div>
  );
}
