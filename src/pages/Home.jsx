
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, error, allProducts } = useSelector((state) => state.productReducer)
  console.log(loading, error, allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  return (
    <>
      <Header />
      <div className='pt-30 mx-5'>
       {loading? 
       <div className='d-flex justify-content-center align-items-center mt-5 text-center'><img class="d-block mx-auto" src="https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif" alt=""  width={'300px'}/></div> 
       : <div className='grid grid-cols-4 gap-4'>
        {
          allProducts?.length>0?
           allProducts?.map(product=>(
              <div key={product?.id} className="rounded p-2 shadow">

            {/* Image */}
            <img src={product?.thumbnail} alt="no image" height={'200px'} />

            <div className="text-center">

              {/* Title */}
              <h3 className='text-xl font-bold'>{product?.title}</h3>

              {/* Link */}
              <Link to={`/${product?.id}/view`} className='p-1 rounded text-white bg-sky-700 mt-3 inline-block'>View more...</Link>
            </div>
          </div>
           ))
          :
          <p>No products available</p>
        }
        </div>}
      </div>

    </>
  )
}

export default Home