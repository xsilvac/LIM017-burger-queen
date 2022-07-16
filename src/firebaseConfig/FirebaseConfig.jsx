import { initializeApp } from "firebase/app";
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
import { collection, getDocs, doc, deleteDoc, addDoc, updateDoc, query,orderBy, onSnapshot} from "firebase/firestore";
import Swal from "sweetalert2";

const firebaseConfig = {
  apiKey: "AIzaSyCKqHjJN0FxWhUR4R9gfQZxazS2CMo4iMA",
  authDomain: "burgerboss-5ee7b.firebaseapp.com",
  projectId: "burgerboss-5ee7b",
  storageBucket: "burgerboss-5ee7b.appspot.com",
  messagingSenderId: "647135257716",
  appId: "1:647135257716:web:9c04c976bc211148119d21",
  measurementId: "G-FBMTTZ9TG8"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export {signInWithEmailAndPassword }
export {createUserWithEmailAndPassword, addDoc, collection}


export const getProducts =async(typeOfFood) => {
  const productsLunch = collection(db, typeOfFood)
  const data = await getDocs(productsLunch)
  return data.docs.map((doc) => ({...doc.data(),id:doc.id}))
}
export const deleteItem = async(typeCollection, id) => {
  deleteDoc(doc(db, typeCollection, id))
}

export const addOrder = (order, table, setOrder, setTable) => {
  const likesCollection = collection(db, 'Orders');
  addDoc(likesCollection, {
    order, table, status : 'pending', date: new Date(Date.now())

  }).then (()=>{
    Swal.fire({
      imageUrl: "https://i.gifer.com/WUis.gif",
      title:"Pedido agregado",
    })
    setOrder([]);
    setTable(0);
  }).catch (err=> console.log(err))
};

export const getOrders =async(typeOfFood) => {
  const productsLunch = collection(db, typeOfFood)
  const data = await getDocs(productsLunch)
  return data.docs.map((doc) => ({...doc.data(),id:doc.id}))
}

export const updateData = async(id) => {
  const collectionRef = doc(db,'Orders', id);
  updateDoc(collectionRef, {status : 'ready'})
}
export const updateOrder = async(id) => {
  const collectionRef = doc(db,'Orders', id);
  updateDoc(collectionRef, {status : 'delivered'})
}
export const getOrder= (setOrders) => {
  const q = query(collection(db, "Orders"), orderBy("date", "desc"));
  onSnapshot(q, (snapshot) => {
      setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  })
  
};