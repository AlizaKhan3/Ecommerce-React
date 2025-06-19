import AppNavbar from '../src/components/Navbar/navbar'
import { Data } from '../src/utils/data'
import AppCard from "../src/components/Product/Card"

const ProductsList = () => {
  return (
    <>
      <div>
        <AppNavbar />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-lime-700'>
        {
          Data.map((object, index) => {
            return (
              // <Card key={index} data={object}/>
              <AppCard key={index} data={object} />
            )
          })
        }
      </div>
    </>
  )
}

export default ProductsList
