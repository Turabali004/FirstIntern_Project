import React from "react";
import { Link } from "react-router-dom";
function Home() {
  const products = [
    {
      id: 1,
      name: "Full Cream Milk",
      volume: "1500ml",
      image: "/public/homepage/2.JFIF",
      description: "“On A Recent Test Run Of All Three Services.”",
    },
    {
      id: 2,
      name: "Dog Feed",
      volume: "1500g",
      image: "/public/homepage/3.JFIF",
      description: "“On A Recent Test Run Of All Three Services.”",
    },
    {
      id: 3,
      name: "Jam",
      volume: "100ml",
      image: "/public/homepage/4.JFIF",
      description: "“On A Recent Test Run Of All Three Services.”",
    },
    {
      id: 4,
      name: "Derm stick",
      volume: "1000g",
      image: "/public/homepage/5.JFIF",
      description: "“On A Recent Test Run Of All Three Services.”",
    },
  ];
  return (
    <div>
      {/* HERO-SECTION */}
      <div className="relative w-screen h-screen bg-black text-white">
        <div className="absolute inset-0 opacity-70">
          <img
            src="/public/homepage/26.jpg"
            alt="Background"
            className="object-cover w-full h-full bg-center	"
          />
        </div>
        <div className="relative top-8 z-10 flex flex-col items-center justify-center h-full ">
          <div
            className="w-full max-w-screen-xl p-8 bg-opacity-75 rounded-md h-[140%]"
            style={{
              backgroundImage: "url('/public/homepage/1.jfif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <nav className="flex justify-between w-full py-4">
              <div className="text-xl font-bold">Your Logo</div>
              <div className="space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 text-black rounded-full"
                />
                <Link to="/" className="text-white hover:underline">
                  Home
                </Link>
                <Link to="/store" className="text-white hover:underline">
                  Store
                </Link>
                <Link to="/contact" className="text-white hover:underline">
                  Contact
                </Link>
                <Link to="/help" className="text-white hover:underline">
                  Help
                </Link>
              </div>
              {/* <div className="relative">
             
            </div> */}
            </nav>
            <div className="w-full flex flex-col items-center justify-center mt-20 text-center">
              <div className="w-1/2 flex flex-col justify-center items-center">
                <h1 className="text-8xl font-kaushan">Millions Of Happy</h1>
                <p className="w-2/3 px- mt-4 text-xl font-bold">
                  Send unlimited free texts and make WiFi calls from a free
                  phone number. Download the free app or sign up online to pick
                  your free phone number.
                </p>
                <button className="px-6 py-3 mt-8 text-lg font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-500">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-full py-16 bg-homepage-primary">
  <div className="absolute inset-0">
    <img
      src="/public/homepage/46.JFIF"
      alt="Background"
      className="object-cover w-full h-full opacity-30"
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl font-normal text-left text-black py-6">
      Top Seller
    </h1>
    <div className="flex overflow-x-scroll space-x-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex-shrink-0 w-72 p-4 bg-homepage-secondary rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48 rounded-lg overflow-hidden"
          />
          <div className="mt-4 overflow-hidden">
            <h2 className="text-lg md:text-xl text-left font-bold text-white">
              {product.name}
            </h2>
            <p className="text-sm md:text-base text-white">{product.volume}</p>
            <p className="mt-2 text-sm md:text-base text-white">{product.description}</p>
            <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
              ADD CART
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex items-center justify-center">
    <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-50 rounded-lg shadow-lg p-8">
      <img
        src=""
        alt="Product"
        className="object-cover w-32 h-32 md:w-64 md:h-64 rounded-lg"
      />
      <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold text-black">Top Seller</h1>
        <p className="text-base md:text-lg text-black">
          “On A Recent Test Run Of All Three Services, Text Free Was The Fastest, Most Reliable And Easiest To Use.”
        </p>
      </div>
    </div>
  </div>
</div>


      {/* <div className="h-96 w-screen bg-red-500"></div> */}
    </div>
  );
}

export default Home;
