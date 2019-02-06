let sam = {
    name: "Sam",
    strength: 150,
    health: 50,
    xp: 0,
    describe() {
        return (`${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`);

    }
};

// sam is hit by an arrow
sam.health -= 20;

//sam equips a strength necklace
sam.strength += 10;

// sam learns a new skill
sam.xp += 15;

console.log(sam.describe());

// Modeling a dog
let dog = {
    name: "Wuf",
    species: "mutt",
    size: "large",
    bark() {
        return("Go Away");
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);


console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


// Modeling a bank account
let account = {
    name: "Alex",
    balance: 0,
    credit(i) {
        return (
            this.balance += i
        );

    },
    describe() {
        return (`owner: ${this.name}, balance ${this.balance}`);
    }
};


console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());



