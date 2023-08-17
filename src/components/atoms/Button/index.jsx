const Button = (props) => {
  const { children, textColor, backGround, bgHover, borderColor } = props;
  const buttonClassName = `
    ${textColor || "text-white"}
    ${backGround || "bg-blue-500"}
    ${bgHover || "hover:bg-blue-700"}
    ${borderColor || "border-blue-500"}
    font-bold py-2 px-4 rounded w-full border-2 rounded`;

  return <button className={buttonClassName}>{children}</button>;
};

export default Button;
