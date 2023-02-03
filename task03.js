'use strict';


const rectangle = {
  width: '',
  height: '',
  get area () {
    return `площадь прямоугольника = ${this.width * this.height}см.`;
 },
  set area (number) {
    if (Number.isFinite(number)) {
      this.width = number;
    } else (this.width = 5);
  },
  get perimeter () {
    return `периметр прямоугольника = ${(this.width * this.height) * 2}см.`;
  },
  set perimeter (number2) {
    if (Number.isFinite(number2)) {
      this.height = number2;
    } else (this.height = 5);
  },
}

rectangle.area = 50;
rectangle.perimeter = 25;

console.log(rectangle.area);
console.log(rectangle.perimeter);

