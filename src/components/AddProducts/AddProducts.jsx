import React, { useState } from 'react'
import { storage, db } from '../../firebaseConfig/FirebaseConfig'

const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    const types = ['image/png', 'image/jpeg']; // image types

    const productImgHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setProductImg(selectedFile);
            setError('')
        }
        else {
            setProductImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    }

    // add product
    const addProduct = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, err => setError(err.message)
            , () => {
                storage.ref('product-images').child(productImg.name).getDownloadURL().then(url => {
                    db.collection('Products').add({
                        ProductName: productName,
                        ProductPrice: Number(productPrice),
                        ProductImg: url
                    }).then(() => {
                        setProductName('');
                        setProductPrice(0)
                        setProductImg('');
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                })
            })
    }

    return (
        <div className='container'>
            <br />
            <h2>ADD PRODUCTS</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Product Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setProductName(e.target.value)} value={productName} />
                <br />
                <label htmlFor="product-price">Product Price</label>
                <input type="number" className='form-control' required
                    onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />
                <br />
                <label htmlFor="product-img">Product Image</label>
                <input type="file" className='form-control' id="file" required
                    onChange={productImgHandler} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
        </div>
    )
}
export default AddProducts;

/* import React from "react";
import { useState } from "react";
import { storage, db } from "../../firebaseConfig/FirebaseConfig";
import {ref} from "firebase/storage";


const AddProducts = () => {
  const [ProductName, setProductName] = useState("");
  const [ProductPrice, setProductPrice] = useState(0);
  const [ProductImg, setProductImg] = useState("");
  const [error, setError] = useState("");

  const typeImg = ["image/png", "image/jpeg"];
  
  const prodImg = (e) => {
    // e.preventDefault();
    let selectImg = e.target.files[0];
    if (selectImg && typeImg.includes(selectImg.type)) {
      setProductImg(selectImg);
      setError("");
    } else {
      setProductImg(null);
      setError("Por favor seleccione una imagen valida (png,jpg)");
    }
  };

   const addProduct = (e) => {
    e.preventDefault();
    //console.log(ProductName, ProductPrice, ProductImg);
const uploadImg = ref(`product-img/${ProductImg.name}`).put(ProductImg);
uploadImg.on("state_changed",snapshot => {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log(progress);
 }, err => {
  setError(err.message)
 }, () => {
  ref("product-img").child(ProductImg.name).getDownloadURL().then(url => {
    db.collection("Breakfast").add({
      ProductName: ProductName,
      ProductPrice: Number(ProductPrice),
      ProductImg:url
    }).then (()=>{
      setProductName("");
      setProductPrice(0);
      setProductImg("");
      setError("");
      document.getElementById("file").value="";
    }).catch (err=>setError(err.message));
  })
 })

  };

  return (
    <div className="product">
      <h1>Añadiendo nuevos productos</h1>
      <form className="productForm" onSubmit={addProduct}>
        <select className="optionsFood">
          <option value="menu">Menú</option>
          <option value="Breakfast">Desayuno</option>
          <option value="Lunch">Almuerzo</option>
        </select>
        <input
          type="text"
          value={ProductName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <input
          type="number"
          value={ProductPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
        <label htmlFor="product-img">Imagen del producto</label>
        <input id="file" type="file" onChange={prodImg} required />
        <button className="btnAdd"> Añadir</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};
export default AddProducts;
 */