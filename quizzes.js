// Each question: [text, [optionA, optionB, optionC, optionD], indexOfCorrectOption (0=A ... 3=D)]
// "graded" = how many questions count toward the mark; the rest are bonus.
const QUIZZES = {
  7: {
    title: "Hardware & Computer Systems",
    graded: 25,
    questions: [
      ["What is data?", ["Information that can be processed by a computer", "Only physical parts of a computer", "A type of computer screen", "A program used to open files"], 0],
      ["What does a computer do when it receives data?", ["It immediately deletes it", "It processes the data", "It always prints it", "It turns it into hardware"], 1],
      ["Which of the following is part of the basic process of how a computer works?", ["Input", "Painting", "Charging", "Printing"], 0],
      ["Which sequence represents the basic computer process?", ["Output → Input → Processing", "Processing → Output → Input", "Input → Processing → Output", "Storage → Input → Output"], 2],
      ["A user types the numbers 5 and 3 into a calculator. What is this an example of?", ["Output", "Processing", "Input", "Storage"], 2],
      ["A calculator adds 5 + 3. What stage is taking place?", ["Input", "Processing", "Output", "Storage"], 1],
      ["The calculator displays 8 on the screen. What stage is this?", ["Input", "Processing", "Output", "Storage"], 2],
      ["Which of the following is hardware?", ["Google Chrome", "Minecraft", "Keyboard", "C++ program"], 2],
      ["Which of the following is software?", ["Mouse", "Monitor", "CPU", "Web browser"], 3],
      ["What is hardware?", ["Instructions that run on a computer", "Physical parts of a computer that can be touched", "Data stored in RAM", "Programs written in C++"], 1],
      ["What is software?", ["Physical computer components", "Computer cables", "Instructions and programs that cannot be physically touched", "Storage devices"], 2],
      ["Which pair contains only hardware?", ["Keyboard and mouse", "Chrome and Minecraft", "Word processor and C++", "Browser and operating system"], 0],
      ["Which pair contains only software?", ["Keyboard and monitor", "CPU and RAM", "Minecraft and Chrome", "SSD and USB drive"], 2],
      ["What does CPU stand for?", ["Computer Processing Utility", "Central Processing Unit", "Computer Program Unit", "Central Program Utility"], 1],
      ["What is one main job of the CPU?", ["Permanently store photos", "Execute instructions in a program", "Display images on the monitor", "Store files when the computer is turned off"], 1],
      ["How does the presentation describe the CPU?", ["The storage of the computer", "The screen of the computer", "The brain of the computer", "The memory of the computer"], 2],
      ["What does the CPU do while a program is running?", ["Executes instructions and performs calculations and decisions", "Permanently saves every variable", "Deletes all stored files", "Only displays information"], 0],
      ["What does RAM stand for?", ["Random Access Memory", "Rapid Application Machine", "Read Access Module", "Random Application Monitor"], 0],
      ["What is RAM mainly used for?", ["Permanent storage of files", "Temporary working memory while a program runs", "Displaying output", "Connecting the computer to the internet"], 1],
      ["What happens to the data stored in RAM when the computer is turned off?", ["It is permanently saved", "It is transferred to the CPU", "It disappears", "It is copied to the monitor"], 2],
      ["How many bits are in one byte?", ["2", "4", "6", "8"], 3],
      ["Which analogy does the presentation use to explain RAM?", ["A filing cabinet", "A school desk", "A television", "A backpack"], 1],
      ["What is permanent storage used for?", ["Holding temporary data only", "Keeping files and programs saved even when the computer is off", "Performing calculations", "Executing instructions"], 1],
      ["Which of the following is an example of permanent storage?", ["RAM", "CPU", "SSD", "Monitor"], 2],
      ["Which statement correctly compares RAM and storage?", ["RAM is permanent, while storage is temporary", "RAM and storage are exactly the same", "RAM is temporary, while storage keeps data saved", "Storage disappears when the computer shuts down"], 2],
      // Bonus questions
      ["Why do computers use 0s and 1s to represent data?", ["Computers work with two basic electronic states", "0 and 1 are the only numbers humans can understand", "Computers cannot store letters", "0 and 1 take up no storage space"], 0],
      ["What is the main idea behind how a computer runs a program?", ["Computers execute instructions to process data", "Computers only store information", "Computers only display information", "Computers convert hardware into software"], 0]
    ]
  },
 
  8: {
    title: "Internet & Web",
    graded: 25,
    questions: [
      ["What is the Internet?", ["A collection of websites", "A giant network connecting computers and devices around the world", "A program used to open webpages", "A single web server"], 1],
      ["Which statement correctly describes the difference between the Internet and the Web?", ["The Internet is a collection of webpages, while the Web is the physical network", "The Internet is the physical network, while the Web is the websites and pages accessed through it", "The Internet and the Web are exactly the same thing", "The Web is used to connect computers, while the Internet stores webpages"], 1],
      ["What is the main purpose of a web browser?", ["To store all websites permanently", "To create Internet cables", "To open and display webpages", "To replace web servers"], 2],
      ["Which of the following is a web browser?", ["Chrome", "HTML", "HTTP", "URL"], 0],
      ["What does a web server do?", ["It only displays webpages on the user's screen", "It stores websites and sends them when requested", "It creates web browsers", "It connects a keyboard to a computer"], 1],
      ["In the restaurant analogy from the lesson, what does the browser represent?", ["The customer", "The food", "The waiter", "The kitchen"], 2],
      ["In the restaurant analogy, what does the web server represent?", ["The customer", "The waiter", "The food", "The kitchen"], 3],
      ["What is a website?", ["A single image", "A collection of webpages grouped together", "A web browser", "A URL protocol"], 1],
      ["Which is an example of a webpage within a website?", ["Homepage", "Internet", "Browser", "Server"], 0],
      ["What does URL stand for?", ["Universal Web Link", "Uniform Resource Locator", "User Resource Link", "Uniform Website Language"], 1],
      ["What is the main purpose of a URL?", ["To identify the address of a resource on the Web", "To create a webpage", "To store a website", "To display images"], 0],
      ["In the URL https://www.example.com/products/index.html, which part is the domain?", ["https://", "www", "example.com", "/index.html"], 2],
      ["In the same URL, what does /products represent?", ["Protocol", "Subdomain", "Path", "File"], 2],
      ["What does /index.html represent in the URL?", ["The protocol", "The exact page or resource", "The domain", "The subdomain"], 1],
      ["Which sequence correctly describes what happens when you visit a webpage?", ["Server → User → Browser → URL", "User types URL → Browser sends request → Server finds page → Server sends page back", "Browser → User → Server → Internet", "URL → Server → Keyboard → Browser"], 1],
      ["Who sends the webpage back to the browser?", ["The user", "The browser", "The web server", "The keyboard"], 2],
      ["What is the first thing the user does in the basic webpage journey?", ["The browser renders HTML", "The user types a web address", "The server sends CSS", "The browser displays an image"], 1],
      ["Which part of a webpage is mainly responsible for its colors, fonts, and spacing?", ["HTML", "CSS", "JavaScript", "HTTP"], 1],
      ["In the request–response cycle, who speaks first?", ["The server", "The browser", "The webpage", "The CSS file"], 1],
      ["What is an HTTP request?", ["A message sent by the server to the user", "A message sent by the browser asking the server for a resource", "A webpage stored on a computer", "A type of image file"], 1],
      ["What is an HTTP response?", ["A message the server sends back to the browser", "A message the user sends to the browser", "A URL typed by the user", "A CSS instruction"], 0],
      ["What does a 200 status code mean?", ["The resource was not found", "There was a server error", "The request was successful", "The browser is offline"], 2],
      ["What does a 404 status code mean?", ["Success", "The requested resource was not found", "The server is working perfectly", "The connection is encrypted"], 1],
      ["What does a 500 status code indicate?", ["The requested resource was found", "The browser has successfully rendered the page", "Something went wrong on the server", "The URL is always correct"], 2],
      ["What is HTTP?", ["A web browser", "A programming language", "A set of agreed rules that allows browsers and servers to communicate", "A type of image"], 2],
      ["What is the main difference between HTTP and HTTPS?", ["HTTPS adds encryption to protect information sent between the browser and server", "HTTP can display webpages, but HTTPS cannot", "HTTPS is a web browser", "HTTP stores webpages while HTTPS stores images"], 0],
      ["Which technology is mainly responsible for the structure and content of a webpage?", ["CSS", "JavaScript", "HTML", "HTTPS"], 2]
    ]
  
},
 
  9: {
    title: "Data & Information / Digital vs. Analog",
    graded: 25,
    questions: [
      ["A teacher writes the number 45 on the board without any additional explanation. A student says, \"This could be a test score, an age, or a bus number.\" What does this example demonstrate?", ["Numbers cannot be stored by computers", "Data may not have meaning without context", "Information can only be represented using numbers", "Computers cannot process numerical data"], 1],
      ["A sensor records the value 22. After the sensor is identified as a temperature sensor, a student understands that the reading represents 22°C. What caused the data to become meaningful information?", ["The value was converted into binary", "Context was added to the value", "The computer stored the value", "The value was changed into text"], 1],
      ["A school database contains the following entry: 91. Which additional information would make the value more meaningful?", ["The computer's brand", "The student's name and the subject of the score", "The size of the database", "The type of keyboard being used"], 1],
      ["Two systems record the value 30. System A records the age of a student, while System B records the temperature of a room. Which statement is most accurate?", ["The data is different because the number is different", "The same value can provide different information depending on its context", "Both values must represent temperature", "Neither value can be considered data"], 1],
      ["A student receives the message: \"Battery: 15% — charge the device.\" Why is this better described as information rather than simply data?", ["It contains a measurement and meaning that can guide an action", "It contains a number", "It is stored electronically", "It uses a percentage symbol"], 0],
      ["Which of the following is the best example of data rather than information?", ["\"The bus arrives at 7:30, so leave now.\"", "\"There is an 80% chance of rain, so take an umbrella.\"", "17, 24, 31, 42", "\"The battery is low, so connect the charger.\""], 2],
      ["A computer receives a photograph, a song, and a text message. What do these examples demonstrate?", ["Computers can only process numerical information", "Information can exist in many different forms", "Images and audio are not types of information", "Computers automatically understand the meaning of each item"], 1],
      ["A weather system records temperature readings throughout the day. Why might the readings themselves be considered data before a person interprets them?", ["They are recorded values that have not necessarily been given meaning or context", "Computers cannot store temperature", "Temperature is not a type of information", "The values must first be converted to text"], 0],
      ["Which statement best explains why a computer needs a representation of information?", ["A computer must work with data that it can store and process", "A computer cannot store files", "Humans cannot understand information", "Computers only work with photographs"], 0],
      ["A digital photograph looks like an image to a person. According to the lesson, what does the computer actually store and process?", ["The physical scene shown in the photograph", "The human meaning of the photograph", "Data that represents the photograph", "The photographer's thoughts"], 2],
      ["Which statement best describes the relationship between information and data?", ["Information is always numerical, while data is always text", "Data is a form that a computer can store and process, while information has meaning for humans", "Data and information are completely unrelated", "Computers process information without needing data"], 1],
      ["A student writes the idea \"ten\" in several forms: 10, ten, X, and ١٠. What does this demonstrate?", ["Different representations can communicate the same idea", "Only decimal numbers have meaning", "Computers cannot use numbers", "Each representation must represent a different quantity"], 0],
      ["Why can 10 and 1010 represent the same idea in the context of the lesson?", ["They are identical strings of characters", "They are different representations of the same number", "Both are examples of text only", "Computers and humans always use the same representation"], 1],
      ["A computer stores a photo, a music file, and a message. What common requirement allows the computer to handle all three?", ["They must all be printed first", "They must be represented as data that the computer can store and process", "They must all be converted into images", "They must all be understood by the computer as humans understand them"], 1],
      ["A device allows a user to select only levels 1, 2, 3, 4, or 5. A user cannot select 3.5. What does this demonstrate?", ["Continuous values", "Analog representation", "Discrete values", "Unlimited values"], 2],
      ["Which statement correctly describes continuous information?", ["It contains only two possible values", "It has separate values with gaps between them", "It can take any value within a range without gaps", "It can only contain whole numbers"], 2],
      ["A student says, \"If two values are very close together, there cannot be another value between them.\" Which response is consistent with the lesson?", ["Correct, because continuous information has gaps", "Correct, because computers only use whole numbers", "Incorrect, because continuous information can have more values between any two points", "Incorrect, because digital information is always continuous"], 2],
      ["Which pair correctly compares a ramp and a staircase as representations?", ["Ramp → discrete; staircase → continuous", "Ramp → continuous; staircase → discrete", "Both → continuous", "Both → discrete"], 1],
      ["A traditional measuring device has a pointer that can stop at any position along a scale. Which classification best fits this device?", ["Digital, because it uses a scale", "Analog, because its value can vary continuously", "Digital, because it has numbers", "Binary, because it has two possible states"], 1],
      ["A digital device represents a changing quantity using a limited set of separate levels. Which term best describes those levels?", ["Continuous", "Discrete", "Analog", "Smooth"], 1],
      ["A digital representation of a smooth signal uses separate values. What is the main difference between the digital representation and the original smooth signal?", ["The digital representation is a simplified representation using separate values", "The digital representation contains no information", "The original signal is always digital", "The digital representation must use letters instead of numbers"], 0],
      ["A student compares an analog signal with its digital representation and notices that the digital version follows the general shape but does not contain every tiny detail. What does this demonstrate?", ["Digital information is a simplified representation of the original", "Digital information cannot represent real-world information", "Analog information is always less accurate", "Computers cannot store digital information"], 0],
      ["Which change would make a digital representation more closely follow a smooth original, according to the lesson's discussion?", ["Using fewer separate values", "Using more separate values and levels", "Removing all values", "Changing the information into text"], 1],
      ["A digital photo is stored using separate values, while a physical scene changes continuously. Which statement best describes the relationship?", ["The digital photo is a representation of the original information", "The digital photo is the original physical scene", "The physical scene is discrete", "Neither can be represented as data"], 0],
      ["A computer system uses two clearly distinguishable states and labels them 0 and 1. What is the purpose of the two labels?", ["They represent two distinguishable states", "They always mean exactly \"electricity off\" and \"electricity on\"", "They represent the numbers zero and one only", "They represent two different computers"], 0],
      ["Which statement about 0 and 1 is consistent with the lesson?", ["They are labels for two distinguishable states", "0 always means no electricity and 1 always means electricity", "They are two physical objects inside a computer", "They are used only to represent numbers"], 0],
      ["A student is asked why computers use digital information rather than directly storing continuously changing real-world signals. Which answer best matches the lesson?", ["Digital information uses discrete states that are easier to distinguish and process reliably", "Computers cannot store any type of real-world information", "Continuous information has no meaning", "Digital information is always identical to the original signal"], 0]
    ]
  }


};
