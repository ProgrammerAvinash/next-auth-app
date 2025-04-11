import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongo DB connection successfully created");
    });
    connection.on("error", (err) => {
      console.log("mongo DB Error " + err);
    });
  } catch (error) {
    console.log(error, "something went wrong");
  }
}
