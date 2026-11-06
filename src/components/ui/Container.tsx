import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[1280px]",
  xl: "max-w-[1400px]",
  full: "max-w-full",
};

/**
 * Reusable Global Container Utility
 *
 * Specifications:
 * - Maximum Width: 1280px (default size: 'lg')
 * - Left and Right Padding: 20px (`px-[20px]`)
 * - Width: 100% (`w-full`)
 * - Centered horizontally with auto margins (`mx-auto`)
 * - Responsive behavior across all viewport sizes
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full mx-auto px-[20px]",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
