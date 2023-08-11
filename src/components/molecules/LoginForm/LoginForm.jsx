import Button from "../../atoms/Button";
import InputForm from "../../atoms/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        type="text"
        name="email"
        placeholder="Email"
        id="email"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        id="password"
      />
      <p className="text-center text-sm mb-1">
        <Link to="/" className="text-blue-500">
          Lupa Password?
        </Link>
      </p>
      <p className="text-center text-sm mb-4">
        Belum punya akun?
        <span className="text-blue-500 hover:underline text-blue-700">
          <Link to="/register"> Buat akun disini </Link>
        </span>
      </p>
      <div className="mb-6">
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;
