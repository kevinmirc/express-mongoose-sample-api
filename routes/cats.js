/* jshint esversion: 6 */
const Cat = require('../db/models/cat');

function catRoutes(router) {
  router.get('/cats', function(req, res) {
    Cat.find(function (err, cats) {
      res.status(200).json({cats: cats});
    });
  });

  router.get('/cats/:id', function(req, res) {
    var id = req.params.id;
    Cat.find({_id: id}).then(function (cat) {
      console.log(cat);
      res.status(200).json(cat);
    });
  });

  router.post('/cats', function (req, res) {
    var cat = new Cat();
    cat.name = req.body.name;
    // cat.create()
    cat.save(function(err, cat) {
        if (err) res.send(err);
        console.log(cat.speak() + " I was just born");
        res.status(201).json({ message: 'Cat created!', cat: cat });
    });
  });

  router.get('/cats/search', function (req, res) {
    var params = req.body;
    console.log(params);
    res.send(params);
    // Cat.find(params, function (err, cats) {
    //   if (err) res.status(400).send(err);
    //   res.status(200).json(cats);
    // });
  });
}

module.exports = catRoutes;
