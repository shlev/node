const log = console.log

const expect = require('chai').expect
const should = require('chai').should()

const _ = require('lodash')

const {
    alwaysTrue,
    legitString, 
    getPerson,
    Person,
    Armor,
    Weapon
} = require('./index')
describe('#mocha basic', ()=> {
    
    it('true should be true', ()=> {
        true.should.be.true;
    });

    it('I expect true to be true', ()=> {
        expect(true).to.be.true;
    })
})

describe('#alwaysTrue', () => 
{ 
    it('should always return true', ()=> 
    {
        alwaysTrue().should.be.true
    })

    it('I expect it to always be true', ()=> 
    {
        expect(alwaysTrue()).to.be.true
    })

    it('should not be false', ()=> 
    {
        alwaysTrue().should.not.be.false
    })

})

describe('#legitString', ()=> 
{ 
    it("should detect 'cow' as a legit string", ()=> 
    {
        legitString('cow').should.be.true
    })
    it ("undefined should not be true", ()=>
    { 
        legitString(undefined).should.be.false
    })
})

describe('#index initial conditions', ()=> 
{
    it('initial person is an object', ()=>
    {
        const person = getPerson();
        _.isObject(person).should.be.true;
    });
 });

 describe('#Person', ()=> { 
     describe("#rollDice", ()=> {
         it("should return a finite number (not Nan nor Infinity)", ()=>{
            const number = Person.rollDice(1,20);
            _.isFinite(number).should.be.true;
         });
         it("should not have 0 in a 1000 sample size", ()=> {
             const sample = new Array(1000);
             _.fill(sample, 0);
             log(sample);
             const rollDiceSamples = _.map(sample, item => Person.rollDice(1,20));
             log(rollDiceSamples);

             const anyZeros = _.filter(rollDiceSamples, item=> item === 0);
             anyZeros.length.should.equal(0);
         });       
     });

     describe('#attack', () => {
        
        let personA;
        let personB; 

        let createPersonFixture = (name) =>{
            let leatherArmor = new Armor("Leather", 2);
            let shortSword = new Weapon("Short Sword", 0, 1, 6);
            return person = new Person(name, 2, 4, 1, [leatherArmor, shortSword]);
        };

        beforeEach(() => {
            personA = createPersonFixture('Person A');
            personB = createPersonFixture('Person B');
        });

        afterEach(() => {
            personA = undefined;
            personB = undefined;
        });

        it("PersonA's hitpoints start at 11", ()=> {
            personA.hitPoints.should.equal(11);
        });

        it("PersonB's hitpoints start at 11", ()=> {
            personB.hitPoints.should.equal(11);
        });

         it("PersonA's armorBonus start at 0", ()=> {
            personA.armorBonus.should.equal(0);
        });

        it("PersonB's armBonus start at 0", ()=> {
            personB.armorBonus.should.equal(0);
        });


     });
 });






