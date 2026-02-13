import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

export function verifyToken(req,res,next){
    //get the token
    let token= req.cookies.token;
    if(!token){
        return  res.status(401).json({message: "Please login first"});
    }
    //verify the token
    let decodedToken= jwt.verify(token,"secretkey");
    console.log("Decoded Token:", decodedToken);
    next();
}

//middleware for 