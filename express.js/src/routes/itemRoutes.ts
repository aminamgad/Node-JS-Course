import express from 'express';
import Item from '../models/Item';

import validate from '../middlewares/validate';
import { createItemValidator } from '../validators/itemValidator';

const router = express.Router();

router.post('/', validate(createItemValidator), async (req, res) => {
    const { name, quantity } = req.body;
    const item = new Item({ name, quantity });
    await item.save();
    res.status(201).json(item);
});

router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

router.get('/:id', async (req, res): Promise<any> => {
    const item = await Item.findById(req.params.id)
    if (!item) return res.status(404).json({ message: "item is not defined" });
    res.json(item);
});

router.put('/:id', async (req, res): Promise<any> => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!item) return res.status(404).json({ message: "item is not defined" });
    res.json(item);
});

router.delete('/:id', async (req, res): Promise<any> => {
    const item = await Item.findByIdAndDelete(req.params.id)
    if (!item) return res.status(404).json({ message: "item is not defined" });
    res.json(item);
});



export default router;
