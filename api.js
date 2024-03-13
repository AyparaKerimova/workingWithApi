// Bir Promise oluşturun ve 1 saniye sonra "Merhaba, dünya!" mesajını yazdırın.

// const merhabaDunya = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve('Merhaba Dunya')
//     }, 1000)
// })
// .then(response=> console.log(response))

//Bir URL'ye Fetch API kullanarak bir GET isteği gönderin ve gelen veriyi konsola yazdırın.

// const Fetch1 = async()=>{
//     return fetch('http://www.boredapi.com/api/activity/',{method: "GET"})
//     .then(response=> response.json())
//     .then(data=>console.log(data))
// }

// Fetch1()

//Bir URL'ye Fetch API kullanarak bir POST isteği gönderin ve gelen cevabı konsola yazdırın.

// const Fetch2 = async()=>{
//     return fetch('https://api.thecatapi.com/v1/votes',{method: "POST"})
//     .then(response=> response.key)
//     .then(data=>console.log(data))
// }

// Fetch2()

//Bir URL'ye Fetch API kullanarak bir PUT isteği gönderin ve gelen cevabı konsola yazdırın.

// const Fetch3 = async()=>{
//     return fetch('https://randomuser.me/api/?results=5000',{method: "PUT"}) 
//     .then(result=>console.log(result.status)) //404
//     .catch(error=>console.log(error))
// }

//Fetch3()

//Bir URL'ye Fetch API kullanarak bir DELETE isteği gönderin ve gelen cevabı konsola yazdırın.

// const Fetch4 = async()=>{
//     return fetch('https://randomuser.me/api/?password=upper,lower,1-16',{method: "DELETE"})  //200
//     .then(response=> console.log(response))
//     .catch(error=>console.log(error))
// }

// Fetch4()

/* Bir URL'ye Fetch API kullanarak bir istek gönderin ve 
isteğin başarılı bir şekilde tamamlandığını kontrol edin, başarılıysa gelen veriyi konsola yazdırın.*/


// const Fetch5 = async()=>{
//     return fetch('https://restcountries.com/v3.1/all') 
//     .then(result=> result.json())
//     .then(data=>console.log(data))
// }

// Fetch5()
