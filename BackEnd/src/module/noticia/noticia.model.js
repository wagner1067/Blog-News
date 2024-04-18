import mongoose from 'mongoose';
const { Schema } = mongoose;

const noticiaSchema = new Schema({
    titulo: String, // String is shorthand for {type: String}
    img: String,
    texto: String,
},
    {
        timestamps: true
    }
);

const NoticiaModel = mongoose.model('noticias', noticiaSchema);

export default NoticiaModel;