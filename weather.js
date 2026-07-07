let cityLocation = "Mumbai";
let temperature_C = document.getElementById("temperature");
let region_name = document.getElementById("region");
let day_name = document.getElementById("day");
let date_current = document.getElementById("date");
let condition_name = document.getElementById("condition");
let search = document.querySelector(".Search");
let buttion = document.querySelector("#MyButton");
 buttion.addEventListener("click",searchForLocation);


async function FetchResult(location) {
    let url = `https://api.weatherapi.com/v1/current.json?key=c1048f91529442018aa71308260607&q=${location}&aqi=no`
    let result = await fetch(url);
    let data = await result.json();
    let temperature = data.current.temp_c;
    let region = location;
    let day = data.current.is_day;
    let date = data.location.localtime;
    let condition = data.current.condition.text;
    temperature_C.innerText = temperature;
    region_name.innerText = region;
    switch(day){
        case 1:
            day_name.innerText = "sunday";
            break;
        case 2:
            day_name.innerText = "Monday";
            break;
        case 3:
            day_name.innerText = "Tuesday";
            break;
        case 4:
            day_name.innerText ="Wednesday";
            break;
        case 5:
            day_name.innerText ="Thusday";
            break;
        case 6:
            day_name.innerText ="Friday";
            break;
        case 7:
            day_name.innerText="Saturday";
    }
    date_current.innerText = date;
    condition_name.innerText = condition;
}
FetchResult(cityLocation);

function searchForLocation(e){
    e.preventDefault();
    cityLocation=search.value;
    FetchResult(cityLocation);
}