const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

  export const courseOutlineAIModel= model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate study material for Python for an exam. The level of difficulty should be EASY with  summary of the course, a list of chapters along with  summary for each chapter, Topic list in each chapter all in JSON format.\n"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"course_title\": \"Introduction to Python Programming (Easy Level)\",\n  \"course_summary\": \"This course provides a gentle introduction to the Python programming language. It focuses on fundamental concepts, syntax, and basic programming techniques suitable for beginners. You will learn to write simple Python programs, work with data, and understand the core principles of programming.\",\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Getting Started with Python\",\n      \"chapter_summary\": \"This chapter introduces the basics of Python, including how to install and set it up. You'll learn about different ways to run Python code and write your first 'Hello, World!' program.\",\n      \"topics\": [\n        \"What is Python?\",\n        \"Why use Python?\",\n        \"Installing Python\",\n        \"Running Python code (Interactive shell and scripts)\",\n        \"Your first program: 'Hello, World!'\",\n        \"Comments in Python\"\n      ]\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Variables and Data Types\",\n      \"chapter_summary\": \"This chapter covers how to store and manipulate data using variables. You'll learn about different types of data, such as numbers, text (strings), and true/false values (booleans).\",\n      \"topics\": [\n        \"What are variables?\",\n        \"Variable naming rules\",\n        \"Basic data types: Integers (int), Floating-point numbers (float), Strings (str), Booleans (bool)\",\n        \"Assigning values to variables\",\n        \"Type checking (using type())\",\n        \"Simple arithmetic operations\"\n      ]\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Input and Output\",\n       \"chapter_summary\": \"Learn how to get input from the user and display output to the console. This chapter covers basic input/output functions.\",\n      \"topics\": [\n        \"The input() function (reading user input)\",\n        \"The print() function (displaying output)\",\n        \"Using f-strings for formatted output\",\n        \"Concatenating strings and variables\"\n\n      ]\n    },\n      {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Working with Strings\",\n      \"chapter_summary\": \"This chapter focuses on manipulating text data using string methods. Learn how to perform common string operations.\",\n       \"topics\": [\n        \"String indexing (accessing characters by position)\",\n         \"String slicing (extracting substrings)\",\n        \"Common string methods: len(), lower(), upper(), find(), replace()\",\n        \"String immutability\"\n      ]\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"Conditional Statements\",\n       \"chapter_summary\": \"Learn how to make decisions in your code using if, elif, and else statements. This allows you to execute different blocks of code based on conditions.\",\n      \"topics\": [\n        \"The 'if' statement\",\n        \"The 'if-else' statement\",\n        \"The 'if-elif-else' statement\",\n        \"Comparison operators (==, !=, >, <, >=, <=)\",\n        \"Logical operators (and, or, not)\",\n        \"Simple decision making programs\"\n      ]\n    },\n     {\n      \"chapter_number\": 6,\n      \"chapter_title\": \"Introduction to Loops\",\n       \"chapter_summary\": \"Learn how to repeat actions using 'for' and 'while' loops. This chapter covers basic looping structures and how to use them.\",\n      \"topics\": [\n       \"The 'for' loop (iterating over sequences)\",\n       \"The 'while' loop (repeating code based on a condition)\",\n       \"Loop control: 'break' and 'continue' statements\",\n       \"Basic loop examples\"\n      ]\n    }\n  ]\n}\n```\n"},
        ],
      },
    ],
  });

  // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  // console.log(result.response.text());

