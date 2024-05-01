document.getElementById("loginform").addEventListener('submit',function(event){
  event.preventDefault();
  const username=document.getElementById('username').value
  const password=document.getElementById('password').value
  const email=/^ [^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.test(username)){
        console.error("Enter valid email")
    }
    if(password.length < 6){
        console.error("Password should be greater than 6 characters")
    }
console.log("Username or Email: " + username);
console.log("Password: " + password);
})

