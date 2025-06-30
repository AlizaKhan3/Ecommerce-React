import AppCard from "../src/components/Product/Card"
import { Link, useParams } from "react-router-dom"
import { categoryList, Data } from "../src/utils/data"
import { useMemo, useState } from "react"
import DetailCard from "../src/components/Product/DetailCard"

const ProductDetail = () => {
  const params = useParams()
  // const [viewProduct, setViewProduct] = useState(null);

  //can go with useMemo coz we only want to display this when component renders (Mount -- with depenedency) OR we can do wtih useEffect+useState but obviously longer code it would be so for clean code and good practice here useMemo is used
  const productResult = useMemo(() => {
    const prodDataTitle = params.title;
    const findProduct = Data.find((product) => product.title === prodDataTitle)
    // console.log(findProduct.description)
    return findProduct;
  }, [])

  return (
    <div className="container mx-auto mt-7">
      {
        { productResult } ?
          <div>

            {/* to={`products/${categoryList}` */}
            <Link to="/products">
              <span className="text-xs font-medium text-blue-600 uppercase">{`CATEGORY/ ${productResult.category}/ ${params.title}`}</span>
            </Link>
            <DetailCard title={productResult.title} description={productResult.description} price={productResult.price} image={productResult.image} category={productResult.category} />
          </div>
          : null
      }
    </div>
  )
}

export default ProductDetail;
