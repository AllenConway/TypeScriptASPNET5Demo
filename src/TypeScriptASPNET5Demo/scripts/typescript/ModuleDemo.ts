
//Identically named modules are composable and can be extended
//Remember to import module if doing across different files
module App {

    export var firstName: string = "Allen";

}

module App {

    export var lastName: string = "Conway";

}

var fullName: string = App.firstName + " " + App.lastName;