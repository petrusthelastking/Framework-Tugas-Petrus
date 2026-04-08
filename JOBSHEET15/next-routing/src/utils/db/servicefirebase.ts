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
import bcrypt from "bcrypt";

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

export async function signIn(email: string) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if (data) {
        return data[0];
    } else {
        return null;
    }
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
        role?: string;
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

    if (data.length > 0) {
        // email sudah terdaftar
        callback({
            status: "error",
            message: "Email already exists",
        });
    } else {
        userData.password = await bcrypt.hash(userData.password, 10);
        userData.role = "member";
        await addDoc(collection(db, "users"), userData)
            .then(() => {
                callback({
                    status: "success",
                    message: "User registered successfully",
                });
            })
            .catch((error) => {
                callback({
                    status: "error",
                    message: error.message,
                });
            });
    }
}
