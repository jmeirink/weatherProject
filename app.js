const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=3c65f1e5a7fe4d10131c5dd313bc3e12&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      res.write("<p>The weather is currently " + weatherDescription + "</p>");
      res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
      res.send()
    });
  });
});






app.listen(3000, function(){
  console.log("App is running on port 3000.")
});
