import React, {useState, useEffect} from 'react'
import {getProducts} from '../../firebaseConfig/FirebaseConfig'

const Kitchen = () => {
  const [listOrder, setListOrder] = useState([])
  const [order, setOrder] = useState([])
  const getCollection = () => {
    getProducts('Orders').then((products) =>{
      setListOrder(products)
      
    })
    };
    const probando = listOrder.map(order => (
      console.log(order)))

    useEffect(() => {
      getCollection()
  }, [] )

  return (
    <section> 
        <h1>La cocina esta aqui</h1>
        {listOrder.map(order => (
          <div key={order.id} className="row">
          <h1 className="col-1">{order.table} </h1>
          <p className="col-1">{order.id} </p>
          <p className="col-6"> {order.ProductName} </p>
          {/* <p className="col-3"> $/{order.ProductPrice * order.amount}.00 </p> */}
          <button className="btnOrder col-1" onClick={() => {probando()}}> prueba </button>
          </div>
        ))}
    </section>
  )
}
export default Kitchen;