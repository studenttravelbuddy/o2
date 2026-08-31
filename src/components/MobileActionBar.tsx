import { Button } from "@/components/ui/button";

type Props = {
  offerLink: string;
  cardLink: string;
};

/** Sticky spodná lišta na mobile — hlavné CTA vždy na dosah palca. */
export function MobileActionBar({ offerLink, cardLink }: Props) {
  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-50 border-t-2 border-foreground/10 bg-background/95 px-3 pt-2 backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <Button variant="pink" size="lg" className="h-12 flex-1 text-sm" asChild>
          <a href={offerLink} target="_blank" rel="noopener noreferrer">
            Pozri ponuku O2
          </a>
        </Button>
        <Button variant="outline" size="lg" className="h-12 flex-1 text-sm" asChild>
          <a href={cardLink} target="_blank" rel="noopener noreferrer">
            Objednať preukaz
          </a>
        </Button>
      </div>
    </div>
  );
}
