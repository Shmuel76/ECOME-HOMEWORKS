function removePropertyFromArray(arrayOfStudents, propertyToRemove) {
    arrayOfStudents.forEach(student => {
        if (student.hasOwnProperty(propertyToRemove)) {
            delete student[propertyToRemove];
        }
    });
}

function printPropertiesOfArray(arrayOfStudents) {
    arrayOfStudents.forEach(student => {
        Object.keys(student).forEach(key => {
            console.log(`${key}: ${student[key]}`);
        });
    });
}

// Sample array of student objects
const students = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 20,
        country: "USA",
        city: "New York"
    },
    {
        id: 2,
        firstName: "Alice",
        lastName: "Smith",
        age: 22,
        country: "Canada",
        city: "Toronto"
    }
];

// Removing the "city" property from each student object
removePropertyFromArray(students, "city");

// Printing each property of each student object
printPropertiesOfArray(students);
