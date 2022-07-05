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
      console.log(order)))

    useEffect(() => {
      getCollection()
  }, [] )

  return (
    <><NavbarKitchen /><section>
      {listOrder.map(order => (
        <div className="card">
        <div key={order.id} className="card border-primary mb-3 w-25 row">
          <div className="card-body row-col-2  text-center">
          <h3 className="card-header">Mesa N° {order.table} </h3>
          <p className='card-text'>{order.date.toDate().toString().slice(0,25)}</p>
          {order.order.map(ord => (
          <div className='row' key={ord.ProductName}>
          <p className="col card-text "> {ord.amount} </p>
          <p className="col card-text "> {ord.ProductName} </p>
          </div>
           ))}
    
          <button className="btn btn-success" onClick={() => { probando(); } }> Pedido listo </button>
         
        </div>
        </div>
        </div>
      ))}
    </section></>
  )
}
export default Kitchen;