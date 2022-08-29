import mongoose from 'mongoose';

export const connectDB = async (url) => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log(`Database conntected....`);
    })
    .catch((err) => process.exit(1));
};
