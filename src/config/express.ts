import bodyParser from "body-parser";
import express, { Application } from "express"; 
import cors from "cors";
import { userRouter } from "../modules/user/adapters/user.controller";

const app: Application = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(cors({
    origin: "*"
})
);
app.use(express.json({limit: "50mb"}));

//app routes
app.use("/api/user", userRouter)

export default app;