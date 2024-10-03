import React from "react";

function ProductCards({ products }) {
    console.log(products);

    return (
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-24">
            <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl font-normal text-left text-black py-6">
                {products[0].Heading}
            </h1>
            <div className="flex flex-wrap justify-center sm:justify-start space-x-0 sm:space-x-4">
                <div className="w-full sm:w-72 p-4 mb-4 bg-homepage-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={products[1].image}
                        alt={products[1].name}
                        className="object-cover w-full h-48 rounded-lg overflow-hidden"
                    />
                    <div className="mt-4 overflow-hidden">
                        <h2 className="text-lg md:text-xl text-left font-bold text-white">
                            {products[1].name}
                        </h2>
                        <p className="text-sm md:text-base text-white">{products[1].volume}</p>
                        <p className="mt-2 text-sm md:text-base text-white">
                            {products[1].description}
                        </p>
                        <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
                            ADD CART
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-72 p-4 mb-4 bg-homepage-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={products[2].image}
                        alt={products[2].name}
                        className="object-cover w-full h-48 rounded-lg overflow-hidden"
                    />
                    <div className="mt-4 overflow-hidden">
                        <h2 className="text-lg md:text-xl text-left font-bold text-white">
                            {products[2].name}
                        </h2>
                        <p className="text-sm md:text-base text-white">{products[2].volume}</p>
                        <p className="mt-2 text-sm md:text-base text-white">
                            {products[2].description}
                        </p>
                        <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
                            ADD CART
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-72 p-4 mb-4 bg-homepage-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={products[3].image}
                        alt={products[3].name}
                        className="object-cover w-full h-48 rounded-lg overflow-hidden"
                    />
                    <div className="mt-4 overflow-hidden">
                        <h2 className="text-lg md:text-xl text-left font-bold text-white">
                            {products[3].name}
                        </h2>
                        <p className="text-sm md:text-base text-white">{products[3].volume}</p>
                        <p className="mt-2 text-sm md:text-base text-white">
                            {products[3].description}
                        </p>
                        <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
                            ADD CART
                        </button>
                    </div>
                </div>
                <div className="w-full sm:w-72 p-4 mb-4 bg-homepage-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                        src={products[4].image}
                        alt={products[4].name}
                        className="object-cover w-full h-48 rounded-lg overflow-hidden"
                    />
                    <div className="mt-4 overflow-hidden">
                        <h2 className="text-lg md:text-xl text-left font-bold text-white">
                            {products[4].name}
                        </h2>
                        <p className="text-sm md:text-base text-white">{products[4].volume}</p>
                        <p className="mt-2 text-sm md:text-base text-white">
                            {products[4].description}
                        </p>
                        <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
                            ADD CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCards;
