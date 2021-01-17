'use strict';

class Car {
    constructor(name, model, year, color, maxSpeed, fuelCapacity = 60, fuelСonsumption = 10) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.fuelCapacity = fuelCapacity;
        this.fuelСonsumption = fuelСonsumption;
    }

    getFullName = () => `${this.name} ${this.model}`;

    getAge = () => `${this.name} ${this.model} is ${new Date().getFullYear()-this.year} year(s) old.`;

    changeColor = (color) => {
        if (color === this.color) return `Your car is already ${color}.`
        else {
            this.color = color;
            return `${this.name} ${this.model} repainted to ${color} color.`
        }
    }

    calculateWay = (kilometers,fuel) => {
        if (fuel < 10) console.log(`Your have only ${fuel} litres of fuel.`);
        console.log(`Travel time will be ${(kilometers/this.maxSpeed).toFixed(1)} hours (at least).`);
        if (kilometers/100*this.fuelСonsumption > fuel) {
            console.log(`Your need to fill up ${(kilometers/100*this.fuelСonsumption - fuel)} litres of fuel.`)
        }
    }
}

//#region CLASS INHERITANCE ES6 WAY
class OffroadCar extends Car {
    constructor(name, model, year, color, maxSpeed,fuelCapacity = 80, fuelСonsumption = 15, winch = true) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelСonsumption);
        this.winch = winch;
    }
    awd = true;
    checkWinch = () => this.winch ? `${this.name} ${this.model} have a winch.` : `${this.name} ${this.model} have no winch.`
};

class SuperCar extends Car {
    constructor(name, model, year, color, maxSpeed,fuelCapacity, fuelСonsumption, hp = 570) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelСonsumption);
        this.hp = hp;
    }
    carbonRoof = true;
    showPower = () => this.hp>500 && this.carbonRoof ? `${this.name} ${this.model} have a ${this.hp} hp.` : `It's a crap.`
};

class BudgetCar extends Car {
    constructor(name, model, year, color, maxSpeed,fuelCapacity, fuelСonsumption) {
        super(name, model, year, color, maxSpeed, fuelCapacity, fuelСonsumption);
    }
    cabinAirFreshener = true;
    checkFreshener = () => this.cabinAirFreshener ? `${this.name} ${this.model} is a budget car.` : `This is an expensive car.`
};
//#endregion 

let polo = new BudgetCar('VW','Polo',2020,'gray',184,55,6.4),
    duster = new OffroadCar('Renault','Duster',2014,'black',177),
    f458 = new SuperCar('Ferrari','458 Italia',2016,'red',325,86,13.3);

//#region console.log
console.log(polo.getFullName());
console.log(polo.getAge());
console.log(polo.changeColor('green'));
polo.calculateWay(500,11);
console.log(polo.checkFreshener());

console.log(f458.getFullName());
console.log(f458.getAge());
console.log(f458.changeColor('green'));
f458.calculateWay(500,9);
console.log(f458.showPower());

console.log(duster.getFullName());
console.log(duster.getAge());
console.log(duster.changeColor('green'));
duster.calculateWay(500,11);
console.log(duster.checkWinch());
//#endregion 