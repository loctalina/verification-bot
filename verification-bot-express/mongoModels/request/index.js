"use strict";




const Schema = require("mongoose").Schema;




const obj = new Schema ({
  "name": String,
  "lastname": String,
  "login": String,
  "createDate": Date,
});




module.exports = obj;