const express = require('express'); 
const app = express();  
const fs = require('fs');    

app.set('view engine','ejs');    //setting view engine to EJS
app.use(express.json());
app.use(express.static('public'));//telling the app to look for the front-end files in public folder

app.get('/', (req,res) =>{
    fs.readFile('list.json', (error,data)=>{    //reading list.json file
        if(error){
            res.status(500).end();
        }else{
            res.render('index.ejs',{ //rendering index page
                list: JSON.parse(data) //parse the json data to items
            })
        }
    })
})

app.listen(3000, () =>{
    console.log("Connected to the server");
})