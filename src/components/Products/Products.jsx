import React, { useState, useEffect } from "react";
import { getProducts, deleteItem } from "../../firebaseConfig/FirebaseConfig";
import {useNavigate, useParams} from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import { GrTrash } from "react-icons/gr";
import Swal from "sweetalert2";

//{route}
const Products = (props) => {
  const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const menuSelected = props.location.menuSelected
    console.log(menuSelected)
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
                <div className="row row-cols-4  ">
                    <div className="row row-cols-12 row-cols-md-2 w-100 h-30 g-4 text-center"></div>
                    {products.map(item => (
                    <div  className="col w-40 py-2">
                    <div key={item.id} className="card h-80 w-30 p-2 px-2">
                    <img src={item.ProductImg} className="card-img-top p-0-2-0-2" height="150px" width="4%" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.ProductName}</h5>
                            <p className="card-text fs-6">${item.ProductPrice}</p>
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