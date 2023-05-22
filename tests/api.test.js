
const inmueblesParaPruebas = require('./inmueblesParaPruebas.js');

beforeAll(async () => {
    const resInmuebles = await fetch('http://localhost:3000/api/inmuebles', { method: 'POST', body: inmueblesParaPruebas });
    console.log(`Crear inmuebles para pruebas ok, con respuesta ${resInmuebles.body?.json}`);
});

afterAll(async () => {
    const res = await fetch('http://localhost:3000/api/inmuebles', { method: 'DELETE' });
    console.log(`Borrar todos inmuebles: éxito con respuesta ${res}`);
});


test('Se dispone de una ruta que nos devuelve en formato JSON todos los inmuebles contenidos dentro de la base de datos.', async () => {
    const res = await fetch('http://localhost:3000/api/inmuebles', { method: 'GET' });
    inmueblesParaPruebas.forEach(
        inmueble => expect(res).toContain(inmueble)
    );
});

test('Se dispone de una ruta que nos permite crear documentos dentro de la colección Inmuebles de nuestra base de datos.', async () => {
    const res = await fetch('http://localhost:3000/api/inmuebles', { method: 'POST', body: inmueblesParaPruebas[0] });
    expect(res._id).toBeTruthy()
});

test('Se dispone de una ruta que nos permite actualizar cualquier tipo de documento, recibiendo a través de la misma el documento a actualizar.', async () => {
    const body = resInmuebles[0];
    body.piso= 999; 
    const res = await fetch(`http://localhost:3000/api/inmuebles/${body._id}`, { method: 'PUT', body: body});
});

test('Se dispone de una ruta que nos permite eliminar cualquier tipo de documento recibido a través de dicha ruta.', async () => {
    const body = resInmuebles[1];
    const res = await fetch(`http://localhost:3000/api/inmuebles/${body._id}`, { method: 'DELETE'});
});
