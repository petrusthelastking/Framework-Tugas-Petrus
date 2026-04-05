import {
    getFirestore,
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    deleteDoc,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
}

export async function retrieveProducts(collectionName: string) {
    return retrieveData(collectionName);
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(db, collectionName, id));
    if (!snapshot.exists()) {
        return null;
    }

    const data = snapshot.data();
    return data;
}

export async function addProduct(collectionName: string, data: object) {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
}

export async function deleteProduct(collectionName: string, id: string) {
    await deleteDoc(doc(db, collectionName, id));
}
