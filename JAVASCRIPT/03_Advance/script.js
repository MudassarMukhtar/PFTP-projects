// OOP IN JAVASCRIPT

// 4-PILLERS OF OOP

// 1-POLYPHORMISM 
// 2-INHERITENCE
// 3-ABSRACTION
// 4-ENCAPSULATION

// Classes


class Person{
    //first of all call constructor
    constructor(name,email){
          this.name=name;
          this.email=email;
    }  
    //Getter Setter   
    getName(){
        return this.name;
    } 
    getEmail(){
        return this.email;
    }   
    setPhoneNumber(phone){
        this.phone=phone;
    } 
    getPhoneNumber(){
        return this.phone;
    }       
}
class Department extends Person{
   constructor(name,email,department){
    super(name,email);
    this.department=department;
   }
   setDepartment(){
    
   }
}


// ARRAY
const arr=[];
for(let i=0;i<10;i++){
const Person1 = new Person("ali","xyz@gmail.com");
Person1.setPhoneNumber("03070049655");
arr.push(Person1)
// console.log(i,Person1);


// const Person2 = new Person("subhan","xyz@gmail.com");
// const Person3 = new Person("bahi","xyz@gmail.com");
}
console.log(arr[5]);
// console.log(
//     Person1.getPhoneNumber(),
//     Person2.getEmail(),
//     Person3.getName()
// );

