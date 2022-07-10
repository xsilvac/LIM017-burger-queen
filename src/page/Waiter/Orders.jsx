import React, { useState, useEffect } from "react";
import { updateOrder, getOrder } from "../../firebaseConfig/FirebaseConfig";
import NavbarWaiter from "../../components/Navbar/NavbarWaiter";
import Swal from 'sweetalert2';

const Orders = () => {
  const [listOrder, setListOrder] = useState([]);

  const getCollection = () => {
    getOrder(setListOrder)
    console.log(listOrder);
  };

const updateStatus = (order) => {
    
    if(order.status === 'ready')
    updateOrder(order.id);
  else{
    Swal.fire({
      icon: 'warning',
      title: 'Usted no tiene los permisos para cambiar este estado'
    })
  }
  
}

  useEffect(() => {
    getCollection();
  }, []);


  return (
    <>
      <NavbarWaiter />
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
                <button id={order.id} className={order.status==="ready" ? "btn btn-info" : order.status==="delivered" ?"btn btn-success" : "btn btn-warning"}
                onClick={() => {updateStatus(order)}}>{order.status==='ready' ? 'Pedido listo' : order.status ==='pending' ? 'Pedido pendiente': 'Pedido Entregado'}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div></>
  );
};
export default Orders;
