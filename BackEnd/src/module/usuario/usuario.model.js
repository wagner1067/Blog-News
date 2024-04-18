import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    nome: String, // String is shorthand for {type: String}
    email: String,
    senha: String,
},
    {
        timestamps: true
    }
);

const usuarioModel = mongoose.model('usuarios', usuarioSchema);

export default usuarioModel;