const questions = [

        // ===== PHYSICS (15 Questions) =====
        {
          "num": 1,
          "question_en": "What is the SI unit of electric current?",
          "question_hi": "विद्युत धारा का SI मात्रक क्या है?",
          "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
          "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
          "answer": "Ampere",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The power of a lens is +2.0 D. Its focal length is:",
          "question_hi": "एक लेंस की क्षमता +2.0 D है। इसकी फोकस दूरी है:",
          "options_en": ["+50 cm", "+20 cm", "+2 cm", "+0.5 cm"],
          "options_hi": ["+50 सेमी", "+20 सेमी", "+2 सेमी", "+0.5 सेमी"],
          "answer": "+50 cm",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Fleming's left-hand rule is used to determine:",
          "question_hi": "फ्लेमिंग के बाएं हाथ का नियम किसे निर्धारित करने के लिए प्रयोग किया जाता है?",
          "options_en": ["Direction of current", "Direction of force", "Direction of magnetic field", "EMF direction"],
          "options_hi": ["धारा की दिशा", "बल की दिशा", "चुंबकीय क्षेत्र की दिशा", "विद्युत वाहक बल की दिशा"],
          "answer": "Direction of force",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The resistance of a conductor depends on:",
          "question_hi": "किसी चालक का प्रतिरोध निर्भर करता है:",
          "options_en": ["Length only", "Area only", "Material only", "All of these"],
          "options_hi": ["केवल लंबाई पर", "केवल क्षेत्रफल पर", "केवल पदार्थ पर", "इन सभी पर"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "In a concave mirror, if the object is placed between F and C, the image will be:",
          "question_hi": "अवतल दर्पण में, यदि वस्तु F और C के बीच रखी जाए, तो प्रतिबिंब होगा:",
          "options_en": ["Virtual and erect", "Real and inverted", "Diminished", "At infinity"],
          "options_hi": ["आभासी और सीधा", "वास्तविक और उल्टा", "छोटा", "अनंत पर"],
          "answer": "Real and inverted",
          "attempted": false,
          "selected": ""
        },
      
        // ===== CHEMISTRY (15 Questions) =====
        {
          "num": 16,
          "question_en": "The pH of a neutral solution is:",
          "question_hi": "एक उदासीन विलयन का pH मान होता है:",
          "options_en": ["0", "7", "10", "14"],
          "options_hi": ["0", "7", "10", "14"],
          "answer": "7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which gas turns lime water milky?",
          "question_hi": "कौन सी गैस चूने के पानी को दूधिया बना देती है?",
          "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
          "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
          "answer": "Carbon dioxide",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "The chemical formula of baking soda is:",
          "question_hi": "बेकिंग सोडा का रासायनिक सूत्र है:",
          "options_en": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
          "options_hi": ["NaCl", "NaHCO₃", "NaOH", "Na₂CO₃"],
          "answer": "NaHCO₃",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which metal is liquid at room temperature?",
          "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
          "options_en": ["Iron", "Mercury", "Gold", "Aluminum"],
          "options_hi": ["लोहा", "पारा", "सोना", "एल्युमिनियम"],
          "answer": "Mercury",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "The IUPAC name of C₂H₅OH is:",
          "question_hi": "C₂H₅OH का IUPAC नाम है:",
          "options_en": ["Methane", "Ethanol", "Propanol", "Butanol"],
          "options_hi": ["मीथेन", "एथेनॉल", "प्रोपेनॉल", "ब्यूटेनॉल"],
          "answer": "Ethanol",
          "attempted": false,
          "selected": ""
        },
      
        // ===== BIOLOGY (15 Questions) =====
        {
          "num": 21,
          "question_en": "The site of photosynthesis in plants is:",
          "question_hi": "पौधों में प्रकाश संश्लेषण का स्थान है:",
          "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
          "options_hi": ["माइटोकॉन्ड्रिया", "हरितलवक", "केंद्रक", "राइबोसोम"],
          "answer": "Chloroplast",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "The functional unit of kidney is:",
          "question_hi": "वृक्क की क्रियात्मक इकाई है:",
          "options_en": ["Neuron", "Nephron", "Alveoli", "Bronchiole"],
          "options_hi": ["न्यूरॉन", "नेफ्रॉन", "वायुकोश", "श्वसनिका"],
          "answer": "Nephron",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Which plant hormone promotes cell division?",
          "question_hi": "कौन सा पादप हार्मोन कोशिका विभाजन को प्रोत्साहित करता है?",
          "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
          "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
          "answer": "Cytokinin",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "The number of chromosomes in human gametes is:",
          "question_hi": "मानव युग्मकों में गुणसूत्रों की संख्या होती है:",
          "options_en": ["23", "46", "22", "44"],
          "options_hi": ["23", "46", "22", "44"],
          "answer": "23",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Which part of the brain controls balance and posture?",
          "question_hi": "मस्तिष्क का कौन सा भाग संतुलन और मुद्रा को नियंत्रित करता है?",
          "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
          "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
          "answer": "Cerebellum",
          "attempted": false,
          "selected": ""
        },
      
        // ===== ENVIRONMENTAL SCIENCE (5 Questions) =====
        {
          "num": 26,
          "question_en": "Which of these is a renewable source of energy?",
          "question_hi": "निम्न में से कौन ऊर्जा का नवीकरणीय स्रोत है?",
          "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
          "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
          "answer": "Solar energy",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "The Chipko Movement was related to:",
          "question_hi": "चिपको आंदोलन किससे संबंधित था?",
          "options_en": ["Water conservation", "Forest conservation", "Wildlife protection", "Air pollution"],
          "options_hi": ["जल संरक्षण", "वन संरक्षण", "वन्यजीव संरक्षण", "वायु प्रदूषण"],
          "answer": "Forest conservation",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "The main greenhouse gas responsible for global warming is:",
          "question_hi": "ग्लोबल वार्मिंग के लिए मुख्य रूप से जिम्मेदार ग्रीनहाउस गैस है:",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "The process of water percolating into the ground is called:",
          "question_hi": "भूमि में जल के रिसने की प्रक्रिया कहलाती है:",
          "options_en": ["Infiltration", "Evaporation", "Condensation", "Transpiration"],
          "options_hi": ["अंत:स्यंदन", "वाष्पीकरण", "संघनन", "वाष्पोत्सर्जन"],
          "answer": "Infiltration",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "Which of these is a biodegradable waste?",
          "question_hi": "निम्न में से कौन जैव निम्नीकरणीय अपशिष्ट है?",
          "options_en": ["Plastic bags", "Glass bottles", "Vegetable peels", "Aluminum cans"],
          "options_hi": ["प्लास्टिक बैग", "कांच की बोतलें", "सब्जी के छिलके", "एल्युमिनियम के डिब्बे"],
          "answer": "Vegetable peels",
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