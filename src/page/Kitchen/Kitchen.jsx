import React, { useState, useEffect } from "react";
import { updateData, getOrder } from "../../firebaseConfig/FirebaseConfig";
import NavbarKitchen from "../../components/Navbar/NavbarKitchen";

const Kitchen = () => {
  const [listOrder, setListOrder] = useState([]);
  const [order, setOrder] = useState([]);
  const [time, setTime] = useState(null);
  const [initial, setInitial ] = useState(null);

  const getCollection = () => {
    getOrder(setListOrder)
    console.log(listOrder);
  };

const updateStatus = (order) => {
  updateData(order.id);
  setInitial(+new Date())
}

const tick = () => {
  setTime(new Date(+new Date()- initial))
};

useEffect(()=>{
if (initial){
  requestAnimationFrame(tick);
}
},[initial]);
useEffect(() => {
  if(time){
    requestAnimationFrame(tick);
  }
},[time]);
const timeFormatter = (date) => {
  if(!date) return '00:00:00';
  let mm = date.getUTCMinutes();
  let ss = date.getSeconds();
  let cm = Math.round(date.getMilliseconds()/10);
  mm = mm < 10 ? '0'+mm : mm;
  ss = ss < 10 ? '0'+ss : ss;
  cm = cm < 10 ? '0'+cm : cm;
  return `${mm}:${ss}:${cm}`
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
                <p className="text-center">{timeFormatter(time)}</p>
                <button id={order.id} className={order.status==="ready" ? "btn btn-success" : "btn btn-warning"} onClick={() => {updateStatus(order)}}>{order.status==='ready' ? 'Pedido listo': 'Pedido pendiente'}</button>
              </div>
            </div>
          </div>
        ))}
    </div></>
  );
};
export default Kitchen;
