import React from 'react'
import { Header, Footer } from '../components';

function About() {
    return (
        <div>
            <div className="relative h-screen ">
                {/* Background image and overlay */}
                <div className="absolute top-0 left-0 w-full h-full flex">
                    {/* Left-side image */}
                    <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/public/aboutpageimg/4.jfif')" }}></div>

                    {/* Right-side image */}
                    <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/public/aboutpageimg/4.jfif')" }}></div>
                </div>

                {/* Diagonal white overlay */}
                <div className="absolute top-0 left-0 w-full h-full flex">
                    <div className="w-1/2 bg-white clip-path-left-diagonal"></div>
                    <div className="w-1/2"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col">
                    {/* Header */}
                    {/* <Header /> */}

                    {/* About Section */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center max-w-lg px-6 md:px-0">
                            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">About Us</h1>
                            <p className="text-lg md:text-xl text-white">
                                TextFree is a mobile application and web service that allows users to send and receive text messages, as well as make and receive VoIP phone calls, for free over.
                            </p>
                        </div>
                    </div>
                </div>



            </div>

            {/* </div> */}
            <div className="mx-auto py-6 px-14 my-24">
                <div className="w-full h-screen flex flex-col md:flex-row items-start justify-between gap-6">

                    {/* Image Cards */}
                    <div className="flex flex-col md:flex-row  gap-6 w-3/4 text-2xl ">
                        {/* First Card */}
                        <div className="w-full md:w-1/3 h-screen  overflow-hidden py-4">
                            <img src="public/aboutpageimg/1.jpg" alt="Free text online" className="w-11/12 h-2/3 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-4xl font-semibold">Free text online</h3>
                                <p className="text-gray-600">TextFree is a mobile application and web service</p>
                                <a href="#" className="text-blue-600 hover:underline">See More...</a>
                            </div>
                        </div>

                        {/* Second Card */}
                        <div className="w-full md:w-1/3  overflow-hidden">
                            <img src="public/aboutpageimg/2.jfif" alt="Free text online" className="11/12 h-2/3 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-4xl font-semibold">Free text online</h3>
                                <p className="text-gray-600">TextFree is a mobile application and web service</p>
                                <a href="#" className="text-blue-600 hover:underline">See More...</a>
                            </div>
                        </div>

                        {/* Third Card */}
                        <div className="w-full md:w-1/3  overflow-hidden">
                            <img src="public/aboutpageimg/3.jfif" alt="Free text online" className="w-11/12 h-2/3 object-cover" />
                            <div className="p-4 text-center">
                                <h3 className="text-4xl font-semibold">Free text online</h3>
                                <p className="text-gray-600">TextFree is a mobile application and web service</p>
                                <a href="#" className="text-blue-600 hover:underline">See More...</a>
                            </div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-2/6 h-2/3 text-center md:text-left flex flex-col justify-center items-center px-9">

                        <div className='text-center'>

                            <h2 className="text-5xl font-semibold mb-4 ">Free text online</h2>
                            <p className="text-gray-600 mb-4 text-left text-2xl font-medium px-6">
                                TextFree is a mobile application and web service that allows users
                                to send and receive text messages, as well as make and receive VoIP
                                phone calls, for free over.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">SignUP</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row  items-center h-screen bg-gray-100 md:">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-full">
                    <img
                        src="public/aboutpageimg/6.jfif"
                        alt="Shopping Basket"
                        className="h-full w-full object-cover  shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/4 text-center md:text-left mt-8 md:mt-0 md:ml-8">
                    <div className=''>
                        <h2 className="text-5xl font-bold text-gray-800 mb-4">Free text online1</h2>
                        <p className="text-gray-500 mb-4 text-2xl">
                            TextFree is a mobile application and web service that allows users to send and receive text
                            messages, as well as make and receive VoIP phone calls, for free over.
                            <br />
                            TextFree is a mobile application and web service that allows users to send and receive text
                            messages, as well as make and receive VoIP phone calls, for free over.
                        </p>
                        <p className="text-gray-600 mb-8 text-2xl">
                        </p>
                        <a href="#" className="text-blue-600 hover:underline">See More...</a>
                    </div>
                </div>
            </div>


            <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Free text online</h2>
                    <p className="text-gray-600 mb-4">
                        TextFree is a mobile application and web service that allows users to send and receive text
                        messages, as well as make and receive VoIP phone calls, for free over.
                    </p>
                    <p className="text-gray-600 mb-8">
                        TextFree is a mobile application and web service that allows users to send and receive text
                        messages, as well as make and receive VoIP phone calls, for free over.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline">See More...</a>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="public/aboutpageimg/7.jfif"
                        alt="Shopping Basket"
                        className="w-full h-auto object-cover shadow-lg"
                    />
                </div>
            </div>


            <section className="bg-white py-12">
                <div className="max-w-7xl h-screen mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">About service</h2>
                    <p className="text-gray-500 mb-12">
                        TextFree is a mobile application and web service that allows users to send and receive text.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center h-[100%]">
                            <div className="relative w-full">
                                <img src="public/aboutpageimg/9.webp" alt="Service 1" className="w-full h-96 object-cover" />
                                <div className="absolute inset-0 bg-opacity-25 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                                    <h3 className="text-xl font-semibold mb-2">Free text online</h3>
                                    <p className="text-sm mb-4">
                                        TextFree is a mobile application and web service
                                    </p>
                                    <a href="#" className="text-sm underline">See More...</a>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold text-gray-900">Free text online</h3>
                                <p className="text-gray-500">
                                    TextFree is a mobile application and web service that allows users to send and receive text.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full">
                                <img src="public/aboutpageimg/10.jfif" alt="Service 2" className="w-full h-96 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                                    <h3 className="text-xl font-semibold mb-2">Free text online</h3>
                                    <p className="text-sm mb-4">
                                        TextFree is a mobile application and web service
                                    </p>
                                    <a href="#" className="text-sm underline">See More...</a>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold text-gray-900">Free text online</h3>
                                <p className="text-gray-500">
                                    TextFree is a mobile application and web service that allows users to send and receive text.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="relative w-full">
                                <img src="public/aboutpageimg/11.jfif" alt="Service 3" className="w-full h-96 object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity">
                                    <h3 className="text-xl font-semibold mb-2">Free text online</h3>
                                    <p className="text-sm mb-4">
                                        TextFree is a mobile application and web service
                                    </p>
                                    <a href="#" className="text-sm underline">See More...</a>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <h3 className="text-lg font-semibold text-gray-900">Free text online</h3>
                                <p className="text-gray-500">
                                    TextFree is a mobile application and web service that allows users to send and receive text.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img
                        src="public/aboutpageimg/10.jfif"
                        alt="Shopping Basket"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Free text online</h2>
                    <p className="text-gray-600 mb-4">
                        TextFree is a mobile application and web service that allows users to send and receive text
                        messages, as well as make and receive VoIP phone calls, for free over.
                    </p>
                    <p className="text-gray-600 mb-8">
                        TextFree is a mobile application and web service that allows users to send and receive text
                        messages, as well as make and receive VoIP phone calls, for free over.
                    </p>
                    <a href="#" className="text-blue-600 hover:underline">See More...</a>
                </div>
            </div>

            <Footer fullWidth={true} bgColor="bg-black"></Footer>


        </div>
    )
}

export default About