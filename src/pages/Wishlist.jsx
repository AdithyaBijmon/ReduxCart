import React from 'react'
import Header from '../components/Header'

const Wishlist = () => {
  return (
    <>

      <Header />
      <div className='pt-30 mx-5'>
        <h1 className="text-center text-red-500 mt-3 text-4xl font-bold">My Whishlist</h1>
        <div className='grid grid-cols-4 gap-4'>
          <div className="rounded p-2 shadow">

            {/* Image */}
            <img src="https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg" alt="no image" height={'200px'} />

            <div className="text-center">

              {/* Title */}
              <h3 className='text-xl font-bold'>Title</h3>

              {/* Buttons */}

              <div className="flex justify-evenly my-5">
                <i className="fa-solid fa-heart-circle-xmark text-red-500 text-xl"></i>
                <i className="fa-solid fa-cart-plus text-green-500 text-xl"></i>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Wishlist