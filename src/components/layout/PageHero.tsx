import { cn } from "@/lib/utils";

interface PageHeroProps {
  showSpotlight?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function PageHero({
  showSpotlight = true,
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
      {showSpotlight && (
        <div className="absolute inset-0 bg-spotlight opacity-50" />
      )}

      <div className="container-section relative">{children}</div>
    </section>
  );
}
