//1

// fetch(' https://restcountries.com/v3.1/all') 
 
//  .then(response=>response.json())
//  .then(result=>console.log(result))

//2

// const apiTrying2 = async() => {
//     return fetch('https://www.boredapi.com/api/activity?type=recreational')
//     .then(response=>{
//         if(response.headers.aborted){
//             console.log('Aborted: False')
//         } else{
//             console.log('True')
//         }
//     })
// }


//3


// const apiTrying3 = async() => {
//     return fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
//     .then(response=>{
//         if (response.status>=200 && response.status<=299){
//             console.log('OK')
//         }

//     })
// }


//4


// const apiTrying4 = () => {
//     return fetch('http://www.omdbapi.com/?apikey=[yourkey]&') 
 
//  .then(response=>response.headers)
//  .then(data=> console.log(data))
//  }

 //5

 
// const apiTrying = async() => {
//    return fetch('http://simple-grocery-store-api.online/') 
 
//  .then(response=>console.log(`status text: ${response.statusText} json: ${response.json}`))
//  }

 //6

// fetch('https://www.boredapi.com/api/activity?type=recreational')
// .then(response=>response.body)
// .then(result=>console.log(result))

// apiTrying()
// apiTrying2()
// apiTrying3()
// apiTrying4()