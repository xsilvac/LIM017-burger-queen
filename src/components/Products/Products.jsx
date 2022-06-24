import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import './Products.css';
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";
import {useNavigate} from "react-router-dom";



const Products = () => {
    const [products, setProducts] = useState([])
    console.log('holaa1 estamos iniciando');
    const productsLunch = collection(db, 'Lunch')
    const productsBreakfast = collection(db, 'Breakfast')
    console.log('holaaa2 estamos en lunch');

    const navigate = useNavigate();

    const getLunch = async () => {
    const data = await getDocs(productsLunch)
    console.log('holaaa3 estamos iniciando getdocs')
    setProducts(
        data.docs.map((doc) => ({...doc.data(),id:doc.id})),
        console.log(data.docs.map((doc) => ({...doc.data(),id:doc.id})))
    )
    console.log('probando')
    };
    
    const deleteProduct = async (id) => {
        const productDoc = doc(db, 'Lunch', id)
        await deleteDoc(productDoc)
        getLunch()
    }
    useEffect(() => {
        getLunch()
        console.log('holaa4 estamos en use effect')
    }, [] )
  return (
    <><Navbar />
    <div className='containerProductsFirst'>
        <div className='containerProducts'>
            <button onClick={() => navigate("/Breakfast")}>Desayuno</button>            {
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
export default Products;