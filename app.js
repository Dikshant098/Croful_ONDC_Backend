const express = require("express");
const app = express();
const port = 2022;

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})
