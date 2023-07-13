
if (!localStorage.getItem('user'))
{
  window.location.href='index.html'
}
//inga all crrct anga daan matha maranten
function handleSubmit()
{
  alert("Function mne check")

  //personal details
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var age = document.getElementById("age").value;
  var mtong = document.getElementById("mtong").value;
  var langs = document.getElementById("langs").value;
  var gender = document.getElementById("gender").value;
  var bgroup = document.getElementById("bgroup").value;
  var maritalStatus = document.getElementById("maritalStatus").value;
  
  //parents details
  var f_name = document.getElementById("f_name").value;
  var f_num = document.getElementById("f_num").value;
  var f_dob = document.getElementById("f_dob").value;
  var f_age = document.getElementById("f_age").value;
  var m_name = document.getElementById("m_name").value;
  var m_num = document.getElementById("m_num").value;
  var m_dob = document.getElementById("m_dob").value;
  var m_age = document.getElementById("m_age").value;
 

   //contact details
   var mob_num = document.getElementById("mob_num").value;
   var al_mob_num = document.getElementById("al_mob_num").value;
   var email = document.getElementById("email").value;
   var em_name = document.getElementById("em_name").value;
   var em_num = document.getElementById("em_num").value;
   
   

   //address details
   var pline1 = document.getElementById("permanentLine1").value;
   var pline2 = document.getElementById("permanentLine2").value;
   var pcity = document.getElementById("permanentCity").value;
   var pstate = document.getElementById("permanentState").value;
   var pcountry = document.getElementById("permanentCountry").value;
   var pcode = document.getElementById("permanentPin").value;
   var cline1 = document.getElementById("currentLine1").value;
   var cline2 = document.getElementById("currentLine2").value;
   var ccity = document.getElementById("currentCity").value;
   var cstate = document.getElementById("currentState").value;
   var ccountry = document.getElementById("currentCountry").value;
   var ccode = document.getElementById("currentPin").value;
   
   


   //address proofs
   var aad_num = document.getElementById("aad_num").value;
   var fileInput_1 = document.getElementById('file-upload_1');
   var file1 = fileInput_1.files[0];
   var filename1  = file1.name;
   var pan_num = document.getElementById("pan_num").value;
   var fileInput_2 = document.getElementById('file-upload_2');
   var file2 = fileInput_2.files[0];
   var filename2  = file2.name;
   var fileInput_3 = document.getElementById('file-upload_3');
   var file3 = fileInput_3.files[0];
   var filename3  = file3.name;

   //educational details
   var sslc = document.getElementById('sslc').value;
   var year1 = document.getElementById('year1').value;
   var per1 = document.getElementById('per1').value;
   var fileInput_4 = document.getElementById('file-upload_4');
   var file4 = fileInput_4.files[0];
   var filename4  = file4.name;
   var hss = document.getElementById('hss').value;
   var year2 = document.getElementById('year2').value;
   var per2 = document.getElementById('per2').value;
   var fileInput_5 = document.getElementById('file-upload_5');
   var file5 = fileInput_5.files[0];
   var filename5  = file5.name;
   var c_name = document.getElementById('c_name').value;
   var course_name = document.getElementById('course_name').value;
   var year3 = document.getElementById('year3').value;
   var fileInput_6 = document.getElementById('file-upload_6');
   var file6 = fileInput_6.files[0];
   var filename6  = file6.name; 
   //nominee details
   var nom_name = document.getElementById("nom_name").value;
   var nom_rel = document.getElementById("nom_rel").value;
   var nom_dob = document.getElementById("nom_dob").value;
   var nom_per = document.getElementById("nom_per").value;
   var nom_num = document.getElementById("nom_num").value;

   var formData = {
    //personal details
    fname : fname,
    lname : lname,
    dob : dob,
    age : age,
    mtong : mtong,
    langs : langs,
    gender : gender,
    bgroup : bgroup,
    maritalStatus : maritalStatus,

    //parents details 
    f_name : f_name,
    f_num : f_num,
    f_dob : f_dob,
    f_age : f_age,
    m_name : m_name,
    m_num : m_num,
    m_dob : m_dob,
    m_age : m_age,
       
    //contact details
    mob_num : mob_num,
    al_mob_num : al_mob_num,
    email : email,
    em_name : em_name,
    em_num : em_num,
    file1 : filename1, 
    file2 : filename2,
    file3 : filename3,
    file4 : filename4,
    file5 : filename5,
    file6 : filename6,
    


    //address details
    pline1 : pline1,
    pline2 : pline2,
    pcity : pcity,
    pstate : pstate,
    pcountry : pcountry,
    pcode : pcode,
    cline1 : cline1,
    cline2 : cline2,
    ccity : ccity,
    cstate : cstate,
    ccountry : ccountry,
    ccode : ccode,

    //address proofs ipo varuma? no mela poi paaru inn
    aad_num : aad_num,
    file1 : filename1,
    pan_num : pan_num,
    file2 : filename2,
    file3 : filename3,

    

    //educational details
    sslc : sslc,
    year1 : year1,
    per1 : per1,
    file4 : filename4,
    hss :hss,
    year2 : year2,
    per2 : per2,
    file5 : filename5,
    c_name : c_name,
    course_name : course_name,
    year3 : year3,
    file6 : filename6,

    //nominee details
    nom_name : nom_name,
    nom_rel : nom_rel,
    nom_dob : nom_dob,
    nom_per : nom_per,
    nom_num : nom_num
  };

 


  //table 1 : data_1 (personal details)
     fetch("http://localhost:8000/register_1", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(formData)
     })
     .then(response => response.json())
     .then(data => {
       if (data.details === true) {
         alert("Data posted successfull0y");
        
       } else {
         alert("Data post failed");
       }
     })
     .catch(error => {
       console.error("Error:", error);
     });

     //table 2: data_2 (parents details)
     fetch("http://localhost:8000/register_2", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(formData)
     })
     .then(response => response.json())
     .then(data => {
       if (data.details === true) {
         alert("Data posted successfully1");
        
       } else {
         alert("Data post failed");
       }
     })
     
     .catch(error => {
       console.error("Error:", error);
     });

      //table 3: data_3 (contact details)
      fetch("http://localhost:8000/register_3", {
        method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
        body:  JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.details === true) {
          alert("Data posted successfully2");
        
        } else {
          alert("Data post failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

       //table 4: data_4 (address details) 
       fetch("http://localhost:8000/register_4", {
        method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
        body:  JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.details === true) {
          alert("Data posted successfully2");
        
        } else {
          alert("Data post failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

      //table 5: data_5 (address proofs)
      fetch("http://localhost:8000/register_5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.details === true) {
          alert("Data posted successfully3");
         
        } else {
          alert("Data post failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

      //table 6: data_6 (educational details)
      fetch("http://localhost:8000/register_6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.details === true) {
          alert("Data posted successfully3");
         
        } else {
          alert("Data post failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

       //table 7: data_7 (nominee details)
      fetch("http://localhost:8000/register_7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        if (data.details === true) {
          alert("Data posted successfully3");
         
        } else {
          alert("Data post failed");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });

             formData ={
  
          check:"check"
        }
        console.log(formData,'data')
        let formData1 = new FormData();

formData1.append('file', file1);
formData1.append('file', file2);
formData1.append('file', file3);
formData1.append('file', file4);
formData1.append('file', file5);
formData1.append('file', file6);








        console.log("fiele daa",file)
        fetch('http://localhost:8000/single-file', {
        method: 'POST',
        body: formData1  
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
     
        })
        .catch(error => {
          console.error('Error:', error);
          
        });



}












document.getElementById('submitt').addEventListener('click', handleSubmit);



function Logout()
{
  localStorage.removeItem('user')
  window.location.href='index.html'
}


document.getElementById('logout').addEventListener('click', Logout);

//seri ipo na innum tables create panla also enaku html css js la oru dobt iruku adhu aparm paklam ipo na npm start kudtha first varuma? kudutu paaaru
// show the me backend code please me na?
//server.js code 