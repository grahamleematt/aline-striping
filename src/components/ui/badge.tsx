import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all duration-100",
  {
    variants: {
      variant: {
        default: "bg-asphalt-900 text-white",
        secondary: "bg-asphalt-100 text-asphalt-900",
        accent: "bg-stripe-500 text-asphalt-950 font-black",
        success: "bg-success-500 text-white",
        outline: "border-2 border-asphalt-900 text-asphalt-900 bg-transparent",
        warranty: "bg-success-600 text-white font-black",
        rating: "bg-stripe-500 text-asphalt-950 font-black",
        glass: "bg-asphalt-900/90 border-2 border-asphalt-700 text-white",
        "glass-dark":
          "bg-asphalt-950/90 border-2 border-asphalt-800 text-asphalt-100",
        osha: "bg-stripe-500 text-black font-black",
        ada: "bg-electric-500 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
