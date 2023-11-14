import express from "express";
import cors from "cors";
import "dotenv/config";
import routes from "./routes/routes.mjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server is now listening on ${PORT}...`));
