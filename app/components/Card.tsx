import clsx from "clsx";
import React, { Ref } from "react";

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>
    {
        interactable?: boolean;
    }

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({
    className,
    children,
    interactable,
    ...props
}, ref: Ref<HTMLDivElement>) => {
    return (
        <div className="relative group/card h-full w-full" ref={ref}>
            <div className={clsx("transition ease-in-out duration-50 flex flex-col w-full bg-ghost-white border-2 md:border-4 border-black", interactable && "group-hover/card:-translate-y-1", className)}>
                {children}
            </div>
            {interactable && <div className="transition ease-in-out duration-50 absolute z-[-1] inset-0 opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-4 group-hover/card:translate-y-4 md:group-hover/card:translate-x-6 md:group-hover/card:translate-y-4 w-full bg-black">
            </div>}
        </div>
    );
});