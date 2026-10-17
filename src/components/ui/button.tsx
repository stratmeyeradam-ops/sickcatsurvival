import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage min-h-11",
  {
    variants: {
      variant: {
        primary: "bg-sage text-sage-fg hover:bg-sage/90",
        alert: "bg-alert text-alert-fg hover:bg-alert/90",
        outline: "bg-surface text-ink shadow-plate hover:bg-surface-2",
        ghost: "bg-transparent text-ink hover:bg-surface-2",
      },
      size: {
        md: "rounded-md px-4 py-2.5 text-sm",
        lg: "rounded-lg px-5 py-3 text-base",
        sm: "rounded-sm px-3 py-2 text-sm min-h-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(function Button({ className, variant, size, ...props }, ref) {
  return (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
});
