// class Animals{
//     constructor(name){
//         this.name = name;
// }
// speak(){
//     console.log(`name of animal is ${this.name}`);
// }
// }
// class Dog extends Animals{
//     constructor(name,language){
//        // this.language = language;
//         super(name);
// }
// speak(){
//     console.log(`add language: meww meow`);
// }
// }
// let Animal1 = new Animals("cat");
// Animal1.speak();
// let Animal2 = new Dog();
// Animal2.speak();







// class Students {
//     constructor(name,roll){
//         this.name = name;
//         this.roll = roll;
// }
// call(){
//     console.log(`Name of student is ${this.name} and rollno is ${this.roll}`);
// }
// }
// class teacher extends Students{
//     constructor(name,roll){
//        // this.miss = miss;
//         super(name,roll);
// }
// call(){
//     console.log(`Name of teacher is ${this.name}`);
// }
// }
// let std =new Students("pranit",12);
// std.call();
// let std2= new teacher("ganesh");
// std2.call();



class Vegetables{
    constructor(name,pieces){
        this.name = name;
        this.pieces = pieces;
    }
    buy(){
        console.log(`Name of vegetable is ${this.name} which i bought at 10 rupee for ${this.pieces} pieces`);
    }
}
class Paneer extends Vegetables{
    constructor(name,pieces){
        super(name,pieces);
    }
    
    buy(){
        console.log(`and also bought ${this.name}`);
    }
}
let v1 = new Vegetables("palak",2);
v1.buy();
v2 =new Paneer("paneer");
v2.buy();
