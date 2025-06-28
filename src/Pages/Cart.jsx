import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../Components/CartTotal'
import { motion, AnimatePresence } from 'framer-motion'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const Title = { text1: 'YOUR', text2: ' CART' }

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <motion.div className="border-t pt-14" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="text-2xl mb-3" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        <h1>
          {Title.text1}
          {Title.text2}
        </h1>
      </motion.div>

      <div>
        <AnimatePresence>
          {cartData.map((item, index) => {
            const productData = products.find(product => product._id === item._id)
            if (!productData) return null

            return (
              <motion.div
                key={`${item._id}-${item.size}`}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-6">
                  <img src={productData.image[0]} className="w-16 sm:w-20" alt={productData.name} />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py1 border bg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>

                <input
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => {
                    const val = e.target.value
                    if (val !== '' && val !== '0') {
                      updateQuantity(item._id, item.size, Number(val))
                    }
                  }}
                />

                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-full mr-4 sm:w-10 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {cartData.length > 0 && (
        <motion.div
          className="flex justify-end my-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button
                onClick={() => navigate('/place-order')}
                className="bg-black text-white text-sm my-8 px-8 py-3"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Cart
