'use strict';


const gen = (current) => {
  const random = Math.floor(Math.random() * 11);
  current.push(random);
  if ((current.reduce((acc, i) => acc + i)) > 50) return current;
  return gen(current);
}

console.log(gen([1,2,3]))

