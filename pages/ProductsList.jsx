import AppNavbar from '../src/components/Navbar/navbar'
import { Data } from '../src/utils/data'
import AppCard from "../src/components/Product/Card"
import { useState } from 'react'

const ProductsList = () => {

  const [dataList , setDataList] = useState(Data);

  const handleSearchInput = (e) => {
    const searchedItem = e.target.value;
    // console.log(searchedItem)

    let filteredItem;

    if(searchedItem === "" ){
      setDataList(Data);
    }
    else{
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

  return (
    <>
      <div className="mb-8">
        <AppNavbar handleSearch={handleSearchInput} handleCategory={handleCat}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-8">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto max-w-full"> */}
        {
          dataList.map((object, index) => {
           return(
            <AppCard key={index} data={object}/>
           )
          })
        }
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
         {
          // dataList.map((object, index) => {
          //   return (
          //     // <Card key={index} data={object}/>
          //     <AppCard key={index} data={object} />
          //   )
          // })
        }
      </div> */}
    </>
  )
}

export default ProductsList
