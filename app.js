const xpress = require("express");

const app = xpress();

  app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});



app.listen(3000, function (){
  console.log("MY website is running on server 3000");
});
