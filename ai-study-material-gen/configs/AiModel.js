const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const courseOutline = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate study material for Python for an exam. The level of difficulty should be EASY with  summary of the course, a list of chapters along with summary for each chapter, Topic list in each chapter all in JSON format.\n\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_title\": \"Introduction to Python Programming (Easy Level)\",\n  \"course_summary\": \"This course provides a beginner-friendly introduction to Python programming. It covers fundamental concepts like data types, variables, control flow, and basic data structures. The focus is on building a solid foundation for writing simple and understandable Python code. No prior programming experience is required.\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Getting Started with Python\",\n      \"chapter_summary\": \"This chapter introduces the Python programming language, its uses, and how to set up your environment. You'll learn to execute basic Python commands and write your first 'Hello, World!' program.\",\n      \"topics\": [\n        \"What is Python and why use it?\",\n        \"Setting up your Python environment (installing Python and an IDE)\",\n        \"Running your first Python program\",\n        \"Understanding the basic structure of a Python program\",\n          \"Using Comments in Python\"\n      ]\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Variables and Data Types\",\n      \"chapter_summary\": \"This chapter covers the core building blocks of Python: variables and data types. You'll learn how to store values using variables and differentiate between fundamental types like integers, floats, strings, and booleans.\",\n      \"topics\": [\n        \"What are variables and how to declare them?\",\n        \"Integer (int) data type\",\n          \"Floating-point (float) data type\",\n        \"String (str) data type\",\n        \"Boolean (bool) data type\",\n        \"Type conversion (casting) between data types\"\n      ]\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Basic Operators and Expressions\",\n      \"chapter_summary\": \"This chapter explores different operators used in Python to perform calculations, comparisons, and logical operations. You'll learn how to combine variables and operators to form expressions and produce results.\",\n      \"topics\": [\n        \"Arithmetic operators (+, -, *, /, %, **)\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (and, or, not)\",\n        \"Operator precedence\",\n         \"Using parentheses to control order of operations\"\n      ]\n    },\n     {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Input and Output\",\n      \"chapter_summary\": \"This chapter focuses on how to interact with users by taking input and displaying output. You'll learn to get input from the keyboard and format strings for clear presentation on the screen.\",\n      \"topics\": [\n        \"The `input()` function for taking user input\",\n        \"The `print()` function for displaying output\",\n         \"String formatting with f-strings\",\n        \"Basic use of escape sequences (e.g., \\\\n for newline)\"\n      ]\n    },\n    {\n      \"chapter_number\": 5,\n       \"chapter_title\": \"Control Flow - Conditional Statements\",\n      \"chapter_summary\": \"This chapter introduces conditional statements which allow your programs to execute specific code blocks based on certain conditions. You'll learn about `if`, `elif`, and `else` statements.\",\n      \"topics\": [\n        \"The `if` statement\",\n        \"The `if-else` statement\",\n        \"The `if-elif-else` statement\",\n        \"Nested `if` statements\",\n        \"Using logical operators in conditional statements\"\n      ]\n    },\n     {\n      \"chapter_number\": 6,\n       \"chapter_title\": \"Control Flow - Loops\",\n       \"chapter_summary\":\"This chapter explains loop structures that helps in executing code repeatedly . Here, you will learn about  `for` and `while` loops and their different use-cases.\",\n      \"topics\":[\n        \"The `for` loop\",\n        \"Iterating through strings and range\",\n        \"The `while` loop\",\n          \"break and continue statements\",\n          \"Use of while loop in different use cases\"\n      ]\n    },\n    {\n      \"chapter_number\": 7,\n      \"chapter_title\": \"Introduction to Strings\",\n      \"chapter_summary\":\"This chapter will explore how to work with the string data type in Python. You will explore various operations like string slicing, concatenation, and using various string methods.\",\n      \"topics\":[\n      \"String slicing\",\n      \"String concatenation\",\n      \"Immutability of Strings\",\n      \"String methods (e.g., upper(), lower(), strip(), find(), replace())\",\n      \"Length of the string\"\n      ]\n    },\n      {\n      \"chapter_number\": 8,\n      \"chapter_title\": \"Introduction to Lists\",\n      \"chapter_summary\": \"This chapter introduces the concept of Lists. Lists are the most common data structure used to store collections of items. You'll learn how to create lists, access elements, and perform common operations on lists.\",\n      \"topics\": [\n        \"What are lists and how to create them?\",\n        \"Accessing list elements by index\",\n        \"Adding and removing elements from a list\",\n        \"List slicing\",\n        \"List length\",\n        \"Iterating through Lists\"\n      ]\n    }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
  