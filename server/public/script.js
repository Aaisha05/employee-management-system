if (localStorage.getItem('user'))
{
  window.location.href='form.html'
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.details==true) {
        alert("Login successful");
        localStorage.setItem("user","yes")
        window.location.href='form.html'
      } else {
        alert("Login failed");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  });



  
  