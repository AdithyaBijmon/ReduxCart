import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const userWishlist = useSelector(state =>state.wishlistReducer)
    const userCart = useSelector(state => state.cartReducer)
    return (
        <nav className='flex w-full bg-sky-700 p-5 text-white font-bold justify-between fixed'>
            <Link className='text-2xl' to={'/'}><i className="fa-solid fa-truck-fast me-1"></i><span>Daily Cart</span></Link>

            <ul className='flex'>
                <li className='px-5'><Link to={'/wishlist'}><i className="fa-solid fa-heart" style={{ color: 'red' }}></i>Wishlist <span className='p-1 rounded-full ms-1 bg-black'>{userWishlist.length}</span></Link></li>
                <li className='px-5' ><Link to={'/cart'}><i className="fa-solid fa-cart-shopping me-1"></i>Cart<span className='p-1 rounded-full ms-1 bg-black'>{userCart.length}</span></Link></li>
            </ul>
        </nav>
    )
}

export default Header