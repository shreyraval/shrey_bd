import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "text-white bg-gradient-to-r from-[#6D28D9] to-[#9333EA] hover:from-[#7E22CE] hover:to-[#A21CAF] shadow-[0_10px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_14px_34px_rgba(162,28,175,0.55)] hover:scale-[1.02]",
        secondary: "text-[#F1F5F9] bg-[rgba(255,255,255,0.16)] backdrop-blur border border-[rgba(255,255,255,0.28)] hover:bg-[rgba(255,255,255,0.26)] hover:text-[#FFFFFF]",
        ghost: "bg-transparent text-[#C4B5FD] hover:text-[#FFFFFF] hover:underline",
        outline: "border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 dark:border-stone-700 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-stone-200 rounded-full",
        solid: "bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg rounded-xl",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg rounded-xl",
        link: "text-violet-600 hover:underline underline-offset-4",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }