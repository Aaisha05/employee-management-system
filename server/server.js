const express = require('express')
//const upload = require('express-fileupload')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql2')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination directory for storing uploaded files
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, file.originalname); // Set the filename for the uploaded file
  }
});

const upload = multer({ storage: storage });
const path = require('path');
const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "login"
})

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html') 
})

app.post('/',(req,res)=>{
  if(req.files){
    console.log(req.files)
    var file = req.files.file
    var filename = file.name 
    console.log(filename,' file name') 
    file.mv('./uploads/'+ filename, (err)=>{
      if(err){
        res.send(err)
        console.log("File  not uplaoded")
      }else{
        console.log("FIle uploaded")
        res.send("File uploaded")
      }
    })
  }
})

app.get('/form.html', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'form.html'));
  });

app.post("/login", (req, res) => {
  const { username, password } = req.body
  console.log(username,password,'val')

  db.query('SELECT * FROM details WHERE email=? AND password=?', [username, password], (err, result) => {
    if (err) {
      console.log(err)
      res.send({ "details": false })
    } else {
      if (result.length > 0) {
        console.log("Login successful")
        res.send({details:true})
      
      } else {
        console.log("Login failed")
        res.send({ "details": false })
      }
    }
  })
})

//table 1 : data
app.post('/register',(req,res)=>{
  const { firstName, lastName, dob, nationality,gender} = req.body;
  console.log("Inside register",firstName,lastName)
  db.query("INSERT INTO data (fname,lname,dob,nationality,gender) VALUES(?,?,?,?,?)",[firstName,lastName,dob,nationality,gender],
  (err,result)=>{
    if(result){
      console.log("Over")
     return res.send({details:true});
    }
    if(err)
    {
      console.log(err)
    }
    else{
     return res.send({details:false})
    }
  })
})

//table 2 data_1
app.post('/register_1',(req,res)=>{
  const {add1, add2, name, emai, phone, deg1, deg2, spec, year,dist,state,file} = req.body;

  console.log("Inside register",add1,add2)
  db.query("INSERT INTO data_1 (permanent_address,present_address,name,email1,phone_no,b_degree,m_degree,specification,year_of_graduation,district,state,filename) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[add1,add2,name,emai,phone,deg1,deg2,spec,year,dist,state,file], // ide maari column potu anda filename6 ah direct ah pota podum add aaidum purida ??? Easy ah dane iruku ?
  (err,result)=>{
    if(result){
      console.log("Over1")
      return res.send({details:true});
    }
    if(err)
    {
      console.log(err)
    }
    else{
     return res.send({details:false})
    }
  }) 
  
})

//table 3 data_2
app.post('/register_2',(req,res)=>{
  console.log('entered')
  console.log(req.files)

  const {emp_name, emp_email, emp_phone, emp_job, emp_prev_comp, emp_dept, file1, file2, file3, file4, file5, file6, file7, file8} = req.body;

  console.log("Inside register",emp_name,emp_email) 
 

  
    

  db.query("INSERT INTO data_2 (emp_name, emp_email, emp_phone, emp_job, emp_prev_com, emp_dept, file1, file2, file 3, file4, file5, file6, file7, file8) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[emp_name, emp_email, emp_phone, emp_job, emp_prev_comp, emp_dept, file1, file2, file3, file4, file5, file6, file7, file8],
  (err,result)=>{
    if(result){
      console.log("Over2")
       return res.send({details:true});
    }
    if(err)
    {
      console.log(err)
    }
    else{
     return res.send({details:false})
    }
  })
})

//table 4 data_3
app.post('/register_3',(req,res)=>{
  const {name_em, phone_em} = req.body;
  console.log("Inside register",name_em, phone_em)
  db.query("INSERT INTO data_3 (name_of_emergency_contact, emergency_contact) VALUES(?,?)",[name_em, phone_em],
  (err,result)=>{
    if(result){
      console.log("Over")
     return res.send({details:true});
    }
    if(err)
    {
      console.log(err) 
    }
    else{
     return res.send({details:false})
    }
  })
})

//table 5 data_4
app.post('/register_4',(req,res)=>{
  const {num1, num2, file9, file10} = req.body;
  console.log("Inside register",num1, num2)
  db.query("INSERT INTO data_4 (Aadhar_number, Pan_card_number, Selected_proof, passport_photo) VALUES(?,?,?,?)",[num1, num2, file9, file10],
  (err,result)=>{
    if(result){
      console.log("Over")
     return res.send({details:true});
    }
    if(err)
    {
      console.log(err) 
    }
    else{
     return res.send({details:false})
    }
  })
})

//table 6 data_5
app.post('/register_5',(req,res)=>{
  const {sslc, year1, per1, mark1, hss, year2, per2, mark2} = req.body;
  console.log("Inside register",sslc, year1)
  db.query("INSERT INTO data_5 (SSLC_school, graduation_year1, percentage1, marks1, HSS_school, graduation_year2, percentage2, marks2) VALUES(?,?,?,?,?,?,?,?)",[sslc, year1, per1, mark1, hss, year2, per2, mark2],
  (err,result)=>{
    if(result){
      console.log("Over")
     return res.send({details:true});
    }
    if(err)
    {
      console.log(err) 
    }
    else{
     return res.send({details:false})
    }
  })
})






  app.post('/single-file', upload.array('file'), (req, res) => {
   return res.send({ msg: 'Success' });  
  });
  
  app.listen(8000, () => {
  console.log("Server running on port 8000")
})
