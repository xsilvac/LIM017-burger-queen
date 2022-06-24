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
    <div className='containerProductsFirst'>
        <div className='containerProducts'>
            <button onClick={() => navigate("/Products")}>Almuerzo</button>
            {
                products.map(list => (
                    <div key={list.id} className='containerCard'>
                        <p className='productName'>{list.ProductName}</p>
                        <p className='productPrice'>Precio: ${list.ProductPrice}</p>
                        <img className='productImg'src={list.ProductImg} alt='' />
                        <button onClick={() => {deleteProduct(list.id)}} className='btnDelete'><GrTrash /></button>
                        <p></p>
                    </div>
                ))
            }
        </div>
    </div></>
  )
}
export default Breakfast;