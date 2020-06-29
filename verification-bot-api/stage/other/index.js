"use strict";



const Markup = require('telegraf/markup');
const Scene = require('telegraf/scenes/base');


const handler = () => {

  const other = new Scene('other');

  other.enter((ctx) => {
    const log = `[BOT][${ctx.from.id}] - - [${__dirname.slice(49)}]`;
    winston.info(`${log} - - Пользователь вошел в сцену.`);

    ctx.reply("Неизвестная команда, напиши /help, чтобы посмотреть какими командами ты можешь пользоваться.", Markup
      .keyboard(['💡 Помощь'])
      .oneTime()
      .resize()
      .extra()
    );

  });

  other.hears(/^(💡 )?Помощь$/gi, (ctx) => {
    const log = `[BOT][${ctx.from.id}] - - [${__dirname.slice(49)}]`;
    winston.info(`${log} - - Пользователь ввел "Помощь".`);

    winston.info(`${log} - - Запускается сцена помощи.`);
    ctx.scene.enter('help');
    winston.info(`${log} - - Покидаем сцену.`);
    ctx.scene.leave();
    
  }); 

  other.on('message', (ctx, next) => {
    const log = `[BOT][${ctx.from.id}] - - [${__dirname.slice(49)}]`;
    winston.info(`${log} - - Пользователь ввел то, что не ожидалось.`);

    winston.info(`${log} - - Покидаем сцену.`);
    ctx.scene.leave();
    winston.info(`${log} - - Отправляем запрос дальше.`);
    next();

  });

  return other;
};




module.exports = handler;
