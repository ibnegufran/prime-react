const bcrypt=require("bcrypt")



const passwordHashing=async(password)=>{
    try {
        const saltRound=10;
    const hashedPassword= await bcrypt.hash(password,saltRound);
        return hashedPassword;
    } catch (error) {
        console.log(error)
        
    }
};

const passwordComparing=async(password,hashedPassword)=>{
try {
    return bcrypt.compare(password,hashedPassword)
} catch (error) {
    console.log(error)
}
}

module.exports={passwordHashing,passwordComparing}