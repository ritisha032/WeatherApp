const API_KEY="d1845658f92b31c64bd94f06f7188c9c";
async function fetchWeatherDetails(){

    try{
        let latitude=15.333;
    let longitude=74.0833;

    //call api
    //use await to wait till further execution
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
    
    //convert it into json object
    const data=await response.json();
    console.log("Weather data :-> "+data);

    //append it to html document
    let newPara=document.createElement('p');
    newPara.textContent=`${data?.main?.temp.toFixed(2)} degree Celsius`;
    document.body.appendChild(newPara);
    }
    catch(e){

    }
    
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geolocation support");
    }
}
function showPosition(position){
    let lati=position.coords.latitude;
    let longi=position.coords.longitude;
    
    console.log(lati);
    console.log(longi);
}