import { cva } from "class-variance-authority";
import { cn } from "../../../lib/TwMerge/TwMerge";

const paragraphVariants = cva("focus:outline-none  leading-normal ", {
  variants: {
    variant: {
      default: "text-gray-800",
      white: "text-white",
    },
    size: {
      default: "text-base lg:text-2xl",
      sm: "text-sm sm:text-base",
    },
    weight: {
      default: "font-bold",
      normal: "font-normal",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
  },
});

const Paragraph = ({
  className,
  variant,
  size,
  weight,
  children,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(
        paragraphVariants({
          variant,
          size,
          weight,
          className,
        })
      )}>
      {children}
    </p>
  );
};

export default Paragraph;
