const axios = require('axios');

export default axios.create({
    baseURL: "http://localhost:3000/", // needs to be an env 
    headers: {
        "Content-type": 'application/json',
    }
})