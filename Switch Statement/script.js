// Switch - It can be an efficient way to use many If statements

let totalScore = 10;
let testGrade;

switch(true){
    case totalScore >= 90:
        testGrade = "A";
        break;
    case totalScore >= 80:
        testGrade = "B";
        break;
    case totalScore >= 70:
        testGrade = "C";
        break;
    default:
        testGrade = "D"
}

console.log(testGrade)