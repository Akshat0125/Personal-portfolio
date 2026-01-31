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
                "glass-card rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}
