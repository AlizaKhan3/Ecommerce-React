import Aos from "aos";
import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import { addToCartHandler } from "../../helpers/addToCartHandler";

const AppCard = (props) => {
    const [favItem, setFavItem] = useState(<FcLikePlaceholder />);

    const addInFavs = (e) => {
        setFavItem(<FcLike />)
    }

    const { id, price, title, description, category, image, rating } = props.data;


    //moved this to helper to reuse on multiple pages.
    // const addToCartHandler = () => {
    //     const CART_KEY = "user-cart";
    //     const product = { ...props.data, quantity: 1 };

    //     // Get existing cart from localStorage
    //     const existingCart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

    //     const index = existingCart.findIndex((item) => item.id === product.id);

    //     if (index !== -1) {
    //         // Already in cart, increase quantity
    //         existingCart[index].quantity += 1;
    //     } else {
    //         // Not in cart, add new item
    //         existingCart.push(product);
    //     }

    //     localStorage.setItem(CART_KEY, JSON.stringify(existingCart));
    //     // alert("Item added to cart!");
    // };

    // console.log(params.title)
    return (
        <div data-aos="zoom-in-down" className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-md transition-all duration-300  my-4 sm:mx-2">
            <div className="relative pb-[70%] group">
                {/* Product Image */}
                <img
                    className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                    src={image}
                    alt={title}
                />
                {/* Hover Overlay */}
                <div className="hidden group-hover:flex absolute top-0 left-0 bg-black/40 w-full h-full items-center justify-center">
                    <button onClick={addInFavs} className="absolute top-3 right-2  p-2 bg-white/80 rounded-full hover:bg-white shadow-lg">
                        {favItem}
                    </button>
                    <Link to={`/product/${title}`} className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        View Product
                    </Link>
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
                {/* lineclamp-2 shows only 2 line text baqi view product pr jaakr ayega */}

                <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${price}</span>
                    <button onClick={() => addToCartHandler(props.data)} className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 active:scale-95">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppCard;


//   <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
//     {/* card section */}
//     {ProductsData.map((data) => (
//       <div
//         data-aos="fade-up"
//         data-aos-delay={data.aosDelay}
//         key={data.id}
//         className="space-y-3"
//       >
//         <img
//           src={data.img}
//           alt=""
//           className="h-[220px] w-[150px] object-cover rounded-md"
//         />
//         <div>
//           <h3 className="font-semibold">{data.title}</h3>
//           <p className="text-sm text-gray-600">{data.color}</p>
//           <div className="flex items-center gap-1">
//             <FaStar className="text-yellow-400" />
//             <span>{data.rating}</span>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>