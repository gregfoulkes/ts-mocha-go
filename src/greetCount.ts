import UserGreetCounter from "./interfaces/greetCounter";

export default class MapUserGreetCounter implements UserGreetCounter {

    private userMap = new Map<string, number>();

    countGreet(firstName: string): void {
        let currentUserCount = this.userMap.get(firstName)

        if(!currentUserCount){
            this.userMap.set(firstName, 1)
        }else{

            currentUserCount += 1;

            this.userMap.set(firstName, currentUserCount)
        }
       // return     
    }    

    get greetCounter(): number {
        return this.userMap.size;
    }

    userGreetCount(firstName: string): number {
        let userGreetCount = this.userMap.get(firstName);
        if(userGreetCount){
            return userGreetCount
        }

    return 0 
    
    }
  }

  let count = new MapUserGreetCounter

count.countGreet('Greg')
count.countGreet('Greg')
count.countGreet('Greg')

console.log(count.userGreetCount('Greg'))