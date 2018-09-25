"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MapUserGreetCounter {
    constructor() {
        this.userMap = new Map();
    }
    countGreet(firstName) {
        let currentUserCount = this.userMap.get(firstName);
        if (!currentUserCount) {
            this.userMap.set(firstName, 1);
        }
        else {
            //let currentUserCount = this.userMap.get(firstName)
            currentUserCount += 1;
            this.userMap.set(firstName, currentUserCount);
        }
        // return     
    }
    get greetCounter() {
        return this.userMap.size;
    }
    userGreetCount(firstName) {
        let userGreetCount = this.userMap.get(firstName);
        if (userGreetCount) {
            return userGreetCount;
        }
        return 0;
    }
}
exports.default = MapUserGreetCounter;
let count = new MapUserGreetCounter;
count.countGreet('Greg');
count.countGreet('Greg');
count.countGreet('Greg');
console.log(count.userGreetCount('Greg'));
