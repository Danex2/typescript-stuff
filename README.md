## Typescript learning

Some of my progress in learning typescript. May add more information to this readme as I go along.

## Variables

In normal JavaScript we do not need to add types to our variable declarations.

For example: `var age = 24`

JavaScript will assign the type at runtime based on the value on the right hand side on the equal sign.

In TypeScript the type will be inferred based on the value if there is no type.

Ex. `let greeting = "Hello!"`

`greeting` will be inferred as a string because the value is a string.

If we were to do `let greeting: string = 42`, TypeScript would yell with an error saying that it expected the value to be a string but it ended up being a number. This is really helpful because we can catch errors way ahead of time which will cause less bugs in our code.

## Functions

A normal JavaScript function would be written like this:

```javascript
function addNums(num1, num2) {
  return num1 + num2;
}
```

Works fine when you pass in the right data, but what if I were to pass in a `string` instead of a number? It would just concatenate onto the next parameter instead of doing math. To fix that and make sure that the data passed into the function are the correct types we just add the type the same way you would to a variable. The function rewritten with types would look like this:

### Functions with types

```javascript
function addNums(num1: number, num2: number): number {
  return num1 + num2;
}
```

Now at compile time TypeScript would see the type passed in and say it doesn't match the type defined in the function. The return type is optional and without it the type would be inferred based on the return value from the function. The only case where you'd need a return type is if the function isn't returning anything, in that case you would just add `void`.

### Function types

Functions can also be defined by writing out a function type.

```javascript
let addNums: (num1: number, num2: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

A function type and a function declaration essentially do the same thing but function types allow it to be resued elsewhere in other parts of code. They can also be defined inside of interfaces and types.

### Optional parameters

You can mark parameters as optional by adding a `?` right before the colon.

```javascript
function fullName(firstname: string, lastname?: string) {
  return `${firstname} ${lastname}`;
}
```

If no lastname is provided it will set it to undefined, one way of handling that is just checking to see if there is one present and providing an output based on that. Another way is using default parameters.

```javascript
function fullName(firstname: string, lastname = 'Miller') {
  return `${firstname} ${lastname}`;
}
```

Now if no last name is provided it'll just default to `Miller`, even if you pass in `undefined` the default lastname will be used.
