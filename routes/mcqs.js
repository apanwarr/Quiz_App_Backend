import express from 'express';
import fs from 'fs';

const router = express.Router();

// Load both files
const swayamDM = JSON.parse(fs.readFileSync('./data/swayamDM.json', 'utf-8')).mcqs;
const geuDM = JSON.parse(fs.readFileSync('./data/geuDM.json', 'utf-8')).mcqs;

// Route for swayamDM
router.get('/swayamDM', (req, res) => {
  res.json({ mcqs: swayamDM });
});

// Route for geuDM
router.get('/geuDM', (req, res) => {
  res.json({ mcqs: geuDM });
});

export default router;
