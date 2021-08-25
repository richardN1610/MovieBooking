const express = require('express'); 
const app = express();  
const fs = require('fs');    

app.set('view engine','ejs');    //setting view engine to EJS
app.use(express.static('public'));//telling the app to look for the front-end files in public folder

app.get('/', (req,res) =>{
    res.render('index.ejs')
})

app.listen(3000, () =>{
    console.log("Connected to the server");
})