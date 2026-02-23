import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold uppercase tracking-wide transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-stripe-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-stripe-500 text-asphalt-950 border-b-4 border-black hover:bg-stripe-400 active:border-b-0 active:translate-y-[4px] active:mb-[4px]",
        secondary:
          "bg-asphalt-900 text-white border-b-4 border-asphalt-950 hover:bg-asphalt-800 active:border-b-0 active:translate-y-[4px] active:mb-[4px]",
        outline:
          "bg-transparent border-2 border-asphalt-900 text-asphalt-900 hover:bg-asphalt-900 hover:text-white",
        ghost:
          "text-asphalt-700 hover:bg-asphalt-100 hover:text-asphalt-900 font-medium",
        link: "text-asphalt-900 underline-offset-4 hover:underline font-medium",
        glass:
          "bg-asphalt-900 border-2 border-asphalt-600 text-white hover:bg-asphalt-800 hover:border-asphalt-400",
        "outline-light":
          "bg-transparent border-2 border-white text-white hover:bg-white hover:text-asphalt-950",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
