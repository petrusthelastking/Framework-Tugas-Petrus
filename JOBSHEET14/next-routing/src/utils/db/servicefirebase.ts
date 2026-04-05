import {
    getFirestore,
    collection,
    getDocs,
    Firestore,
    getDoc,
    doc,
    query,
    addDoc,
    where,
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

export async function signUp(
    userData: {
        email: string;
        fullname: string;
        password: string;
    },
    callback: Function,
) {
    const q = query(
        collection(db, "users"),
        where("email", "==", userData.email),
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    // console.log("Query result:", data);

    if (data.length === 0) {
        // user belum ada → boleh daftar
        await addDoc(collection(db, "users"), userData);
        // console.log("User registered:", data);
        callback({
            status: "success",
            message: "User registered successfully",
        });
    } else {
        callback({
            status: "error",
            message: "User already exists",
        });
    }
}
