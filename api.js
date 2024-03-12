const catPictures = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('sekiller goturuldu') 
    }, 2000);
}).then(picture=>console.log(picture))

const pictures = async() => {
    const message = await catPictures   //await ile 2000mS bele olsa gozleyir mesaji
    const waiting = await fetch(' https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME',{
    method:'get'
})          //thecatapi-dan yazdim
.then(response=>console.log(response))}

pictures()