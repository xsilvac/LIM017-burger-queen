import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { GrDocumentVideo } from "react-icons/gr";
import Navbar from "../../components/Navbar/Navbar"
import { FaPlus } from "react-icons/fa";

function Waiter() {
    // const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(0)
    const productsBreakfast = collection(db, 'Breakfast')

    const getBreakfast = async () => {
        const data = await getDocs(productsBreakfast)
        setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        )
    };

    const increase = (id) => {
        setAmount(amount + 1)
    }

    const decrease = (id) => {
        setAmount(amount - 1)
    }

    useEffect(() => {
        getBreakfast()
    }, [])

    return (
        <><Navbar />
        <div className=" bg-light">
            <div className="container px-4 m-2">
                <div className="row row-cols-2">
                    <div className="row row-cols-12 row-cols-md-2 w-50 h-30 g-4 text-center">
                        {products.map(list => (
                            <div key={list.id} className="col w-40">
                                <div className="card h-80 w-30">
                                    <img src={list.ProductImg} className="card-img-top" width="5%" alt="" />
                                    <div className="card-body">
                                        <h6 className="card-title">{list.ProductName}</h6>
                                        <p className="card-text fs-6">${list.ProductPrice}</p>
                                        <div className="row row-cols-3">
                                            <button className="btn btn-success" onClick={id => increase(id)}>+</button>
                                            <p className="card-text fs-5">{amount}</p>
                                            <button className="btn btn-danger" onClick={decrease}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div >
                        <form className="row px-5 py-5 mb-3">
                            <div class="bg-light">
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control w-100" id="floatingInput-sizing-default" placeholder="example@example.com"/>
                                        <label for="floatingInput-sizing-default" class="form-label">Número de mesa</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control w-100" id="example" placeholder="*****"/>
                                        <label for="example" class="form-label">Nombre del usuario</label>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-warning" >Enviar a Cocina</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Waiter