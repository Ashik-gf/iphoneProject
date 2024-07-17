import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils';

import { navLists } from '../constant/index';
const Navbar = () => {
  return (
    <header className=' w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
<nav className=' flex w-full screen-max-width justify-center items-center'>
  <img src={appleImg} width={14} height={18} />
  <div className=' flex flex-1 justify-center max-sm:hidden '>
    {navLists.map((nav)=>
      <div className='cursor-pointer hover:text-white text-gray-300 text-sm px-5 transition-all' key={nav}>{nav}</div>
    )}
  </div>
  <div className=" flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 cursor-pointer">
  <img src={searchImg} alt='Search' width={18} height={18} />
  <img src={bagImg} alt='Buy Somthing' width={18} height={18} />
  </div>
  
</nav>
    </header>
  )
}

export default Navbar