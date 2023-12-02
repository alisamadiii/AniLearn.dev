import React, { type ButtonHTMLAttributes, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/utils";

export const buttonVariants = cva(
  "inline-block w-full text-center duration-200 hover:bg-opacity-70",
  {
    variants: {
      variant: {
        default: "bg-primary px-6 py-1 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
