// var student={
//     fname:"abc",
//     age:21,
// };
// console.log(student);

// var calculator={
//     addition(a1,b1){
//         console.log("Addition :",a1+b1);
//     }
// };
// console.log(1,2);
// console.log(calculator);

var student={
    fname:"abc",
    age:21,
    bioData()
    {
        console.log("Your name is",this.fname);
    }
};
// console.log(student.fname);
// console.log(student['age']);

student.fname="pqr";
console.log(student);
student.gender="other";
student["contactNo"]=1234567890;
console.log(student);

// delete student.age;
// console.log(student);