import User from "../models/User.js";

export const signup = async(req, res) = > {

    const  {fullName, email, password} = req.body

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"})
        }

        if(password.length <6) {return res.status(400).json({ message : "pasword must be least 6 char"});
    }

    //check if emails alid : regex

    const emailRegex = /^[^\@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
        return res.status(400).json({ message: "Inalid email format"});

    }
    
    const user = await User.findOne({email});
    if(user) return res.status(400).json{message:"email already exists"}
    } catch(error){

    }
};