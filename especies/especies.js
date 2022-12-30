const mongoose = require("mongoose");
const especiesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  nombre: String,
  nombre2: String,
  genero: String,
  descripcion: String,
  imagen: String,
});
mongoose.model("especies", especiesSchema);
module.exports = mongoose.model("especies");
