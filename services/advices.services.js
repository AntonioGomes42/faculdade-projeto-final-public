import { getDocs, collection } from "firebase/firestore";
import db from "../database/firebaseDataBase.js";
import filterData from "../utils/filterData.js";

async function getAdvices() {
  const querySnapshot = await getDocs(collection(db, "advices"));
  const advicesList = await filterData(querySnapshot);
  return advicesList;
}

export { getAdvices };