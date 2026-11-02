exports.postCreateUser = (req, res, next) => {
    const pass = req.body.password
    const name = req.body.username

    console.log(pass)
    console.log(name);
  
  res.json({
    "greeting": `Hello, ${name}`
  })
}