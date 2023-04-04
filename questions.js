async function postData(array, url) {
  for (const element of array) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQyODU5MjMwN2JmZjA5N2MzZWI3NDE1In0sImlhdCI6MTY4MDM5MDg1MCwiZXhwIjoxNjgwMzk0NDUwfQ.MGapdV5l1ZydfLwcdMrsamsCivnw0P6ipGoC7JqPV2s",
        },
        body: JSON.stringify(element),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log(`Successfully posted element: ${JSON.stringify(element)}`);
    } catch (error) {
      console.error(
        `Error posting element: ${JSON.stringify(element)} - ${error}`
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 10000)); // Wait for 10 seconds
  }
}


         
const array = [
    {
        "title": "What is the difference between synchronous and asynchronous code execution in JavaScript?",
        "body": "Synchronous code executes line-by-line and waits for each line to complete before moving on to the next line. Asynchronous code allows other code to execute while waiting for a slow process to complete, such as waiting for a server response. Asynchronous code is often used to improve the performance of web applications."
        },
        
        {
        "title": "What is a callback function in JavaScript?",
        "body": "A callback function is a function that is passed as an argument to another function and is called by that function at a later time. Callback functions are often used to handle asynchronous code, such as waiting for a server response or executing a long-running task."
        },
        
        {
        "title": "What is the difference between event bubbling and event capturing in JavaScript?",
        "body": "Event bubbling is a process where an event on a child element is handled by the parent element first, before being passed down to the child element. Event capturing is the opposite process, where an event on a child element is handled by the child element first, before being passed up to the parent element."
        },
        
        {
        "title": "What is a closure in JavaScript?",
        "body": "A closure is a function that has access to variables in its outer lexical scope, even after the outer function has returned. Closures are often used to create private variables and encapsulate functionality."
        },
        
        {
        "title": "What is a higher-order function in JavaScript?",
        "body": "A higher-order function is a function that takes another function as an argument, or returns a function as its result. Higher-order functions are often used to implement reusable code and abstract away common functionality."
        },
        
        {
        "title": "What is the difference between var, let, and const in JavaScript?",
        "body": "Var is function-scoped, while let and const are block-scoped. Var can be redeclared and reassigned, while let can be reassigned but not redeclared, and const cannot be reassigned or redeclared. Const variables must be initialized at the time of declaration."
        },
        
        {
        "title": "What is a generator function in JavaScript?",
        "body": "A generator function is a special type of function that can pause and resume its execution, allowing it to return multiple values over time. It is defined using the 'function*' syntax, and yields values using the 'yield' keyword."
        },
        
        {
        "title": "What is the difference between the spread syntax and rest parameters in JavaScript?",
        "body": "The spread syntax is used to spread the elements of an array or object into another array or object, while rest parameters are used to collect multiple arguments into a single array. The spread syntax is used in function calls, array literals, and object literals, while rest parameters are used in function declarations."
        },
        
        {
        "title": "What is the difference between the call and apply methods in JavaScript?",
        "body": "The call method is used to invoke a function with a specified 'this' value and a set of arguments. The apply method is similar, but takes its arguments as an array. Both methods can be used to set the 'this' value for a function."
        },
        
        {
        "title": "What is a proxy in JavaScript?",
        "body": "A proxy is an object that intercepts and controls access to another object. It can be used to add additional behavior to an object, such as logging or caching, or to prevent certain types of access, such as preventing properties from being deleted or modified."
        },
        {
            "title": "What is memoization in JavaScript?",
            "body": "Memoization is a technique used to speed up the execution of functions by caching the results of expensive function calls and returning the cached result when the same inputs occur again. This can significantly reduce the amount of time it takes for a function to run."
            },
            
            {
            "title": "What is the difference between null and undefined in JavaScript?",
            "body": "Null is a value that represents the intentional absence of any object value, while undefined is a value that represents an uninitialized or nonexistent value."
            },
            
            {
            "title": "What is the difference between an array and an object in JavaScript?",
            "body": "An array is a special type of object in JavaScript that is used to store multiple values in a single variable. An object is a collection of key-value pairs, where each key is a string (or symbol) and each value can be any type of data, including other objects and arrays."
            },
            
            {
            "title": "What is the difference between a for loop and a for...in loop in JavaScript?",
            "body": "A for loop is used to iterate over the elements of an array or the characters of a string. A for...in loop is used to iterate over the properties of an object. However, for...in loops should be used with caution, as they can also iterate over inherited properties and can be slower than other looping methods."
            },
            
            {
            "title": "What is hoisting in JavaScript?",
            "body": "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, regardless of where they were actually declared. This means that variables and functions can be used before they are declared."
            },
            
            {
            "title": "What is the difference between a function declaration and a function expression in JavaScript?",
            "body": "A function declaration is a statement that declares a function in the current scope. A function expression is a function that is assigned to a variable or passed as an argument to another function. Function declarations are hoisted, while function expressions are not."
            },
            
            {
            "title": "What is the difference between an arrow function and a regular function in JavaScript?",
            "body": "An arrow function is a shorthand way to declare a function using the '=>' syntax. Arrow functions do not have their own 'this' value, and cannot be used as constructors. Regular functions have their own 'this' value and can be used as constructors."
            },
            
            {
            "title": "What is a pure function in JavaScript?",
            "body": "A pure function is a function that does not have any side effects, meaning that it does not modify any external state or data outside of its own scope. Pure functions are often used to simplify code and make it easier to reason about."
            },
            
            {
            "title": "What is the difference between a let and a const variable in JavaScript?",
            "body": "The let keyword is used to declare variables that can be reassigned, while const variables cannot be reassigned. Both let and const variables are block-scoped."
            },
            
            {
            "title": "What is a promise in JavaScript?",
            "body": "A promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future. Promises are often used to handle asynchronous operations in JavaScript, such as making a network request."
            }
];
const serverUrl = 'http://localhost:3000/questions';

postData(array, serverUrl);
