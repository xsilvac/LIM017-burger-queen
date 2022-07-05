import React, {useState, useEffect} from 'react';
import {getProducts} from '../../firebaseConfig/FirebaseConfig';
import NavbarKitchen from "../../components/Navbar/NavbarKitchen"

const Kitchen = () => {
  const [listOrder, setListOrder] = useState([])
  const [order, setOrder] = useState([])
  const getCollection = () => {
    getProducts('Orders').then((products) =>{
      setListOrder(products)
      
    })
    };
    const probando = listOrder.map(order => (
      console.log(order.order)))

    useEffect(() => {
      getCollection()
  }, [] )

  return (
    <><NavbarKitchen /><section>
      <h1>La cocina esta aqui</h1>
      {listOrder.map(order => (
        <div key={order.id} className="row">
          <h1 className="col-1">{order.table} </h1>
          {order.order.map(ord => (
          <>
          <p className="col-1">{order.id} </p>
          <p className="col-3"> $/{ord.amount}.00 </p>
          <p className="col-6"> {ord.ProductName} </p>
        </>
           ))}
          <button className="btnOrder col-1" onClick={() => { probando(); } }> Pedido listo </button>
        </div>
      ))}
    </section></>
  )
}
export default Kitchen;