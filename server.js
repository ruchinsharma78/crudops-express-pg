const express = require('express')
const userroutes = require("./src/users/routes");

const app = express();
const port = 5000;
app.use(express.json());
app.get("/", async(req, res) => {
    //Sending the reponse of GET request
    res.send("Hello World!")
})

app.use("/api/userdata",userroutes);
app.listen(port, () =>
console.log('app Listening on port '+port));