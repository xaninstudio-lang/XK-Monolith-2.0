import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(({ className, variant = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  const variants = {
    default: "bg-white text-black hover:bg-white/90",
    outline: "border border-white/20 bg-transparent text-white hover:bg-white/5",
  }
  
  return (
    <Comp
      ref={ref}
      className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", variants[variant], className)}
      {...props}
    />
  )
})
Button.displayName = "Button"
export { Button }