import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
    <Header/>
 <div style={{height:'80vh'}} className='flex items-center justify-center flex-col'>
      <img src="https://assets.dochipo.com/editor/animations/404-error/45944626-6789-4eb1-8c49-28696d67a690.gif" style={{width:'300px'}} alt="" />
      <h1>Page Not Found</h1>
      <h5 className='my-4'>Sorry,we could'nt find the page.</h5>
      <Link  to={'/'} className="p-2 rounded bg-sky-700 text-white">Go to Home</Link>
    </div>
    </>
  )
}

export default Pnf