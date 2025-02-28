// Task 1
console.log("Task 1");
let book = {
    title: "Beginning Programming for Dummies",
    author: "Wallace Wang",
    pages: 384,
    isRead: false,
};

console.log(book.title);
console.log(book["author"]);
console.log(book.pages);
console.log(book["isRead"]);

book.isRead = true;
console.log(book.isRead);

book.genre = "Programming";
console.log(book.genre);

console.log(book);

// Task 2
console.log("Task 2");
let movies = [
    { title: "Movie 1", director: "Director 1", year: 2000 },
    { title: "Movie 2", director: "Director 2", year: 2010 },
    { title: "Movie 3", director: "Director 3", year: 2020 },
];

console.log(movies[1].title);

movies.push({ title: "Movie 4", director: "Director 4", year: 2025 });

movies[0].year = 2023;

console.log(movies);

// Task 3
console.log("Task 3");
let student = {
    name: "Mark Cedrick T. De Vera",
    age: 23,
    subjects: ["Networking and Communication", "Advanced Game Design", "CS Practicum"]
};

console.log(student.subjects[0]);

student.subjects.push("JavaScript Fundamentals");

console.log(student);

// Task 4
console.log("Task 4");
let recipe = {
    name: "Pasta Salad",
    ingredients: [
        { name: "Pasta", quantity: "200g" },
        { name: "Tomatoes", quantity: "2 cups" },
    ],
    isVegetarian: true
};

recipe.ingredients.push({ name: "Olives", quantity: "1/2 cup" });

console.log(recipe.ingredients[1].name);

console.log(recipe);

