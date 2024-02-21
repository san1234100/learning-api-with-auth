import { getAllUser } from "./users/users";


const userPlaceholderEl=document.getElementById('users-placeholder')
const userData=await getAllUser()

console.log(userData);

const fragment=document.createDocumentFragment();

{/* <li class="">
<h5 class=>Vignesh (23)</h5>
<a href="mailto:you@gmail.com">you@gmail.com</a>
</li> */}

[...userData].forEach(user=>{
    const liEl=document.createElement('a');
    liEl.href=`./details.html?user=${user.id}`
    liEl.classList.add("bg-lightBlue","px-4","py-2","rounded","hover:bg-blue-400","cursor-pointer")
    const h4El=document.createElement('h4');
    h4El.classList.add("font-semibold");
    h4El.textContent=`${user.firstName} ${user.lastName} (${user.age})`
    const aEl=document.createElement('a');
    aEl.href=`mailto:${user.email}`
    aEl.textContent=user.email;
    liEl.append(h4El,aEl)
    fragment.append(liEl)
})
userPlaceholderEl.append(fragment)