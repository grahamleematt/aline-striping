import type { LucideIcon } from "lucide-react";
import { Star } from "lucide-react";
import { cn, BUSINESS_INFO } from "@/lib/utils";

export interface TrustIndicator {
  icon: LucideIcon;
  text: string;
  iconClassName?: string;
}

interface TrustIndicatorsProps {
  items: TrustIndicator[];
  showStars?: boolean;
  className?: string;
}

export function TrustIndicators({
  items,
  showStars = false,
  className,
}: TrustIndicatorsProps) {
  return (
    <div
      className={cn(
        "mt-12 flex flex-wrap items-center justify-center gap-8 text-asphalt-300",
        className,
      )}
    >
      {showStars && (
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-stripe-500 text-stripe-500"
                strokeWidth={2.5}
              />
            ))}
          </div>
          <span className="text-sm font-medium">
            {BUSINESS_INFO.googleRating} on Google
          </span>
        </div>
      )}
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2">
          <item.icon
            className={cn("h-5 w-5", item.iconClassName ?? "text-stripe-400")}
            strokeWidth={2.5}
          />
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
