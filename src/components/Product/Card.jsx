import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const AppCard = (props) => {
    const [favItem, setFavItem] = useState(<FcLikePlaceholder />);

    const addInFavs = (e) => {
        setFavItem(<FcLike />)
    }

    const { id, price, title, description, category, image, rating } = props.data;

    return (
        <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-[280px] mx-auto">
            {/* <div className="relative pb-[70%]">
                <img
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    src={image}
                    alt={title}
                />
                <button onClick={addInFavs} className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white shadow-lg">
                    {favItem}
                </button>

                <div className="hidden hover:block absolute bg-black/40 shadow-2xl h-full w-full">
                    <button className="font-semibold">View Product</button>
                </div>
            </div> */}
            <div className="relative pb-[70%] group">
  {/* Product Image */}
  <img
    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
    src={image}
    alt={title}
  />

  {/* Wishlist Button */}
  <button
    onClick={addInFavs}
    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white shadow-lg"
  >
    {favItem}
  </button>

  {/* Hover Overlay */}
  <div className="hidden group-hover:flex absolute top-0 left-0 bg-black/40 h-full w-full items-center justify-center">
    <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
      View Product
    </button>
  </div>
</div>

            <div className="p-4">
                <span className="text-xs font-medium text-blue-600 uppercase">{category}</span>
                <h3 className="mt-1 text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>

                {/* Rating */}
                <div className="flex items-center mt-2">
                    ⭐⭐⭐⭐☆ <span className="text-xs text-gray-500 ml-1">(24)</span>
                </div>

                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>

                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${price}</span>
                    <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 active:scale-95">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppCard;
// const Card = (props) => {
//     const { id, price, title, description, category, image, rating } = props.data;
//     return (
//         <div className="shadow-lg rounded-xl p-4 max-w-sm mx-auto flex flex-col justify-between">
//             <img className="w-full h-60 object-cover rounded-xl" src={image} alt="Black Hooded shirt" />
//             <h2 className="text-xl font-semibold text-gray-900 mt-4"> {title}</h2>
//             <p className="text-gray-500 text-sm">{category}</p>
//             <p className="text-gray-700 mt-2 text-sm line-clamp-2">{description}</p>
//             <div className="mt-4 flex justify-between items-center">
//                 <span className="text-lg font-bold text-gray-900">$ {price}</span>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700  hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//                 >Add to cart</button>
//             </div>
//         </div>
//     )
// }
// export default Card;
