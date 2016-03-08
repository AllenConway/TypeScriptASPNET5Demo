(function () {

   //In JavaScript, var declarations are "hoisted" to the top of their enclosing scope. This can result in confusing bugs:
   //variable 'i' will be hoisted here after declared
   //var i;

   alert(i); //undefined because variable is not 'hoisted' until declared

   for (var i = 0; i < 5; i++) {

   }

   //'i' technically should be out of scope (traditionally thinking)
   //What will be displayed in the alert??
   //undefined or '5'
   //'i' is available because of variable hoisting or being 'lifted' to the top of the function
   alert(i);

}());  //IIFE, run this Immediately


//Demo: variable mess in JS
(function () {

   var user = "Allen";
   alert('user value: ' + user);

   //1000 lines of JS later :S

   user = 1234;  //isn't user an ID??
   alert('user value: ' + user);

   //Another 1000 lines of JS later
   user = user + ' Conway';
   alert('user value: ' + user);

   //No type checking in JS, so this multiplication to assign value to what was a string succeeds.
   //var userId = "1234";
   var userId = "Allen";
   user = userId * 1;
   alert('user value: ' + user);

   OutsideScope();

}());  //IIFE, run this Immediately


//If using raw JS, be sure to hand roll scope using an IIFE and creating closure (also module/revealing module pattern)
function OutsideScope() {

   alert("Outside Scope user value: " + user);
}