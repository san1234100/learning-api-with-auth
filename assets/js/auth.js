import { loginUser } from "./users/users";

const loginFormEl=document.forms.loginForm;
const greetUserEl = document.getElementById('greetUser')
const { username, password } =loginFormEl.elements;

// atuny0 9uQFF1Lh "hbingley1" "CQutx25i8r",
loginFormEl.addEventListener("submit",async (e)=>{
    e.preventDefault();
    try{
        const loggedUser=await loginUser(username.value,password.value);
        if(loggedUser.message === 'Invalid credentials'){
            greetUserEl.textContent=''
            alert("username/password invalid")
        } else{
            alert("Successfully Logged In")
            console.log(loggedUser);
            greetUserEl.textContent=`Welcome ${loggedUser.firstName}`;
            greetUserEl.classList.add("my-2","font-semibold","text-lg")
        }  
    }catch(err){
        alert("username/password invalid")
    }
}) 

