const log = console.log

const expect = require('chai').expect
const should = require('chai').should()

const _ = require('lodash')

const {
    alwaysTrue,
    legitString, 
    getPerson,
    Person
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
     describe.only("#rollDice", ()=> {
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
 });






