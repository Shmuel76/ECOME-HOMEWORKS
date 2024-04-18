function printStudentData(student) {
    Object.keys(student).forEach(key => {
        console.log(`${key}: ${student[key]}`);
    });
}

function addHobby(student, hobby) {
    student.hobbies.push(hobby);
}

console.log("Student Data Before Adding Hobby:");
printStudentData(student);
addHobby(student, 'gardening');
console.log("\nStudent Data After Adding Hobby:");
printStudentData(student);

function deleteHobby(student, hobby) {
    const index = student.hobbies.indexOf(hobby);
    if (index !== -1) {
        student.hobbies.splice(index, 1);
    }
}

console.log("\nStudent Data Before Deleting Hobby:");
printStudentData(student);
deleteHobby(student, 'games');
console.log("\nStudent Data After Deleting Hobby:");
printStudentData(student);
student.family_name = 'Doe';

const student = {
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

function printStudentData(student) {
    Object.keys(student).forEach(key => {
        console.log(`${key}: ${student[key]}`);
    });
}

function addHobby(student, hobby) {
    student.hobbies.push(hobby);
}

function deleteHobby(student, hobby) {
    const index = student.hobbies.indexOf(hobby);
    if (index !== -1) {
        student.hobbies.splice(index, 1);
    }
}

console.log("1. Student Data:");
printStudentData(student);

console.log("\n2. Adding a new hobby:");
addHobby(student, 'gardening');
printStudentData(student);

console.log("\n3. Deleting a hobby:");
deleteHobby(student, 'games');
printStudentData(student);

console.log("\n4. Adding family name:");
student.family_name = 'Doe';
printStudentData(student);


