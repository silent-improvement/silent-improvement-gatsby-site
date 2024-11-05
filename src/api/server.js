//framework for Node.js used for this server-side application
const express = require("express");
//filesystem module - grants read/write capability of files
const fs = require("fs");
//used to parse requests + handles JSON payload (JSON data sent/received via HTTP request)
const bodyParser = require("body-parser");
//Cross-Origin Request Server - security to protect data by only allowing/denying resources
//when requesting resources from a different domain and allowing resources based on what's
//been specified in the CORS headers
const cors = require("cors");

let path = require("path");

//initialising the variable app as an express server application
const app = express();
//specify the port that the server will be running on
const port = 5000;

//this enables CORS on this app
app.use(cors());
//parse incoming requests with JSON payloads
app.use(bodyParser.json());

//path to JSON data file
const dataFilePath = path.join(__dirname, "static/data/data.json");

app.get("/", (request, response) => {
    response.send("Welcome to the Express server!");
});

//GET endpoint for Express app (fetch the data)
//need request in order to be able to use the response parameter
app.get("/api/data", (request, response) => {
    //use fs to read the JSON file
    fs.readFile(dataFilePath, "utf-8", (error, data) => {
        if (error) {
            //throw error if it cannot read file
            return response.status(500).send("Error writing data file.");
        }
        //fetches data for Gatsby site to pull from
        response.send(JSON.parse(data));
    });
});

//POST endpoint for Express app (update the data)
app.post("/api/data", (request, response) => {
    //uses fs to write to JSON file 
    const newData = JSON.stringify(request.body, null, 2);

    fs.writeFile(dataFilePath, newData, "utf8", (error) => {
        if (error) {
            console.error("Error writing data file:", error);

            if (!response.headersSent) { // Only send response if headers haven't been sent yet
                response.status(500).send("Error writing data file.");
            }
            //throw error if it cannot read file
            return;
        }
        //sends data as updated json file for Gatsby site to pull from
        if (!response.headersSent) {
            response.send("Data updated successfully.");
        }
    });
});

app.post("/api/data", (request, response) => {
    fs.writeFile(dataFilePath, JSON.stringify, (request.body, null, 2), "utf8", (error) => {
        if (error) {
            return response.send("Error reading data file.");
        }
        response.send("Data updated successfully.");
    });
});


//starts Express server on Port 5000
app.listen(port, () => {
    //log that will have the server run on https://localhost:5000 (most likely)
    console.log(`Server running at http://localhost:${port}`);
});
