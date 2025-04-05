const questions = [

    
        {
          "num": 1,
          "question_en": "What is the Sanskrit word for 'water'?",
          "question_hi": "'पानी' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["जलम्", "अम्बु", "नीरम्", "All of these"],
          "options_hi": ["जलम्", "अम्बु", "नीरम्", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which sandhi joins 'हरि + ईश = हरीश'?",
          "question_hi": "'हरि + ईश = हरीश' में कौन-सी सन्धि होती है?",
          "options_en": ["गुण सन्धि", "वृद्धि सन्धि", "यण सन्धि", "व्यंजन सन्धि"],
          "options_hi": ["गुण सन्धि", "वृद्धि सन्धि", "यण सन्धि", "व्यंजन सन्धि"],
          "answer": "यण सन्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the feminine form of 'शिष्य' (student)?",
          "question_hi": "'शिष्य' (छात्र) का स्त्रीलिंग रूप क्या है?",
          "options_en": ["शिष्या", "शिष्यी", "शिष्याणी", "शिष्यिका"],
          "options_hi": ["शिष्या", "शिष्यी", "शिष्याणी", "शिष्यिका"],
          "answer": "शिष्या",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which chapter in Class 10 NCERT discusses 'वीरवनिता विश्पला'?",
          "question_hi": "कक्षा 10 NCERT में कौन-सा अध्याय 'वीरवनिता विश्पला' पर चर्चा करता है?",
          "options_en": ["Chapter 4", "Chapter 7", "Chapter 11", "Chapter 14"],
          "options_hi": ["अध्याय 4", "अध्याय 7", "अध्याय 11", "अध्याय 14"],
          "answer": "Chapter 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the meaning of 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते'?",
          "question_hi": "'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते' का अर्थ क्या है?",
          "options_en": ["Nothing purer than knowledge exists", "God is knowledge", "Learn every day", "Wisdom is eternal"],
          "options_hi": ["ज्ञान से बढ़कर पवित्र कुछ नहीं", "ईश्वर ही ज्ञान है", "प्रतिदिन सीखो", "ज्ञान शाश्वत है"],
          "answer": "Nothing purer than knowledge exists",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of these is a 'कर्तृवाच्य' (active voice) example?",
          "question_hi": "इनमें से कौन 'कर्तृवाच्य' (कर्तृवाच्य) का उदाहरण है?",
          "options_en": ["रामः पठति", "रामेण पठ्यते", "पुस्तकं पठ्यते", "मया पठ्यते"],
          "options_hi": ["रामः पठति", "रामेण पठ्यते", "पुस्तकं पठ्यते", "मया पठ्यते"],
          "answer": "रामः पठति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the Sanskrit word for 'moon'?",
          "question_hi": "'चन्द्रमा' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["चन्द्रः", "शशी", "इन्दुः", "All of these"],
          "options_hi": ["चन्द्रः", "शशी", "इन्दुः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which vibhakti is used in 'ग्रामे'?",
          "question_hi": "'ग्रामे' में कौन-सी विभक्ति प्रयुक्त हुई है?",
          "options_en": ["सप्तमी", "षष्ठी", "तृतीया", "द्वितीया"],
          "options_hi": ["सप्तमी", "षष्ठी", "तृतीया", "द्वितीया"],
          "answer": "सप्तमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the plural form of 'पुस्तकम्' (book)?",
          "question_hi": "'पुस्तकम्' (पुस्तक) का बहुवचन रूप क्या है?",
          "options_en": ["पुस्तकानि", "पुस्तकाः", "पुस्तकेषु", "पुस्तकैः"],
          "options_hi": ["पुस्तकानि", "पुस्तकाः", "पुस्तकेषु", "पुस्तकैः"],
          "answer": "पुस्तकानि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which chapter discusses 'सौहार्दं प्रकृतेः शोभा' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'सौहार्दं प्रकृतेः शोभा' पर चर्चा करता है?",
          "options_en": ["Chapter 2", "Chapter 5", "Chapter 8", "Chapter 11"],
          "options_hi": ["अध्याय 2", "अध्याय 5", "अध्याय 8", "अध्याय 11"],
          "answer": "Chapter 5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the meaning of 'अहिंसा परमो धर्मः'?",
          "question_hi": "'अहिंसा परमो धर्मः' का अर्थ क्या है?",
          "options_en": ["Non-violence is the highest duty", "Truth is God", "Help the weak", "Knowledge is power"],
          "options_hi": ["अहिंसा सर्वोच्च धर्म है", "सत्य ही ईश्वर है", "कमजोरों की मदद करो", "ज्ञान ही शक्ति है"],
          "answer": "Non-violence is the highest duty",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of these is an 'अव्यय' (indeclinable)?",
          "question_hi": "इनमें से कौन 'अव्यय' (अव्यय) है?",
          "options_en": ["तत्र", "पुस्तकम्", "फलानि", "गच्छति"],
          "options_hi": ["तत्र", "पुस्तकम्", "फलानि", "गच्छति"],
          "answer": "तत्र",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the Sanskrit word for 'teacher'?",
          "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["गुरुः", "आचार्यः", "अध्यापकः", "All of these"],
          "options_hi": ["गुरुः", "आचार्यः", "अध्यापकः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which sandhi is in 'तत् + लयः = तल्लयः'?",
          "question_hi": "'तत् + लयः = तल्लयः' में कौन-सी सन्धि है?",
          "options_en": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "None"],
          "options_hi": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "कोई नहीं"],
          "answer": "व्यंजन सन्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the meaning of 'मातृदेवो भव'?",
          "question_hi": "'मातृदेवो भव' का अर्थ क्या है?",
          "options_en": ["Revere mother as God", "God is mother", "Love your mother", "Mother is great"],
          "options_hi": ["माता को देवता समान मानो", "ईश्वर माता है", "माँ से प्रेम करो", "माता महान है"],
          "answer": "Revere mother as God",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which chapter discusses 'भारतस्य प्राचीनं ज्ञानम्' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'भारतस्य प्राचीनं ज्ञानम्' पर चर्चा करता है?",
          "options_en": ["Chapter 3", "Chapter 6", "Chapter 9", "Chapter 12"],
          "options_hi": ["अध्याय 3", "अध्याय 6", "अध्याय 9", "अध्याय 12"],
          "answer": "Chapter 9",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the Sanskrit word for 'hospital'?",
          "question_hi": "'अस्पताल' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "All of these"],
          "options_hi": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which of these is a 'द्विगु समास'?",
          "question_hi": "इनमें से कौन 'द्विगु समास' है?",
          "options_en": ["पञ्चवटी", "राजपुरुषः", "यथाशक्ति", "None"],
          "options_hi": ["पञ्चवटी", "राजपुरुषः", "यथाशक्ति", "कोई नहीं"],
          "answer": "पञ्चवटी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the meaning of 'विद्याधनं सर्वधनप्रधानम्'?",
          "question_hi": "'विद्याधनं सर्वधनप्रधानम्' का अर्थ क्या है?",
          "options_en": ["Knowledge is the supreme wealth", "Money is power", "Health is wealth", "God is great"],
          "options_hi": ["ज्ञान सर्वश्रेष्ठ धन है", "धन ही शक्ति है", "स्वास्थ्य ही धन है", "ईश्वर महान है"],
          "answer": "Knowledge is the supreme wealth",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which vibhakti is used in 'रामाय'?",
          "question_hi": "'रामाय' में कौन-सी विभक्ति है?",
          "options_en": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "options_hi": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "answer": "चतुर्थी",
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
