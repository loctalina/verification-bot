"use strict";




const handler = (Markup) => {
  return Markup
  .keyboard([['👍 Включить уведомления'],
             ['💡 Помощь']])
  .oneTime()
  .resize()
  .extra();
};




module.exports = handler;
