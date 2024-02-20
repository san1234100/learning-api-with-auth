import { getAllUser } from "./users/users";


const userPlaceholderEl=document.getElementById('users-placeholder')
const userData=await getAllUser()

console.log(userData);