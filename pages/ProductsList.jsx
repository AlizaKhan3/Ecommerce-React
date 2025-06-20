import AppNavbar from '../src/components/Navbar/navbar'
import { Data } from '../src/utils/data'
import AppCard from "../src/components/Product/Card"
import { useState } from 'react'
import { IoFilterCircleSharp } from "react-icons/io5";
import SortProducts from '../src/components/Product/sortPrice';

const ProductsList = () => {

  const [dataList, setDataList] = useState(Data);

  const handleSearchInput = (e) => {
    const searchedItem = e.target.value;
    // console.log(searchedItem)

    let filteredItem;

    if (searchedItem === "") {
      setDataList(Data);
    }
    else {
      filteredItem = Data.filter((product) => product.title.toLowerCase().includes(searchedItem.toLowerCase()));
      setDataList(filteredItem)
    }
  }

  const handleCat = (selectedCategory) => {
    // const selectedCategory = e.target.value;
    console.log(selectedCategory)

    let filteredCategory;

    if (selectedCategory === "") {
      setDataList(Data);
    }
    else {
      filteredCategory = Data.filter((product) => product.category === selectedCategory);
      setDataList(filteredCategory);
    }
  }

  const sortProductsByPrice = (selectedOption) => {
    console.log(selectedOption);

    const sortedList = [...Data];

    if (selectedOption === "Low to High") {
      sortedList.sort((a, b) => a.price - b.price )
    }

    else if (selectedOption === "High to Low") {
      sortedList.sort((a, b) => b.price - a.price )
    }
    setDataList(sortedList)
  }
  return (
    <>
      <div className="mb-8">
        <AppNavbar handleSearch={handleSearchInput} handleCategory={handleCat} />
      </div>
      <SortProducts handleSort={sortProductsByPrice} />

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  place-items-center gap-5">
        {
          dataList.map((object, index) => {
            return (
              <AppCard key={index} data={object} />
            )
          })
        }
      </div>
    </>
  )
}

export default ProductsList