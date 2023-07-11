if (!localStorage.getItem('user'))
{
  window.location.href='index.html'
}

function handleSubmit()
{
  alert("Function mne check")

  //personal details
  var firstName = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var dob = document.getElementById("dob").value;
  var nationality = document.getElementById("nationality").value;
  var gender = document.getElementById("gender").value;
  
  //contact details
  var add1 = document.getElementById("address1").value;
  var add2 = document.getElementById("address2").value;
  var name = document.getElementById("name1").value;
  var emai = document.getElementById("email1").value;
  var phone = document.getElementById("phone1").value;
  var deg1 = document.getElementById("bdegree").value;
  var deg2 = document.getElementById("mdegree").value;
  var spec = document.getElementById("spec").value;
  var year = document.getElementById("yog").value;
  var dist = document.getElementById("dis").value;
  var state = document.getElementById("stat").value;
  //file-upload (educational certificates)
  var fileInput = document.getElementById('file-upload');
  var file = fileInput.files[0];
  var filename = file.name

   //employee details
   var emp_name = document.getElementById("emp_name").value;
   var emp_email = document.getElementById("emp_email").value;
   var emp_phone = document.getElementById("emp_phone").value;
   var emp_job = document.getElementById("emp_job").value;
   var emp_prev_comp = document.getElementById("emp_prev_comp").value;
   console.log("data",emp_prev_comp)
   var emp_dept = document.getElementById("emp_dept").value;
   //(existing company name)
   var fileInput_1 = document.getElementById('file-upload_1');
   var file1 = fileInput_1.files[0];
   var filename1  = file1.name 
   //(payslip)
   var fileInput_2 = document.getElementById('file-upload_2');
   var file2 = fileInput_2.files[0];
   var filename2 = file2.name 
   //(address proof)
   var fileInput_3 = document.getElementById('file-upload_3');
   var file3 = fileInput_3.files[0];
   var filename3  = file3.name
   //(passport copy)
   var fileInput_4 = document.getElementById('file-upload_4');
   var file4 = fileInput_4.files[0];
   var filename4  = file4.name
   //(photo copy)
   var fileInput_5 = document.getElementById('file-upload_5');
   var file5 = fileInput_5.files[0];
   var filename5  = file5.name 
   //(exp letter)
   var fileInput_6 = document.getElementById('file-upload_6');
   var file6 = fileInput_6.files[0]; 
   var filename6  = file6.name 
   //(bank stmt)
   var fileInput_7 = document.getElementById('file-upload_7');
   var file7 = fileInput_7.files[0];
   var filename7  = file7.name
   //(bank acc details)
   var fileInput_8 = document.getElementById('file-upload_8');
   var file8 = fileInput_8.files[0];
   var filename8  = file8.name


   //address proofs
   var num1 = document.getElementById("num1").value;
   var num2 = document.getElementById("num2").value;
   //(select other proofs)
   var fileInput_9 = document.getElementById('file-upload_9');
   var file9 = fileInput_9.files[0];
   var filename9  = file9.name
   //(passport photo)
   var fileInput_10 = document.getElementById('file-upload_10');
   var file10 = fileInput_10.files[0];
   var filename10  = file10.name

   //educational details
   var sslc = document.getElementById('sslc').value;
   var year1 = document.getElementById('year1').value;
   var per1 = document.getElementById('per1').value;
   var mark1 = document.getElementById('mark1').value;
   var hss = document.getElementById('hss').value;
   var year2 = document.getElementById('year2').value;
   var per2 = document.getElementById('per2').value;
   var mark2 = document.getElementById('mark2').value;


   //emergency contacts
   var name_em = document.getElementById('name_em').value;
   var phone_em = document.getElementById('phone_em').value;

   var formData = {
    //personal details
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    nationality: nationality,
    gender: gender,
    //contact details 
    add1: add1,
    add2: add2,
    name: name,
    emai: emai,
    phone: phone,
    deg1: deg1,
    deg2: deg2,
    spec: spec,
    year: year,
    dist: dist,
    state:state,
    file : filename, 
    
    //employee details
    emp_name : emp_name,
    emp_email : emp_email,
    emp_phone : emp_phone,
    emp_job : emp_job,
    emp_prev_com : emp_prev_comp,
    emp_dept : emp_dept,
    file1 : filename1, 
    file2 : filename2,
    file3 : filename3,
    file4 : filename4,
    file5 : filename5,
    file6 : filename6,
    file7 : filename7,
    file8 : filename8, 

    //address proofs
    num1 : num1,
    num2 : num2,
    file9 : filename9,
    file10 : filename10,

    //educational details
    sslc : sslc,
    year1 : year1,
    per1 :per1,
    mark1 :mark1,
    hss : hss,
    year2 : year2,
    per2 : per2,
    mark2 : mark2,

    //emergency contacts
    name_em : name_em,
    phone_em : phone_em
   
  };

 


  //table 1 : data (personal details)
     fetch("http://localhost:8000/register", {
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

     //table 2: data_1 (contact details)
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
         alert("Data posted successfully1");
        
       } else {
         alert("Data post failed");
       }
     })
     
     .catch(error => {
       console.error("Error:", error);
     });

      //table 3: data_2 (employee details)
      fetch("http://localhost:8000/register_2", {
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

       //table 5: data_4 (address proofs) 
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

      //table 4: data_3 (emergency contacts)
      fetch("http://localhost:8000/register_3", {
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

      //table 6: data_5 (educational details)
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

             formData ={
  
          check:"check"
        }
        console.log(formData,'data')
        let formData1 = new FormData();
formData1.append('file', file);
formData1.append('file', file1);
formData1.append('file', file2);
formData1.append('file', file3);
formData1.append('file', file4);
formData1.append('file', file5);
formData1.append('file', file7);
formData1.append('file', file8);
formData1.append('file', file9);
formData1.append('file', file10);







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

