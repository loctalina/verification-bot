"use strict";




const handler = (ctx) => {

  const from = ctx. from;


  global. listAnswer. settings (from, (answer) => {
    ctx. reply (answer);
    return undefined;
  });


  return undefined;
};




module. exports = () => handler;