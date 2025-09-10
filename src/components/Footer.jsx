import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-64 bg-sky-700 text-white mt-40 pt-10'>

            <div className='p-5 grid grid-cols-4 gap-5'>
                <div >
                    <h1 span className='text-2xl font-bold ms-1'><i className="fa-solid fa-truck-fast me-2"></i><span>Daily Cart</span></h1>
                    <p className='mt-3'>Designed and built with all love by Adithya</p>
                    <p>Code licensed by luminar.doc CC BY 3.0</p>
                    <p>Currently v5.3.2</p>
                </div>


                <div>
                    <h1 className='font-bold text-xl'>Links</h1>
                    <ul className='list-none'>
                        <li>Landing page</li>
                        <li>Home page</li>
                        <li>Whishlist page</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Guides</h1>
                    <ul className='list-none'>
                        <li>React</li>
                        <li>React Bootstrap</li>
                        <li>React Router</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold text-xl'>Contact us</h1>
                    <input type="text" className='text-gray-900 placeholder:text-gray-400 bg-white p-1 rounded-md' placeholder='Enter your email here' /><span><i class="fa-solid fa-arrow-right ms-1"></i></span>

                    <ul className='flex justify-evenly me-40 mt-2'>
                        <li><i class="fa-brands  fa-twitter"></i></li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li><i class="fa-brands fa-facebook"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                        <li><i class="fa-brands fa-github"></i></li>
                        <li><i class="fa-solid fa-phone"></i></li>
                    </ul>
                </div>
            </div>


  <p className='text-center mt-5'>© Copyright 2025 Daily cart .Built with React redux</p>
        </div>
    )
}

export default Footer