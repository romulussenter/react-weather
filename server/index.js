//import
const express = require('express');
const axios = require('axios');

//config
require('dotenv').config();
const {API_KEY } = process.env;
console.log(API_KEY);
//creation of stuff
const serverApp =express();
const port = process.env.PORT || 5000;

serverApp.get('/forcast/:lat,:lon', function(request, response){
    const url =`https://api.darksky.net/forecast/${API_KEY}/37.8267,-122.4233`
    axios.get(url)
    .then(res => {
        response.json(res.data);
    })
    .catch(err => {
        response.json({
            msg:'Your stuff is broked.'
        });
    });
});

serverApp.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})