import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {product} = props
    
    const {addToCart} = useContext(ShopContext)

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className='productdisplay-img'>
                <img src={product.image} className='productdisplay-main-img'/>
            </div>
        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={star_icon} />
                <img src={dull_icon} />
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-prices-old'>Rs{product.old_price}</div>
                <div className='productdisplay-right-prices-new'>Rs{product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type
               specimen book. It has survived not only five centuries, but also the leap into 
              
            </div>
            <div className='displayproduct-right-size'>
                <h1>Select size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>

            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right-category'> <span>Category:</span> Women,T-shirt,crop-top</p>
            <p className='productdisplay-right-category'> <span>Tag:</span> Modern,Latest</p>
        </div>
    </div>
  )
}
