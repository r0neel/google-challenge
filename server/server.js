const express = require("express"); /*import express to set up the server*/
const app = express(); // we assigne our server to the variable `app` in this setup
const cors = require("cors"); /*import cors to run server with a middleman*/

app.use(cors()); 
app.use(express.json());

// const resources = [ 
//     {topic: "fruit", link: ["https://en.wikipedia.org/wiki/Fruit", "link2" ]},
//     {topic: "meat", link: ["https://en.wikipedia.org/wiki/Meat"]} 
// ]

const resources = { 
    fruit: ["https://www.britannica.com/science/fruit-plant-reproductive-body","https://en.wikipedia.org/wiki/Fruit", "https://www.halfyourplate.ca/fruits-and-veggies/fruits-a-z/","https://www.myplate.gov/eat-healthy/fruits","https://www.fruitlogistica.com/en/","https://www.betterhealth.vic.gov.au/health/healthyliving/fruit-and-vegetables"],
    meat: ["https://en.wikipedia.org/wiki/Meat","https://www.merriam-webster.com/dictionary/meat","https://www.redefinemeat.com/"] 
}

app.get("/", (req, res) => {
    res.send('Hello World!');
  });

app.get("/topics", (req, res) => {
    res.send(resources);
  });

app.get("/topics/:id", (req, res) => {
    try {
        let quoteId = req.params.id;
        if (!resources[quoteId]) {
            throw new Error(`Error: no search results for ${quoteId}.`);
        }
        res.send(resources[quoteId]);
    } catch (err) {
        res.status(404).send(err.message);        
    }
  });

app.get("/topics/:id/first", (req, res) =>{
  try {
    let quoteId = req.params.id;
    if (!resources[quoteId]) {
        throw new Error(`Error: no search results for ${quoteId}.`);
    }
    res.send(resources[quoteId][0]);
} catch (err) {
    res.status(404).send(err.message);        
}
});


module.exports = app;
