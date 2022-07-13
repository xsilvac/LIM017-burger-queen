import React, { useState } from "react";
import { db, collection, addDoc, storage, ref,uploadBytesResumable} from "../../firebaseConfig/FirebaseConfig";
import {
  getDownloadURL,
} from "firebase/storage";
import './AddProducts.css';
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

const AddProducts = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductImg, setProductImg] = useState({});
  const [error, setError] = useState("");
  const [typeOp, setTypeOp] = useState('');

  const types = ["image/png"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg({});
      setError("Please select a valid image type (png)");
    }
  };
  const captureType = (e) => {
    setTypeOp(e.target.value);
}
  const addProduct = (e) => {
    e.preventDefault();
    const metadata = {
   contentType: "images/png",
    };
    const storageRef = ref(storage, "images/" + ProductImg.name);

    const uploadTask = uploadBytesResumable(storageRef, ProductImg, metadata);
    //console.log(uploadTask,"bbbbbbbbbbbbbbbbbbbbbbbbbb");
    //console.log(ref,"aaaaaaaaaaaaaaaaaaaahola bb")
   // console.log(uploadBytesResumable,"eeeeeeeeeeeeeeeehoruguita")
    getDownloadURL(uploadTask.snapshot.ref)
          .then(async (url) => {
            if(typeOp === 'breakfast'){
              const docRef = await addDoc(collection(db, "Breakfast"), {
                ProductName: ProductName,
                ProductPrice: Number(ProductPrice),
                ProductImg: url,
              }).then (()=>{
                Swal.fire({
                  imageUrl: "https://i.gifer.com/WUis.gif",
                  title:"Producto agregado",
                })
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value="";
              }).catch (err=>setError(err.message));
              console.log("Document written with ID: ", docRef.id);
            }else{
              const docRef = await addDoc(collection(db, "Lunch"), {
                ProductName: ProductName,
                ProductPrice: Number(ProductPrice),
                ProductImg: url,
              }).then (()=>{
                Swal.fire({
                  imageUrl: "https://i.gifer.com/WUis.gif",
                  title:"Producto agregado",
                })
                setProductName("");
                setProductPrice(0);
                setProductImg("");
                setError("");
                document.getElementById("file").value="";
              }).catch (err=> {setError(err.message)
                console.log("Document written with ID: ", docRef.id)
              });
            }
          })
          .catch((err) => console.log(err, 'cayo en el ultimo error'));
      }
  return (
    <><>
      <Navbar />
    </>
<div className="bg-light">
<div className="row text-center">
        <div className="col-4 offset-4 gy-3 p-4 " id='divName' >

        <form autoComplete="off" className="form-group">
          <h2>AGREGAR PRODUCTOS</h2>
          <br />
          
          <select data-testid='selectCollection' className="form-select text-center p-3 mb-3" id='floatingSelect' aria-label='Floating label select' onChange={captureType}>
           <option disabled value='empty'>Menú</option>
            <option value='breakfast'>Desayuno</option>
            <option value='lunch'>Almuerzo</option>
          </select>
         

          <div className='form-floating mb-3'>
          <input
            data-testid='NameProduct'
            type="text"
            className="form-control text-center" 
            id='productName'
            required
            onChange={(e) => setProductName(e.target.value)}
            value={ProductName} />
             <label htmlFor="productName" className="form-label">Nombre del producto</label> 
          </div>

      <div className='form-floating mb-3'>
          <input
            data-testid='price'
            id='productPrice'
            type="number"
            className="form-control text-center"
            required
            onChange={(e) => setProductPrice(e.target.value)}
            value={ProductPrice} />
            <label htmlFor="productPrice" className='form-label'>Precio del producto</label>
            </div>

          <div className='form-floating mb-3'>
          <input
            data-testid='photo'
            type="file"
            className="form-control"
            id="file"
            required
            onChange={productImgHandler} />
          {error && <span className="error-msg">{error}</span>}
          </div>

          <div className="d-grid gap-2">
 
          <button data-testid='btnAddProduct' className="btn btn-warning" onClick={e => addProduct(e)}>
            Agregar
          </button>
          </div>
        </form>
      </div>
      </div>
      </div></>
  );
};
export default AddProducts;