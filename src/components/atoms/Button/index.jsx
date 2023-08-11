const Button = (props) => {
  const { children } = props;

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
      {children}
    </button>
  );
};

export default Button;
