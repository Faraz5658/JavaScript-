
console.log('constructor function in javaScript')
class student{
    constructor(maraname,age){
        this.studentname= maraname;
        this.studentage= age;
        console.log("Hello : " + this.studentname + "  AGE IS  " + this.studentage)
    }
    static staticMethod(){
        console.log("Static Function");
    }
}
let a = new student(" B A N G A S H  :",5);
let b = new student(" F A R A Z  :",6);
let c = new student(" A L I  :",7);

student.staticMethod();