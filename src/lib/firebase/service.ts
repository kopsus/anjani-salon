import { collection, getDocs, getFirestore } from "firebase/firestore";
import { db } from "./init";

export async function retrieveData(name: string) {
  const snapshot = await getDocs(collection(db, name));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}
