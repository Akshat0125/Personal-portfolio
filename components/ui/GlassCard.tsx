import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-white border border-slate-200 rounded-xl p-6 shadow-sm transition-all duration-200",
                hoverEffect && "hover:shadow-md hover:border-slate-300",
                className
            )}
        >
            {children}
        </div>
    );
}
