import assert from 'assert';
import {greet, cantContact} from "../src/greet";

import greetInXhosa  from "../src/greetInXhosa";
import greetInEnglish  from "../src/greetInEnglish";
import greetInFrench from "../src/greetInFrench";
import CountUserGreets from '../src/greetCount';


describe('My greet function', function() {
    it('should take in a name and surname and greet person in english', function() {
        assert.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({ firstName: 'Bob', lastName: 'Crow', email: "bob@crow.com" }));
    });
    it('should tell person we cant contact you in English', function() {
        assert.equal("Hello, Bob Crow we can't contact you.", cantContact({ firstName: 'Bob', lastName: 'Crow'}));
    });
   
});

describe('Greet In Function', function() {
    it('Should greet Greg in English', function(){
        let english = new greetInEnglish
        assert.equal('Hello, Greg', english.greet('Greg'))
    })

    it('Should greet Greg in Xhosa', function(){
        let xhosa = new greetInXhosa
        assert.equal('Molo, Greg', xhosa.greet('Greg'))
    })

    it('Should greet Greg in French', function(){
        let french = new greetInFrench

        assert.equal('Bonjour, Greg', french.greet('Greg'))
    })
});

describe('Greet Count Function', function() {

    it('should return count', function(){
        let userCount = new CountUserGreets

        userCount.countGreet('Greg')
        assert.equal(userCount.countGreet('Greg'),1)
    })

})