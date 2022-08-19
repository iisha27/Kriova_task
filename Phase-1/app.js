const mongoose=require('mongoose')

mongoose.connect("mongodb://localhost:27017/EmployeeDB",{useNewUrlParser:true})

const tableSchema=new mongoose.Schema({
    EmployeeID:Number,
    EmployeeName:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:Date,
        default:Date.now
    },
    Email:{
        type:String,
        required:true
    },
    PhoneNumber:Number,
    Street:String,
    City:String,
    State:String,
    Country:String,
    Pincode:Number
})

const Employee=mongoose.model("Employee", tableSchema)
const createDocument = async() => {
    try{
        const Vanshi=new Employee({
          EmployeeID:01,
         EmployeeName:"Vanshi",
         DateOfBirth:25-09-03,
         Email:"vanshk@gmail.com",
         PhoneNumber:8723645713,
         Street:"Old colony",
         City:"Faridabad",
         State:"Haryana",
         Country:"India",
         Pincode:192836
        })
        const Bhavya=new Employee({
            EmployeeID:02,
           EmployeeName:"Bhavya",
           DateOfBirth:12-09-03,
           Email:"bhavya@gmail.com",
           PhoneNumber:8700045713,
           Street:"Chawri Bajar",
           City:"Mumbai",
           State:"Maharahstra",
           Country:"India",
           Pincode:112822
          })
          const Navya=new Employee({
            EmployeeID:03,
           EmployeeName:"Navya",
           DateOfBirth:18-02-02,
           Email:"navya@gmail.com",
           PhoneNumber:8776445713,
           City:"Faridabad",
           State:"Haryana",
           Country:"India",
           Pincode:128267
          })
          const Avni=new Employee({
            EmployeeID:04,
           EmployeeName:"Avni",
           DateOfBirth:23-12-12,
           Email:"avni@gmail.com",
           PhoneNumber:9999645713,
           Street:"Old colony",
           City:"Delhi",
           State:"Delhi",
           Country:"India",
           Pincode:182769
          })
          const Daksh=new Employee({
            EmployeeID:05,
           EmployeeName:"Daksh",
           DateOfBirth:23-13-12,
           Email:"daskh@gmail.com",
           PhoneNumber:8727645713,
           Street:"New colony",
           City:"Palwal",
           State:"Haryana",
           Country:"India",
           Pincode:142526
          })

          const result= await Employee.insertMany([Vanshi, Bhavya, Navya, Avni, Daksh]);
          
    }catch(err){
        console.log(err)
    }
}


createDocument();


