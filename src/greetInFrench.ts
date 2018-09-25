import GreetIn  from "./interfaces/greetIn";

export default class GreetInFrench implements GreetIn {

    greet (name: string) {
      return "Bonjour, " + name;
    }
  }