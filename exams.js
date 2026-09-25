const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxoI8VBse400Q4Pcww5iJUXNRDMgOUldTdazaB56YA4KSLHljUrIafmcUpQ9Y5HtWt/exec";

/* ============================================================
   STEP 1: paste your three existing constants from the old
   index.html right here, unchanged:
     const CPP_CODE_1 = `...`;
     const CPP_CODE_2 = `...`;
     const GRADE8_EXAM_CODE = `...`;
   ============================================================ */


/* ============================================================
   STEP 2: set the access code for each grade (change them
   before every exam). Students type this on the portal page.
   ============================================================ */
const EXAMS = {
  7: {
    accessCode: "G7123",
    page: "quiz.html",   // Grade 7 now opens the MCQ quiz (questions live in quizzes.js)
    info: "Copy both C++ codes below and paste them into Code::Blocks to fix the errors.",
    copy: [
      { label: "Copy Code 1 — Array & Sum",  text: () => CPP_CODE_1 },
      { label: "Copy Code 2 — Loop & Break", text: () => CPP_CODE_2 }
    ]
  },
  8: {
    accessCode: "G8456",
    page: "quiz.html",   // Grade 8 now opens the MCQ quiz (questions live in quizzes.js)
    info: "Copy the exam starter code below, then paste it into your code editor to begin.",
    copy: [
      { label: "Copy Exam Code", text: () => GRADE8_EXAM_CODE }
    ]
  },
  9: {
    accessCode: "G9789",
    page: "quiz.html",   // Grade 9 now opens the MCQ quiz (questions live in quizzes.js)
    info: "Write your solution in your editor, then paste it below and submit.",
    copy: [
      // Add starter code for Grade 9 when ready:
      // { label: "Copy Exam Code", text: () => GRADE9_EXAM_CODE }
    ]
  }
};