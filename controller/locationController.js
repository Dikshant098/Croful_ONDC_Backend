const axios = require('axios')

const getLocation = async (req, res) => {

    try {
        // Replace 'YOUR_API_KEY' with your actual API key from OpenCage
        const apiKey = '11ee01b6e6e34c719bb71e3c53a8bc86';
        const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=21.2111177%2C79.1973445&key=11ee01b6e6e34c719bb71e3c53a8bc86`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }

        const data = await response.json();
        // setLocationData(data.results[0]);

        // console.log(data.results.components)

        res.send(data.results)

    } catch (error) {
        console.error('Error fetching location data:', error.message);
    }

};

module.exports = { getLocation }
