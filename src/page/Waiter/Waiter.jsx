import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig/FirebaseConfig";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { GrDocumentVideo } from "react-icons/gr";
import Navbar from "../../components/Navbar/Navbar"

function Waiter() {
    // const navigate = useNavigate();
    const [products, setProducts] = useState([])
    const productsBreakfast = collection(db, 'Breakfast')

    const getBreakfast = async () => {
        const data = await getDocs(productsBreakfast)
        setProducts(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        )
    };

    const deleteProduct = async (id) => {
        const productDoc = doc(db, 'Breakfast', id)
        await deleteDoc(productDoc)
        getBreakfast()
    }
    useEffect(() => {
        getBreakfast()
    }, [])

    return (
        <><Navbar />
        <div className="container px-4 m-2">
        <div className="row row-cols-1 row-cols-md-2 w-50 h-30 g-4">
            {products.map(list => (
                <div key={list.id} className="col w-40">
                    <div  className="card h-80 w-30">
                        <img src={list.ProductImg} className="card-img-top" width="5%" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{list.ProductName}</h5>
                            <p className="card-text">${list.ProductPrice}</p>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
        </div>
        </>
    )
}

export default Waiter