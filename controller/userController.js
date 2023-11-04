const createUser = async (req, res) => {
    const data = req.body;
    console.log(data);
    res.send(data)
}

module.exports = {
    createUser,
}
