import { RouterProvider } from "react-router-dom";
import { router } from "./main";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

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

export default App;
