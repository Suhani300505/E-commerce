import React,{useContext, useState} from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {setShowSearch,getCartCount} =useContext(ShopContext)


  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <Link to='/'> <img src={assets.logo} className='w-20' alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 hidden'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1 uppercase'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />

            </NavLink>
        </ul>

        <div className="flex item-center gap-6">
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className="group relative">
                <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /></Link>
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 around">
                        <p className='cursor-pointer hover:text-black'>My profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
                <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden uppercase ' alt="menuicon" />
        </div>

        {/* Slidebar Menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transation-all ${visible ? 'w-full':'w-0'}`}>
            <div className="flex flex-col text-gray-600">
                <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p>X</p>
                </div>
            </div>
        
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6  uppercase' to='/'>HOME</NavLink><br/>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6  uppercase' to='/collection'>COLLECTION</NavLink><br/>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6  uppercase' to='/about'>ABOUT</NavLink><br/>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6  uppercase' to='/contact'>CONTACT</NavLink><br/>
        </div>
    </div>
  )
}

export default Navbar
