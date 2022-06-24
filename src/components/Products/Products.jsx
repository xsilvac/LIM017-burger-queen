import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, getDoc, doc, deleteDoc } from "firebase/firestore";
import './Products.css';
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";


const Products = () => {
    const [products, setProducts] = useState([])
    console.log('holaa1 estamos iniciando');
    const productsCollection = collection(db, 'Lunch')
    console.log('holaaa2 estamos en lunch');

    const getProducts = async () => {
    const data = await getDocs(productsCollection)
    console.log('holaaa3 estamos iniciando getdocs') 
    setProducts(
        data.docs.map((doc) => ({...doc.data(),id:doc.id})),
        console.log('holaa4 estamos en setproducts')
    )
    console.log(data.data)   
    };

    const deleteProduct = async (id) => {
        const productDoc = doc(db, 'products', id)
        await deleteDoc(productDoc)
        getProducts()
    }


    useEffect(() => {
        getProducts()
        console.log('holaa4 estamos engetproducts')
    },[])

  return (
    <><Navbar />
    <div className='containerProductsFirst'>
        <div className='containerProducts'>
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
export default Products;