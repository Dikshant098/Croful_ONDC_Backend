const express = require("express");
const app = express();
const port = 2023;
const cors = require('cors');

app.use(cors("*"))

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const apiRoutes = require('./routes/routes.js')
app.use('/api', apiRoutes)
