import Button from "../../atoms/Button";
import InputForm from "../../atoms/Input";
import { Link } from "react-router-dom";
import "./LoginForm.css";

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
      <p className="text-center text-sm mb-4">
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
        <p className="text-center my-4 text-sm">
          <span className="border-line">Or Login With Google</span>
        </p>
        <Button
          backGround="bg-white"
          borderColor="border-slate-300"
          bgHover="hover:bg-slate-300"
          className="flex items-center gap-2"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
            className="w-6 h-6 inline-block"
          />
          <p className="text-slate-500 inline-block px-2">
            Continue With Google
          </p>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
