"use strict";




const handler = (channel, message) => {

  if (channel === "notification") {

    message = JSON.parse(message);

    const newMessage = `Имя: ${message.name}\n` +
    `Фамилия: ${message.lastname ? message.lastname : "отсутствует"}\n` +
    `Логин: ${message.login}`;

    global.redis.hgetall("queue")
    .then((queue) => {

      if (!Object.values(queue).length){
        return;
      }

      queue = Object.entries(queue);

      console.log(queue);

      for (let i = 0; i < queue.length; i++) {
        
        const turn = queue[i];
        console.log(turn[1]);
        if (turn[1] === "true") {

          global.telegram.sendMessage(turn[0], newMessage);
          console.log(turn[0]);
          global.redis.hset("queue", turn[0], false);

          if (i === queue.length - 1) {
            global.redis.hset("queue", queue[0][0], true).then(() => console.log(123));
            break;
          }

          global.redis.hset("queue", queue[i + 1][0], true);
          break;
        }

      }

    });

  }
    
};




module.exports = handler;