import express from "express";
import connectDb from "./config/dbConnection.js";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import { router as userRouter} from "./routes/userRoutes.js";
import { router as contactRouter } from "./routes/contactRoutes.js";

dotenv.config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRouter);
app.use("/api/users", userRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
