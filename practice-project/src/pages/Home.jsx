import { ProductCards, ProductsMenu, Footer, Header } from "../components/index";
import { Link } from "react-router-dom";
function Home() {
    const products = [
        { Heading: "Top Seller", },
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
    const products2 = [
        { Heading: "Soft Drinks", },
        {
            id: 1,
            name: "Full  Milk",
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

    const menuData1 = [
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
        {
            id: 5,
            name: "Derm stick",
            volume: "1000g",
            image: "/public/homepage/5.JFIF",
            description: "“On A Recent Test Run Of All Three Services.”",
        },
    ];
    const menuData2 = [
        {
            id: 1,
            name: "Cream ",
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
        {
            id: 5,
            name: "Derm stick",
            volume: "1000g",
            image: "/public/homepage/5.JFIF",
            description: "“On A Recent Test Run Of All Three Services.”",
        },
    ];

    const images = [
        {
            id: 1,
            src: "public/homepage/30.jfif", // replace with actual path
            alt: "Image 1",
        },
        {
            id: 2,
            src: "public/homepage/23.jfif", // replace with actual path
            alt: "Image 2",
        },
        {
            id: 3,
            src: "public/homepage/24.jfif", // replace with actual path
            alt: "Main Image",
        },
        {
            id: 4,
            src: "public/homepage/25.jfif", // replace with actual path
            alt: "Image 4",
        },
        {
            id: 5,
            src: "public/homepage/26.jfif", // replace with actual path
            alt: "Image 5",
        },
    ];

    return (
        <div>
            {/* HERO-SECTION */}
            <div className="relative w-screen h-screen bg-black text-white">
                <div className="absolute inset-0">
                    <img
                        src="/public/homepage/26.jpg"
                        alt="Background"
                        className="object-cover w-full h-full bg-center"
                    />
                </div>
                <div className="relative top-20 z-10 flex flex-col items-center justify-center h-full">
                    <div
                        className="w-full max-w-screen-xl p-8 rounded-md h-full"
                        style={{
                            backgroundImage: "url('/public/homepage/1.jfif')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <Header/>
                        <div className="flex flex-col items-center justify-center mt-20 text-center">
                            <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-kaushan">
                                    Millions Of Happy
                                </h1>
                                <p className="w-full sm:w-3/4 lg:w-2/3 px-4 mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                                    Send unlimited free texts and make WiFi calls from a free
                                    phone number. Download the free app or sign up online to pick
                                    your free phone number.
                                </p>
                                <button className="px-4 sm:px-6 py-2 sm:py-3 mt-8 text-sm sm:text-lg font-bold text-black bg-yellow-400 rounded-full hover:bg-yellow-500">
                                    Start Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-full py-14 bg-yellow-600">
                {/* Top-Seller */}
                <div className="absolute inset-0">
                    <img
                        src="/public/homepage/46.JFIF"
                        alt="Background"
                        className="object-cover w-full h-full opacity-10"
                    />
                </div>

                <ProductCards products={products} />

                <div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-28 flex items-center justify-center bg-cover bg-center rounded-lg shadow-lg"
                    style={{
                        backgroundImage: "url('/public/homepage/26.jfif')",
                        backgroundPosition: "center",
                    }} // Replace with your actual background image path
                >
                    <div className="flex flex-col md:flex-row items-center  bg-opacity-80 rounded-lg p-8">
                        <img
                            src="/public/homepage/46.JFIF"
                            alt="Product"
                            className="object-cover w-32 h-32 md:w-64 md:h-64 rounded-lg"
                        />
                        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
                            <h1 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                                Top Seller
                            </h1>
                            <p className="text-base md:text-lg text-black">
                                “On A Recent Test Run Of All Three Services, Text Free Was The
                                Fastest, Most Reliable And Easiest To Use.”
                            </p>
                        </div>
                    </div>
                </div>

                <ProductsMenu menu={menuData1} />

                <div className="relative z-10 mx-auto px-4 sm:px-6 lg: my-28 flex items-center justify-center ">
                    <div className="bg-[#172307] rounded-lg px-24 py-36 flex flex-col md:flex-row items-center shadow-lg  mx-auto">
                        <img
                            src="/public/homepage/14.jpg"
                            alt="Product"
                            className="w-full max-w-sm md:w-1/3 rounded-lg object-cover"
                        />
                        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left px-20">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                Coca Cola
                            </h1>
                            <p className="text-xl md:text-2xl text-white mt-2">1 LITRE</p>
                            <p className="text-base md:text-lg text-white">
                                “On A Recent Test Run Of All Three Services.”
                            </p>
                            <button className="mt-6 w-full py-2 border-4 border-homepage-accent text-white rounded-full hover:bg-yellow-500">
                                ADD CART
                            </button>
                        </div>
                    </div>
                </div>

                {/* SoftDrinks-Section */}

                <ProductCards products={products2} />

                <div className="relative z-10 my-20 h-screen">
                    <div className=" mx-auto py-10 px-4 ">
                        <div className="w-full flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto ">
                            {/* Left images */}
                            <div className="flex flex-col gap-4">
                                <img
                                    src={images[0].src}
                                    alt={images[0].alt}
                                    className="w-80 h-72 object-cover rounded-lg shadow-md"
                                />
                                <img
                                    src={images[1].src}
                                    alt={images[1].alt}
                                    className="w-80 h-72 object-cover rounded-lg shadow-md"
                                />
                            </div>

                            {/* Main image */}
                            <div className="flex justify-center w-full md:w-2/4">
                                <img
                                    src={images[2].src}
                                    alt={images[2].alt}
                                    className="w-full h-full md:w-11/12 md:h-full rounded-lg shadow-lg"
                                />
                            </div>

                            {/* Right images */}
                            <div className="flex flex-col gap-4">
                                <img
                                    src={images[3].src}
                                    alt={images[3].alt}
                                    className="w-80 h-72 object-cover rounded-lg shadow-md"
                                />
                                <img
                                    src={images[4].src}
                                    alt={images[4].alt}
                                    className="w-80 h-72 object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
            </div>

            {/* <div className="h-96 w-screen bg-red-500"></div> */}
        </div>
    );
}

export default Home;
