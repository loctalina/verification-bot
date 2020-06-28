"use strict";




const handler = (from) => {

  return new Promise((resolve) => {

    const str = `Привет ${ from.first_name} ${ from.last_name }! Я уведомляю тебя, когда нужно провести верификацию.
Для того, чтобы авторизоваться во мне - введи команду /authorization.
Если ты не знаешь, что я за бот - уходи😠`;

    resolve(str)

  })

};




module.exports = handler;
