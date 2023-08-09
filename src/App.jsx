import React from "react";

const App = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className=" container border border-gray-300 max-w-full w-[30%] flex justify-center">
        <div className="w-full max-w-xl p-8">
          <h1 className="text-3xl text-blue-500 font-bold pb-4">Topup Store</h1>
          <form action="">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded text-sm py-2 px-3 placeholder-opacity-50 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-700 text-sm font-bold mb-2"
              >
                Password
                <span className="float-right">
                  <Link to="/login" className="text-blue-500">
                    Lupa Passowrd?
                  </Link>
                </span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded text-sm py-2 px-3 placeholder-opacity-50 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                Masuk
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default App;
