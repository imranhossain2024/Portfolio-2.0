import { cn } from "@/lib/utils"
import * as React from "react"

function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "secondary" | "outline" | "premium" }) {
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "text-foreground border-border",
    premium: "border-transparent bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-500/20"
  }
  return (
    <div className={cn("inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold whitespace-nowrap transition-colors", variants[variant], className)} {...props} />
  )
}

export { Badge }

