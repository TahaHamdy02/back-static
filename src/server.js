require("dotenv").config();
const mongoose= require("mongoose")
const app = require("./config/app");
const connectDB = require("./config/database");
const PORT = process.env.PORT || 3000;
const KittenSchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', KittenSchema);

connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 