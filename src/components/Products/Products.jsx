import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import './Products.css';
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";



const Products = () => {
    const [products, setProducts] = useState([])
    console.log('holaa1 estamos iniciando');
    const productsLunch = collection(db, 'Lunch')
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
        Swal.fire({
            title: 'Esta seguro que quiere eliminarlo',
            text: "No habra forma de recuperar el producto eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminalo!'
          }).then((result) => {
            if (result.isConfirmed) {
                const productDoc = doc(db, 'Lunch', id)
                deleteDoc(productDoc)
                getLunch()
              Swal.fire({
                title:'Eliminado!',
                text:'Producto Eliminado',
                imageUrl: "https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif",
            })
            }
          })
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
                        <h5 className='productName'>{list.ProductName}</h5>
                        <p className='productPrice'>Precio: ${list.ProductPrice}</p>
                        <img className='productImg'src={list.ProductImg} alt='' />
                        <br/>
                        <button onClick={() => {deleteProduct(list.id)}} className="btn btn-danger"><GrTrash /></button>
                        <p></p>
                    </div>
                ))
            }
        </div>
    </div></>
  )
}
export default Products;