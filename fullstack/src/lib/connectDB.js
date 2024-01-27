import mongoose from "mongoose";

export default async () => {
  try {
    // const db_op = {
    //   dbName: "new",
    //   user: "",
    //   pass: "",
    //   auth: "",
    // };

    const url = process.env.NEXT_PUBLIC_DB_URL || "mongodb://localhost:27017";
    console.log("url", url);
    await mongoose.connect(url);

    console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};
