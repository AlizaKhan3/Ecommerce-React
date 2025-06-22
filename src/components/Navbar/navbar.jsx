import logo from "../../assets/Logo.png"
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { categoryList } from "../../utils/data";
import { Data } from "../../utils/data";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Trending Products",
    link: "/products",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#services",
  },
];

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Category",
//     link: "/products",
//   },
//   {
//     id: 2,
//     name: "Electronics",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

const AppNavbar = ({ handleOrderPopup, handleSearch, handleCategory }) => {

  // const [productlist, setProductList] = useState(Data);
  // const navigate = useNavigate();


  //  function handleCategory() {
  //   navigate('/products')
  //  }

  //   const handleCategory = (selectedCategory) => {
  //     console.log(selectedCategory); // this will now log the correct value

  //     let filteredCategory;

  //     if (selectedCategory === "") {
  //       navigate('/products')
  //       setProductList(productlist);
  //     }
  //     else {
  //       filteredCategory = Data.filter((product) => product.category === selectedCategory);
  //       navigate('/products')
  //       setProductList(filteredCategory);
  //     }
  // }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-12" />
              OneStop
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Category
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              {categoryList.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategory(category)}
                  className="px-4 py-2 hover:bg-primary/20 rounded-md cursor-pointer capitalize"
                >
                  <Link to="/products">{category} </Link>

                </div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AppNavbar;