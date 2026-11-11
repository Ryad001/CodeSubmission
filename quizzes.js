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
