import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: true },
  descricao: { type: String },
  preco: { type: String },
  precoDesconto: {type: String },
  image: {type: String}
}, { versionKey: false });

const product = mongoose.model("products", productSchema);

export default product;
