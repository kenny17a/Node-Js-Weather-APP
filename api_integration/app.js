const express = require("express");
const https = require("https");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.cityName;
  const units = "metric";
  const apiKey = "49c03ad97aa408bd8697609ec94a31b0";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&lat=44.34&lon=10.99&units=" +
    units +
    "&&appid=" +
    apiKey;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const weatherDesc = weatherData.weather[0].description;
      const weatherTemp = weatherData.main.temp;
      const weatherIcon = weatherData.weather[0].icon;

      const img =
        "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
      //   console.log(img);
      //   console.log(weatherDesc, weatherTemp);
      //   res.send(
      //     "<h1>The weather report in Lagos :" +
      //       weatherTemp +
      //       " degree" +
      //       " and the weather condition is " +
      //       weatherDesc +
      //       "</h1>"
      //   );

      res.write(
        "<p>The temperature of " + query + " is " + weatherTemp + "</p>"
      );
      res.write(
        "<p>The weather description of " + query + " is " + weatherDesc + "</p>"
      );
      res.write("<img src=" + img + ">");
      res.send();
    });
  });
});

app.listen(3000, (req, res) => {
  console.log("Server running on port 3000");
});
