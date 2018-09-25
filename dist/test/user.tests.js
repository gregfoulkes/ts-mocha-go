"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = require("../src/greet");
const greetInXhosa_1 = __importDefault(require("../src/greetInXhosa"));
const greetInEnglish_1 = __importDefault(require("../src/greetInEnglish"));
const greetInFrench_1 = __importDefault(require("../src/greetInFrench"));
const greetCount_1 = __importDefault(require("../src/greetCount"));
describe('My greet function', function () {
    it('should take in a name and surname and greet person in english', function () {
        assert_1.default.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet_1.greet({ firstName: 'Bob', lastName: 'Crow', email: "bob@crow.com" }));
    });
    it('should tell person we cant contact you in English', function () {
        assert_1.default.equal("Hello, Bob Crow we can't contact you.", greet_1.cantContact({ firstName: 'Bob', lastName: 'Crow' }));
    });
});
describe('Greet In Function', function () {
    it('Should greet Greg in English', function () {
        let english = new greetInEnglish_1.default;
        assert_1.default.equal('Hello, Greg', english.greet('Greg'));
    });
    it('Should greet Greg in Xhosa', function () {
        let xhosa = new greetInXhosa_1.default;
        assert_1.default.equal('Molo, Greg', xhosa.greet('Greg'));
    });
    it('Should greet Greg in French', function () {
        let french = new greetInFrench_1.default;
        assert_1.default.equal('Bonjour, Greg', french.greet('Greg'));
    });
});
describe('Greet Count Function', function () {
    it('should return count', function () {
        let userCount = new greetCount_1.default;
        userCount.countGreet('Greg');
        assert_1.default.equal(userCount.countGreet('Greg'), 1);
    });
});
