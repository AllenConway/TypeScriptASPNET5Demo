//Modules act as naming containers that encapsulate other things like 
//'classes, 'interfaces', etc.
module Test {
    export class MyTest {
        name = "hello";
        private ab = new PrivateTest(); 

        //The return type is specified after the method name
        //Note 'public/private' is a compile time check; no changes to JS
        public myPublicMethod(): string {
            return this.ab.myMethod();
        }

    }

    class PrivateTest {
        //Exposing private value on private method only accessible within the scope of this module
        public myMethod() {
            return this.name1;
        }

        private name1 = "hi";
    }
}

var a = new Test.MyTest();
var ret = a.myPublicMethod();
//var b = new Test.PrivateTest(); //Not accessible - it's not exported on 'test'


module ClassInheritance {

    export class Car {
        constructor(public make: string, public model: string) {

        }

    }

    export class Engine extends Car {

        //Adding access modifier in constructor will automatically 
        //map and essentially create backing properties for you
        constructor(private engineType: EngineType, private horsePower: number,
            private displacement: number, make: string, model: string) {
            //Required super call to base class
            super(make, model);
        }



    }

    export enum EngineType {
        "4Cylinder",
        "Inline6",
        "V6",
        "V8",
        "V12"
    }

}


var myCar = new ClassInheritance.Car("Ford", "Mustang");
var coolEngine = new ClassInheritance.Engine(ClassInheritance.EngineType.V8, 320, 281, myCar.make, myCar.model);

//Use the import statement to reference exported classes from internal modules
import CarTest = ClassInheritance.Car; 
var myCar2: CarTest = new CarTest("Dodge", "Challenger");
