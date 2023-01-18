// var myname = "Pranit";
// console.log(myname);

class Bike{
    constructor(Engine,Tyre,){
        this.bEngine =Engine;
        this .bTyre =Tyre;
    }

    default(){
        console.log(`High class ${this.bEngine} and smooth ${this.bTyre} with 
                   high  ${this.bSpeed}
                ${this.avg} with ${this.max}`);
    }
}

class Splendor extends Bike{
    constructor(Engine,Tyre,Speed){
        super(Engine,Tyre);
        this.bSpeed =Speed;
    }
    Race(){
        return(`${super.default()}.`)
    }

}

class Yama extends Splendor{
    constructor(Engine,Tyre,Speed,avg,max){
    super(Engine,Tyre,Speed);
    this.avg=avg;
    this.max =max;
    }
    continue(){
        return(`${this.Race()}`)
    }
}

let s1= new Yama("heavy","Ceat",180,100,130);
s1.continue();