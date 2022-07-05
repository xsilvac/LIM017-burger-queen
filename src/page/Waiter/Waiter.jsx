/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import { getProducts } from "../../firebaseConfig/FirebaseConfig";
import NavbarWaiter from "../../components/Navbar/NavbarWaiter"
import MenuItem from "./MenuItem"

function Waiter(typeCollection) {
    // const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [warrant, setWarrant] = useState([])

    const getCollection = () => {
        getProducts(typeCollection).then((products) =>{
          setProducts(products)
        })
        };

const changeAmount = (id,product) => {
 const listOfProducts = [...products] 
 const findItem = listOfProducts.find((item)=> item.id === id)
  const filterProducts = order.filter((item)=> item.ProductName=== product)    
     setOrder(currentProducts => [...currentProducts,findItem])
     setWarrant(filterProducts)
console.log(filterProducts,'holaaaa',filterProducts.length)


};
    useEffect(() => {
        getCollection()
    }, [])

    return (
        <><NavbarWaiter />
        <div className=" bg-light">
            <div className="container-fluid text-center">
                <div className="row-sm-6 col-sm-8 ">
                    <div className="row-cols-6 row-cols-md-12 w-50 h-30 g-4">
                        {products.map(item => (
                        <MenuItem item={item} key= {item.id} onchangeAmount={() =>changeAmount(item.id,item.ProductName)}/>
                            ))
                        }
                    </div>
                    <div >
                        <form className="row px-5 py-5 mb-3">
                            <div className="bg-light">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control w-100" id="floatingInput-sizing-default" placeholder="example@example.com"/>
                                        <label htmlFor="floatingInput-sizing-default" className="form-label">Número de mesa</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control w-100" id="example" placeholder="*****"/>
                                        <label htmlFor="example" className="form-label">Nombre del usuario</label>    
                                </div>
                                <div>
                                    {order.map(product => (
                                        <><p> {product.ProductName} </p><p> </p></>
                                    ))}
                                 
                                
                                    </div>
                            </div>
                            <button type="submit" className="btn btn-warning" >Enviar a Cocina</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Waiter