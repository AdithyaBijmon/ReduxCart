import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


const View = () => {
  const userWishlist = useSelector(state => state.wishlistReducer)
  const userCart = useSelector(state => state.cartReducer)
  const dispatch = useDispatch()
  const {id} = useParams()
  // console.log(id)

  const [product,setProduct] = useState({})

  useEffect(()=>{
    const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
    setProduct(allProducts.find(item=>item.id==id))
  },[])
  console.log(product)

  const handleAddToWishlist = ()=>{
    const existingProduct = userWishlist?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product already exist in your wishlist")

    }else{
      dispatch(addToWishlist(product))
    }
  }

  const handleAddToCart = ()=>{
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item.id==product.id)
    if(existingProduct){
      alert("Product updated successfully")
    }

  }

  return (

    <>
      <Header />
      <div className='pt-30 mx-5'>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">

          {/* image and buttons */}
          <div>
            <img src={product?.thumbnail} height={'400px'} width={'400px'} alt="no image" />
            <div className='flex justify-between mt-5'> <button onClick={handleAddToWishlist} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to whishlist</button>

              <button onClick={handleAddToCart} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to Cart</button>

            </div>
          </div>
          {/* Right side content */}

          <div> 
            <h1 className='font-bold text-4xl'>{product?.title}</h1>
            <h3 className='text-red-600 font-bold text-xl mt-6'>$ {product?.price}</h3>
            <h4 ><span className='font-bold'>Brand:</span>{product?.brand}</h4>
            <h4 ><span className='font-bold'>Category:</span>{product?.category}</h4>
            <h4><span className='font-bold'>Description:</span> {product?.description}</h4>

            <h3 className='font-bold mt-10'>Client Reviews</h3>
         {
          product?.reviews?.length>0 && product?.reviews?.map(item=>(
               <div className="rounded shadow my-3 p-2">
              <p><span className='font-bold'>{item?.reviewerName}</span> : {item?.comment}</p>
              <p>Rating : {item?.rating} 
                <i className="fa-solid fa-star text-yellow-400"></i> </p>
            </div>
          ))
         }
          </div>
        </div>

      </div>
    </>
  )
}

export default View