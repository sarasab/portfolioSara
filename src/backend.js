const express = require('express')
const app = express()
const expressValidator = require('express-validator')
const router = express.Router()
const jwt = require("jsonwebtoken")
app.listen(process.env.PORT || 8000)


const users=[{
    userName: "userName",
    passWord: "passWord",

}]


app.post('/users',
expressValidator.body('userName').isString().isLength({ min: 4 }),
expressValidator.body('passWord').isEmail(),
(req, res) => {
    const errors = expressValidator.validationResult(req)
    if (errors.isEmpty()) {
      res.redirect('/users')
      if(users[0].passeWord===req.body.passeWord){
        const token= jwt.sign({
            user: "sara",
            iat: 50,
            exp:100,
        },"sarasabin")
        res.json("token")
      }
      else{
          res.send("pffff trop nul!!!!")
      }
    } else {
      res.json(errors)
    }
  })

app.get('/users/:userName', (req, res) => {
  res.send('yeahhhhhh')
})

module.exports = router