"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName} we will be in touch at: ${person.email}`;
}
exports.greet = greet;
function cantContact(person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
}
exports.cantContact = cantContact;
