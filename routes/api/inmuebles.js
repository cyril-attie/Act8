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
    console.log(result);
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


module.exports = router;
