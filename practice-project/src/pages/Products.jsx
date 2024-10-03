import { Header } from '../components'
import strawberriesImage from '/public/product-pageimages/11.png'; // Assume you saved the strawberries image here
import kiwiBg from '/public/product-pageimages/10.jfif'; // Assume kiwi background image is here
import peachImage from '/public/product-pageimages/21.jfif';  // Replace with your actual image path
import avocadoImage from '/public/product-pageimages/28.jfif';
import mangoImage from "/public/product-pageimages/1.jfif"
import {Footer} from '../components/index';

function Products() {
  const fruits = [
    { id: 1, name: 'Dragon Fruit', image: 'public/product-pageimages/2.webp', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 2, name: 'Pomegranate', image: 'public/product-pageimages/3.jpg', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 3, name: 'Orange', image: 'public/product-pageimages/4.jfif', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 4, name: 'Apple', image: 'public/product-pageimages/5.jpg', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 5, name: 'Watermelon', image: 'public/product-pageimages/6.jpg', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 6, name: 'Grapes', image: 'public/product-pageimages/7.webp', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 7, name: 'Mangosteen', image: 'public/product-pageimages/8.jfif', rating: 4.3, description: 'A mango is an edible stone fruit.' },
    { id: 8, name: 'Orange', image: 'public/product-pageimages/9.jpg', rating: 4.3, description: 'A mango is an edible stone fruit.' }
  ];
  return (
    <div className='h- w-screen '>

      <div className='w-screen py-8 px-36  mx-auto bg-gray-200'>
        <Header />
      </div>

      <div className="flex flex-col md:flex-row items-center bg-gray-200 p-6 rounded-lg shadow-lg w-full mx-auto h-screen">
        <div className="flex-1 text-center md:text-left pl-32">
          <h2 className="text-gray-400 text-2xl md:text-7xl font-semibold mb-2">Testy and</h2>
          <h1 className="text-yellow-500 text-4xl md:text-9xl font-bold mb-4">Fresh</h1>
          <p className="text-gray-600 w-2/4 mb-4 text-3xl ">
            A mango is an edible stone fruit produced by the tropical tree Mangifera indica.
          </p>
          <div className="flex justify-center md:justify-start mb-4 text-6xl">
            <span className="text-yellow-500 ">&#9733;</span>
            <span className="text-yellow-500 ">&#9733;</span>
            <span className="text-yellow-500 ">&#9733;</span>
            <span className="text-yellow-500 ">&#9733;</span>
            <span className="text-gray-400 ">&#9733;</span>
          </div>
          <button className=" text-black font-bold py-5 px-44 text-4xl rounded-2xl border-2 border-yellow-400 shadow-lg hover:bg-yellow-500">
            BUY NOW
          </button>
        </div>
        <div className="flex-1">
          <img src={mangoImage} alt="Mango" className="w-full h-full rounded-lg" />
        </div>
      </div>


      {/* products */}
      <div className="flex flex-wrap justify-center">
        {fruits.map(fruit => (
          <div key={fruit.id} className="w-96 bg-white  rounded-lg overflow-hidden my-4 mx-2">
            <img className="w-full h-96 object-cover" src={fruit.image} alt={fruit.name} />
            <div className="p-4">
              <div className="flex justify-between items-center mt-2 text-5xl">
                <h2 className="font-bold text-yellow-400 text-3xl">Fresh</h2>
                <div>
                  <span className="ml-1 text-gray-600">{fruit.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-3xl">{fruit.description}</p>
              <button className="mt-4 w-1/2 mx-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Fruites Section */}
      <div className="h-[660px] flex justify-center items-center bg-gray-300">
        <div className="relative bg-cover bg-center h-5/6 w-full flex items-center justify-center" style={{ backgroundImage: `url(${kiwiBg})` }}>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col items-center text-center md:flex-row w-full">
            {/* Text Section */}
            <div className="mb-8 md:mb-0 md:mr-8 w-1/2 px-32 relative z-10">
              <h1 className="text-white text-4xl md:text-8xl font-bold">
                Testy and
                <span className="text-yellow-400"> Fresh</span>
              </h1>
              <p className="text-white text-lg md:text-5xl font-light mt-4">
                A mango is an edible stone fruit produced by the tropical tree
                <span className="font-light"> Mangifera indica.</span>
              </p>
            </div>

            {/* Image Section */}
            <div className="relative w-1/2 flex justify-center z-10">
              <img src={strawberriesImage} alt="Strawberries" className="w-64 md:w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="flex flex-wrap justify-center">
        {fruits.map(fruit => (
          <div key={fruit.id} className="w-96 bg-white  rounded-lg overflow-hidden my-4 mx-2">
            <img className="w-full h-96 object-cover" src={fruit.image} alt={fruit.name} />
            <div className="p-4">
              <div className="flex justify-between items-center mt-2 text-5xl">
                <h2 className="font-bold text-yellow-400 text-3xl">Fresh</h2>
                <div>
                  <span className="ml-1 text-gray-600">{fruit.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-3xl">{fruit.description}</p>
              <button className="mt-4 w-1/2 mx-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>


      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="flex justify-center w-screen h-screen">
          {/* First Card */}
          <div className="w-1/3 h-full rounded-lg p-6 mx-4">
            <img src={peachImage} alt="Peach" className="rounded-lg w-full h-full object-cover mb-6" />
            <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
              Fresh <span className="text-gray-600 text-lg">4.3★</span>
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              A mango is an edible stone fruit.
            </p>
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white transition duration-300">
              Add Cart
            </button>
          </div>

          {/* Second Card */}
          <div className="w-1/3 p-6 mx-4 bg-gray-100">
            <img src={avocadoImage} alt="Avocado" className="rounded-lg w-full h-full object-cover mb-6" />
            <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
              Fresh <span className="text-gray-600 text-lg">4.3★</span>
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              A mango is an edible stone fruit.
            </p>
            <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-white transition duration-300">
              Add Cart
            </button>
          </div>
        </div>
      </div>

      {/* Fruites Section */}
      <div className="my-60 flex justify-center items-center bg-gray-300">
        <div className="h-[660px] relative bg-cover bg-center w-full flex items-center justify-center" style={{ backgroundImage: `url(${peachImage})` }}>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col items-center text-center md:flex-row w-full">
            {/* Text Section */}
            <div className="mb-8 md:mb-0 md:mr-8  relative z-10 px-[600px]">
              <h1 className="text-white text-4xl md:text-8xl font-bold">
                Testy and
                <span className="text-yellow-400"> Fresh</span>
              </h1>
              <p className="text-white text-lg md:text-5xl font-light mt-4">
                A mango is an edible stone fruit produced by the tropical tree
                <span className="font-light"> Mangifera indica.</span>
              </p>
            </div>

            
          </div>
        </div>
      </div>
      

      {/* products */}
      <div className="flex flex-wrap justify-center">
        {fruits.map(fruit => (
          <div key={fruit.id} className="w-96 bg-white  rounded-lg overflow-hidden my-4 mx-2">
            <img className="w-full h-96 object-cover" src={fruit.image} alt={fruit.name} />
            <div className="p-4">
              <div className="flex justify-between items-center mt-2 text-5xl">
                <h2 className="font-bold text-yellow-400 text-3xl">Fresh</h2>
                <div>
                  <span className="ml-1 text-gray-600">{fruit.rating}</span>
                  <span className="text-yellow-400">★</span>
                </div>
              </div>
              <p className="mt-2 text-gray-600 text-3xl">{fruit.description}</p>
              <button className="mt-4 w-1/2 mx-auto bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>


         {/* Fruites Section */}
      <div className="h-[660px] flex justify-center items-center bg-gray-300">
        <div className="relative bg-cover bg-center h-5/6 w-full flex items-center justify-center" style={{ backgroundImage: `url(${kiwiBg})` }}>

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col items-center text-center md:flex-row w-full">
            {/* Text Section */}
            <div className="mb-8 md:mb-0 md:mr-8 w-1/2 px-32 relative z-10">
              <h1 className="text-white text-4xl md:text-8xl font-bold">
                Testy and
                <span className="text-yellow-400"> Fresh</span>
              </h1>
              <p className="text-white text-lg md:text-5xl font-light mt-4">
                A mango is an edible stone fruit produced by the tropical tree
                <span className="font-light"> Mangifera indica.</span>
              </p>
            </div>

            {/* Image Section */}
            <div className="relative w-1/2 flex justify-center z-10">
              <img src={strawberriesImage} alt="Strawberries" className="w-64 md:w-full" />
            </div>
          </div>
        </div>
      </div>


        <Footer fullWidth={true} bgColor="bg-black"/>

    </div>
  )
}

export default Products