import Dog from "./Dog"
import ShelterDog from "./ShelterDog"
import { add, divide, multiply } from "./utils"

console.log("index file")

const tommy = new Dog('tommy','pug', 5)
tommy.bark()

console.log(add(4,5))
console.log(multiply(9,2))
console.log(divide(6,8))

const buffy = new ShelterDog('buffy','beagle',2,'hut')
buffy.bark()