const ALL_USERS_URL='https://dummyjson.com/users';

export const getAllUser=async ()=>{
   const userResponse= await fetch(ALL_USERS_URL)
   const userjson=await userResponse.json();
//    console.log(userjson.users);
   return userjson.users;
}