require("dotenv").config()
const express = require("express")
const app = express()
port = process.env.PORT

app.get("/", (request,response) => {
    response.send("Hello you came to the server! and now you will see the changes. ")
});
app.get("/about", (request,response) => {
    response.send("Hello you came to the about page ")
});
app.listen(port,()=> {
    console.log(`you are running on the sever ${port}`);
    
})

