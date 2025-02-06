import jwt from "jsonwebtoken"
//generating token
export const generateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"135d"
    })
    //sending it to the user
    res.cookie("jwt",token,{
        maxAge:135*24*60*60*100,
        httpOnly: true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development"
    })
    return token;
}