"use strict";




const handler = (Markup) => {
  return Markup
  .keyboard(['🌚 Авторизоваться'])
  .oneTime()
  .resize()
  .extra();
};




module.exports = handler;
