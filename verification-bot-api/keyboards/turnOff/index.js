"use strict";




const handler = (Markup) => {
  return Markup
  .keyboard([['👎 Выключить уведомления'],
             ['💡 Помощь']])
  .oneTime()
  .resize()
  .extra();
};




module.exports = handler;
