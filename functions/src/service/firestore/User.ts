import { db } from "../..";
type TcreateUser = {
  uid: string;
  name: string;
  email: string;
};

export const createUserDB = async ({ uid, name, email }: TcreateUser) => {
  await db.collection("users").doc(uid).set({
    name,
    email,
  });
};
