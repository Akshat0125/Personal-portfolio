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
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
                    {
                        "bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-sm": variant === "primary",
                        "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200": variant === "secondary",
                        "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 shadow-sm": variant === "outline",
                        "bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/80": variant === "ghost",

                        "px-3 py-1.5 text-xs": size === "sm",
                        "px-4 py-2 text-sm": size === "md",
                        "px-5 py-2.5 text-sm md:text-base": size === "lg",
                    },
                    className
                )}
                {...props}
            >
                <span className="flex items-center gap-1.5">{props.children}</span>
            </button>
        );
    }
);

Button.displayName = "Button";

export { Button };
