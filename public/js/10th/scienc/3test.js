const questions = [
    
        {
          "num": 1,
          "question_en": "Which of the following is an example of a chemical change?",
          "question_hi": "निम्नलिखित में से कौन सा रासायनिक परिवर्तन का उदाहरण है?",
          "options_en": ["Melting of ice", "Rusting of iron", "Dissolving sugar in water", "Boiling of water"],
          "options_hi": ["बर्फ का पिघलना", "लोहे में जंग लगना", "पानी में चीनी घोलना", "पानी का उबलना"],
          "answer": "Rusting of iron",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "The pH of a neutral solution is:",
          "question_hi": "एक उदासीन विलयन का pH मान होता है:",
          "options_en": ["0", "7", "10", "14"],
          "options_hi": ["0", "7", "10", "14"],
          "answer": "7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Which gland secretes insulin?",
          "question_hi": "कौन सी ग्रंथि इंसुलिन स्रावित करती है?",
          "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
          "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
          "answer": "Pancreas",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "The image formed by a plane mirror is:",
          "question_hi": "समतल दर्पण द्वारा बना प्रतिबिंब होता है:",
          "options_en": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
          "options_hi": ["वास्तविक और उल्टा", "आभासी और सीधा", "वास्तविक और सीधा", "आभासी और उल्टा"],
          "answer": "Virtual and erect",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which of these is not a renewable source of energy?",
          "question_hi": "निम्नलिखित में से कौन ऊर्जा का नवीकरणीय स्रोत नहीं है?",
          "options_en": ["Solar energy", "Wind energy", "Coal", "Biomass"],
          "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोमास"],
          "answer": "Coal",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "The process of depositing zinc on iron is called:",
          "question_hi": "लोहे पर जिंक की परत चढ़ाने की प्रक्रिया को कहते हैं:",
          "options_en": ["Galvanization", "Crystallization", "Distillation", "Sedimentation"],
          "options_hi": ["जस्तीकरण", "क्रिस्टलीकरण", "आसवन", "अवसादन"],
          "answer": "Galvanization",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which part of the plant absorbs water and minerals?",
          "question_hi": "पौधे का कौन सा भाग जल और खनिजों का अवशोषण करता है?",
          "options_en": ["Leaves", "Stem", "Roots", "Flowers"],
          "options_hi": ["पत्तियाँ", "तना", "जड़ें", "फूल"],
          "answer": "Roots",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "The chemical formula of sulfuric acid is:",
          "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
          "options_en": ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"],
          "options_hi": ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"],
          "answer": "H₂SO₄",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "The unit of electric current is:",
          "question_hi": "विद्युत धारा का मात्रक है:",
          "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
          "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
          "answer": "Ampere",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which gas is responsible for global warming?",
          "question_hi": "कौन सी गैस ग्लोबल वार्मिंग के लिए जिम्मेदार है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "The process by which plants make food is called:",
          "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे भोजन बनाते हैं, कहलाती है:",
          "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
          "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "पाचन"],
          "answer": "Photosynthesis",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which metal is liquid at room temperature?",
          "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
          "options_en": ["Iron", "Mercury", "Gold", "Aluminum"],
          "options_hi": ["लोहा", "पारा", "सोना", "एल्युमिनियम"],
          "answer": "Mercury",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "The chemical name of baking soda is:",
          "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
          "options_en": ["Sodium chloride", "Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide"],
          "options_hi": ["सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
          "answer": "Sodium bicarbonate",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which part of neuron receives signals?",
          "question_hi": "न्यूरॉन का कौन सा भाग संकेत प्राप्त करता है?",
          "options_en": ["Axon", "Dendrite", "Cell body", "Myelin sheath"],
          "options_hi": ["एक्सॉन", "डेंड्राइट", "कोशिका काय", "मायेलिन आवरण"],
          "answer": "Dendrite",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "The pH of acidic solutions is:",
          "question_hi": "अम्लीय विलयनों का pH होता है:",
          "options_en": ["Greater than 7", "Equal to 7", "Less than 7", "Equal to 14"],
          "options_hi": ["7 से अधिक", "7 के बराबर", "7 से कम", "14 के बराबर"],
          "answer": "Less than 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "The image formed by convex lens when object is at 2F is:",
          "question_hi": "उत्तल लेंस द्वारा बना प्रतिबिंब जब वस्तु 2F पर होती है:",
          "options_en": ["Real, inverted and same size", "Virtual, erect and enlarged", "Real, inverted and diminished", "Virtual, erect and diminished"],
          "options_hi": ["वास्तविक, उल्टा और समान आकार", "आभासी, सीधा और आवर्धित", "वास्तविक, उल्टा और छोटा", "आभासी, सीधा और छोटा"],
          "answer": "Real, inverted and same size",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which is a renewable energy source?",
          "question_hi": "कौन सा नवीकरणीय ऊर्जा स्रोत है?",
          "options_en": ["Coal", "Petroleum", "Natural gas", "Solar energy"],
          "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "सौर ऊर्जा"],
          "answer": "Solar energy",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Vapor turning to liquid is called:",
          "question_hi": "वाष्प का द्रव में बदलना कहलाता है:",
          "options_en": ["Evaporation", "Condensation", "Sublimation", "Freezing"],
          "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "हिमीकरण"],
          "answer": "Condensation",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which is not a leaf function?",
          "question_hi": "कौन सा पत्ती का कार्य नहीं है?",
          "options_en": ["Photosynthesis", "Transpiration", "Food storage", "Water absorption"],
          "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "भोजन संग्रह", "जल अवशोषण"],
          "answer": "Water absorption",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Heat releasing reaction is called:",
          "question_hi": "ऊष्मा मुक्त करने वाली अभिक्रिया कहलाती है:",
          "options_en": ["Endothermic", "Exothermic", "Combustion", "Neutralization"],
          "options_hi": ["ऊष्माशोषी", "ऊष्माक्षेपी", "दहन", "उदासीनीकरण"],
          "answer": "Exothermic",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "Potential difference is measured by:",
          "question_hi": "विभवांतर मापा जाता है:",
          "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
          "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
          "answer": "Voltmeter",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which is not part of male reproductive system?",
          "question_hi": "कौन सा पुरुष प्रजनन तंत्र का भाग नहीं है?",
          "options_en": ["Testis", "Ovary", "Vas deferens", "Prostate gland"],
          "options_hi": ["वृषण", "अंडाशय", "वास डिफेरेंस", "प्रोस्टेट ग्रंथि"],
          "answer": "Ovary",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "Light bouncing back from smooth surface is called:",
          "question_hi": "चिकनी सतह से प्रकाश का वापस लौटना कहलाता है:",
          "options_en": ["Refraction", "Reflection", "Dispersion", "Scattering"],
          "options_hi": ["अपवर्तन", "परावर्तन", "विक्षेपण", "प्रकीर्णन"],
          "answer": "Reflection",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which is not a urine component?",
          "question_hi": "कौन सा मूत्र का घटक नहीं है?",
          "options_en": ["Water", "Urea", "Glucose", "Salts"],
          "options_hi": ["जल", "यूरिया", "ग्लूकोज", "लवण"],
          "answer": "Glucose",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "Chemical formula of carbon dioxide is:",
          "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
          "options_en": ["CO", "CO₂", "C₂O", "C₂O₃"],
          "options_hi": ["CO", "CO₂", "C₂O", "C₂O₃"],
          "answer": "CO₂",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "Which is a non-metal?",
          "question_hi": "कौन सा अधातु है?",
          "options_en": ["Iron", "Copper", "Sulfur", "Aluminum"],
          "options_hi": ["लोहा", "तांबा", "सल्फर", "एल्युमिनियम"],
          "answer": "Sulfur",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "Liquid to vapor is called:",
          "question_hi": "द्रव से वाष्प बनना कहलाता है:",
          "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
          "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "हिमीकरण"],
          "answer": "Evaporation",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "Which is not part of respiratory system?",
          "question_hi": "कौन सा श्वसन तंत्र का भाग नहीं है?",
          "options_en": ["Nose", "Trachea", "Lungs", "Esophagus"],
          "options_hi": ["नाक", "श्वासनली", "फेफड़े", "ग्रासनली"],
          "answer": "Esophagus",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "Unit of electric power is:",
          "question_hi": "विद्युत शक्ति का मात्रक है:",
          "options_en": ["Volt", "Ampere", "Watt", "Ohm"],
          "options_hi": ["वोल्ट", "एम्पियर", "वाट", "ओम"],
          "answer": "Watt",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "Which is a greenhouse gas?",
          "question_hi": "कौन सी ग्रीनहाउस गैस है?",
          "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
          "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
          "answer": "Carbon dioxide",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 31,
          "question_en": "Plants prepare food by:",
          "question_hi": "पौधे भोजन तैयार करते हैं:",
          "options_en": ["Respiration", "Transpiration", "Photosynthesis", "Digestion"],
          "options_hi": ["श्वसन", "वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "पाचन"],
          "answer": "Photosynthesis",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "Which is a noble gas?",
          "question_hi": "कौन सी अक्रिय गैस है?",
          "options_en": ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
          "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
          "answer": "Helium",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "Chemical name of lime water is:",
          "question_hi": "चूने के पानी का रासायनिक नाम है:",
          "options_en": ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium chloride"],
          "options_hi": ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम क्लोराइड"],
          "answer": "Calcium hydroxide",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 34,
          "question_en": "Which metal reacts vigorously with water?",
          "question_hi": "कौन सी धातु पानी के साथ तीव्रता से अभिक्रिया करती है?",
          "options_en": ["Iron", "Copper", "Sodium", "Gold"],
          "options_hi": ["लोहा", "तांबा", "सोडियम", "सोना"],
          "answer": "Sodium",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 35,
          "question_en": "The colored part of eye is called:",
          "question_hi": "आँख के रंगीन भाग को कहते हैं:",
          "options_en": ["Cornea", "Retina", "Iris", "Pupil"],
          "options_hi": ["कॉर्निया", "रेटिना", "आइरिस", "पुतली"],
          "answer": "Iris",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 36,
          "question_en": "Which acid is present in vinegar?",
          "question_hi": "सिरका में कौन सा अम्ल पाया जाता है?",
          "options_en": ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Nitric acid"],
          "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "एसिटिक अम्ल", "नाइट्रिक अम्ल"],
          "answer": "Acetic acid",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "The process of cell division is called:",
          "question_hi": "कोशिका विभाजन की प्रक्रिया को कहते हैं:",
          "options_en": ["Respiration", "Photosynthesis", "Mitosis", "Transpiration"],
          "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "सूत्री विभाजन", "वाष्पोत्सर्जन"],
          "answer": "Mitosis",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "Which is not a component of blood?",
          "question_hi": "कौन सा रक्त का घटक नहीं है?",
          "options_en": ["Plasma", "Platelets", "Bone cells", "Red blood cells"],
          "options_hi": ["प्लाज्मा", "प्लेटलेट्स", "हड्डी कोशिकाएँ", "लाल रक्त कोशिकाएँ"],
          "answer": "Bone cells",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 39,
          "question_en": "The chemical formula of methane is:",
          "question_hi": "मीथेन का रासायनिक सूत्र है:",
          "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
          "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
          "answer": "CH₄",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 40,
          "question_en": "Which is not a metal?",
          "question_hi": "कौन सा धातु नहीं है?",
          "options_en": ["Gold", "Silver", "Carbon", "Iron"],
          "options_hi": ["सोना", "चाँदी", "कार्बन", "लोहा"],
          "answer": "Carbon",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 41,
          "question_en": "Sugar to alcohol conversion is called:",
          "question_hi": "चीनी को अल्कोहल में बदलने की प्रक्रिया को कहते हैं:",
          "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
          "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
          "answer": "Fermentation",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 42,
          "question_en": "Which is not part of excretory system?",
          "question_hi": "कौन सा उत्सर्जन तंत्र का भाग नहीं है?",
          "options_en": ["Kidney", "Ureter", "Lungs", "Esophagus"],
          "options_hi": ["वृक्क", "मूत्रवाहिनी", "फेफड़े", "ग्रासनली"],
          "answer": "Esophagus",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 43,
          "question_en": "Unit of electric resistance is:",
          "question_hi": "विद्युत प्रतिरोध का मात्रक है:",
          "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
          "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
          "answer": "Ohm",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 44,
          "question_en": "Which is not a greenhouse gas?",
          "question_hi": "कौन सी ग्रीनहाउस गैस नहीं है?",
          "options_en": ["Carbon dioxide", "Nitrogen", "Methane", "Water vapor"],
          "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "मीथेन", "जल वाष्प"],
          "answer": "Nitrogen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 45,
          "question_en": "Plants lose water through leaves by:",
          "question_hi": "पौधे पत्तियों के माध्यम से पानी खो देते हैं:",
          "options_en": ["Photosynthesis", "Transpiration", "Respiration", "Evaporation"],
          "options_hi": ["प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "श्वसन", "वाष्पीकरण"],
          "answer": "Transpiration",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 46,
          "question_en": "Which is not a noble gas?",
          "question_hi": "कौन सी अक्रिय गैस नहीं है?",
          "options_en": ["Helium", "Neon", "Hydrogen", "Argon"],
          "options_hi": ["हीलियम", "नियॉन", "हाइड्रोजन", "आर्गन"],
          "answer": "Hydrogen",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 47,
          "question_en": "Chemical name of common salt is:",
          "question_hi": "साधारण नमक का रासायनिक नाम है:",
          "options_en": ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide"],
          "options_hi": ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
          "answer": "Sodium chloride",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 48,
          "question_en": "Which is not part of nervous system?",
          "question_hi": "कौन सा तंत्रिका तंत्र का भाग नहीं है?",
          "options_en": ["Brain", "Spinal cord", "Nerves", "Heart"],
          "options_hi": ["मस्तिष्क", "मेरुरज्जु", "तंत्रिकाएँ", "हृदय"],
          "answer": "Heart",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 49,
          "question_en": "pH of basic solutions is:",
          "question_hi": "क्षारीय विलयनों का pH होता है:",
          "options_en": ["Less than 7", "Equal to 7", "Greater than 7", "Equal to 0"],
          "options_hi": ["7 से कम", "7 के बराबर", "7 से अधिक", "0 के बराबर"],
          "answer": "Greater than 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 50,
          "question_en": "Convex lens forms virtual image when object is:",
          "question_hi": "उत्तल लेंस आभासी प्रतिबिंब बनाता है जब वस्तु होती है:",
          "options_en": ["Beyond 2F", "At 2F", "Between F and 2F", "Between F and optical center"],
          "options_hi": ["2F से परे", "2F पर", "F और 2F के बीच", "F और प्रकाशीय केंद्र के बीच"],
          "answer": "Between F and optical center",
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