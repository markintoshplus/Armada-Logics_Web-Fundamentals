// Define the warriors
const warrior1 = {
    name: "Thor",
    hp: 100,
    strength: 12,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

const warrior2 = {
    name: 'Zeus',
    hp: 100,
    strength: 10,
    attack() {
        return Math.floor(Math.random() * (this.strength + 1));
    }
};

// Simulate 10 rounds of battle
for (let round = 1; round <= 10; round++) {
    console.log(`=== Round ${round} ===`);

    // Thor attacks Zeus
    const warrior1Damage = warrior1.attack();
    warrior2.hp -= warrior1Damage;
    console.log(`${warrior1.name} attacks ${warrior2.name} and does ${warrior1Damage} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

    // Zeus attacks Thor
    const warrior2Damage = warrior2.attack();
    warrior1.hp -= warrior2Damage;
    console.log(`${warrior2.name} attacks ${warrior1.name} and does ${warrior2Damage} damage!`);
    console.log(`${warrior1.name} HP: ${warrior1.hp} | ${warrior2.name} HP: ${warrior2.hp}`);

    console.log("");
}

// Determine and announce the winner
let winner;
if (warrior1.hp > warrior2.hp) {
    winner = warrior1;
} else if (warrior2.hp > warrior1.hp) {
    winner = warrior2;
} else {
    console.log("The battle ends in a draw! ⚔️");
    process.exit(0); // Exit if it's a draw to avoid further execution
}

console.log(`🏆 ${winner.name} WINS the battle! 🏆`);

// Estimated Time of Completion: 2 hrs