"use strict";




const handler = () => {

  return new Promise((resolve) => {

    const str = `Вы не авторизованы, чтобы авторизоваться введите /authorization.`;

    resolve(str)

  })

};




module.exports = handler;