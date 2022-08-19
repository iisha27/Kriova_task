const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const ejs=require('ejs');
// const bodyParser=require('body-parser');

const app=express();
// app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded())
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/loginRegisterDB", {useNewUrlParser:true,
 useUnifiedtopology: true
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const User = mongoose.model('User', userSchema);



app.post("/login", function(req,res){
    const {email, password}=req.body
    User.findOne({email:email}, (err, user)=>{
        if(user){
               if(password===user.password){
                res.send({message: "Login Successful", user:user})
               }else{
                res.send({message:"password didn't match"})
               }
        }else{
            res.send({message:'user not found'})
        }
    })
})

app.post("/register", function(req,res){
    const {name, email, password }=req.body

    User.findOne({email:email}, (err, user)=>{
        if(user){
            req.send({message:"User already registered"})
        }else{
            const user=new User({
                name,
                email,
                password
    
            })
            user.save( err=>{
                if(err){
                    res.send(err);
                 }else{
                     res.send({message:"Successfully Registered, Please login now"})
                 }
            })
        }
    })
       

})



app.listen(3001, function(){
    console.log('Successfully started server at port 3001');
});