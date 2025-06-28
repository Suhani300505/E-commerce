import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShopContext } from '../Context/ShopContext'
import RelatedProduct from '../Components/RelatedProduct'
import StarRating from '../Components/StarRating'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = () => {
    const item = products.find(item => item._id === productId)
    if (item) {
      setProductData(item)
      setImage(item.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size before adding to cart.')
      return
    }
    addToCart(productData._id, size)
  }

  return productData ? (
    <motion.div
      className="border-t-2 pt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex gap-12 sm:gap-12 flex-col sm:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {/* Left Side - Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt={`Thumbnail ${index}`}
                className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ${image === item ? 'border-2 border-orange-500' : ''}`}
                key={index}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Selected product" className="w-full h-auto" />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <StarRating />
            <p className="pl-8">{122}</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </motion.div>

      {/* Description & Reviews */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum,
            culpa suscipit minus dignissimos totam laborum optio obcaecati fuga.
          </p>
          <p>
            Voluptas maxime expedita veritatis officia, autem vel doloribus fuga
            accusamus labore quisquam, eaque ratione dolore cumque sed.
          </p>
        </div>
      </motion.div>

      {/* Related Products */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} />
      </motion.div>
    </motion.div>
  ) : (
    <div className="opacity-0">Loading...</div>
  )
}

export default Product
