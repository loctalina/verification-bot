"use strict";





const handler = (ctx) => {

  const from = ctx. from;
  const session = ctx. session;


  if (session [from. id]) {

    global. listAnswer. existUser (from, (answer) => {
      ctx. reply (answer);
      return undefined;
    });


    return undefined;
  }


  global. handler. saveUserInSession (ctx, from);
  global. listAnswer. notExistUser (from, (answer) => {
    ctx. reply (answer);
    return undefined;
  });


  return undefined;
};




module. exports = () => handler;
