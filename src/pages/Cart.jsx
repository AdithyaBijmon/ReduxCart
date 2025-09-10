import React from 'react'
import Header from '../components/Header'

const Cart = () => {
  return (
    <> 
    <Header />
      <div className='pt-30 mx-5'>
        <h1 className=" my-3 text-5xl font-bold">Cart Summary</h1>
        <div className='grid grid-cols-3 gap-4'>

          {/* Table */}

          <div className="col-span-2 shadow rounded p-5">
            <table className='table-auto w-full'>
              <thead>
                <tr>
                  <td className="font-bold">#</td>
                  <td className="font-bold">Name</td>
                  <td className="font-bold">Image</td>
                  <td className="font-bold">Quantity</td>
                  <td className="font-bold">Price</td>
                  <td className="font-bold">...</td>
                </tr>
              </thead>

              <tbody>
                <tr >
                  <td>1</td>
                  <td>Lipstick</td>
                  <td><img src="https://t3.ftcdn.net/jpg/05/33/57/46/360_F_533574640_yn5N7owRVh8677uTycfP7WsEirRUNU6Q.jpg" alt="product" height={'70px'} width={'70px'} /></td>
                  <td>
                    <div className="flex">
                      <button className='font-bold'>-</button>
                      <input type="text" style={{width:'40px'}} className='border p-1 mx-3 rounded' value={10} readOnly />
                       <button className='font-bold'>+</button>
                    </div>
                  </td>
                  <td>₹ 260</td>
                  <td><i className="fa-solid fa-trash text-red-500"></i></td>
                </tr>
              </tbody>
            </table>

            <div className="float-right mt-4">
              <button className='bg-red-500 p-2  rounded text-white my-3 mx-2'>EMPTY CART</button>
              <button className='bg-green-600 p-2  rounded text-white my-3 mx-2'>SHOP MORE</button>
            </div>
          </div>

          {/* Total */}

          <div className="col-span-1 rounded p-5 shadow">
            <h3 className='font-bold text-2xl'>Total amount : <span className='text-red-500'>₹ 260</span></h3>
            <hr className='text-zinc-200' />
            <button className='bg-green-600 p-2 w-full rounded text-white my-3 text-xl'>CHECK OUT</button>
          </div>
         
        </div>
      </div></>
  )
}

export default Cart