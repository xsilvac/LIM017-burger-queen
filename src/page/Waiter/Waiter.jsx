/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from "react";
import { getProducts, addOrder } from "../../firebaseConfig/FirebaseConfig";
import NavbarWaiter from "../../components/Navbar/NavbarWaiter"
import MenuItem from "./MenuItem"
import { FaTrashAlt } from "react-icons/fa";


function Waiter(typeCollection) {
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState([])
    const [total, setTotal] = useState(0)
    const [table, setTable] = useState(0)

    const getCollection = () => {
        getProducts(typeCollection).then((products) =>{
          setProducts(products)
        })
        };

const changeAmount = (id, change) => {
 const listOfProducts = [...products];
 const findItem = listOfProducts.find((item)=> item.id === id);
if(order.find((item)=> item.id === id)) {
    const items = order.map((item) => {
        if(item.id === id) {
            if(change==="increase") {
                return {...item, amount: item.amount+1};
            } else {
                if(item.amount>=1) {
                return {...item, amount: item.amount-1};
                } else {
                    return order.map(item => item.id!==id);
                }
            }
        } else {
           return {...item};
        }
    })
    setOrder(items);
} else {
    setOrder(currentProducts => [...currentProducts,{...findItem, amount: 1}]);

}
};
const deleteItem = (id) => {
    const editedArray = order.filter((item) => item.id !== id);
    setOrder(editedArray);
  }
    useEffect(() => {
        getCollection()
    }, [])

    useEffect(() => {
        const totalOrder = order.reduce((total, item) => total + (item.ProductPrice * item.amount), 0);
        setTotal(totalOrder);
      }, [order]);
    
      

    return (
        <><NavbarWaiter />
        <div className=" bg-light">
            <div className="container-fluid m-2 ">
                <div className="row">
                    <div className="col sm-10 md-6 row w-30-h-50">
                        {products.map(item => (
                
                        <MenuItem item={item} key={item.id} changeAmount={changeAmount}/>
                            ))
                        }
                    </div>
                    <div className="col col sm-10 md-6">
                        <form className="row px-3 py-5 mb-3">
                            <div className="bg-light">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control w-100" id="floatingInput-sizing-default"
                                    placeholder="example@example.com" onChange={ev => setTable(ev.target.value)} required/>
                                        <label htmlFor="floatingInput-sizing-default" className="form-label">Número de mesa</label>
                                </div>
                                <div>
                                    {order.map((product, index) => (
                                        <section key={index}>
                                            <div className="row">
                                            <p className="col-1">{product.amount} </p>
                                            <p className="col-6"> {product.ProductName} </p>
                                            <p className="col-3"> $/{product.ProductPrice * product.amount}.00 </p>
                                            <button className="btnOrder col-1" onClick={() => {deleteItem(product.id)}}> <FaTrashAlt /></button>
                                            </div>
                                        </section>
                                    ))}

                                    </div>
                                    <div className="center">
                                        <p>TOTAL : $/ {total}.00</p>
                                    </div>
                            </div>
                            <button type="button" className="btn btn-warning" onClick={() => {addOrder(order,table, setOrder, setTable)}}>Enviar a Cocina</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Waiter