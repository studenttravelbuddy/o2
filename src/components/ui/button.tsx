import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-foreground bg-background text-foreground font-bold rounded-lg hover:bg-brand-teal-light",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        teal: "bg-brand-teal-deep text-primary-foreground font-bold rounded-lg border-2 border-foreground hover:bg-brand-teal hover:text-foreground",
        yellow:
          "bg-brand-yellow text-foreground font-bold rounded-lg border-2 border-foreground hover:bg-brand-yellow/85",
        pink: "bg-brand-pink text-primary-foreground font-bold rounded-lg border-2 border-foreground hover:bg-brand-pink-dark",
        orange:
          "bg-brand-orange text-foreground font-bold rounded-lg border-2 border-foreground hover:bg-brand-orange/85",
        white:
          "bg-background text-foreground font-bold rounded-lg border-2 border-foreground hover:bg-brand-teal-light",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 px-6",
        xl: "h-14 px-8 text-base",
        icon: "h-9 w-9",
      },


    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
