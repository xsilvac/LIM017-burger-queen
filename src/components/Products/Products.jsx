import React, { useState, useEffect } from "react";
import { getProducts, deleteItem } from "../../firebaseConfig/FirebaseConfig";
import {useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";
import Swal from "sweetalert2";

//{route}
const Products = (menuSelected) => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const getCollection = () => {
    getProducts(menuSelected).then((products) =>{
      setProducts(products)
    })
    };

    const deleteProduct = (id) => {
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
              deleteItem(menuSelected, id)
                getCollection()
              Swal.fire({
                title:'Eliminado!',
                text:'Producto Eliminado',
                imageUrl: "https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif",
            })
            }
          })
    }
    useEffect(() => {
        getCollection()
    }, [] )

  return (
    <><Navbar />
           <div className=" bg-light text-center">
            <div className="container">
                <div className="row row-cols-4 w-100 h-75">
                    {products.map(item => (
                    <div key={item.id} className="col py-3">
                    <div className="card w-100">
                    <img src={item.ProductImg} className="w-100" height="250px" alt="" />
                        <div className="card-body">
                            <p className="card-text fs-7">{item.ProductName}</p>
                            <p className="card-text fs-7">${item.ProductPrice}</p>
                            <div className="row row-cols-2 ms-5">
                                <button className="btn btn-danger" onClick={() => {deleteProduct(item.id)}}><GrTrash /></button>
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
export default Products;