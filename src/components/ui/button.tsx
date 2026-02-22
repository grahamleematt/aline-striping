import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stripe-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "relative bg-linear-to-r from-stripe-600 via-stripe-500 to-stripe-400 text-asphalt-950 font-semibold shadow-lg shadow-stripe-500/25 hover:shadow-xl hover:shadow-stripe-500/30 hover:scale-[1.02] active:scale-[0.98] before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-to-r before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity",
        secondary:
          "bg-asphalt-900 text-white font-semibold shadow-lg shadow-asphalt-900/20 hover:bg-asphalt-800 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border-2 border-asphalt-200 bg-white/50 text-asphalt-900 font-medium backdrop-blur-sm hover:bg-asphalt-50 hover:border-asphalt-300 hover:scale-[1.02] active:scale-[0.98]",
        ghost:
          "text-asphalt-700 hover:bg-asphalt-100/80 hover:text-asphalt-900 font-medium",
        link: "text-asphalt-900 underline-offset-4 hover:underline font-medium",
        glass:
          "bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white/20 hover:scale-[1.02] active:scale-[0.98]",
        "outline-light":
          "border-2 border-white/30 bg-transparent text-white font-medium hover:bg-white/10 hover:border-white/50 hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 rounded-lg px-4 text-sm",
        default: "h-11 rounded-xl px-6 text-sm",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-base",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
