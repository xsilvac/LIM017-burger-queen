    import React, { useState,useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import './Products.css';
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";
import {useNavigate} from "react-router-dom";

const Breakfast = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([])
    console.log('holaa1 estamos iniciando');
    const productsBreakfast = collection(db, 'Breakfast')
    console.log('holaaa2 estamos en lunch');
    const getBreakfast = async () => {
        const data = await getDocs(productsBreakfast)
        console.log('holaaa3 estamos iniciando getdocs')
        setProducts(
            data.docs.map((doc) => ({...doc.data(),id:doc.id})),
            console.log(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
        )
        console.log('probando')
        };
    const deleteProduct = async (id) => {
        const productDoc = doc(db, 'Breakfast', id)
        await deleteDoc(productDoc)
        getBreakfast()
    }
    useEffect(() => {
        getBreakfast()
        console.log('holaa4 estamos en use effect')
    }, [ ] )
  return (
    <><Navbar />
   <div className=" bg-light text-center">
            <div className="container">
                <div className="row row-cols-4  ">
                    <div className="row row-cols-12 row-cols-md-2 w-100 h-30 g-4 text-center"></div>
                    {products.map(item => (
                    <div key={item.id} className="col w-40 py-2">
                    <div className="card h-80 w-30 p-2 px-2">
                    <img src={item.ProductImg} className="card-img-top p-0-2-0-2" height="150px" width="4%" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.ProductName}</h5>
                            <p className="card-text fs-6">${item.ProductPrice}</p>
                            <div className="row row-cols-2 ms-5">
                                <button className="btn btn-danger" onClick={deleteProduct}><GrTrash /></button>
                            </div>
                        </div>
                    </div>
                </div>
                ))
             }
             </div>
             </div>  
    </div></>
  )
}
export default Breakfast;






