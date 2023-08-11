import React from "react";
import RegisterForm from "../../components/molecules/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className=" container border border-gray-300 max-w-full w-[80%] sm:w-[40%] xl:w-[30%] flex-shrink-0 flex justify-center">
        <div className="w-full max-w-xl p-8">
          <h1 className="text-3xl text-blue-500 font-bold pb-8">Register</h1>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
