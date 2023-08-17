import React from "react";
import "./../src/App.css";
import Carousel from "./components/organism/Carousel/Carousel";
import { Link } from "react-router-dom";
import Navbar from "./components/organism/Navbar/Navbar";

const App = () => {
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
};

export default App;
