import { VariantProps, cva } from "class-variance-authority";

const display = cva("text-black", {
    variants: {
        variant: {
            normal: ["font-normal"],
            semibold: ["font-semibold"],
            bold: ["font-bold"],
        },
        size: {
            "sm": ["text-xs md:text-lg"],
            "md": ["text-sm md:text-xl"],
            "lg": ["text-base md:text-2xl"],
            "xl": ["text-lg md:text-4xl"],
            "2xl": ["text-xl md:text-5xl"],
            "3xl": ["text-2xl md:text-6xl"],
            "4xl": ["text-3xl md:text-7xl"],
            "5xl": ["text-4xl md:text-8xl"],
            "6xl": ["text-5xl md:text-9xl"],
        },
    },
    defaultVariants: {
        variant: "normal",
        size: "sm",
    },
});

export interface DisplayProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof display> {}

export const Display: React.FC<DisplayProps> = ({
  className,
  variant,
  size,
  ...props
}) => <p className={display({ variant, size, className })} {...props} />;