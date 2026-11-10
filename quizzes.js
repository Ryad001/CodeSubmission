// Each question: [text, [optionA, optionB, optionC, optionD], indexOfCorrectOption (0=A ... 3=D)]
// "graded" = how many questions count toward the mark; the rest are bonus.
const QUIZZES = {
  7: {
    title: "C++ Midterm Exam",
    graded: 20,
    questions: [
  // Fill in the blank: input / output
  ["Fill in the blank to display text on the screen:\n______ << \"Enter the first number: \";", ["cin", "cout", "endl", "double"], 1],
  ["Fill in the blank to get input from the user:\n______ >> number1;", ["cout", "endl", "cin", "int"], 2],
  ["Fill in the blank with the correct operator to receive input:\ncin ______ number2;", ["<<", ">>", "=", "+"], 1],
  ["Fill in the blank to link the text with the calculation:\ncout << \"Sum: \" ______ number1 + number2;", [">>", "=", "<<", "*"], 2],
  ["Fill in the blank to store the user's input in the quantity variable:\ncin >> ______;", ["productName", "price", "onSale", "quantity"], 3],
  ["Fill in the blank to display the value stored in price:\ncout << \"Price: $\" << ______ << endl;", ["\"price\"", "price", "cin", "double"], 1],
  ["Fill in the blank to calculate the total cost:\ncout << price ______ quantity;", ["+", "-", "*", "/"], 2],
  ["Fill in the blank to move to the next line after printing:\ncout << \"Hello\" << ______;", ["endl", "cin", "int", "bool"], 0],

  // Types of variables
  ["Which data type is best for storing a product name such as \"Pen\"?", ["int", "double", "string", "bool"], 2],
  ["Which data type is best for storing a quantity such as 3?", ["string", "int", "bool", "double"], 1],
  ["Which data type is best for storing a price such as 4.75?", ["int", "bool", "string", "double"], 3],
  ["Which data type is best for storing true or false (like onSale)?", ["bool", "int", "double", "string"], 0],
  ["Fill in the blank to declare a variable that can store a decimal number:\n______ number1;", ["int", "string", "double", "bool"], 2],
  ["In the calculator program, why were number1 and number2 declared as double?", ["To store text", "To allow decimal numbers", "To store true or false", "To display output"], 1],

  // Output of small code
  ["What will the following code display?\nint a = 10;\nint b = 4;\ncout << a - b;", ["14", "6", "40", "2"], 1],
  ["What will the following code display?\ncout << \"Total: \" << 5 * 3;", ["Total: 15", "Total: 8", "Total: 5 * 3", "15"], 0],
  ["What will the following code display?\ndouble x = 7;\ndouble y = 2;\ncout << x / y;", ["3", "3.5", "14", "9"], 1],
  ["What will the following code display?\nstring name = \"Sara\";\ncout << \"Hi \" << name;", ["Hi name", "Hi Sara", "Hi \"Sara\"", "Sara"], 1],
  ["What will the following code display?\nint q = 2;\nq = 6;\ncout << q;", ["2", "8", "6", "4"], 2],
  ["What will the following code display?\nbool onSale = 1;\ncout << onSale;", ["true", "1", "0", "onSale"], 1]
]
  },

  8: {
    title: "HTML and CSS",
    graded: 20,
    questions: [
      ["Which HTML tag creates the largest heading by default?", ["<h6>", "<head>", "<h1>", "<p>"], 2],
      ["Which HTML tag displays an image on a webpage?", ["<img>", "<image>", "<a>", "<p>"], 0],
      ["What is the purpose of the <a> tag?", ["To create a paragraph", "To create a hyperlink", "To display an image", "To change text color"], 1],
      ["Which tag is used to create a paragraph?", ["<h1>", "<text>", "<p>", "<paragraph>"], 2],
      ["What will the following HTML code display?\n<h2>My School</h2>\n<p>Welcome to our website.</p>", ["A heading followed by a paragraph", "Two headings", "An image and a paragraph", "A hyperlink followed by a heading"], 0],
      ["In the following code, what is the purpose of href?\n<a href=\"https://www.google.com\">Google</a>", ["It changes the text color.", "It specifies the hyperlink destination.", "It displays an image.", "It changes the heading size."], 1],
      ["Which CSS property changes the color of text?", ["background-color", "font-size", "color", "text-style"], 2],
      ["What does the following code do?\n<p style=\"color: red;\">Hello!</p>", ["Displays the text with a red background", "Displays the text in red", "Makes the text larger", "Creates a red heading"], 1],
      ["Which inline style changes an element's background color to yellow?", ["color: yellow;", "font-size: yellow;", "background-color: yellow;", "text-color: yellow;"], 2],
      ["What is the purpose of the style attribute in HTML?", ["To apply CSS directly to an HTML element", "To create hyperlinks", "To insert images", "To organize files on a computer"], 0],
      ["What will the following code display?\n<h1 style=\"color: blue; font-size: 30px;\">ICT</h1>", ["A blue heading with a font size of 30 pixels", "A heading with a blue background", "A paragraph with blue text", "A hyperlink labeled ICT"], 0],
      ["Which element usually contains introductory content at the top of a webpage?", ["<footer>", "<header>", "<main>", "<article>"], 1],
      ["Which element is most appropriate for a group of navigation links?", ["<nav>", "<section>", "<footer>", "<main>"], 0],
      ["Which element contains the main content of a webpage?", ["<header>", "<nav>", "<main>", "<footer>"], 2],
      ["A webpage groups related information about school activities. Which element is most appropriate?", ["<section>", "<img>", "<a>", "<nav>"], 0],
      ["Which semantic element is suitable for an independent blog post that can stand on its own?", ["<nav>", "<article>", "<footer>", "<header>"], 1],
      ["Where would you normally place copyright information at the bottom of a webpage?", ["<main>", "<section>", "<header>", "<footer>"], 3],
      ["Consider the following code. What color will the paragraph text be?\n<p style=\"color: green; background-color: yellow;\">\n  Welcome to ICT!\n</p>", ["Yellow text on a green background", "Green text on a yellow background", "Green text on a green background", "Black text on a yellow background"], 1],
      ["A school webpage contains the school name, navigation links, main information, and copyright details. Which option correctly matches the elements to their purposes?", ["<header> for the school name, <nav> for links, <main> for main information, <footer> for copyright", "<footer> for the school name, <main> for links, <nav> for copyright", "<article> for all content, <img> for navigation links", "<section> for links, <footer> for the main information, <nav> for copyright"], 0],
      ["What is the main purpose of semantic HTML elements?", ["To make every text element a different color", "To organize webpage content according to its meaning and purpose", "To replace all CSS styles", "To automatically insert images and hyperlinks"], 1]
    ]
  },

  9: {
    title: "Number Systems and ASCII",
    graded: 15,
    questions: [
      ["What is the binary representation of decimal 13?", ["1011", "1101", "1110", "1001"], 1],
      ["What is the decimal value of binary 10110?", ["20", "21", "22", "24"], 2],
      ["Convert binary 11001100 to hexadecimal.", ["CC", "CD", "BC", "C3"], 0],
      ["What is the binary representation of hexadecimal 2A?", ["00101010", "00101100", "00100101", "00111010"], 0],
      ["Convert hexadecimal 15 to decimal by converting it to binary first.", ["19", "20", "21", "25"], 2],
      ["Which binary place value is immediately to the left of 16?", ["8", "24", "32", "64"], 2],
      ["Which of the following is a valid hexadecimal digit?", ["G", "H", "F", "X"], 2],
      ["Why do we group binary digits into groups of four when converting binary to hexadecimal?", ["Each group of four bits represents one hexadecimal digit.", "Each group of four bits represents one decimal digit.", "Four bits always equal four bytes.", "It makes the binary number smaller."], 0],
      ["What is ASCII used for?", ["Storing only images", "Representing characters using numerical values", "Increasing internet speed", "Controlling computer hardware temperature"], 1],
      ["Which hexadecimal ASCII value represents the uppercase letter A?", ["41", "61", "42", "31"], 0],
      ["A student decodes the hexadecimal ASCII values 48 49. Which word do they get?", ["HI", "HE", "IN", "IT"], 0],
      ["Why do uppercase A and lowercase a have different ASCII values?", ["They are stored in different file formats.", "ASCII assigns different numerical values to uppercase and lowercase letters.", "Lowercase letters use decimal, while uppercase letters use binary.", "Uppercase letters cannot be represented in binary."], 1],
      ["How many different values can be represented using 4 bits?", ["4", "8", "16", "32"], 2],
      ["What is the minimum number of bits required to represent at least 50 different values?", ["4 bits", "5 bits", "6 bits", "7 bits"], 2],
      ["How many bits are in 3 bytes?", ["8", "16", "24", "32"], 2],
      { frq: true, text: "Explain the difference between binary and decimal number systems. State which digits each system uses and why computers use binary." },
      { frq: true, text: "Hexadecimal: a) Which symbols are used in the hexadecimal number system? b) Explain why hexadecimal is useful when working with long binary numbers. c) How many binary bits does one hexadecimal digit represent?" },
      { frq: true, text: "Using an ASCII table, encode the word CAT into hexadecimal ASCII values. Write the hexadecimal value for each letter in the correct order." },
      { frq: true, text: "Using an ASCII table, decode the following hexadecimal ASCII values into a word: 42 4F 59. Write the decoded word." },
      { frq: true, text: "Bits and Bytes: a) Explain the difference between a bit and a byte. b) How many bits are in one byte? c) A file contains 5 bytes. Explain how you would calculate the total number of bits." }
    ]
  }
};
