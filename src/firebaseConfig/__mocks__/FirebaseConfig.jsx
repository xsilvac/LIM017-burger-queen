export const initializeApp = jest.fn(()=>{});
export const getFirestore = jest.fn(()=>{});
export const db = jest.fn();
export const getAuth = jest.fn(()=>({
    currentUser:{
        email:'email@burgerboss.com'
    },
}));
export const signInWithEmailAndPassword = ( auth= {}, emailUser, passwordUser ) => Promise.resolve({user: {email:'correo@prueba.com'}})

export const collection = jest.fn((_db_, _collection_) => _collection_);

export const addDoc = jest.fn((Collection, data) =>
    Promise.resolve({ [Collection]: data })
);

export const doc = jest.fn((_db_, nameCol, idDoc) =>
    Object({
    [nameCol]: idDoc,
    })
);

export const ref = jest.fn(() => {});

export const query = jest.fn(() => {});

export const orderBy = jest.fn(() => {});

export const onSnapshot = jest.fn(() => Promise.resolve({}));

export const setDoc = jest.fn(() => Promise.resolve({}));
