
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { loading, error, allProducts } = useSelector((state) => state.productReducer)
  console.log(loading, error, allProducts);

  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const [currentPage,setCurrentPage] = useState(1)
  const currentPageProductsLastIndex = currentPage * productsPerPage
  const currentPageProductsFirstIndex = currentPageProductsLastIndex - productsPerPage
  const visibleProductCards = allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  const navigatePrevPage = ()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

    const navigateNextPage = ()=>{
    if(currentPage<totalPages){
      setCurrentPage(currentPage+1)
    }
  }



  return (
    <>
      <Header insideHeader = {true} />
      <div className='pt-30 mx-5'>
       {loading? 
       <div className='d-flex justify-content-center align-items-center mt-5 text-center'><img class="d-block mx-auto" src="https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif" alt=""  width={'300px'}/></div> 
       : <div className='grid grid-cols-4 gap-4'>
        {
          allProducts?.length>0?
           visibleProductCards?.map(product=>(
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

      {/* Pagination */}
      <div className="text-center mt-20 font-bold text-2xl text-sky-700">
        <button onClick={navigatePrevPage} className='cursor-pointer'><i className="fa-solid fa-backward"></i></button>
        <span>{currentPage} 0f {totalPages}</span>
        <button onClick={navigateNextPage} className='cursor-pointer'><i className="fa-solid fa-forward"></i></button>
      </div>

    </>
  )
}

export default Home