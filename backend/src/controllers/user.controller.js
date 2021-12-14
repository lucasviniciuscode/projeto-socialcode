
const UserModel = require("../model/user.model");
// const FilmModel = require("../model/film.model");
const Controller = require("./controller");
const jwt= require("jsonwebtoken");
 
     
class UserController extends Controller{
    constructor(){
        super(UserModel);
    }

    async auth(req, res) {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ raw: true, where: { email } });

        if (!user){
            return this.sendErrorResponse(res, { message: "Password Invalid"});
        }
        
        console.log({user});

        if(user.password != password ){
            return this.sendErrorResponse(res, { message: "Password Invalid"});
        }
        const token = jwt.sign(user, process.env.JWT_SECRET);

        return res.send({ token })

    }
}

module.exports = UserController;