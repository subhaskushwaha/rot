const questions = [

    
        {
          "num": 1,
          "question_en": "What is the meaning of the word 'Sanskrit'?",
          "question_hi": "संस्कृत शब्द का अर्थ क्या है?",
          "options_en": ["Ancient", "Pure", "Complex", "New"],
          "options_hi": ["प्राचीन", "शुद्ध", "जटिल", "नया"],
          "answer": "Pure",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Who is the author of the Sanskrit text 'Raghukul Nandan'?",
          "question_hi": "संस्कृत ग्रंथ 'रघुकुल नंदन' के लेखक कौन हैं?",
          "options_en": ["Kalidasa", "Bharavi", "Raja Shankar", "Harshvardhan"],
          "options_hi": ["कालिदास", "भारवि", "राजा शंकर", "हर्षवर्धन"],
          "answer": "Kalidasa",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the meaning of 'Dharma' in Sanskrit literature?",
          "question_hi": "संस्कृत साहित्य में 'धर्म' का क्या अर्थ है?",
          "options_en": ["Truth", "Duty", "Religion", "Wealth"],
          "options_hi": ["सत्य", "कर्तव्य", "धर्म", "धन"],
          "answer": "Duty",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which epic is primarily written in Sanskrit?",
          "question_hi": "कौन सा महाकाव्य मुख्य रूप से संस्कृत में लिखा गया है?",
          "options_en": ["Mahabharata", "Ramayana", "Vishnu Purana", "Upanishads"],
          "options_hi": ["महाभारत", "रामायण", "विष्णु पुराण", "उपनिषद"],
          "answer": "Mahabharata",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What does 'Tat' mean in Sanskrit?",
          "question_hi": "संस्कृत में 'तत्' का क्या अर्थ है?",
          "options_en": ["That", "This", "Here", "There"],
          "options_hi": ["वह", "यह", "यहां", "वहां"],
          "answer": "That",
          "attempted": false,
          "selected": ""
        },
        
            {
              "num": 6,
              "question_en": "Which of the following is the most famous work of Kalidasa?",
              "question_hi": "नीचे दिए गए में से कालिदास का सबसे प्रसिद्ध काव्य कौन सा है?",
              "options_en": ["Shakuntala", "Meghaduta", "Raghuvamsa", "Abhijnana Shakuntalam"],
              "options_hi": ["शकुंतला", "मेघदूत", "रघुवंसा", "अभिज्ञान शकुंतलाम"],
              "answer": "Shakuntala",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 7,
              "question_en": "In Sanskrit, what is the term for 'love'?",
              "question_hi": "संस्कृत में 'प्रेम' के लिए कौन सा शब्द है?",
              "options_en": ["Prema", "Kama", "Bhakti", "Sambandha"],
              "options_hi": ["प्रेम", "काम", "भक्ति", "संबंध"],
              "answer": "Prema",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 8,
              "question_en": "Which Sanskrit text is dedicated to the teachings of Lord Shiva?",
              "question_hi": "कौन सा संस्कृत ग्रंथ भगवान शिव के उपदेशों को समर्पित है?",
              "options_en": ["Shiv Purana", "Vishnu Purana", "Bhagavad Gita", "Rigveda"],
              "options_hi": ["शिव पुराण", "विष्णु पुराण", "भगवद गीता", "ऋग्वेद"],
              "answer": "Shiv Purana",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 9,
              "question_en": "What does 'Yoga' mean in Sanskrit?",
              "question_hi": "संस्कृत में 'योग' का क्या अर्थ है?",
              "options_en": ["Union", "Discipline", "Meditation", "Health"],
              "options_hi": ["संयोग", "अनुशासन", "ध्यान", "स्वास्थ्य"],
              "answer": "Union",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 10,
              "question_en": "Which ancient Indian text is considered the foundation of Sanskrit grammar?",
              "question_hi": "कौन सा प्राचीन भारतीय ग्रंथ संस्कृत व्याकरण का आधार माना जाता है?",
              "options_en": ["Ashtadhyayi", "Mahabharata", "Ramayana", "Vedas"],
              "options_hi": ["अष्टाध्यायी", "महाभारत", "रामायण", "वेद"],
              "answer": "Ashtadhyayi",
              "attempted": false,
              "selected": ""
            }
          
          
      
      






];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
