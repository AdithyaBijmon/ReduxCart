import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'

const Wishlist = () => {
  const dispatch = useDispatch()

  const ourWishlist = useSelector(state => state.wishlistReducer)
  return (
    <>

      <Header />
      <div className='pt-30 mx-5'>
        <h1 className="text-center text-red-500 mt-3 text-4xl font-bold">My Whishlist</h1>
        <div className='grid grid-cols-4 gap-4'>

          {
            ourWishlist?.length>0 ?
            ourWishlist.map(wishlist=>(
              <div key={wishlist?.id} className="rounded p-2 shadow">

            {/* Image */}
            <img src={wishlist?.thumbnail} alt="no image" height={'200px'} />

            <div className="text-center">

              {/* Title */}
              <h3 className='text-xl font-bold'>{wishlist?.title}</h3>

              {/* Buttons */}

              <div className="flex justify-evenly my-5">
                <button onClick={()=>dispatch(removeWishlistItem(wishlist?.id))}><i className="fa-solid fa-heart-circle-xmark text-red-500 text-xl"></i></button>
                <i className="fa-solid fa-cart-plus text-green-500 text-xl"></i>
              </div>

            </div>
          </div>
            )):
            <p className="text-center font-bold my-10">Your Wishlist is empty..</p>
          }
          
        </div>
      </div>

    </>
  )
}

export default Wishlist