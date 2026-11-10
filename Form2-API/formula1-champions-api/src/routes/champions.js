import express from 'express';
import championsData from '../data/champions.js';
import { idValidator } from '../middleware/idValidator.js';
import { dataValidator } from '../middleware/dataValidator.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json(championsData);
});

router.get('/:id', idValidator, (req, res) => {
    const champion = championsData.find(champ => champ.id === parseInt(req.params.id));
    if (champion) {
        res.json(champion);
    } else {
        res.status(404).json({ message: 'Champion not found' });
    }
});

router.post('/', dataValidator, (req, res) => {
    const newChampion = {
        id: championsData.length + 1,
        ...req.body
    };
    championsData.push(newChampion);
    res.status(201).json(newChampion);
});

export default router;