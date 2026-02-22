import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-asphalt-900 text-white",
        secondary: "bg-asphalt-100 text-asphalt-800",
        accent:
          "bg-linear-to-r from-stripe-500 to-stripe-400 text-asphalt-950 shadow-sm",
        success:
          "bg-success-500/15 text-success-600 ring-1 ring-success-500/30",
        outline:
          "border border-asphalt-200 text-asphalt-600 bg-white/50 backdrop-blur-sm",
        warranty:
          "bg-success-500/15 text-success-600 ring-1 ring-success-500/30 font-bold",
        rating:
          "bg-stripe-500/15 text-stripe-700 ring-1 ring-stripe-500/30 font-bold",
        glass: "bg-white/20 backdrop-blur-md text-white border border-white/30",
        "glass-dark":
          "bg-asphalt-900/30 backdrop-blur-md text-asphalt-100 border border-asphalt-700/50",
        gradient:
          "relative bg-linear-to-r from-stripe-500/20 to-electric-500/20 text-asphalt-900 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-linear-to-r before:from-stripe-500/50 before:to-electric-500/50 before:-z-10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
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
