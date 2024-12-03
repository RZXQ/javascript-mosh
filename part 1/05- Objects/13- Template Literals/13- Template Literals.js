/// 1. This example demonstrates the use of template literals in JavaScript.
///    - Template literals are enclosed by backticks (``) and allow embedding expressions.
///    - They support string interpolation, multiline strings, and embedding expressions.

const name = "John"; // A string variable to personalize the message

// 2. Using template literals to create a personalized message
const message = `Hi ${name} ${2 + 3},
                 
Thank you for joining my mailing list.
                 
Regards,
Reacher
`;

console.log(message);
