import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "border text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-white border-stone-200 shadow-sm hover:shadow-md dark:bg-stone-900 dark:border-stone-800",
        glass: "bg-white/70 border-white/20 shadow-glass backdrop-blur-md hover:shadow-glass-sm dark:bg-stone-900/40 dark:border-stone-700/50",
        elevated: "bg-white border-stone-200 shadow-lg hover:shadow-xl dark:bg-stone-900 dark:border-stone-700",
        flat: "bg-stone-50 border-stone-200 dark:bg-stone-800 dark:border-stone-700",
      },
      rounded: {
        default: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  }
)

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, rounded, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, rounded }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-5", className)} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-5 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }