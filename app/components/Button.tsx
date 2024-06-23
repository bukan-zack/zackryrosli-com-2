import { VariantProps, cva } from "class-variance-authority";

const button = cva("transition ease-in-out duration-50 absolute z-[-1] inset-0 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-2.5 w-full group-hover/button:translate-y-2 h-full", {
    variants: {
        variant: {
            normal: ["bg-black"],
            tropical_indigo: ["bg-tropical-indigo"],
            periwinkle: ["bg-periwinkle"],
            apricot: ["bg-apricot"],
        },
        size: {
            "sm": ["text-lg"],
            "md": ["text-xl"],
            "lg": ["text-2xl"],
            "xl": ["text-4xl"],
        },
    },
    defaultVariants: {
        variant: "normal",
        size: "sm",
    },
});

export interface ButtonProps
    extends React.HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
    <div className="group/button relative">
        <button className="w-full transition ease-in-out duration-50 group-hover/button:-translate-y-0.5 text-black bg-ghost-white border border-2 border-black px-6 py-1.5" {...props} />
        <div className={button({ variant, size })}></div>
    </div>
);