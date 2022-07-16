export const initializeApp = jest.fn(()=>{});
export const getFirestore = jest.fn(()=>{});
export const getStorage = jest.fn(()=>{});
export const ref = jest.fn(()=>{});
export const uploadBytesResumable = jest.fn(()=>({uploadTask:{snapshot:{ref:"Hola"}}}));
export const db = jest.fn();
export const getAuth = jest.fn(()=>({
    currentUser:{
        email:'email@burgerboss.com'
    },
}));
export const signInWithEmailAndPassword = ( auth= {}, emailUser, passwordUser ) => Promise.resolve({user: {email:'correo@prueba.com'} })

export const createUserWithEmailAndPassword =jest.fn((auth, email, password) => Promise.resolve({ user: {email:'correo@prueba.com'} }));

export const addDoc = jest.fn((collection, {}) => Promise.resolve({}));
export const collection = (db, publicaciones) => ({});
export const onSnapshot = jest.fn((query, callback) => Promise.resolve({}));


