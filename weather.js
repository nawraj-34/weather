async function FetchResult(location) {
    let url = `https://api.weatherapi.com/v1/current.json?key=c1048f91529442018aa71308260607&q=Lucknow&aqi=no`
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
}

FetchResult();