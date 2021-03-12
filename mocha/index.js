_ = require('lodash')
const alwaysTrue = () => true

const legitString = (o) => _.isString(o) && o.length > 0

class Person 
{
    constructor(name, strength, dexterity, constitution, equipment) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.hitPoints = 10 + constitution;
        this.equipment = equipment;
        this.calculateEquipment();
        this.armorBonus = 0;
    }

    addEquipment(item) {
        this.equipment.push(item);
        if ( item instanceof Armor) {
            this.calculateEquipment();
        }
    }

    removeEquipment( item ) {
        for (let i=0; i<this.equipment.length; i++) {
            let e = this.equipment[i];
            if ( e === item) {
                this.equipment.splice(i, 1);
            }
        }

        if ( item instanceof Armor) {
            this.calculateEquipment();
        }
    }

    calculateEquipment(){
        this.armorBonus = 0;
        for ( let i=1; i<this.equipment.length; i++) {
            let item = this.equipment[i];
            if ( item instanceof Armor) {
                this.armorBonus += item.bonus;
            }
        }
    }

    static rollDice(howMany, type) {
        let total = 0;
        for (let i=0; i<howMany; i++) {
            total += Math.round(Math.random() * type);
        }

        return total;
    }
}

class Armor {
    constructor(name, bonus) {
        this.name = name;
        this.bonus = bonus;
    }
}

class Weapon 
{
    constructor(name, bonus, damageDieAmount, damageDieType) 
    {
        this.name = name;
        this.bonus = bonus;
        this.damageDieAmount = damageDieAmount;
        this.damageDieType = damageDieType;
    }
}

let person;

function setupPerson() {
    let leatherArmor = new Armor("Leather", 2);
    let shortSword = new Weapon("Short Sword", 0, 1, 6);
    person = new Person('McFly Bojo', 2, 4, 1, [leatherArmor, shortSword]);
}

setupPerson();

getPerson = ()=> person;
module.exports= { legitString, alwaysTrue, getPerson, Person}