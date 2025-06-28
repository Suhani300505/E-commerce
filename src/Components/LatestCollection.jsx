import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
const LatestCollection = () => {

    const{ products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts]= useState([]);
    const Title={text1:"Latest",text2:"Collections"}

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
 

  return (
    <div className='my-10'>
        <div className="text-center py-8 text-3xl">
            <h1>{Title.text1} {Title.text2}</h1>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore itaque, quasi adipisci pariatur aliquam! In corporis nostrum voluptatum, distinctio quos libero ipsum nesciunt vero exercitationem dolor sapiente quod natus.</p>
        </div>
      
      {/* Rendering Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection
