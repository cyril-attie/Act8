const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const esquemaInmueble = new Schema({
    piso: Number,
    letra: String,
    superficieM2: Number,
    habitaciones: Number,
    alquilado: Boolean,
    propietario: {
        nombre: String,
        email: String
    }
});


module.exports = mongoose.model('inmueble', esquemaInmueble);