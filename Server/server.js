import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("server start!");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Server listening on URL http://localhost:${PORT}`);
});