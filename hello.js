class Opengov{
    constructor(employees,estab){
        this.employees1 = employees;
        this.estab1 = estab;
    }

    culture(){
        console.log(`company with ${this.employees1} employees and started in ${this.estab1} 
                    and md is ${this.md1}`);
    }

}
class India extends Opengov{
    constructor(employees,estab,md){
        super(employees,estab);
        this.md1 = md;
}
Biker(){
   return(`${super.culture()}`);
}

}

module.exports = {India};
