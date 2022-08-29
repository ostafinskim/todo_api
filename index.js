import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 7777;
const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    await connectDB(process.env.DB_URI);

    app.get('/', (req, res) => {
      res.status(200).json({
        msg: 'Hello World! 🎉',
      });
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });

  } catch (error) {
    console.log(error);
  }
})();
