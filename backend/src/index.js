import express from "express";
import notesRoute from "./routes/notesRoutes.js"
import { connectDB } from "../config/db.js";
import cors from "cors"
import dotenv from "dotenv"





dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001






app.use(cors({
    origin:"http://localhost:5173"
}))

app.use(express.json())


app.use("/api/notes", notesRoute)







connectDB().then(() => {

    app.listen(PORT, () => {
        console.log("server started on PORT", PORT);

    })

})



