// FETCH WITH JSON

// export async function getAllUsers() {

//     try{
//         const response = await fetch('/api/users');
//         return await response.json();
//     }catch(error) {
//         return [];
//     }
    
// }
// //fetch using proxy
// //Since these are all the asynchronous calls you should use async/await so that it waits until the promise is resolved.

// export async function createUser(data) {
//     const response = await fetch(`/api/user`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({user: data})
//       })
//     return await response.json();
// }
 
//AXIOS
const axios = require('axios');

export async function getAllUsers() {

    try{
        const response = await axios.get('/api/users');
        console.log('response  ', response)
        return response.data;
    }catch(error) {
        return [];
    }
    
}

export async function createUser(data) {
    const response = await axios.post(`/api/user`, {user: data});
    return response.data;
}