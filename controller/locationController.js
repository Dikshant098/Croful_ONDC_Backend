const axios = require('axios')



const getLocation = async (req, res) => {
    const { latitude, longitude } = req.body
    console.log(latitude, longitude);
    try {
        // Replace 'YOUR_API_KEY' with your actual API key from OpenCage
        const apiKey = 'pk.e4e118b80d0c2e10e968cd0c79316d38';
        // const apiKey = 'pk.01c0b45713c6b90a6fc19cd10c0c4e2a';
     
        // console.log(response);
        const response = await fetch(
            // `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`
            // `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`
            // `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=11ee01b6e6e34c719bb71e3c53a8bc86`
        );
        console.log(response);
        if (!response.ok) {
            throw new Error('Failed to fetch location data');
        }

        // console.log(response);
        // const response = await fetch(
        //     // `https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`
        //     // `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        //     // `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=11ee01b6e6e34c719bb71e3c53a8bc86`
        // );
        // console.log(response);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch location data');
        // }

        // const data = await response.json();
        // setLocationData(data.results[0]);

        // console.log(data.results.components)
        // console.log(data);

        res.send(response)

    } catch (error) {
        console.error('Error fetching location data:', error.message);
    }

};

module.exports = { getLocation }
