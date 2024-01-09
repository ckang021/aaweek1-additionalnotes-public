/*
      What is an object?
      • An object groups multiple values together.
      • An object uses multiple values together
      • Objects are within {...}
      • Just another type of value. (Can save in a variable and console.log)
      • Inside an object, we can save any type of value
      EX:
      const product = {
        name (called a property): "socks",
        price: 1090,
      };

      - Properties are used to access specific values in the object.

      Syntax Rules for an Object:
      • Create an object with {...}
      • Inside can be multiple values, code on the left is called a property. Properties access the value inside the object and are separated by a : ALL this combined is called a Property-Value Pair.
        • You can have multiple property-value pairs and can be separated with a comma (,)
      • To access a value inside the object, type the name of the object and then a dot, then the property we want to access. This is called DOT-NOTATION (i.e: product.name)
      • If you try to access a property that doesn't exist, then it will come back as undefined
      • To change a value in an object, use dot notation and equal to a new value.

      WHY do we use OBJECTS?
      • It makes our code more organized.
      • Instead of creating a bunch of variables, we can just group all the related values together into a object.

      Bracket Notation:
      • Example console.log(product2["delivery-time"]
        - Use bracket notation in these cases, when using punctuation. If not, comp will think its an operator
        - This example, computer thinks its delivery minus time, not a dash.
      • Let's us use properties that don't work with dot notation
      • This notation method can be used with variables, a calculation, or anything that results in a value.

      Bracket Notation v. Dot Notation:
      • Use Dot Notation by default
      • For properties that don't work, use Bracket Notation

      Nested Objects:
      • Objects within an object
      • Help with organization overall
      • To call on the nested object, you just need to use Dot Notation or Bracket Notation multiple times.

      METHOD:
      • A function inside an object is called a method

      Built-in Objects:
      • Objects provided by Javascript
      • Two others taught in this lesson are:
        - JSON
          - Helps us work with JSON (JSON means Javascript Object Notation)
          - a syntax
          - similar to Javascript object
          - but has less features
          - JSON must use double-quotes for all properties and strings (doesn't support single quotes)
            - also doesn't support functions
          - JSON syntax is universal in all languages, whereas JS objects only makes sense in JS language
          - USED:
            • When we send data between computers utilizing different programming languages
            • When we store data
          - Built-in JSON Object
            • Convert:
              - JS Object -> JSON
        -localStorage (example is in the Rock, Paper, Scissors Game)
          - Save values more permanently (when we refresh a page etc. the saved variables are deleted)
          - localStorage only supports strings

      null vs. undefined:
      • null = intentionally want something to be empty (computer will return it as null)
      • undefined = will have the computer result in whatever string was put in (see example)
        EXAMPLE:
          function func(parameter = 'default') {
           console.log(parameter);
          }

          func(); => 'default'
          func(undefined) => 'default'
          func(null); => null

      Auto-Boxing:
      • JS has a feature that uses autoboxes to wrap a string into an special object then will attach any properties or methods.
      • This feature also works other values like numbers and booleans
      • Feature doesn't work with null or undefined (computer will just give an error)

      Objects are references:
      const object1 = {
        message: 'hello'
      }; JS doesn't technically store the object into the variable, it is just a reference to where this object is stored in the computer's memory

      const object2 = object1; -> Just copies the reference not the variable (Copy by Reference) so it isn't reassigning the variable but now variable object2 has the same reference as object1
      • Needd to be careful when using objects because even if we use a const variable, items in the object can still be changed since they are references and not a part of the variable
      • We can't compare objects directly

      Shortcuts for objects:
      • Destructuring (Check example below)
        - Can be used for multiple properties
      • Shorthand Property (Check example below)
      • Shorthand Method (Check example below)
      */


      const product = {
        name: "socks",
        price: 1090,
      };

      console.log(product);
      console.log(product.name); //Accessing a property inside a object
      console.log(product.price);

      product.name = "cotton socks"; //Will change the value of the name property to what you change.
      console.log(product);

      product.newProperty = true; //Adding another property into the object
      console.log(product);

      delete product.newProperty; //Deleting a property in the obejct
      console.log(product);

      //

      const product2 = {
        name: "shirt",
        ["delivery-time"]: "1 day", //brackets are actually optional in this case. Can take them out and will still work.
        rating: {
          stars: 4.5,
          count: 87,
        }, //This is called a nested object, an object inside an object
        fun: function function1() {
          console.log("function inside object");
        }, //Function inside an object is called a METHOD
      };

      console.log(product2);
      console.log(product2.name);
      console.log(product2["name"]); // This is called bracket notation
      console.log(product2["delivery-time"]);

      console.log(product2.rating.count); //calling object within an object (Nested Object)
      product2.fun(); //calling the function inside the object, by calling the property fun will trigger/run the function

      console.log(typeof console); //will come out as a object
      console.log(typeof console.log); //will come out as a function (log is a function saved inside a object which is a method)

      console.log(JSON.stringify(product2)); // JS Object -> JSON

      const jsonString = JSON.stringify(product2)
      console.log (JSON.parse(jsonString)); // JSON -> JS Object


      console.log('hello'.length);
      console.log('hello'.toUpperCase()) //string is auto-boxed with properties and methods

      const object1 = {
        message: 'hello'
      };
      const object2 = object1;

      object1.message = 'Good Job!'
      console.log(object1); //Even though you can't change the content of a const variable, because objects are references it just references to the computer's memory and not the variable.
      console.log(object2);

      const object3 = {
        message: 'Good Job!'
      };
      console.log(object3 === object1); // This will come out as false. Cannot compare objects, since they are references. This code compares the references in where it is stored in computer's memory rather than comparing the values inside it.
      console.log(object2 === object1); // This will come out as true, because they have the same reference

      const object4 = {
        message: 'Good Job!',
        price: 799
      };
      //const message = object4.message;
      const { message, price } = object4; //Shortcut is called destructuring for object above. Can assign multiple variables to properties in object.
      console.log(message);
      console.log(price);

      const object5 = {
       // message: message (this variable was saved as the same object property in object4 so we can use Shorthand Property)
        message, //Shorthand Property
       // method: function function1 () {
       //   console.log('method')
       // }
        method() {
          console.log('method')
        } //Shorthand Method -> This will create function without having to type out the function syntax etc. in the method property within object5
      };
      console.log(object5);
      object5.method();
