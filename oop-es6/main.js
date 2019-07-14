"use strict"

class Weapon {    //Задание 1
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
  }
  
  takeDamage(damage) {
    this.durabilityFirst = this.durability;
    let durabilityDecrease = this.durability - damage;
    this.durability = durabilityDecrease;
    if (this.durability <= 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === 0) {
      this.attack = 0;
    } else if (this.durability < (3 * this.durabilityFirst) / 10) {
      this.attack = this.attack / 2;
    } 
    return this.attack;
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else { 
    return true;
    }
  }
}

const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const sword = new Weapon("Меч", 25, 500, 1);
const knife = new Weapon("Нож", 5, 300, 1);
const stick = new Weapon("Посох", 8, 300, 2);

const longBow = new Weapon ("Длинный лук", 15, bow.durability, 4);
const poleaxe = new Weapon ("Секира", 27, 800, sword.range);
const stickOfStorm = new Weapon ("Посох Бури", 10, stick.durability, 3);

/*arm.takeDamage(20);
console.log(arm.durability); // Infinity

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1*/



class Bow extends Weapon {   //Задание 2
}

class Sword extends Weapon {
}

class Stick extends Weapon {
}

class LongBow extends Bow {
}

class Poleaxe extends Sword {
}

class StickOfStorm extends Stick {
}

const bowSecond = new Bow("Лук", 10, 200, 3);
const swordSecond = new Sword("Меч", 25, 500, 1);
const stickSecond = new Stick("Посох", 8, 300, 2);
const longBowSecond = new Bow ("Длинный лук", 15, bow.durability, 4);
const poleaxeSecond = new Sword ("Секира", 27, 800, sword.range);



/*bowSecond.takeDamage(30);
console.log(bowSecond.durability);
console.log(bowSecond.getDamage()); 
console.log(bowSecond.isBroken());

swordSecond.takeDamage(30);
console.log(swordSecond.durability);
console.log(swordSecond.getDamage()); 
console.log(swordSecond.isBroken());

stickSecond.takeDamage(30);
console.log(stickSecond.durability);
console.log(stickSecond.getDamage()); 
console.log(stickSecond.isBroken());

longBowSecond.takeDamage(30);
console.log(longBowSecond.durability);
console.log(longBowSecond.getDamage()); 
console.log(longBowSecond.isBroken());

poleaxeSecond.takeDamage(30);
console.log(poleaxeSecond.durability);
console.log(poleaxeSecond.getDamage()); 
console.log(poleaxeSecond.isBroken());

console.log(bowSecond.name); // Лук
console.log(bowSecond.attack); // 10
console.log(bowSecond.durability); // 200
console.log(bowSecond.range); // 3*/



class StudentLog {     //Задание 3
  constructor(name) {
    this.name = name;
    this.marks = {};
    }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    let sub = subject;
    if (grade > 5 || grade < 1 || Number.isInteger(grade) === false) {
    console.log (`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      if (this.marks[sub] === undefined) {
        return 0;
      } else {
        return this.marks[sub].length;
      }     
    } else if (this.marks[sub] === undefined) {
      this.marks[sub] = [];
      this.marks[sub].push(grade);
      return this.marks[sub].length;
    } else {
      this.marks[sub].push(grade);
      return this.marks[sub].length;
    }
      
  }

  getAverageBySubject(subject) {
    if (this.marks[subject] === undefined) {
      return 0;
    }
    let sum = 0;
    for (let mark of this.marks[subject]) {
    sum = sum + mark;
    }
    return sum / this.marks[subject].length;
  }

  getTotalAverage() {
    let numberKey = 0;
    let averageOfSubject;
    let totalSum = 0;
    let totalAverage;

    for (let key in this.marks) {
      let sumOfMarks = 0;
      numberKey = numberKey + 1;
      for (let mark of this.marks[key]) {
      sumOfMarks = sumOfMarks + mark;
      }
      averageOfSubject = sumOfMarks / this.marks[key].length;
      totalSum = totalSum + averageOfSubject;
    }
   
    totalAverage = totalSum / numberKey;
    
    return totalAverage;
  }
}  


const log = new StudentLog('Олег Никифоров');
//console.log(log.getName()); // Олег Никифоров

//console.log(log.addGrade('отлично!', 'math'));

//console.log(log.addGrade(3, "algebra"));
//console.log(log.addGrade(4, "algebra"));
//console.log(log.addGrade(5, "geometry"));
//console.log(log.addGrade(25, "geometry"));
//console.log(log.addGrade(1, "geometry"));
//console.log(log.addGrade(3, "geometry"));
//console.log(log.addGrade(3, "math"));

//console.log(log.getAverageBySubject("algebra"));
//console.log(log.getAverageBySubject("geometry"));


//console.log(log.getTotalAverage());