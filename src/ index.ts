#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";

const program = new Command();

// Type definitions for clear typing
interface BoilerplateOptions {
  name: string;
  language: string;
  inputs: string;
}

/**
 * Generate boilerplate code based on language and function specifications
 */
function generateBoilerplate(
  functionName: string,
  language: string,
  inputs: string[]
): string {
  const inputParams = inputs.join(", ");

  const boilerplates: Record<string, string> = {
    python: `def ${functionName}(${inputParams}):
    # Your code here
    return`,
    javascript: `function ${functionName}(${inputParams}) {
    // Your code here
    return;
}`,
  };

  if (!boilerplates[language.toLowerCase()]) {
    throw new Error(`Unsupported language: ${language}`);
  }

  return boilerplates[language.toLowerCase()];
}

program
  .name("code-cli")
  .description("Generate boilerplate code for coding challenges")
  .version("1.0.0")
  .requiredOption("-n, --name <functionName>", "Function name")
  .requiredOption(
    "-l, --language <language>",
    "Programming language (python/javascript)"
  )
  .requiredOption("-i, --inputs <inputs>", "Comma-separated function inputs")
  .action(async (options: BoilerplateOptions) => {
    const { name, language, inputs } = options;

    // Validate language support
    if (!["python", "javascript"].includes(language.toLowerCase())) {
      console.error("Supported languages are: python, javascript");
      process.exit(1);
    }

    const inputList = inputs.split(",").map((input) => input.trim());

    // User confirmation prompt
    const { confirm } = await inquirer.prompt([
      {
        type: "confirm",
        name: "confirm",
        message: `Generate boilerplate code for function "${name}" in ${language}?`,
      },
    ]);

    if (!confirm) {
      console.log("Operation cancelled.");
      return;
    }

    // Generate boilerplate
    const boilerplate = generateBoilerplate(name, language, inputList);

    // Determine file extension
    const fileExtension = language.toLowerCase() === "python" ? ".py" : ".js";
    const filePath = path.join(process.cwd(), `${name}${fileExtension}`);

    // Write boilerplate to file
    fs.writeFileSync(filePath, boilerplate);
    console.log(`Boilerplate saved to: ${filePath}`);
  });

program.parse(process.argv);
