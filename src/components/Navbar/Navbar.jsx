import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { GiMapleLeaf } from "react-icons/gi";
import './Navbar.css'


function Navbar(){

    return(
        <>
        <div className="">
            <div className="free-shipping-div">
                <div className='free-flex'>

                <span className='free-ship-text1'>Free shipping on orders above 999/-</span>
                <span className='free-ship-text'>Call us on: + 9010665455</span>


                </div>
                
            </div>

      {/* navbar elements */}


            <div className='nav-items-flex'>

                <div>
                  <h1 className='brand-name'>Chaperone</h1>

                </div>

                <div className='nav-flex'>
                     <div>
                      <h1 className='nav-name'>Tools</h1>

                    </div>
                    <div>
                        <h1 className='nav-name'>Plants & Pots</h1>

                    </div>

                    {/*  */}
                    <div>
                      <h1 className='nav-name'>Tools v</h1>

                    </div>

                    <div>
                      <h1 className='nav-name'>Our Services v</h1>

                    </div>

                    <div>
                      <h1 className='nav-name'>Blogs</h1>

                    </div>

                    <div>
                      <h1 className='nav-name'>Our Story</h1>

                    </div>
                    <div>
                      <h1 className='nav-name'>FAQs</h1>

                    </div>

                </div>



                <div  className='icons-flex'>
                    <div>
                        <div>
                        <CgProfile  className="icon"/>
                        </div>
                    <span className="span">My Profile</span>

                    </div>
                      <div>
                        <div>
                           <span className="cart-count">3</span>
                        </div>
                       <div>
                       <BsCart2 className="icon" />

                       </div>
                      
                      <span className="span">Cart</span>

                      </div>
                    
                     


                </div>
            </div>

{/* serach bar */}

              <div className="search-flex">
                <div className="search-bar">

                    
                    <IoSearchOutline  className="search-icons"/>
                     <input type="search" placeholder="search plants" className="search-input"/>
                    <GiMapleLeaf  className="search-icons"/>
                   

                   

                     
                </div>
                <div className="line"></div>
                
              </div>




            <div>
                <div  className="btn-div">
                    <button className="btn1">Plants</button>
                    <button className="btn">Pots</button>

                    <p className="para">
                    Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum
                     quidem aut necessitatibus enim ut internos accusantium a 
                     numquam autem ab rerum omnis.<br/> Non molestiae ratione et laborum 
                     doloribus aut molestiae voluptates ut porro excepturi sit molestiae
                     
                     
                      obcaecati qui quis beatae est voluptatem eius. Et <br/> architecto nihil id labore
                     omnis hic iste deleniti et porro aspernatur.
                    </p>

                    <p className="nursery-text">Nursery</p>
                    
                </div>

                <div className="nursery-flex">
                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>
                    <div>
                        <img src="https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>

                    <div>
                        <img src="" className="nursery-img"/> <br/>
                        <span className="nursery-para"> Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </span>
                    </div>
                </div>
                
                
            </div>  

        </div>
        
        </>
    )
}

export default Navbar