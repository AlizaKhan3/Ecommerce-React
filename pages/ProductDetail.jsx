import AppCard from "../src/components/Product/Card"
import { useParams } from "react-router-dom"
import { Data } from "../src/utils/data"
import { useMemo, useState } from "react"

const ProductDetail = () => {
  const params = useParams()
  const [viewProduct, setViewProduct] = useState(null);


  const memoRes = useMemo((view) => {
    const prodDataTitle = params.title;

    const findProduct = Data.find((product) => product.title === prodDataTitle)

    setViewProduct(findProduct)
    // console.log(findProduct.description)

    return findProduct;

  }, [params])


 

  return (
    <div className="container mx-auto border border-slate-700">
      {
        { memoRes } ?
          <div>
            <h1>{params.title}</h1>
            <p className="text-yellow-600">{memoRes.description}</p>
          </div>
          : null
      }
    </div>
  )
}

export default ProductDetail;
