const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodles')
const bcrypt = require('bcrypt')
const Image = require('../models/imagemodel')
const session = require('express-session')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file ,cb){
    cb(null, './uploads/');
  },
  filename : function(req, file, cb){
    cb(null,file.originalname);
  }
});
const upload = multer({storage: storage, limits:{
  fileSize: 1024 * 1024 *5
}})
var sess;

router.post('/signup' , async (request, response) =>{
    const hashedPass = await bcrypt.hash(request.body.password,10)
    const hashedConfirmPass = await bcrypt.hash(request.body.confirmPassword,10)
    const username = request.body.userName
    const email = request.body.email
    const password= request.body.password
    const password2 = request.body.confirmPassword
    if(!username || !email || !password || !password2){
      return response.send("Please fill in all the fields" );
    }else {
      if (password.lenght < 6){
        return response.send("Password must have atleast 6 characters" );
      } else{
    signUpTemplateCopy.findOne({
      userName: username
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        return response.send("Username is already in use!" );
      } else {
      signUpTemplateCopy.findOne({
          email: request.body.email
      }).exec((err, user) => {
        if (err) {
          response.status(500).send({ message: err });
          return;
        }
  
        if (user) {
          response.send("Failed! Email is already in use!" );
          return;
        }else {
          const signedUpUser = new signUpTemplateCopy({
            userName: request.body.userName,
            email: request.body.email,
            password:hashedPass,
            confirmPassword:hashedConfirmPass,
        })
        if(request.body.password == request.body.confirmPassword){
          signedUpUser.save(
            function(err, registeredUser){
              if(err) {
                console.log(err);
                res.status(500).send();
              } else {
                response.send(registeredUser);
              }
            }
          )
      }else {
        console.log('different passwords')
        response.send("you have entred different passwords")
      }
        }
  
      });
    }
     
    });
  }
  }
});

  router.post('/signin',(request, response) => {
    var email = request.body.email;
    sess = request.session;
    signUpTemplateCopy.findOne({'email': email}, (err, user)=>{
      if (err) {
        response.status(500).send({ message: err });
        return;
      }else {
        if(!user){
          response.send("login failed, user not found")
        }else {
          var passwordIsValid = bcrypt.compareSync(
            request.body.password,
            user.password
          );
    
          if (!passwordIsValid) {
            return response.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }else {

          sess.body= user;
          response.send("you are now logged in  " + sess.body.userName)
          }
        }
      }
    })
  });
  
router.get('/dashboard', (req, res)=>{
  sess = req.session;
  if(!sess.body.userName){
    res.status(401).send()
  }else{
    res.status(200).send("welcome  "+sess.body.userName)
  }
});

router.get('/logout',(req,res) => {
  req.session.destroy((err) => {
      if(err) {
          return console.log(err);
      }
      res.send("session destroyed");
      res.redirect('/');
  });

});
router.post('/upload', upload.single('img'),(req, res, next)=>{
  const image = new Image({
    img: req.file.path
  });
  image.save()
  .then(result=>{
    console.log(result);
    res.status(201).send("Image uploaded")
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({
      error : err
    });
  });
});





module.exports = router;