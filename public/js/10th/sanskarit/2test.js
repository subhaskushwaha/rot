const questions = [
    
        {
          "num": 1,
          "question_en": "What is the Sanskrit word for 'mother'?",
          "question_hi": "'माता' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["मातृ", "पितृ", "भ्रातृ", "स्वसृ"],
          "options_hi": ["मातृ", "पितृ", "भ्रातृ", "स्वसृ"],
          "answer": "मातृ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which sandhi joins 'गङ्गा + उदकम्'?",
          "question_hi": "'गङ्गा + उदकम्' में कौन-सी सन्धि होती है?",
          "options_en": ["सवर्ण दीर्घ", "गुण", "वृद्धि", "यण"],
          "options_hi": ["सवर्ण दीर्घ", "गुण", "वृद्धि", "यण"],
          "answer": "सवर्ण दीर्घ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "What is the feminine form of 'गुरु'?",
          "question_hi": "'गुरु' का स्त्रीलिंग रूप क्या है?",
          "options_en": ["गुर्वी", "गुरुणी", "गुरुपत्नी", "आचार्या"],
          "options_hi": ["गुर्वी", "गुरुणी", "गुरुपत्नी", "आचार्या"],
          "answer": "गुर्वी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "Which chapter in Class 10 NCERT discusses 'अपठित-अवबोधनम्'?",
          "question_hi": "कक्षा 10 NCERT में कौन-सा अध्याय 'अपठित-अवबोधनम्' पर चर्चा करता है?",
          "options_en": ["Chapter 1", "Chapter 5", "Chapter 8", "Chapter 10"],
          "options_hi": ["अध्याय 1", "अध्याय 5", "अध्याय 8", "अध्याय 10"],
          "answer": "Chapter 8",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "What is the meaning of 'विद्याधनं सर्वधनप्रधानम्'?",
          "question_hi": "'विद्याधनं सर्वधनप्रधानम्' का अर्थ क्या है?",
          "options_en": ["Knowledge is supreme wealth", "Money is power", "Health is wealth", "God is great"],
          "options_hi": ["ज्ञान सर्वश्रेष्ठ धन है", "धन ही शक्ति है", "स्वास्थ्य ही धन है", "ईश्वर महान है"],
          "answer": "Knowledge is supreme wealth",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "Which of these is a 'तिङन्त' (finite verb)?",
          "question_hi": "इनमें से कौन 'तिङन्त' (फाइनाइट क्रिया) है?",
          "options_en": ["पठति", "पठन्", "पठितुम्", "पाठकः"],
          "options_hi": ["पठति", "पठन्", "पठितुम्", "पाठकः"],
          "answer": "पठति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "What is the Sanskrit word for 'sun'?",
          "question_hi": "'सूर्य' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["सूर्यः", "आदित्यः", "रविः", "All of these"],
          "options_hi": ["सूर्यः", "आदित्यः", "रविः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "Which vibhakti is used in 'वनात्'?",
          "question_hi": "'वनात्' में कौन-सी विभक्ति प्रयुक्त हुई है?",
          "options_en": ["पञ्चमी", "षष्ठी", "तृतीया", "चतुर्थी"],
          "options_hi": ["पञ्चमी", "षष्ठी", "तृतीया", "चतुर्थी"],
          "answer": "पञ्चमी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "What is the plural form of 'नदी' (river)?",
          "question_hi": "'नदी' (नदी) का बहुवचन रूप क्या है?",
          "options_en": ["नद्यः", "नदीषु", "नदीनाम्", "नदीभिः"],
          "options_hi": ["नद्यः", "नदीषु", "नदीनाम्", "नदीभिः"],
          "answer": "नद्यः",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "Which chapter discusses 'वैश्विकं बन्धुत्वम्' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'वैश्विकं बन्धुत्वम्' पर चर्चा करता है?",
          "options_en": ["Chapter 3", "Chapter 6", "Chapter 9", "Chapter 12"],
          "options_hi": ["अध्याय 3", "अध्याय 6", "अध्याय 9", "अध्याय 12"],
          "answer": "Chapter 6",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "What is the meaning of 'योगः कर्मसु कौशलम्'?",
          "question_hi": "'योगः कर्मसु कौशलम्' का अर्थ क्या है?",
          "options_en": ["Yoga is skill in action", "Work is worship", "Knowledge is power", "Unity is strength"],
          "options_hi": ["कर्म में कुशलता ही योग है", "कर्म ही पूजा है", "ज्ञान ही शक्ति है", "एकता में बल है"],
          "answer": "Yoga is skill in action",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "Which of these is an 'अव्यय' (indeclinable)?",
          "question_hi": "इनमें से कौन 'अव्यय' (अव्यय) है?",
          "options_en": ["इव", "पुस्तकम्", "फलानि", "गच्छति"],
          "options_hi": ["इव", "पुस्तकम्", "फलानि", "गच्छति"],
          "answer": "इव",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "What is the Sanskrit word for 'peace'?",
          "question_hi": "'शांति' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["शान्तिः", "प्रशान्तिः", "सान्त्वनम्", "All of these"],
          "options_hi": ["शान्तिः", "प्रशान्तिः", "सान्त्वनम्", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "Which sandhi is in 'तत् + एव = तदेव'?",
          "question_hi": "'तत् + एव = तदेव' में कौन-सी सन्धि है?",
          "options_en": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "None"],
          "options_hi": ["व्यंजन सन्धि", "स्वर सन्धि", "विसर्ग सन्धि", "कोई नहीं"],
          "answer": "व्यंजन सन्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "What is the meaning of 'अहं भारतदेशस्य नागरिकः अस्मि'?",
          "question_hi": "'अहं भारतदेशस्य नागरिकः अस्मि' का अर्थ क्या है?",
          "options_en": ["I am a citizen of India", "I love India", "India is great", "I live in India"],
          "options_hi": ["मैं भारत का नागरिक हूँ", "मुझे भारत से प्यार है", "भारत महान है", "मैं भारत में रहता हूँ"],
          "answer": "I am a citizen of India",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "Which chapter discusses 'संस्कृतसाहित्ये महिलाः' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'संस्कृतसाहित्ये महिलाः' पर चर्चा करता है?",
          "options_en": ["Chapter 4", "Chapter 7", "Chapter 11", "Chapter 14"],
          "options_hi": ["अध्याय 4", "अध्याय 7", "अध्याय 11", "अध्याय 14"],
          "answer": "Chapter 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "What is the Sanskrit word for 'computer'?",
          "question_hi": "'कंप्यूटर' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["संगणकः", "अभिकलकः", "Both", "Neither"],
          "options_hi": ["संगणकः", "अभिकलकः", "दोनों", "कोई नहीं"],
          "answer": "Both",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "Which of these is a 'कर्मधारय समास'?",
          "question_hi": "इनमें से कौन 'कर्मधारय समास' है?",
          "options_en": ["नीलकमलम्", "राजपुरुषः", "पञ्चवटी", "None"],
          "options_hi": ["नीलकमलम्", "राजपुरुषः", "पञ्चवटी", "कोई नहीं"],
          "answer": "नीलकमलम्",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "What is the meaning of 'विद्यां ददाति विनयम्'?",
          "question_hi": "'विद्यां ददाति विनयम्' का अर्थ क्या है?",
          "options_en": ["Knowledge gives humility", "Education is power", "Learn with discipline", "Wisdom is eternal"],
          "options_hi": ["ज्ञान विनय देता है", "शिक्षा शक्ति है", "अनुशासन से सीखो", "ज्ञान शाश्वत है"],
          "answer": "Knowledge gives humility",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "Which vibhakti is used in 'ग्रामाय'?",
          "question_hi": "'ग्रामाय' में कौन-सी विभक्ति है?",
          "options_en": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "options_hi": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "answer": "चतुर्थी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is the Sanskrit word for 'environment'?",
          "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["पर्यावरणम्", "वातावरणम्", "परिसरः", "All of these"],
          "options_hi": ["पर्यावरणम्", "वातावरणम्", "परिसरः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which chapter discusses 'भारतमहिमा' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'भारतमहिमा' पर चर्चा करता है?",
          "options_en": ["Chapter 2", "Chapter 5", "Chapter 8", "Chapter 10"],
          "options_hi": ["अध्याय 2", "अध्याय 5", "अध्याय 8", "अध्याय 10"],
          "answer": "Chapter 5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is the meaning of 'धर्मो रक्षति रक्षितः'?",
          "question_hi": "'धर्मो रक्षति रक्षितः' का अर्थ क्या है?",
          "options_en": ["Dharma protects those who protect it", "Truth is God", "Help the needy", "Work is worship"],
          "options_hi": ["धर्म उसकी रक्षा करता है जो उसकी रक्षा करता है", "सत्य ही ईश्वर है", "जरूरतमंदों की मदद करो", "कर्म ही पूजा है"],
          "answer": "Dharma protects those who protect it",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which of these is a 'द्वन्द्व समास'?",
          "question_hi": "इनमें से कौन 'द्वन्द्व समास' है?",
          "options_en": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "None"],
          "options_hi": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "कोई नहीं"],
          "answer": "मातापितरौ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the Sanskrit word for 'teacher'?",
          "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["गुरुः", "आचार्यः", "अध्यापकः", "All of these"],
          "options_hi": ["गुरुः", "आचार्यः", "अध्यापकः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        
            {
              "num": 26,
              "question_en": "Which of these is the correct sandhi of 'देव + इच्छा'?",
              "question_hi": "'देव + इच्छा' की सन्धि क्या होगी?",
              "options_en": ["देवेच्छा", "देवच्छा", "देवैच्छा", "देव्यच्छा"],
              "options_hi": ["देवेच्छा", "देवच्छा", "देवैच्छा", "देव्यच्छा"],
              "answer": "देवेच्छा",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 27,
              "question_en": "What is the Sanskrit word for 'patience'?",
              "question_hi": "'धैर्य' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["धृतिः", "क्षमा", "सहनशीलता", "All of these"],
              "options_hi": ["धृतिः", "क्षमा", "सहनशीलता", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 28,
              "question_en": "Which chapter discusses 'विदुरनीति' in NCERT?",
              "question_hi": "NCERT में कौन-सा अध्याय 'विदुरनीति' पर चर्चा करता है?",
              "options_en": ["Chapter 6", "Chapter 9", "Chapter 12", "Chapter 15"],
              "options_hi": ["अध्याय 6", "अध्याय 9", "अध्याय 12", "अध्याय 15"],
              "answer": "Chapter 12",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 29,
              "question_en": "What is the meaning of 'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः'?",
              "question_hi": "'उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः' का अर्थ क्या है?",
              "options_en": ["Work succeeds through effort, not wishes", "Time is precious", "Knowledge is power", "Unity is strength"],
              "options_hi": ["कार्य परिश्रम से सिद्ध होते हैं, इच्छाओं से नहीं", "समय बहुमूल्य है", "ज्ञान ही शक्ति है", "एकता में बल है"],
              "answer": "Work succeeds through effort, not wishes",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 30,
              "question_en": "Which of these is a 'तद्धित' formation?",
              "question_hi": "इनमें से कौन 'तद्धित' रूप है?",
              "options_en": ["लौहित्यम्", "पाठकः", "गम्यम्", "All of these"],
              "options_hi": ["लौहित्यम्", "पाठकः", "गम्यम्", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 31,
              "question_en": "What is the Sanskrit word for 'internet'?",
              "question_hi": "'इंटरनेट' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "All of these"],
              "options_hi": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 32,
              "question_en": "Which vibhakti is used in 'फलैः'?",
              "question_hi": "'फलैः' में कौन-सी विभक्ति है?",
              "options_en": ["तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी"],
              "options_hi": ["तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी"],
              "answer": "तृतीया",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 33,
              "question_en": "What is the meaning of 'अन्नदाता सुखी भव'?",
              "question_hi": "'अन्नदाता सुखी भव' का अर्थ क्या है?",
              "options_en": ["May the food-giver be happy", "Food is life", "Share your food", "Health is wealth"],
              "options_hi": ["अन्न देने वाला सुखी हो", "अन्न ही जीवन है", "अपना भोजन बाँटो", "स्वास्थ्य ही धन है"],
              "answer": "May the food-giver be happy",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 34,
              "question_en": "Which chapter discusses 'कीर्तिः ते सा भविष्यति' in NCERT?",
              "question_hi": "NCERT में कौन-सा अध्याय 'कीर्तिः ते सा भविष्यति' पर चर्चा करता है?",
              "options_en": ["Chapter 7", "Chapter 10", "Chapter 13", "Chapter 16"],
              "options_hi": ["अध्याय 7", "अध्याय 10", "अध्याय 13", "अध्याय 16"],
              "answer": "Chapter 10",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 35,
              "question_en": "What is the Sanskrit word for 'democracy'?",
              "question_hi": "'लोकतंत्र' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "All of these"],
              "options_hi": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 36,
              "question_en": "Which of these is a 'भाववाच्य' (passive voice) example?",
              "question_hi": "इनमें से कौन 'भाववाच्य' (कर्मवाच्य) का उदाहरण है?",
              "options_en": ["मया पठ्यते", "अहं पठामि", "त्वं पठसि", "सः पठति"],
              "options_hi": ["मया पठ्यते", "अहं पठामि", "त्वं पठसि", "सः पठति"],
              "answer": "मया पठ्यते",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 37,
              "question_en": "What is the meaning of 'स्वस्तिप्रजाभ्यः परिपालयंताम्'?",
              "question_hi": "'स्वस्तिप्रजाभ्यः परिपालयंताम्' का अर्थ क्या है?",
              "options_en": ["May the people be protected and prosper", "God bless all", "Truth prevails", "Knowledge is light"],
              "options_hi": ["प्रजाओं का कल्याण और रक्षा हो", "ईश्वर सबका भला करे", "सत्य की जीत होती है", "ज्ञान प्रकाश है"],
              "answer": "May the people be protected and prosper",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 38,
              "question_en": "Which sandhi is in 'हरिः + अयम् = हरिरयम्'?",
              "question_hi": "'हरिः + अयम् = हरिरयम्' में कौन-सी सन्धि है?",
              "options_en": ["विसर्ग सन्धि", "स्वर सन्धि", "व्यंजन सन्धि", "None"],
              "options_hi": ["विसर्ग सन्धि", "स्वर सन्धि", "व्यंजन सन्धि", "कोई नहीं"],
              "answer": "विसर्ग सन्धि",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 39,
              "question_en": "What is the Sanskrit word for 'mobile phone'?",
              "question_hi": "'मोबाइल फोन' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["चलदूरभाषः", "करयन्त्रम्", "भ्रमरः", "1 and 2"],
              "options_hi": ["चलदूरभाषः", "करयन्त्रम्", "भ्रमरः", "1 और 2"],
              "answer": "1 and 2",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 40,
              "question_en": "Which chapter discusses 'सौरभम्' in NCERT?",
              "question_hi": "NCERT में कौन-सा अध्याय 'सौरभम्' पर चर्चा करता है?",
              "options_en": ["Chapter 8", "Chapter 11", "Chapter 14", "Chapter 17"],
              "options_hi": ["अध्याय 8", "अध्याय 11", "अध्याय 14", "अध्याय 17"],
              "answer": "Chapter 14",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 41,
              "question_en": "What is the meaning of 'तमसो मा ज्योतिर्गमय'?",
              "question_hi": "'तमसो मा ज्योतिर्गमय' का अर्थ क्या है?",
              "options_en": ["Lead me from darkness to light", "God is light", "Knowledge removes darkness", "Light the lamp"],
              "options_hi": ["अंधकार से प्रकाश की ओर ले चलो", "ईश्वर प्रकाश है", "ज्ञान अंधकार मिटाता है", "दीप जलाओ"],
              "answer": "Lead me from darkness to light",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 42,
              "question_en": "Which of these is a 'नपुंसकलिंग' (neuter gender) word?",
              "question_hi": "इनमें से कौन 'नपुंसकलिंग' शब्द है?",
              "options_en": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
              "options_hi": ["फलम्", "विद्यालयः", "नदी", "गुरुः"],
              "answer": "फलम्",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 43,
              "question_en": "What is the Sanskrit word for 'hospital'?",
              "question_hi": "'अस्पताल' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "All of these"],
              "options_hi": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 44,
              "question_en": "Which vibhakti is used in 'ग्रामस्य'?",
              "question_hi": "'ग्रामस्य' में कौन-सी विभक्ति है?",
              "options_en": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
              "options_hi": ["षष्ठी", "चतुर्थी", "तृतीया", "द्वितीया"],
              "answer": "षष्ठी",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 45,
              "question_en": "What is the meaning of 'विद्यार्थी'?",
              "question_hi": "'विद्यार्थी' का अर्थ क्या है?",
              "options_en": ["Student (seeker of knowledge)", "Teacher", "Scholar", "Wise person"],
              "options_hi": ["छात्र (ज्ञान का चाहने वाला)", "शिक्षक", "विद्वान", "बुद्धिमान व्यक्ति"],
              "answer": "Student (seeker of knowledge)",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 46,
              "question_en": "Which chapter discusses 'भूकम्पविभीषिका' in NCERT?",
              "question_hi": "NCERT में कौन-सा अध्याय 'भूकम्पविभीषिका' पर चर्चा करता है?",
              "options_en": ["Chapter 9", "Chapter 12", "Chapter 15", "Chapter 18"],
              "options_hi": ["अध्याय 9", "अध्याय 12", "अध्याय 15", "अध्याय 18"],
              "answer": "Chapter 15",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 47,
              "question_en": "What is the Sanskrit word for 'science'?",
              "question_hi": "'विज्ञान' के लिए संस्कृत शब्द क्या है?",
              "options_en": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "All of these"],
              "options_hi": ["विज्ञानम्", "शास्त्रम्", "वैज्ञानिकी", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 48,
              "question_en": "Which of these is a 'कृदन्त' (verbal derivative)?",
              "question_hi": "इनमें से कौन 'कृदन्त' (कृदंत) है?",
              "options_en": ["गम्यम्", "पाठकः", "कर्तव्यम्", "All of these"],
              "options_hi": ["गम्यम्", "पाठकः", "कर्तव्यम्", "ये सभी"],
              "answer": "All of these",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 49,
              "question_en": "What is the meaning of 'सर्वे भवन्तु सुखिनः'?",
              "question_hi": "'सर्वे भवन्तु सुखिनः' का अर्थ क्या है?",
              "options_en": ["May all be happy", "Unity in diversity", "Peace for all", "Knowledge for all"],
              "options_hi": ["सभी सुखी हों", "विविधता में एकता", "सभी के लिए शांति", "सभी के लिए ज्ञान"],
              "answer": "May all be happy",
              "attempted": false,
              "selected": ""
            },
            {
              "num": 50,
              "question_en": "Which chapter discusses 'मणिकर्णिका' in NCERT?",
              "question_hi": "NCERT में कौन-सा अध्याय 'मणिकर्णिका' पर चर्चा करता है?",
              "options_en": ["Chapter 10", "Chapter 13", "Chapter 16", "Chapter 19"],
              "options_hi": ["अध्याय 10", "अध्याय 13", "अध्याय 16", "अध्याय 19"],
              "answer": "Chapter 13",
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
