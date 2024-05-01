
import { helloType } from './types';
export function sayHello({
    firstName, lastName, age
}: helloType) {

    console.log("Hello");
    console.log(`Your first name is ${firstName}`);

    if(lastName) {
      console.log(`Your last name is ${lastName}`);   
    }

    if(age) {
        console.log(`Your age is ${age}`);
    }
} 