import React from 'react'
import { Header } from '../components'

function Login() {
  return (
    <div>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-8">
          
          <Header/>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">User LogIn</h2>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            </button>
            <span className="text-gray-600">Or</span>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
              <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" />
            </button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2" >E-Mail:</label>
              <input
                className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your Email..."
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2" >Password:</label>
              <input
                className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your Password..."
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-yellow-400 text-black font-bold py-2 px-4 border border-yellow-500 rounded hover:bg-yellow-500 focus:outline-none focus:shadow-outline"
                type="button"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="flex justify-between mt-4 text-sm">
            <a href="#help" className="text-gray-600 hover:underline">Help!</a>
            <a href="#forgot" className="text-gray-600 hover:underline">Forgot Password?</a>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 relative">
          {/* <img
            src="/public/loginpageimg.jfif"
            alt="Background"
            className="absolute inset-0 w-full h- object-cover"
          /> */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Welcome to Website</h2>
            <p>TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over the</p>
          </div>
        </div>
      </div>
    </div>
    <h1>This is my login page.</h1>
    </div>
  )
}

export default Login