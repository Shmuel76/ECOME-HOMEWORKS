function printCatObjects(arrayOfObjects) {
    arrayOfObjects.forEach(obj => {
        if (obj.animalType === "cat") {
            console.log(obj);
        }
    });
}

function printDogNames(arrayOfObjects) {
    arrayOfObjects.forEach(obj => {
        if (obj.animalType === "dog") {
            obj.names.forEach(name => {
                console.log(name);
            });
        }
    });
}

const ourPets = [
    {
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];

// Print only the objects with animalType "cat"
console.log("Cat Objects:");
printCatObjects(ourPets);

// Print only the names of animals with animalType "dog"
console.log("\nDog Names:");
printDogNames(ourPets);

