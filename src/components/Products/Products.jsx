import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import './Products.css';
import Navbar from "../Navbar/Navbar"

const Products = () => {
const [list, setList] = useState([]);

useEffect(() => {
 const getList = async() => {
    try {
        const querySnapshot = await getDocs(collection(db, "Lunch"))
        const docs = []
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id:doc.id})
        })
        setList(docs)
    } catch (err) {
        console.log(err.message)
    }
 }
 getList();
}, [list])

  return (
    <><Navbar />
    <div className='containerProductsFirst'>
        <div className='containerProducts'>
            {
                list.map(list => (
                    <div key={list.id} className='containerCard'>
                        <p className='productName'>{list.ProductName}</p>
                        <p className='productPrice'>Precio: {list.ProductPrice}</p>
                        <img className='productImg'src={list.ProductImg} alt='' />
                    </div>
                ))
            }
        </div>
    </div></>
  )
}
export default Products;