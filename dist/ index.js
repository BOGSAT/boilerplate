// #!/usr/bin/env node
// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const commander_1 = require("commander");
// const program = new commander_1.Command();
// program
//     .version("1.0.0")
//     .option("-n, --name <value>", "Function name")
//     .option("-l, --language <value>", "Programming language")
//     .option("-i, --inputs <value>", "Function inputs")
//     .parse(process.argv);
// const options = program.opts();
// const multiply = (a, b) => {
//     return a * b;
// };
// function generateBoilerplate(functionName, language, inputs) {
//     if ((language = "python")) {
//         return `def ${functionName}(${inputs.join(", ")}):
//          result = a * b
//          return result`;
//     }
//     else if ((language = "javascript")) {
//         return `function ${functionName}(${inputs.join(", ")})
//         const [num1, num2] = options.inputs.split(",").map(Number);
//         const result = multiply(num1, num2);
//         console.log(result);
//         console.log("test");`;
//     }
// }
// console.log(generateBoilerplate);
// if (options.inputs) {
//     const [num1, num2] = options.inputs.split(",").map(Number);
//     const result = multiply(num1, num2);
//     console.log(result);
// }
//# sourceMappingURL=%20index.js.map