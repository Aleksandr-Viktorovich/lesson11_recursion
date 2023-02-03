'use strict';

const random = Math.floor(Math.random() * 100 + 1);
console.log(random)



const game = () => {
  const user = +prompt('Введи число 1-100!')
  if (user === null || user < 1) {
    alert('Зря ты так!!!')
    return;
  }
  if (Number.isNaN(user)) {
    alert('Ты ввел не число!')
  }
  if (user > random) {
       alert('Меньше-попробуй еще раз!')
  }
  if (user < random) {
    alert('Больше-попробуй еще раз!')
  }
  if (user === random) {
       alert('Ты молодец!')
    return;
  }
  return game();
};

console.log(game());


