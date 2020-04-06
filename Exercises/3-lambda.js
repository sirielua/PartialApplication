'use strict';

const tagged = (pref, str) => `[${pref}] ${str}`;
const tagDate = str => {
  //const date = new Date().toISOString().slice(0, 10);
  const date = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const sdate = date.toLocaleString('ru', options);
  return tagged(sdate, str);
};

console.log(tagDate('Horrey!'));
module.exports = { tagDate };
