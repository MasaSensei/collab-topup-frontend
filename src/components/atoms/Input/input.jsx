const Input = (props) => {
  const { type, name, id, placeholder } = props;
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded text-sm py-2 px-3 placeholder-opacity-50 focus:border-green-500 focus:outline-none"
    />
  );
};

export default Input;
