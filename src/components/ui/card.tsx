import { cn } from "@/lib/utils"
import * as React from "react"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass rounded-[2rem] transition-all duration-500 bg-background/90 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 md:p-10", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }

