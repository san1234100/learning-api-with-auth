const ALL_USERS_URL='https://dummyjson.com/users';
const USER_DETAIL='https://dummyjson.com/users/'
const LOGIN_URL='https://dummyjson.com/auth/login'
export const getAllUser=async ()=>{
   const userResponse= await fetch(ALL_USERS_URL)
   const userjson=await userResponse.json();
//    console.log(userjson.users);
   return userjson.users;
}

export const getUser = async (id) => {
 const userResponse=fetch(USER_DETAIL + id);
 return (await userResponse).json();
}

export const loginUser = async (username,password) => {
   const loginResponse=fetch(LOGIN_URL,{
      method:'Post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
         username,
         password
      })
   });
   return (await loginResponse).json();
  }