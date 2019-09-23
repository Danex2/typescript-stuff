class Animal {
  animalName: string;
  constructor(name: string) {
    this.animalName = name;
  }
  walk(distance: number) {
    console.log(`${this.animalName} walked ${distance} in meters!`);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  talk(message: string) {
    console.log(`${this.animalName} says ${message}!`);
  }
}

const doggo = new Dog('Porter');
doggo.talk('WOOF!');
