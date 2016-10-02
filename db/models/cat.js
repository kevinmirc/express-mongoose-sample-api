/* jshint esversion: 6 */
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var catSchema   = new Schema({
    name: String
});

catSchema.methods.speak = speak;

function speak () {
  var cat = this;
  var greeting = this.name ? `Meow name is ${this.name}.` : "I don't have a name!";
  return greeting;
}

module.exports = mongoose.model('Cat', catSchema);
