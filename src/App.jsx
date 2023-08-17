import { RouterProvider } from "react-router-dom";
import { router } from "./main";
import React from "react";
import "./../src/App.css";
import Carousel from "./components/organism/Carousel/Carousel";
import { Link } from "react-router-dom";
import Navbar from "./components/organism/Navbar/Navbar";

export const App = () => {
  return <RouterProvider router={router} />;
};

const LandingPage = () => {
  return (
    <main className="min-h-screen mx-auto bg-slate-600 max-w-1440px sm:px-32">
      <Navbar />

      {/* Ruang Kosong */}
      <div className="w-full" style={{ height: "77px" }}></div>

      {/* Carousel */}
      <div className="relative pt-4">
        <Carousel />
      </div>

      {/* Bagian Utama */}
      <section className="w-full block">
        <div className="w-full mt-8">
          <div className="relative block bg-slate-600 p-4 mb-4 border rounded-xl w-full shadow">
            <h1 className="text-3xl text-white font-bold mb-4">Item Favorit</h1>
            <div className="flex flex-wrap justify-center m-0 p-0">
              <CardProduct
                link="/"
                imageUrl="https://play-lh.googleusercontent.com/OhgyZroF5PBuMhslkiM0RpHlNZGHVxaNEADy939k6PlKB81jFtIscuMjnUl2r_pPq2c"
                title="Toram Online"
                desc="Ini adalah permainan Toram Online"
              />
              <CardProduct
                link="/"
                imageUrl="https://play-lh.googleusercontent.com/OhgyZroF5PBuMhslkiM0RpHlNZGHVxaNEADy939k6PlKB81jFtIscuMjnUl2r_pPq2c"
                title="Toram Online"
                desc="Ini adalah permainan Toram Online"
              />
              <CardProduct
                link="/"
                imageUrl="https://play-lh.googleusercontent.com/OhgyZroF5PBuMhslkiM0RpHlNZGHVxaNEADy939k6PlKB81jFtIscuMjnUl2r_pPq2c"
                title="Toram Online"
                desc="Ini adalah permainan Toram Online asasaidhaudniadbo"
              />
              {/* Tambahkan konten lain di sini */}
            </div>
          </div>
          <h1>Tes</h1>
        </div>
      </section>
    </main>
  );
};

const CardProduct = ({ link, imageUrl, title, desc }) => {
  return (
    <div className="card-product p-2 w-[50%] sm:w-[36%] xl:w-[20%] mx-auto">
      <Link to={link}>
        <div className="bg-white p-4 rounded-xl text-center w-full flex flex-col overflow-hidden">
          <div className="relative overflow-hidden">
            <img
              src={imageUrl}
              alt=""
              className="rounded-xl w-full mx-auto mb-2 flex-shrink-0"
            />
          </div>
          <div className="flex flex-col p-2 shrink grow">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );

  // const MainApp = () => {
  //   return (
  //     <section className="flex justify-center items-center min-h-screen">
  //       <div className=" container border border-gray-300 max-w-full w-[80%] sm:w-[40%] xl:w-[30%] flex-shrink-0 flex justify-center">
  //         <div className="w-full max-w-xl p-8">
  //           <h1 className="text-3xl text-blue-500 font-bold pb-8">Masuk</h1>
  //           <form action="">
  //             <div className="mb-6">
  //               <label
  //                 htmlFor="email"
  //                 className="block text-slate-700 text-sm font-bold mb-2">
  //                 Login
  //               </label>
  //               <input
  //                 type="text"
  //                 name="email"
  //                 id="email"
  //                 placeholder="Email"
  //                 className="w-full border border-gray-300 rounded text-sm py-2 px-3 placeholder-opacity-50 focus:border-green-500 focus:outline-none"
  //               />
  //             </div>
  //             <div className="mb-6">
  //               <label
  //                 htmlFor="password"
  //                 className="block text-slate-700 text-sm font-bold mb-2">
  //                 Password
  //                 <span className="float-right">
  //                   <Link to="/" className="text-blue-500">
  //                     Lupa Passoword?
  //                   </Link>
  //                 </span>
  //               </label>
  //               <input
  //                 type="password"
  //                 name="password"
  //                 id="password"
  //                 placeholder="Password"
  //                 className="w-full border border-gray-300 rounded text-sm py-2 px-3 placeholder-opacity-50 focus:border-green-500 focus:outline-none"
  //               />
  //             </div>
  //             <div className="mb-6">
  //               <Button>Masuk</Button>
  //             </div>
  //             <p className="text-center text-sm">
  //               Belum punya akun?{" "}
  //               <span className="text-blue-500 hover:underline text-blue-700">
  //                 <Link to="/register">Buat akun disini </Link>
  //               </span>
  //             </p>
  //           </form>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
};

export default LandingPage;
