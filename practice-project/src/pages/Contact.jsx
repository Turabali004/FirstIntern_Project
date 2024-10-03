import React from 'react';
import { Footer } from '../components';

const Contact = () => {
    return (
        <div>
            <div
                className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative"
                style={{ backgroundImage: "url('/contactusimg.jfif')" }} // Update the path to your image file
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 w-full">
                    <nav className="w-3/4 flex justify-between items-center py-4 px-6 bg-transparent text-white">
                        <div className="text-xl font-bold">Your Logo</div>
                        <ul className="flex space-x-6">
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#store" className="hover:underline">Store</a></li>
                            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                            <li><a href="#help" className="hover:underline">Help</a></li>
                        </ul>
                    </nav>
                    <div className="flex justify-center items-center min-h-screen">
                        <div className="w-full max-w-md p-8  bg-opacity-75 rounded-lg">
                            <h2 className="text-3xl font-bold text-white mb-2 text-center">Contact Us</h2>
                            <p className="text-gray-300 mb-6 text-center">
                                TextFree is a mobile application and web service that allows users to send
                            </p>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                                        Name:
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Enter Your Name..."
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                                        E-Mail:
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Enter Your Email..."
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Enter Your Password..."
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                                        Message:
                                    </label>
                                    <textarea
                                        className="w-full px-3 py-2 text-gray-900 leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="message"
                                        placeholder="Message..."
                                    ></textarea>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-transparent text-white font-bold py-2 px-4 border border-yellow-500 rounded hover:bg-yellow-500 hover:text-black focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Submit
                                        <span className="ml-2">✈️</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;
