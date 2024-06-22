import { VariantProps, cva } from "class-variance-authority";

const button = cva("transition ease-in-out duration-50 absolute inset-0 z-[-1] opacity-0 group-hover:opacity-100 group-hover:translate-x-2.5 w-full group-hover:translate-y-2 h-full", {
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
    <div className="group relative">
        <button className="transition ease-in-out duration-50 group-hover:-translate-y-0.5 text-black bg-ghost-white border border-2 border-black px-6 py-1.5" {...props} />
        <div className={button({ variant, size })}></div>
    </div>
);