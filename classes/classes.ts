class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world")


class Car {
    drive(distance: number) {
        console.log(`Car drove ${distance} miles`);
    }
}

class Nissan extends Car {
    boost() {
        console.log("Your car just boosted")
    }
}

const r34 = new Nissan();
r34.drive(40)
r34.boost()