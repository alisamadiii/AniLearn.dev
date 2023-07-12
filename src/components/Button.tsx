import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@utils/ClassName";

const buttonVariants = cva("", {
  variants: {
    variant: {
      navbar: "flex items-center px-4 py-2 text-xs rounded-full bg-button group",
      hero: "px-5 py-2 mt-12 text-sm text-black duration-200 bg-white rounded-full shadow-main-button hover:shadow-main-button-hover",
      footer: "px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button",
      workplace:
        "relative text-sm md:text-base px-4 py-2 rounded-lg bg-button after:content after:w-full after:h-full after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:inset-0 after:-z-10 after:opacity-0 after:duration-200 overflow-hidden duration-200 isolate"
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
