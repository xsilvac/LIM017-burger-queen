export const initializeApp = jest.fn(()=>{});
export const getFirestore = jest.fn(()=>{});
export const db = jest.fn();
export const getAuth = jest.fn(()=>({
    currentUser:{
        email:'email@burgerboss.com'
    },
}));
export let signInWithEmailAndPassword = jest.fn(
    (auth,email,password) =>
    new Promise((resolve, reject) => {
        if (auth !== null) {
        resolve({});
        } else {
        reject({ error: "no se cerro sesion" });
        }
    })
);

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
