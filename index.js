class Cat {
    constructor(name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    eat(food) {
        console.log(`${this.name} is eating ${food}.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }

    meow() {
        console.log(`${this.name} says meow!`);
    }
}

// Creating two instances of the Cat class
const cat1 = new Cat("Richi", 1, "white");
const cat2 = new Cat("Murzik", 2, "grey");

// Logging the properties of both cat instances
console.log(cat1);
console.log(cat2);

// Invoking methods from both cat instances
cat1.eat("meat");
cat2.sleep();
cat1.meow();
cat2.meow();

console.log(" ");

class Pirate {
    constructor(name, rank, weapon) {
      this.name = name;
      this.rank = rank;
      this.weapon = weapon;
    }
  
    talk() {
      console.log(`Arr! I am ${this.name}, the ${this.rank} pirate.`);
    }
  
    attack(target) {
      console.log(`${this.name} attacks ${target} with ${this.weapon}!`);
    }
  
    plunder() {
      console.log(`${this.name} is plundering the treasure.`);
    }
  }
  
  // Creating two arrays of Pirate instances
  const jollyRoger = [
    new Pirate("Captain Blackbeard", "captain", "cutlass"),
    new Pirate("Long John Silver", "first mate", "flintlock pistol"),
    new Pirate("Calico Jack", "quartermaster", "sabre"),
  ];
  
  const blackPearl = [
    new Pirate("Captain Hook", "captain", "hook"),
    new Pirate("Anne Bonny", "second mate", "blunderbuss"),
    new Pirate("Redbeard", "navigator", "boarding axe"),
  ];
  
  // Looping over each array and printing three properties of each pirate
  jollyRoger.forEach((pirate) => {
    console.log(`Name: ${pirate.name}`);
    console.log(`Rank: ${pirate.rank}`);
    console.log(`Weapon: ${pirate.weapon}`);
  });
  
  blackPearl.forEach((pirate) => {
    console.log(`Name: ${pirate.name}`);
    console.log(`Rank: ${pirate.rank}`);
    console.log(`Weapon: ${pirate.weapon}`);
  });