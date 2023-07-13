

const express = require('express')
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
//table : data (login details)
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

//table 1 : dataa_1 (personal details) (due)
app.post('/register_1',(req,res)=>{
  const { fname, lname, dob, age, mtong, langs, gender, bgroup, maritalStatus} = req.body;
  console.log("Inside register",fname, lname)
  db.query("INSERT INTO dataa_1 (fname, lname, dob, age, mtong, langs, gender, bgroup, maritalStaus) VALUES(?,?,?,?,?,?,?,?,?)",[fname, lname, dob, age, mtong, langs, gender, bgroup, maritalStatus],
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

//table 2 dataa_2 (parents details)
app.post('/register_2',(req,res)=>{
  const {f_name, f_num, f_dob, f_age, m_name, m_num, m_dob, m_age} = req.body;

  console.log("Inside register",f_name, f_num)
  db.query("INSERT INTO dataa_2 (f_name, f_num, f_dob, f_age, m_name, m_num, m_dob, m_age) VALUES(?,?,?,?,?,?,?,?)",[f_name, f_num, f_dob, f_age, m_name, m_num, m_dob, m_age],
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

//table 3 dataa_3
app.post('/register_3',(req,res)=>{
  console.log('entered')
  console.log(req.files)

  const {mob_num, al_mob_num, email, em_name, em_num} = req.body;

  console.log("Inside register",mob_num, al_mob_num) 
 

  
    

  db.query("INSERT INTO dataa_3 (mob_num, al_mob_num, email, em_name, em_num) VALUES(?,?,?,?,?)",[mob_num, al_mob_num, email, em_name, em_num],
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

//table 4 dataa_4 (due)
app.post('/register_4',(req,res)=>{
  const {pline1, pline2, pcity, pstate, pcountry, pcode, cline1, cline2, ccity,cstate, ccountry, ccode} = req.body;
  console.log("Inside register",pline1, pline2)
  db.query("INSERT INTO dataa_4 (pline1, pline2, pcity, pstate, pcountry, pcode, cline1, cline2, ccity, cstate, ccountry, ccode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[pline1, pline2, pstate,pcountry, pcode, cline1, cline2, ccity,cstate, ccountry, ccode],
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

//table 5 dataa_5
app.post('/register_5',(req,res)=>{
  const {aad_num, file1, pan_num, file2, file3} = req.body;
  console.log("Inside register",aad_num, pan_num)
  db.query("INSERT INTO dataa_5 (aad_num, file1, pan_num, file2, file3) VALUES(?,?,?,?,?)",[aad_num, file1, pan_num, file2, file3],
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

//table 6 dataa_6
app.post('/register_6',(req,res)=>{
  const {sslc, year1, per1, file4, hss, year2, per2, file5, c_name, course_name, year3, file6} = req.body;
  console.log("Inside register",sslc, year1)
  db.query("INSERT INTO dataa_6 (sslc, year1, per1, file4, hss, year2, per2, file5, c_name, course_name, year3, file6) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[sslc, year1, per1, file4, hss, year2, per2, file5, c_name, course_name, year3, file6],
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

//table 7 dataa_7
app.post('/register_7',(req,res)=>{
  const {nom_name, nom_rel, nom_dob, nom_per, nom_num} = req.body;
  //now call this api like clinet la data pass panu localhost adhuva? yess localhost:reg... ipdiya
  //okay fom.js la inda code like fetch kaatu pleasee
  console.log("Inside register",nom_name, nom_rel)
  db.query("INSERT INTO dataa_7 (nom_name, nom_rel, nom_dob, nom_per, nom_num) VALUES(?,?,?,?,?)",[nom_name, nom_rel, nom_dob, nom_per, nom_num],
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



