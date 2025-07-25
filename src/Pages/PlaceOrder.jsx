import React, { useContext, useState } from 'react'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../Context/ShopContext'

const PlaceOrder = () => {
  const Title = {text1:"DELIVERY", text2:"INFORMATION"}
  const Title2 = {text1:"PAYMENT", text2:"METHOD"}

  const [method, setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3" >
          <h1>{Title.text1}{Title.text2}</h1>

        </div>
        <div className="flex gap-3">
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='First Name' />
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='Last Name' />

        </div>
        <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="email" placeholder='Email Address' />
        <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='Street' />
        <div className="flex gap-3">
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='City' />
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='State' />

        </div>
        <div className="flex gap-3">
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="number" placeholder='PinCode' />
          <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="text" placeholder='Country' />

        </div>
        <input  className='border border-gray-300 rounded py-1.5 px3.5 w-full' type="number" placeholder='Phone' />

      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <h1>{Title2.text1}{Title2.text2}</h1>

          {/* Payment Method Slection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('strip')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'strip' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex item-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>

        <div className="w-full text-end mt-8">
          <button onClick={()=>navigate('/order')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
