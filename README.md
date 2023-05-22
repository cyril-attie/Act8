# Criterio 1
Se ha generado correctamente el fichero con la estructura de carpetas necesarias para llevar a cabo el desarrollo del API.

```shell
npm i express-generator
express --no-view --git Act8
cd Act8
```

# Criterio 2
Se ha generado un fichero inmueble.js dentro de la carpeta models con la estructura que define cada uno de los documentos a crear dentro de la base de datos.

```shell
mkdir models
touch models/inmuebles.model.js
```

In models/inmuebles.model.js:
```javascript
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
```

# Criterio 3
Se ha generado un fichero inmuebles.js dentro de la carpeta routes y además se han realizado todas las tareas que lo unen con app.js. Las rutas deberían funcionar.

```
mkdir routes/api
touch routes/api/inmuebles.js
```

In routes/api/inmuebles.js:

```javascript
var express = require('express');
var router = express.Router();

const Inmueble = require('../../models/inmuebles.model');

router.get('/', async (req, res) => {
  try {
    const inmuebles = await Inmueble.find();
    res.json(inmuebles);
  } catch (err) {
    res.json({ error: err.message });
  }
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const result = await Inmueble.create(req.body);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
})

router.put('/:inmuebleId', async (req, res) => {
  try {
    const result = await Inmueble.findByIdAndUpdate(
      req.params.inmuebleId,
      req.body,
      { new: true }
    );
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
})

router.delete('/all', async (req, res) => {
  try {
    const result = await Inmueble.deleteMany({});
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

router.delete('/:inmuebleId', async (req, res) => {
  try {
    const result = await Inmueble.findByIdAndDelete(req.params.inmuebleId);
    res.json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});


router.get('/:inmuebleId', async (req, res) => {
  try {
    const inmueble = await Inmueble.findById(req.params.inmuebleId);
    res.json(inmueble);
  } catch (err) {
    res.json({ error: err.message });
  }
})
```

# Criterio 4[*](#tests)
Se dispone de una ruta que nos devuelve en formato JSON todos los inmuebles contenidos dentro de la base de datos.

# Criterio 5[*](#tests)
Se dispone de una ruta que nos permite crear documentos dentro de la colección Inmuebles de nuestra base de datos.

# Criterio 6[*](#tests)
Se dispone de una ruta que nos permite actualizar cualquier tipo de documento, recibiendo a través de la misma el documento a actualizar.

# Criterio 7[*](#tests)
Se dispone de una ruta que nos permite eliminar cualquier tipo de documento recibido a través de dicha ruta.

# Criterio 8
Todas las peticiones tienen sus errores recogidos y se informa de manera correcta al usuario de lo sucedido.

```javascript
try {
    // petición 
} catch(err) {
    res.json({error: err.message})
}
```


# Tests

`Ver tests/api.test.js`
```shell 
npm run test
```
In tests/api.test.api:
```javascript

```

