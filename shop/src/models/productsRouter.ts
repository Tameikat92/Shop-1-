import { Router } from 'express';
import { ObjectId } from 'mongodb';

const router = Router();

// Get all products
router.get('/', async (req, res) => {
  const db = req.app.locals.db;
  const products = await db.collection('products').find().toArray();
  res.json(products);
});

// Create a new product
router.post('/', async (req, res) => {
  const db = req.app.locals.db;
  const newProduct = req.body;
  const result = await db.collection('products').insertOne(newProduct);
  res.json(result);
});

// Get a single product by ID
router.get('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const product = await db.collection('products').findOne({ _id: new ObjectId(req.params.id) });
  res.json(product);
});

// Update a product by ID
router.put('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const updatedProduct = req.body;
  const result = await db.collection('products').updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: updatedProduct }
  );
  res.json(result);
});

// Delete a product by ID
router.delete('/:id', async (req, res) => {
  const db = req.app.locals.db;
  const result = await db.collection('products').deleteOne({ _id: new ObjectId(req.params.id) });
  res.json(result);
});

export default router;
