import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

export function BeamsBackground({
    className,
    intensity = "strong",
}: AnimatedGradientBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const opacityMap = {
        subtle: 0.7,
        medium: 0.85,
        strong: 1,
    };

    return (
        <div 
            ref={containerRef}
            className={cn(
                "fixed inset-0 -z-10 h-full w-full",
                className
            )}
            style={{
                opacity: opacityMap[intensity],
            }}
        >
            {/* 主背景漸變 */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
            
            {/* 靜態光束效果 */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(120,119,198,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(120,119,198,0.1),transparent_50%)]" />
            </div>

            {/* 網格效果 */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />
        </div>
    );
}