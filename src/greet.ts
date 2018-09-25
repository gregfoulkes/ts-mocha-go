// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
//   }
import Person from '../src/interfaces/person';
import greetInXhosa  from "./greetInXhosa";
import  UserGreetCounter  from "../src/interfaces/greetCounter";
export  function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} we will be in touch at: ${person.email}`;
  }

  export  function cantContact(person: Person) {
      return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
    }

