import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'

const View = () => {
  const {id} = useParams()
  console.log(id)
  
  return (

    <>
      <Header />
      <div className='pt-30 mx-5'>
        <div className="grid grid-cols-2 gap-4">

          {/* image and buttons */}
          <div>
            <img src="https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg" height={'400px'} alt="no image" />
            <div className='flex justify-between mt-5'> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to whishlist</button>

              <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add to Cart</button>

            </div>
          </div>
          {/* Right side content */}

          <div> 
            <h1 className='font-bold text-4xl'>Lipstick</h1>
            <h3 className='text-red-600 font-bold text-xl mt-6'>₹ 230</h3>
            <h4 ><span className='font-bold'>Brand:</span>brand</h4>
            <h4 ><span className='font-bold'>Category:</span>category</h4>
            <h4><span className='font-bold'>Description:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ad rerum quisquam ab, voluptates itaque expedita quam voluptatem maiores! Et officiis totam ipsam eum quasi, suscipit voluptatibus assumenda est sequi.</h4>

            <h3 className='font-bold mt-10'>Client Reviews</h3>
            <div className="rounded shadow my-3 p-2">
              <p><span className='font-bold'>Client name</span> : message</p>
              <p>Rating : 3 <i className="fa-solid fa-star text-yellow-400"></i> </p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default View