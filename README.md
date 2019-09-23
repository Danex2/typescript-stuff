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
