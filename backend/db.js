const mongoose = require("mongoose");

const url =
  "mongodb+srv://ChingKhuman:Chingtham@123@cluster0.ryrxi40.mongodb.net/?retryWrites=true&w=majority";

// async function connect() {
//   try {
//     await mongoose.connect(url);
//     console.log("Connected To Mongo DB");
//   } catch (error) {
//     console.error(error);
//   }
// }

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
