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
  // About the template
  ["In the template, which element is at the very top of the page?", ["<footer>", "<nav>", "<header>", "<main>"], 2],
  ["In the template, which element comes directly below the header?", ["<nav>", "<footer>", "<article>", "<section>"], 0],
  ["In the template, which element is at the very bottom of the page?", ["<header>", "<main>", "<nav>", "<footer>"], 3],
  ["In the template, which big element holds the section and the article inside it?", ["<nav>", "<main>", "<header>", "<footer>"], 1],
  ["In the template, which element is placed directly inside <main>?", ["<footer>", "<nav>", "<header>", "<section>"], 3],
  ["In the template, which element is placed inside <section>?", ["<article>", "<header>", "<footer>", "<nav>"], 0],
  ["What is the correct order of the template elements from top to bottom?", ["<footer>, <main>, <nav>, <header>", "<header>, <nav>, <main>, <footer>", "<nav>, <header>, <footer>, <main>", "<main>, <header>, <nav>, <footer>"], 1],
  ["In the template, which element is NOT inside <main>?", ["<section>", "<article>", "<footer>", "All of them are inside <main>"], 2],
  ["Where would you put the website's name and logo in this template?", ["<footer>", "<header>", "<article>", "<section>"], 1],
  ["Where would you put the links Home, About and Contact in this template?", ["<nav>", "<footer>", "<article>", "<main>"], 0],
  ["In the template, a single news story is shown inside the section. Which element is best for it?", ["<nav>", "<header>", "<footer>", "<article>"], 3],
  ["Which code matches the structure of the template?", ["<main><header></header><footer></footer></main>", "<header></header><nav></nav><main><section><article></article></section></main><footer></footer>", "<footer></footer><nav></nav><main></main><header></header>", "<article><section><main></main></section></article>"], 1],

  // Only properties from the example set
  ["Which code makes the paragraph text red?", ["<p style=\"background-color: red;\">Hello</p>", "<p style=\"font-size: red;\">Hello</p>", "<p style=\"color: red;\">Hello</p>", "<p style=\"red: color;\">Hello</p>"], 2],
  ["What does this code do?\n<p style=\"background-color: orange;\">Hi</p>", ["Makes the text orange", "Makes the paragraph background orange", "Makes the text bigger", "Creates an orange heading"], 1],
  ["Fill in the blank to make the heading text bigger:\n<h1 style=\"______: 40px;\">Welcome</h1>", ["color", "background-color", "font-size", "href"], 2],
  ["What will this code display?\n<h1 style=\"color: purple;\">Nav Bar</h1>", ["A heading with purple text", "A heading with a purple background", "A purple paragraph", "A purple image"], 0],
  ["What does src do in this code?\n<img src=\"school.png\">", ["It changes the image color", "It tells the browser which image file to show", "It makes the image bigger", "It creates a link"], 1],
  ["Which symbol separates a property from its value in a style attribute?", ["Semicolon (;)", "Equals sign (=)", "Colon (:)", "Comma (,)"], 2],
  ["Which code makes a link that goes to Google?", ["<a src=\"https://www.google.com\">Google</a>", "<a href=\"https://www.google.com\">Google</a>", "<p href=\"https://www.google.com\">Google</p>", "<img href=\"https://www.google.com\">Google</img>"], 1],
  ["What will this code display?\n<p style=\"color: white; background-color: blue;\">ICT</p>", ["Blue text on a white background", "White text on a blue background", "Blue text on a blue background", "White text on a white background"], 1]
]
  },

  9: {
    title: "Number Systems and ASCII",
    graded: 15,
    questions: [
  // Images & Pixels (slides 4, 5, 7, 8, 9, 12, 13)
  ["What is a pixel?", ["A type of file", "The smallest square of colour in an image", "A kind of screen", "A binary number"], 1],
  ["An image is made of a grid of rows and columns. What is each square in the grid called?", ["A byte", "A bit", "A pixel", "A wave"], 2],
  ["In the 8 × 8 heart image, what does a 1 mean?", ["A background pixel", "A coloured pixel", "An empty row", "An error"], 1],
  ["This 8 × 8 heart image is stored as 0s and 1s:\n01100110\n11111111\n11111111\n11111111\n01111110\n00111100\n00011000\n00000000\nWhat does each 0 mean in this image?", ["A coloured pixel", "A background pixel", "A new row", "An error"], 1],
  ["The same picture is saved as 4 × 4, 8 × 8 and 16 × 16. Which one shows the most detail?", ["4 × 4", "8 × 8", "16 × 16", "They are all the same"], 2],
  ["How many pixels are in a 20 × 10 image?", ["100", "200", "30", "2,000"], 1],
  ["A 800 × 600 image has how many pixels?", ["1,400", "48,000", "480,000", "4,800,000"], 2],
  ["Why does a small image look blocky when it is enlarged?", ["The pixels get bigger and no new detail appears", "The computer adds extra detail", "The colours change", "The file becomes sharper"], 0],
  ["To get a sharper picture, what do you need?", ["To zoom in", "A bigger screen", "More pixels when the picture is captured", "Fewer colours"], 2],
  ["What does RGB stand for?", ["Red, Green, Blue", "Red, Grey, Black", "Right, Green, Blue", "Round, Green, Bright"], 0],
  ["How many numbers does a colour pixel store in RGB?", ["1", "2", "3", "4"], 2],
  ["In RGB, each number goes from what range?", ["0 to 9", "0 to 255", "0 to 100", "0 to 1000"], 1],
  ["Which RGB values make white?", ["0, 0, 0", "0, 0, 255", "255, 255, 0", "255, 255, 255"], 3],
  ["Which change gives an image the most detail?", ["A bigger screen", "Fewer colours", "Zooming in", "More pixels"], 3],

  // Audio / Sampling (slides 12, 13)
  ["Is a vinyl record analog or digital?", ["Digital", "Analog", "Binary", "Neither"], 1],
  ["Is an MP3 file analog or digital?", ["Analog", "Both", "Neither", "Digital"], 3],
  ["Is an analogue clock with hands analog or digital?", ["Analog", "Digital", "Binary", "A list of numbers"], 0],
  ["A 3-bit sound sample has the value 5. What is it in binary?", ["010", "110", "101", "111"], 2],
  ["A 3-bit sound was stored as: 2, 5, 7, 5, 2, 0. Which sample has the highest value?", ["0", "7", "5", "2"], 1],
  ["What does an ADC (analog-to-digital converter) do?", ["Plays sound", "Makes the wave louder", "Converts an analog signal to numbers", "Compresses a file"], 2]
]
  }
};
