import React from 'react';
import { Header, Footer } from '../components';

function Login() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-600">
        <div className="flex flex-col lg:flex-row items-center w-full h-full bg-login-primary shadow-lg rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 px-8 lg:px-64 py-8 lg:py-0">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 text-center">User LogIn</h2>
            <div className="flex justify-center space-x-4 mb-4">
              <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
              </button>
              <span className="text-gray-600">Or</span>
              <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
              </button>
            </div>
            <form className="space-y-4 py-8 lg:py-14">
              <div>
                <label className="block text-gray-700 mb-2 text-xl lg:text-3xl font-semibold">E-Mail:</label>
                <input
                  className="w-full px-3 py-2 lg:py-4 text-gray-900 text-lg lg:text-2xl leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your Email..."
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 text-xl lg:text-3xl font-semibold">Password:</label>
                <input
                  className="w-full px-3 py-2 lg:py-4 text-gray-900 text-lg lg:text-2xl leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your Password..."
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-login-primary w-10/12 text-black font-bold py-2 lg:py-4 mt-8 border-2 text-lg lg:text-2xl border-yellow-500 rounded hover:bg-yellow-500 focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full justify-center items-center font-semibold text-gray-500 text-lg lg:text-2xl mt-4">
              <a href="#help" className="hover:underline">Help!</a>
              <a href="#forgot" className="hover:underline">Forgot Password?</a>
            </div>
          </div>
          {/* right-section */}
          <div className="hidden lg:flex w-full lg:w-1/2 lg:h-screen relative justify-center items-center rounded-tl-[30%] overflow-hidden">
            <img
              src="/public/loginpageimg.jfif"
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="h-full w-full flex justify-center items-center">
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative z-10 p-8 text-white px-60 font-bold  text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to Website</h2>
                <p className='text-xl font-semibold'>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer fullWidth={true} bgColor="bg-black" />
    </div>
  );
}

export default Login;
