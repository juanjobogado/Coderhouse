class Contador{
 static accGlobal = 0
    constructor(name){
        this.name = name;
         this.acc = 0;
    }

    getResponsable(){
        console.log(this.name)
    }

    contar(){
        this.acc++
        Contador.accGlobal++
    }

    getCuentaIndividual(){
        console.log(this.acc)
    }

    getCuentaGlobal(){
        console.log(Contador.accGlobal);
    }


}

let person1 = new Contador("Juan")

person1.getResponsable()
person1.getCuentaIndividual()
person1.getCuentaGlobal()
person1.contar()

person1.contar()
person1.getCuentaIndividual()