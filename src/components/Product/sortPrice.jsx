import { useState } from "react";
import { IoFilterCircleSharp } from "react-icons/io5";

const SortProducts = ({ handleSort }) => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className="h-max flex w-auto place-items-end flex-col text-white relative my-6 mr-3">
            <div className="bg-secondary/40 p-2 rounded-xl text-black font-bold flex gap-2 items-center cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                <IoFilterCircleSharp />
                <button>Sort</button>
            </div>
            {
                showOptions ?
                    <div className="mt-2 flex flex-col bg-white/60 text-slate-500 font-semibold rounded shadow-lg absolute top-full z-10">
                        <button onClick={() => handleSort("low to High")} value="low to high" className="px-4 py-2 hover:bg-purple-100"> Low to High </button>
                        <button onClick={() => handleSort("High to Low")} value="high to low" className="px-4 py-2 hover:bg-purple-100"> High to Low</button>
                    </div>
                    :
                    <></> // or null
            }
        </div>
    );
    //             !showOptions ?
    //                 <div onClick={handleSort} className="hidden">
    //                     <button>Low to High</button>
    //                     <button>High to Low</button>
    //                 </div>
    //                 :
}

export default SortProducts;

// const showOptions = () => {
//     console.log("SHOW")
//     // return(
//     //     <select>
//     //         <option>djshdjks</option>
//     //         <option>djshdjks</option>
//     //     </select>
//     // )
// }

// <div className="flex items-center gap-2">
//     <IoFilterCircleSharp />
//     <select onClick={sortPrice}>
//         <option disabled>Sort by</option> {/* always on top but disabled */}
//         <option>Low to High</option>
//         <option>High to Low</option>
//     </select>
// </div>