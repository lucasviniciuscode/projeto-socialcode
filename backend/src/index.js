require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const HTTP_PORT= process.env.HTTP_PORT || 3000;
const UserRouter = require("./routes/user.router");
const LanguageRouter = require("./routes/language.router");
const ActorRouter = require("./routes/actor.router");
const CategoryRouter = require("./routes/categories.router");
const AuthMiddleware = require("./middlewares/auth.middlewares");


const app = express();

app.use(cors());
app.use(AuthMiddleware);
app.use(express.json());
app.use(morgan("dev"));
//CRUD
// C=> Create -> POST
// R=> Read -> GET
// U=>Update -> PUT
// D=>Delete -> DELETE


app.use("/api",UserRouter);
app.use("/api",LanguageRouter);
app.use("/api",ActorRouter);
app.use("/api",CategoryRouter);




app.get("/", (req,res) => {
    res.send({message:"Welcome to Socialcode"});
});

app.listen(HTTP_PORT, ()=> {
    console.log(`Aplicação rodando na porta ${HTTP_PORT}`);
});



