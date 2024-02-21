import { getUser } from '../../assets/js/users/users'
const userNameEl=document.getElementById('userName');

let userid = parseInt(document.location.search.split("=")[1]);

if(isNaN(userid)){
    window.location.href='/'
} else{
 const userObj=await getUser(userid);
 userNameEl.textContent=`Hello, ${userObj.firstName} ${userObj.lastName}`
}