const mongoose = require("mongoose");

const generosSchema = new mongoose.Schema({
  idGenero: {
    type: Number,
    unique: true,
  },
  nombreGenero: String,
  descripcionGenero: String,
  especiesGenero: Array,
  imagenGenero: String
});
mongoose.model("generos", generosSchema);
module.exports = mongoose.model("generos");

