import React, { useState } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { ref } from "firebase/storage";
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import './AddProducts.css';
import Navbar from "../Navbar/Navbar";

const AddProducts = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductImg, setProductImg] = useState(null);
  const [error, setError] = useState("");
  const [typeOp, setTypeOp] = useState('');

  const types = ["image/png"]; // image types

  const productImgHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setProductImg(selectedFile);
      setError("");
    } else {
      setProductImg(null);
      setError("Please select a valid image type (jpg or png)");
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
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + ProductImg.name);

    const uploadTask = uploadBytesResumable(storageRef, ProductImg, metadata);
    getDownloadURL(uploadTask.snapshot.ref)
          .then(async (url) => {
            if(typeOp === 'breakfast'){
              const docRef = await addDoc(collection(db, "Breakfast"), {
                ProductName: ProductName,
                ProductPrice: Number(ProductPrice),
                ProductImg: url,
              }).then (()=>{
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
    </><div className="containerAddProducts">
        <div className="containerEmpty"></div>

        <form autoComplete="off" className="form-group">
          <h2>AGREGAR PRODUCTOS</h2>
          <br />
          <select className="optionsSelectMenu" onChange={captureType}>
            <option isdisabled="true">Menu</option>
            <option value='breakfast'>Desayuno</option>
            <option value='lunch'>Almuerzo</option>
          </select>
          <br />
          <label htmlFor="product-name">Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(e) => setProductName(e.target.value)}
            value={ProductName} />
          <br />
          <label htmlFor="product-price">Precio del producto</label>
          <input
            type="number"
            className="form-control"
            required
            onChange={(e) => setProductPrice(e.target.value)}
            value={ProductPrice} />
          <br />
          <label htmlFor="product-img">Imagen del producto</label>
          <input
            type="file"
            className="form-control-img"
            id="file"
            required
            onChange={productImgHandler} />
          {error && <span className="error-msg">{error}</span>}
          <br />

          <button className="btn-add" onClick={e => addProduct(e)}>
            Agregar
          </button>
        </form>
      </div></>
  );
};
export default AddProducts;