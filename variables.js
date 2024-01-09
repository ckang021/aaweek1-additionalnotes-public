/*
      Variable name restrictions:
      1. Can't use special words (i.e. let), but can use let1 or let2
      2. Can't start with a number, but can be used in middle or end (na2me or name2)
      3. Can't use special characters except: $_
*/
      let variable1 = 3;
      console.log(variable1);

      const calculation = 2 + 2;
      console.log(calculation);
      console.log(calculation + 2);

      const result = calculation + 2;
      console.log(result);

      const message = "hello";
      console.log(message);
      console.log(";");

      //This is to reset the variable with declaring a new variable, cannot let = variable1 again.
      variable1 = 5;
      console.log(variable1);

      variable1 = variable1 + 1;
      console.log(variable1);

      //Other variable methods:
      const variable2 = 3; //const (constant variable) = can't change its value later
      variable2 = 5; // This variable will not change as variable 2 is assigned to a const
      //BEST PRACTICE to use const by default (only use let when we need to change the variable)

      var variable3 = 3; //Original way of declaring a variable. Not used in NEWER JS code, can be used in older versions of JS.

      console.log(typeof variable2); //Just tells the computer what type of value the variable is (i.e. is it a number or string)

      console.log(typeof message); //Will tell computer that variable message is a string.
