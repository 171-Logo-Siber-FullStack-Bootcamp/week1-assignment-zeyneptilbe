//const http = require("http");
const https = require("https");

https
  .get("https://jsonplaceholder.typicode.com/users", (resp) => {
    let data = "";

    resp.on("data", (chunck) => {
      data += chunck;
    });

    resp.on("end", () => {
      let url = JSON.parse(data);
      console.log(url);
    });
  })
  .on("error", (err) => {
    console.log("Error" + err.message);
  });
