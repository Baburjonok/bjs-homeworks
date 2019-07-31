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
  constructor(name, attack, durability, range) {
    super();
    this.name = "Лук";
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Sword extends Weapon {
  constructor(name, attack, durability, range) {
    super();
    this.name = "Меч";
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
  }
}

class Stick extends Weapon {
  constructor(name, attack, durability, range) {
    super();
    this.name = "Посох";
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

class LongBow extends Bow {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = "Длинный лук";
    this.attack = 15;
    this.range = 4;
  }
}

class Poleaxe extends Sword {
  constructor(name, attack, durability, range) {
    super(range);
    this.name = "Секира";
    this.attack = 27;
    this.durability = 800;
  }
}

class StickOfStorm extends Stick {
  constructor(name, attack, durability, range) {
    super(durability);
    this.name = "Посох Бури";
    this.attack = 10;
    this.range = 3;
  }
}


/*const bowSecond = new Bow();
console.log(bowSecond.name); //Лук
console.log(bowSecond.attack); //10
console.log(bowSecond.durability);  //200
console.log(bowSecond.range);  //3
bowSecond.takeDamage(30);
console.log(bowSecond.durability);  //170
console.log(bowSecond.getDamage());  //10 
console.log(bowSecond.isBroken());  //false

const longBowSecond = new LongBow();
console.log(longBowSecond.name); //Длинный лук
console.log(longBowSecond.attack); //15
console.log(longBowSecond.durability);  //200
console.log(longBowSecond.range);  //4
longBowSecond.takeDamage(30);
console.log(longBowSecond.durability);  //170
console.log(longBowSecond.getDamage());  //15 
console.log(longBowSecond.isBroken());  //false

const swordSecond = new Sword();
console.log(swordSecond.name);  //Меч
console.log(swordSecond.attack); //25
console.log(swordSecond.durability);  //500
console.log(swordSecond.range);  //1
swordSecond.takeDamage(30);
console.log(swordSecond.durability);  //470
console.log(swordSecond.getDamage());  //25 
console.log(swordSecond.isBroken());  //false*/


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