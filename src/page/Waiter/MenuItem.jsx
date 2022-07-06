import React/* , { useState } */ from "react";

function MenuItem({item/* , amount, setAmount */, changeAmount}) {
   /*  const [amount, setAmount] = useState(0) */
    const increase = () => {
        //setAmount(amount + 1) ;
        changeAmount(item.id, "increase");
    }
    const decrease = () => {
        //setAmount(amount - 1);
        changeAmount(item.id,"decrease");
}
    return (
        <div className="col px-2 py-2">
            <div className="card w-100 h-100">
                <img src={item.ProductImg} className="card-img-top w-100 h-100" alt="" />
                <div className="card-body">
                    <h6 className="card-title">{item.ProductName}</h6>
                    <p className="card-text fs-6">${item.ProductPrice}</p>
                    <div className="row row-cols-2">
                        <button className="btn btn-success" onClick={increase}>+</button>
                        {/* <p className="card-text fs-5">{item.amount}</p> */}
                        <button className="btn btn-danger" onClick={decrease}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuItem