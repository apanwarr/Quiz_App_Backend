import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mcqRoutes from './routes/mcqs.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Main API routes
app.use('/api/mcqs', mcqRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
  console.log(`MCQ API running at http://localhost:${port}`);
});
