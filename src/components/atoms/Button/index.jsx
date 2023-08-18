import { cva } from "class-variance-authority";
import { cn } from "../../../lib/TwMerge/TwMerge";

// const Button = (props) => {
//   const { children, textColor, backGround, bgHover, borderColor } = props;
//   const buttonClassName = `
//     ${textColor || "text-white"}
//     ${backGround || "bg-blue-500"}
//     ${bgHover || "hover:bg-blue-700"}
//     ${borderColor || "border-blue-500"}
//     font-bold py-2 px-4 rounded w-full border-2 rounded`;

//   return <button className={buttonClassName}>{children}</button>;
// };

const buttonVariants = cva("font-bold py-2 px-4  w-full border-2 rounded", {
  variants: {
    variant: {
      default: "bg-blue-500 hover:bg-blue-700 border-blue-500",
    },
    color: {
      default: "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
    color: "default",
  },
});

const Button = ({ className, variant, color, children, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        buttonVariants({
          variant,
          color,
          className,
        })
      )}>
      {children}
    </button>
  );
};

export default Button;
