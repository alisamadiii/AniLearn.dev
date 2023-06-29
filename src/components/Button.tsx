import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@utils/ClassName";

const buttonVariants = cva("", {
  variants: {
    variant: {
      navbar: "flex items-center px-4 py-2 text-xs rounded-full bg-button dark:bg-button-d group",
      hero: "px-5 py-2 mt-12 text-sm text-black duration-200 bg-white rounded-full shadow-main-button hover:shadow-main-button-hover"
    }
  },
  defaultVariants: {
    variant: "navbar"
  }
});

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, Props>(({ className, variant, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
