import { loginUser } from "./users/users";

const loginFormEl=document.forms.loginForm;

const { username, password } =loginFormEl.elements;


loginFormEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    try{
        const loggedUser=isLogin();
        if(loggedUser.message === 'Invalid credentials'){
            alert("email/password invalid")
        } else{
            alert("Successfully Logged In")
        }  
    }catch(err){
        alert("email/password invalid")
    }
})

async function isLogin(){
    const loggedUser=await loginUser(username.value,password.value);
    return loggedUser;
}