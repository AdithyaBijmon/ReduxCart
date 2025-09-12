
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
       <p>Loading</p> 
       : <div className='grid grid-cols-4 gap-4'>
          <div className="rounded p-2 shadow">

            {/* Image */}
            <img src="https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg" alt="no image" height={'200px'} />

            <div className="text-center">

              {/* Title */}
              <h3 className='text-xl font-bold'>Title</h3>

              {/* Link */}
              <Link to={`/id/view`} className='p-1 rounded text-white bg-sky-700 mt-3 inline-block'>View more...</Link>
            </div>
          </div>
        </div>}
      </div>

    </>
  )
}

export default Home