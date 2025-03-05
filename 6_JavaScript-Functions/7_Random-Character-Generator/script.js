// Task 1: Create a base character object with default values.
const baseCharacter = {
    name: "Hero",
    health: 100
};

/* Helper Functions */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* Arrays for Random Selections */
const classes = ["Warrior", "Mage", "Archer", "Healer", "Assassin"];
const specialAbilities = ["Fireball", "Healing Touch", "Stealth", "Lightning Strike", "Power Slash"];
const namesList = ["Thorin", "Elara", "Zane", "Ivy", "Dante"];

/* Task 5: generateCharacter() Function */
/*  
 * DOCU: Generates and returns a new character object with random attributes.  
 * @param {string} [name] - Optional name to assign to the character; if not provided, a random name is chosen from namesList.  
 * @returns {Object} - A new character object with properties: name, health (randomized), class, specialAbility, randomizeHealth(), and battle().  
 * @throws {None} - This function does not throw exceptions.  
 *   
 * Last Updated: 2025-03-05  
 * Author: Mark Cedrick T. De Vera  
 * Last Updated By: Mark Cedrick T. De Vera  
 */
function generateCharacter(name) {
    // Create a new character based on the base object.
    const character = { ...baseCharacter };

    // Override name: use provided name, else random from namesList.
    character.name = name || getRandomFromArray(namesList);

    // Assign random class, ability, and methods.
    character.class = getRandomFromArray(classes);
    character.specialAbility = getRandomFromArray(specialAbilities);

    character.randomizeHealth = function () {
        this.health = getRandomInt(50, 150);
    };

    character.battle = function (otherCharacter) {
        const damage = getRandomInt(5, 20);
        const initialHealth = otherCharacter.health;
        otherCharacter.health = Math.max(initialHealth - damage, 0);
        console.log(`${this.name} attacked ${otherCharacter.name} with ${this.specialAbility}. ${otherCharacter.name}'s health dropped from ${initialHealth} to ${otherCharacter.health}.`);
    };

    // Initialize randomized health.
    character.randomizeHealth();

    return character;
}

/* Task 7: Generate Multiple Characters */
/*  
 * DOCU: Generates and returns an array of randomly generated character objects.  
 * @param {number} x - The number of characters to generate.  
 * @returns {Array} - An array containing x character objects created by generateCharacter().  
 * @throws {None} - This function does not throw exceptions.  
 *   
 * Last Updated: 2025-03-05  
 * Author: Mark Cedrick T. De Vera
 * Last Updated By: Mark Cedrick T. De Vera
 */
function generateMultipleCharacters(x) {
    return Array.from({ length: x }, () => generateCharacter());
}

/* Testing */

// const hero = generateCharacter(); // Uses random name from namesList, not "Hero".
// console.dir(hero);

// const namedHero = generateCharacter("Drake");
// console.dir(namedHero);

// const defaultHero = { ...baseCharacter }; // Base object as per Task 1.
// console.dir(defaultHero); // Output: { name: 'Hero', health: 100 }

// // Simulate a battle between two characters.
// const character1 = generateCharacter("Zane");
// const character2 = generateCharacter("Elara");
// character1.battle(character2);
// character2.battle(character1);

// Generate an array of 5 random characters.
const party = generateMultipleCharacters(5);
console.dir(party);