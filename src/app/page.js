// import Head from "next/head";
// import Image from "next/image";

// export default function Home() {
//   return (

//    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
//    <Head>
//       <title>Create Next App</title>
//       <link></link>
//       </Head>
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-2o text-center">
//       <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">

  
//     <div className="w-3/5 p-5"><p>Sign in Section</p></div>{/*Sign in section*/ }
//     {/*End sign in section */}
//     {/*Begin Section */}
//     <div className="w-2/5 bg-yellow-500 text-while rounded-tr-2xl rounded-br-2xl py-36 px-12">
//       <h2 className="text-3xl font-bold mb-2">hello friend !!!</h2>
//       <div className="border-2 w-10 border-white inline-block mb-2">{/*line*/ }
//       <p className="mb-10">Fill up personal information and start journey with us</p>
//       <a href="#" className="border-2 border-white rounded-full px-2 inline-block">Sign up</a>

//       </div>
//     </div>

//    </div>
  
//    </main>
//    </div>
//   );
// }





// import Head from "next/head";
// import {FaFacebookF,FaLinkedinIn,FaGoogle,FaEnvelope} from 'react-icons/fa';



// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
//       <Head>
//         <title>Create Next App</title>
//         {/* Add your meta tags, links, etc. here */}
//       </Head>
//       <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
//         <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
//           <div className="w-3/5 p-5">
//             <div className="text-left font-bold">
//              <span className="text-pink-500">Logo</span>
//             </div>
//             <div className="py-10">
//               <h2 className="text-3xl font-bold text-pink-500 mb-2">Sign in to Account </h2>
//               <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
//               <div className="flex justify-center my-2">
//                 <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
//                   <FaFacebookF className="text-sm"/>
//                 </a>
//                 <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
//                   <FaLinkedinIn className="text-sm"/>
//                 </a>
//                 <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
//                   <FaGoogle className="text-sm"/>
//                 </a>

//               </div>
//               <p>Or use email account</p>
//               <div className="flex flex-col items-center">
//                 <div className="bg-gray-100 w-64 p-2">
//                   <FaEnvelope className="text-gray-400"/>
//                 </div>
//               </div>

//             </div>

//             {/* <p>Sign in Section</p> */}
//           </div>
//           <div className="w-2/5 bg-yellow-500 text-white rounded-tr-2xl rounded-br-2xl py-8 px-12">
//             <h2 className="text-3xl font-bold mb-4">Hello Friend !!!</h2>
//             <div className="w-16 h-1 bg-white mx-auto mb-4"></div> {/* Centered line */}
//             <p>Fill up personal information and start your journey with us.</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Create Next App</title>
        {/* Add your meta tags, links, etc. here */}
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row w-full sm:w-2/3 max-w-4xl">
          <div className="w-full sm:w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-pink-500">Logo</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-pink-500 mb-2">Sign in to Account </h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaFacebookF className="text-sm"/>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaLinkedinIn className="text-sm"/>
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                  <FaGoogle className="text-sm"/>
                </a>
              </div>
              <p>Or use email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2"/>
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="bg-gray-100 w-full sm:w-64 p-2 flex items-center mb-3">
                  <MdLockOutline/>
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                </div>
                <div className="flex w-full sm:w-64 mb-5">
                  <label className="flex items-center text-xs">
                    <input type="checkbox" name="remember" className="mr-1"/>
                    Remember me
                  </label>
                  <a href="#" className="text-xs ml-auto">Forgot Password?</a>
                </div>
                <a href="#" className="border-2 border-pink-500 text-pink-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-pink-500 hover:text-white">Login</a>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-2/5 bg-pink-500 text-white rounded-tr-2xl rounded-br-2xl py-8 px-12 mt-6 sm:mt-0"> {/* Adjusted margin for small screens */}
            <h2 className="text-3xl font-bold mb-4">Welcome!!!</h2>
            <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
            <p>To access your account and track your requests, please enter the email you used to make your request</p>
          </div>
        </div>
      </main>
    </div>
  );
}
