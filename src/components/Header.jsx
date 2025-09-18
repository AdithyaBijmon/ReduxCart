import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({ insideHeader }) => {

    const dispatch = useDispatch()

    const userWishlist = useSelector(state => state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)

    return (
        <nav className='flex w-full bg-sky-700 p-5 text-white font-bold justify-between fixed'>
            <Link className='text-2xl ' to={'/'}><i className="fa-solid fa-truck-fast me-1"></i><span>Daily Cart</span></Link>

            <ul className='flex items-center justify-center'>
                {insideHeader && <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" placeholder="Search products here..." class="px-4 py-2 border border-gray-300 rounded-md  focus:border-transparent"
                />}
                <li className='px-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart" style={{ color: 'red' }}></i>Wishlist <span className='p-1 rounded-full ms-1 bg-black'>{userWishlist.length}</span></Link></li>
                <li className='px-5' ><Link to={'/cart'}><i className="fa-solid fa-cart-shopping me-1"></i>Cart<span className='p-1 rounded-full ms-1 bg-black'>{userCart.length}</span></Link></li>
            </ul>
        </nav>
    )
}

export default Header