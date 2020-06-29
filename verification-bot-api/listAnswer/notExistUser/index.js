"use strict";




const handler = (from) => {

  return new Promise((resolve) => {

    const str = `Привет ${ from.first_name} ${ from.last_name }! Я буду уведомлять тебя, когда нужно провести верификацию.
Для того, чтобы авторизоваться во мне - введи команду /authorization, либо нажми на соответствующую кнопку.
Если ты не знаешь что я за бот - уходи😠`;

    resolve(str)

  })

};




module.exports = handler;
