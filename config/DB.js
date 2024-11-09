import mongoose from "mongoose";
const Dbconnection = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://user1:user123@shivam.pwoi7hh.mongodb.net/Consulting"
    );
    console.log(`Connection made successfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Connection failed ${error}`);
  }
};
export default Dbconnection;
