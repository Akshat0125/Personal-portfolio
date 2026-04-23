import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-95 overflow-hidden group",
                    {
                        "bg-primary text-white hover:bg-primary-hover hover:glow-primary": variant === "primary",
                        "bg-secondary text-white hover:bg-[#0494ad] hover:glow-secondary": variant === "secondary",
                        "border border-card-border bg-transparent text-foreground hover:bg-white/5 hover:border-primary hover:glow-primary": variant === "outline",
                        "bg-transparent text-muted hover:text-foreground hover:bg-white/5": variant === "ghost",

                        "px-4 py-2 text-sm": size === "sm",
                        "px-6 py-3 text-base": size === "md",
                        "px-8 py-4 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                {/* Gradient Sweep Overlay for hover effect */}
                {(variant === "primary" || variant === "outline") && (
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                )}
                <span className="relative z-10 flex items-center">{props.children}</span>
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
