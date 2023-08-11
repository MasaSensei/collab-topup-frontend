import Button from "../../atoms/Button";
import InputForm from "../../atoms/Input";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form action="">
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="masukan username"
        id="username"
      />
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="Masukan Email"
        id="email"
      />
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="Masukan password"
        id="password"
      />
      <InputForm
        label="Konfirmasi Passowrd"
        type="password"
        name="password"
        placeholder="Masukan password yang sama"
        id="password"
      />
      <p className="text-center text-sm mb-4">
        Sudah Punya Akun?
        <span className="text-blue-500 hover:underline text-blue-700">
          <Link to="/"> Sign In </Link>
        </span>
      </p>
      <div className="mb-6">
        <Button>Register</Button>
      </div>
    </form>
  );
};

export default RegisterForm;
