var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))


router.route('/')
/* GET All Blogs */
  

  .get(function(req, res) {
    mongoose.model('Animal').find({}, function(err, animals){
      if(err){
        return console.log(err);
      } else {
        res.send(animals)

      }
    });
  })

.post(function(req, res){
  var type = req.body.type;
  var name = req.body.name;



  mongoose.model('Animal').create({
    type: type,
    name: name
      //Use the variables
    }, function(err, animal){
      if(err){
        res.send("Where are the Animals, Noah? You only brought Beer!")
        //DO SOMETHING
      } else{
        console.log("New animal named " + Animal + ". Check it out!");
        res.send(animal);
        //DO SOMETHING WITH THE RESPONSE
      }
    });
});

module.exports = router;