import React, { useState, useEffect } from "react";
import { getOrders, updateData } from "../../firebaseConfig/FirebaseConfig";
import NavbarKitchen from "../../components/Navbar/NavbarKitchen";

const Kitchen = () => {
  const [listOrder, setListOrder] = useState([]);
  const [order, setOrder] = useState([]);
  
  const getCollection = () => {
    getOrders("Orders").then((products) => {
      setListOrder(products);
    });
  };

  const changeColor = (order) => {
  const btn = document.getElementById( order.id )
  btn.style.backgroundColor="palegreen";
  console.log('cambiando de color')
}
const updateStatus = (order) => {
  updateData(order.id);
}
  // useEffect(() => {
  //   changeColor()
  // },[]);

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      <NavbarKitchen />
      <div className="row justify-content-center bg-light">
        {listOrder.map((order) => (
          <div value="red" key={order.id}  className="row w-25 py-3">
            <div className="col-12" >
              <div className="card w-75 h-100 ">
                <div className="card-body text-center">
                  <h6 className="card-header ">Mesa N° {order.table} </h6>
                  <p className="card-header ">{order.status} </p>
                  <small className="text-muted">{order.date.toDate().toString().slice(0, 25)}</small>
                  {order.order.map((ord) => (
                    <div className="row" key={ord.ProductName}>
                      <p className="card-text ">{ord.amount}
                        <span className=" card-text "> {ord.ProductName} </span></p>
                    </div>
                  ))}
                </div>
                <button id={order.id} className="btn btn-success" onClick={() => {updateStatus(order)}}>{order.status==='ready' ? 'Pedido listo': 'Pedido pendiente'}</button>
              </div>
            </div>
          </div>
        ))}
    </div></>
  );
};
export default Kitchen;
