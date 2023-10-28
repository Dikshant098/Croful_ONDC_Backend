const searchByProduct = async (req, res) => {
    // let info = {
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    //     phone: req.body.phone,
    //     email: req.body.email,
    //     password: req.body.password,
    // }

    const data = req.params.product;
   

    // try {
    //     let data = await User.create(info)
    //     // res.status(200).json(data);
    //     if(data){
    //         let payload = { subject: data.id }
    //         const token = jwt.sign(payload, process.env.JWT_SECRET)
    
    //         res.status(200).json({ token })
    //     }
    // }
    // catch (e) {
    //     console.log(e);
    //     e.errors.forEach((error) => {
    //         console.log(error.message);
    //         if (error.message == 'email must be unique') {
    //             res.status(403).json({
    //                 msg: "email already exist"
    //             })
    //         }
    //     });
    // }
}
const searchByCategory = async (req, res) => {
    const data = req.body;
    console.log(data);

}

module.exports = {
    searchByProduct,
    searchByCategory
}