import './ProductList.css'

function ProductList(){
    return(
        <>
        <div className='product-list-flex'>
            {/* filters component */}
            <div>

            </div>

            {/* products list */}

            <div>
                <div>
                    <span className="products-text">300 products</span>
                    <button className="sort-btn">SORT BY</button>

                </div>
               {/* prods */}
                <div className='all-product-flex'>
                   <div>

                     <div  className='img-border'>
                        <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
                        <button className='view-btn'>View Product</button>
                     </div>
                     <div>
                        <p className='product-name'>Monsterra</p>
                        <p className='productt-details'>Indoor Plant, Low maintenance</p>
                        <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
                        <p className='price'><span className='price1'>₹359 </span> ₹299</p>
                        <div className='btn-flex'>
                            <div >
                                <button className='add-cart-btn1'>-</button>
                                <button className='add-cart-btn'>Add to cart</button>
                                <button className='add-cart-btn2'>+</button>
                            </div>
                            <div>
                                <button className='buy-btn'>Buy to Rent</button>
                            </div>

                        </div>
                     </div>


                   </div>

                   <div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>



<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>



<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>


<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>

<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>



<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>


<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>


<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>



<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>


<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>

<div>

<div  className='img-border'>
   <img src='https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__' className='product-img'/> <br/>
   <button className='view-btn'>View Product</button>
</div>
<div>
   <p className='product-name'>Monsterra</p>
   <p className='productt-details'>Indoor Plant, Low maintenance</p>
   <p className='rating'>⭐⭐⭐⭐⭐ 4.9</p>
   <p className='price'><span className='price1'>₹359 </span> ₹299</p>
   <div className='btn-flex'>
       <div >
           <button className='add-cart-btn1'>-</button>
           <button className='add-cart-btn'>Add to cart</button>
           <button className='add-cart-btn2'>+</button>
       </div>
       <div>
           <button className='buy-btn'>Buy to Rent</button>
       </div>

   </div>
</div>


</div>



                </div>



            </div>



            <div>
                
            </div>


        </div>
        
        
        
        </>
    )
}

export default ProductList