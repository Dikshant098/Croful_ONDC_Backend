const axios = require('axios')

const getLocation = async (req, res) => {
    const { latitude, longitude } = req.body
    console.log(latitude, longitude);
    try {
        // Replace 'YOUR_API_KEY' with your actual API key from OpenCage
        // const apiKey = 'pk.e4e118b80d0c2e10e968cd0c79316d38';
        // const apiKey = '11ee01b6e6e34c719bb71e3c53a8bc86';
        const apiKey = 'FSndR49vd9N9V4O0VFCp41lNNg6H7JyCv2WN02oAHXA';

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

        // res.send(data.results)

        const apiUrl = 'https://revgeocode.search.hereapi.com/v1/revgeocode';

        const params = {
            at: `${latitude},${longitude}`,
            apiKey: apiKey,
        };

        try {
            const response = await axios.get(apiUrl, { params });
            const data = response.data;
            res.send(data)

            if (response.status === 200) {
                const address = data.items[0].address;
                const country = address.country || '';
                const state = address.state || '';
                const city = address.city || '';
                const postalCode = address.postalCode || '';

                // res.send(`Country: ${country}, State: ${state}, City: ${city}, Postal Code: ${postalCode}`)
            } else {
                
                return `Error: ${data.error.message || 'Unknown error'}`;
            }
        } catch (error) {
            return `An error occurred: ${error.message || 'Unknown error'}`;
        }

    } catch (error) {
        console.error('Error fetching location data:', error.message);
    }

};

module.exports = { getLocation }
