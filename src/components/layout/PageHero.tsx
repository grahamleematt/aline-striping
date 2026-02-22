import { cn } from "@/lib/utils";

interface PageHeroProps {
  showSpotlight?: boolean;
  hideBlursOnMobile?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function PageHero({
  showSpotlight = true,
  hideBlursOnMobile = false,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-asphalt-950 pb-32 pt-40",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
      <div
        className={cn(
          "absolute -left-40 top-20 h-80 w-80 rounded-full bg-stripe-500/10 blur-[100px]",
          hideBlursOnMobile && "hidden sm:block",
        )}
      />
      <div
        className={cn(
          "absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-electric-500/10 blur-[120px]",
          hideBlursOnMobile && "hidden sm:block",
        )}
      />
      {showSpotlight && (
        <div className="absolute inset-0 bg-spotlight opacity-50" />
      )}

      <div className="container-section relative">{children}</div>
    </section>
  );
}
