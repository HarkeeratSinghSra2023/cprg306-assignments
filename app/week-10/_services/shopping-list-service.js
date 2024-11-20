import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    const items = [];
    const docRef = collection(db, "users", userId, "items");
    const docSnap = await getDocs(docRef);
    docSnap.forEach(doc => {
        items.push (doc.data());
    })
    return items;
}

export const addItem = async (userId, item) => {
    const docRef = collection(db, "users",userId, "items");
    const docSnap = await addDoc(docRef, item);
    return docSnap.id;
}