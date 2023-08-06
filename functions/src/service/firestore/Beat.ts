import {db} from "../..";
type TcreateBeat = {
    title:string
    price:string
    imageURL:string
    audioURL:string
    uid:string
}
export const createBeatDB = async (
  {title, price, imageURL, audioURL, uid}:TcreateBeat
) => {
  await db.collection("beats").doc().set({
    title,
    price,
    audioURL,
    imageURL,
    userUid: uid,
  });
};
