fetch('https://api.openweathermap.org/data/2.5/weather?q=pinagkurusan,alitagtag&appid=f50ff22f45d2fbfc26ecdd429dfb230e&units=metric')

.then((response)=>{
  return response.json();
})

.then((data)=>{
  document.getElementById("temp").innerHTML = data.main.temp+" °C";
  document.getElementById("desc").innerHTML = data.weather[0].description;
  document.getElementById("loc").innerHTML = data.name;
})


fetch('https://covid19-api-philippines.herokuapp.com/api/summary')

.then((response)=>{
  return response.json();
})
.then((data)=>{
  document.getElementById("active").innerHTML = data.data.active_cases.toLocaleString();
  document.getElementById("recoveries").innerHTML = data.data.recoveries.toLocaleString();
  document.getElementById("death").innerHTML = data.data.deaths.toLocaleString();
  document.getElementById("fatality").innerHTML = data.data.fatality_rate + "%";
  document.getElementById("recovery").innerHTML = data.data.recovery_rate + "%";
  document.getElementById("totality").innerHTML = data.data.total.toLocaleString();
})
  