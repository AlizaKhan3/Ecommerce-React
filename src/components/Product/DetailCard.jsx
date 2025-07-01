// import AppCard from './Card'
// import image from "../../assets/women.png"

const DetailCard = ({ image, category, title, description, price }) => {
    return (
        <div className="container p-6 shadow-2xl border-gray-300 rounded-3xl grid grid-cols-1 md:grid-cols-2">
            <div className=" flex justify-center items-center">
                {/* <span className="text-xs font-medium text-blue-600 uppercase">{category}</span> */}

                {/* <img src={img} alt="" /> */}
                <img className="h-full object-contain p-2 w-56 md:w-72" src={image} />
            </div>

            <div className="p-8 place-content-center">
                {/* <span className="text-xs font-medium text-blue-600 uppercase">{category}</span> */}
                <h3 className="mt-1 text-xl md:text-2xl font-bold text-gray-900 line-clamp-1">{title}</h3>

                <p className="mt-2 text-sm text-gray-700">{description}</p>
                <div className="flex items-center mt-2">
                    ⭐⭐⭐⭐☆ <span className="text-xs text-gray-500 ml-1">(24)</span>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${price}</span>
                    <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 active:scale-95">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DetailCard
