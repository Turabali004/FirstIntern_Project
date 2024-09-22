import React from 'react';

function ProductsMenu({ menu }) {
    console.log(menu);

    return (
        <div>
            {/* Vegetables-Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="mb-8 text-3xl md:text-4xl lg:text-6xl font-normal underline text-left text-black">
                    Vegetable
                </h1>
                <div className="flex overflow-x-scroll space-x-4">
                    {menu.map((product) => (
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
                                {/* <p className="text-sm md:text-base text-white">
                                    {product.volume}
                                </p> */}
                                <p className="mt-2 text-sm md:text-base text-white">
                                    {product.description}
                                </p>
                                <button className="w-full px-4 py-2 mt-4 font-bold border-2 text-white border-homepage-primary rounded-full hover:bg-yellow-500">
                                    ADD CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsMenu;
