const form=document.getElementById("myForm");

form.addEventListener('submit',function(e){
    e.preventDefault()

    var country=document.getElementById("country").value
    
    var url="https://api.covid19api.com/total/dayone/country/"+country

    Coviddata(url)
})

async function Coviddata(url){
    let response=await fetch(url)
    console.log(response)
    let data= await response.json()
    console.log(data) 

    let length= data.length

    let index=length-1

    let confirmed=document.getElementById("confirmed");
    let recovered=document.getElementById("Recovered");
    let deaths=document.getElementById("Deaths");

    confirmed.innerHTML=""
    recovered.innerHTML=""
    deaths.innerHTML=""

    confirmed.append("Total Confirmed cases:" + data[index].Confirmed)
    recovered.append("Total Recovered cases:" +data[index].Recovered)
    deaths.append("Total Deaths:" +data[index].Deaths)

}