//Notice there isn't any code for an Interface in the JS output
interface IEngine {

    //Properties
    horsepower: number;
    cubicInches: number;

    //Methods
    start();
    stop();

}

class CarEngine implements IEngine {

    constructor(public horsepower: number, public cubicInches: number) {
    }

    start() {
        //Insert key into ignition
        //Put foot on brake
        //Start the car!
        alert('A ' + this.horsepower + ' horsepower engine started started!');
    }

    stop() {

        //Place car in park or neutral
        //Turn off ignition
        //Pull key out of ignition      
        alert('stopped');
    }
}

class LawnmowerEngine implements IEngine {

    constructor(public horsepower: number, public cubicInches: number) {
    }

    start() {
        //Prime the carburetor
        //Pull the clutch handle
        //Pull the cord
        alert('A ' + this.horsepower + ' horsepower lawnmower engine started started!');
    }

    stop() {
        //Let go of the clutch handle
        alert('stopped');
    }
}

window.onload = () => {
    var auto = new CarEngine(320, 289);
    auto.start();
    var mower = new LawnmowerEngine(7.75, 11.6);
    mower.start();
};