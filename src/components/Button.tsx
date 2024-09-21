import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center text-background h-8 px-2 rounded-lg whitespace-nowrap duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-foreground hover:bg-opacity-90",
        white:
          "bg-gray-200 text-black hover:bg-opacity-60 active:bg-opacity-80",
        gradient:
          "bg-gradient-to-r from-foreground font-semibold to-[#393939] dark:to-[rgba(255,255,255,.7)] hover:opacity-80 active:opacity-90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
