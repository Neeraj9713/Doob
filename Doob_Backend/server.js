
const express =require("express");
const app = express();
const cors = require('cors');

const router = require("./router/router");
const serviceRouter = require("./router/serviceRouter");
const acquireRouter = require("./router/acquireRouter");

const path = require("path");

require("./db/conn");
const PORT = 8000|| process.env.PORT;


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/company" , router);
app.use("/service", serviceRouter);
app.use("/acquire", acquireRouter);



app.get("/", (req, res)=>{
    res.send("hii this is respnse")
})



app.listen(PORT, ()=>{
    console.log("listen port no..", PORT);    
})