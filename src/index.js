import express from "express"
import { PORT } from "./config/serverConfig.js";

function setUpAndStartServer(){
    const app = express();
    app.listen(PORT, ()=>{
        console.log(`Server started on port ${PORT}`);
    })
}

setUpAndStartServer()