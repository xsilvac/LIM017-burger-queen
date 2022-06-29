import React, { useState, useEffect } from "react";
import { getProducts } from "../../firebaseConfig/FirebaseConfig";
import NavbarWaiter from "../../components/Navbar/NavbarWaiter"
import MenuItem from "./MenuItem"

function Waiter(typeCollection) {
    // const navigate = useNavigate();
    const [products, setProducts] = useState([])

    const getCollection = () => {
        getProducts(typeCollection).then((products) =>{
          setProducts(products)
        })
        };


const changeAmount = () => {console.log('hola')};

    useEffect(() => {
        getCollection()
    }, [])

    return (
        <><NavbarWaiter />
        <div className=" bg-light">
            <div className="container px-4 m-2">
                <div className="row row-cols-2">
                    <div className="row row-cols-12 row-cols-md-2 w-50 h-30 g-4 text-center">
                        {products.map(item => (
                            <MenuItem item={item} onchangeAmount={changeAmount}/>
                            ))
                        }
                    </div>
                    <div >
                        <form className="row px-5 py-5 mb-3">
                            <div className="bg-light">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control w-100" id="floatingInput-sizing-default" placeholder="example@example.com"/>
                                        <label for="floatingInput-sizing-default" className="form-label">Número de mesa</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control w-100" id="example" placeholder="*****"/>
                                        <label for="example" className="form-label">Nombre del usuario</label>
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