import { db } from "../..";

type TcreateBeat = {
  title: string;
  price: string;
  imageURL: string;
  audioURL: string;
  uid: string;
  author: string;
};
export const createBeatDB = async ({
  title,
  price,
  imageURL,
  audioURL,
  uid,
  author,
}: TcreateBeat) => {
  await db.collection("beats").doc().set({
    title,
    price,
    audioURL,
    imageURL,
    userUid: uid,
    author,
  });
};

export const getAllBeats = async () => {
  try {
    const querySnapshot = await db.collection("beats").get();
    const list = querySnapshot.docs.map((doc) => doc.data());
    return list;
  } catch (err) {
    throw new Error("Error en query beats");
  }
};
