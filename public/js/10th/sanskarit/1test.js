const questions = [
    
        {
          "num": 1,
          "question_en": "What is the meaning of the Sanskrit word 'विद्या'?",
          "question_hi": "संस्कृत शब्द 'विद्या' का अर्थ क्या है?",
          "options_en": ["Wealth", "Knowledge", "Power", "Health"],
          "options_hi": ["धन", "ज्ञान", "शक्ति", "स्वास्थ्य"],
          "answer": "Knowledge",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 2,
          "question_en": "Which case is used for the subject in a Sanskrit sentence?",
          "question_hi": "संस्कृत वाक्य में कर्ता के लिए कौन-सा कारक प्रयुक्त होता है?",
          "options_en": ["Nominative", "Accusative", "Instrumental", "Dative"],
          "options_hi": ["कर्ता कारक", "कर्म कारक", "करण कारक", "संप्रदान कारक"],
          "answer": "Nominative",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 3,
          "question_en": "Who is the author of 'मेघदूतम्'?",
          "question_hi": "'मेघदूतम्' के रचयिता कौन हैं?",
          "options_en": ["Kalidasa", "Bhasa", "Bhavabhuti", "Banabhatta"],
          "options_hi": ["कालिदास", "भास", "भवभूति", "बाणभट्ट"],
          "answer": "Kalidasa",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 4,
          "question_en": "What is the plural form of 'गजः' (elephant)?",
          "question_hi": "'गजः' (हाथी) का बहुवचन रूप क्या है?",
          "options_en": ["गजाः", "गजौ", "गजान्", "गजेषु"],
          "options_hi": ["गजाः", "गजौ", "गजान्", "गजेषु"],
          "answer": "गजाः",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 5,
          "question_en": "Which tense is used in 'रामः पठति'?",
          "question_hi": "'रामः पठति' में कौन-सा काल प्रयुक्त हुआ है?",
          "options_en": ["Present", "Past", "Future", "Imperative"],
          "options_hi": ["वर्तमान", "भूत", "भविष्य", "आज्ञार्थ"],
          "answer": "Present",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 6,
          "question_en": "What is the feminine form of 'शिष्य' (student)?",
          "question_hi": "'शिष्य' (छात्र) का स्त्रीलिंग रूप क्या है?",
          "options_en": ["शिष्या", "शिष्यी", "शिष्याणी", "शिष्यिका"],
          "options_hi": ["शिष्या", "शिष्यी", "शिष्याणी", "शिष्यिका"],
          "answer": "शिष्या",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 7,
          "question_en": "Which sandhi joins 'सत् + जनः'?",
          "question_hi": "'सत् + जनः' में कौन-सी सन्धि होती है?",
          "options_en": ["व्यंजन सन्धि", "गुण सन्धि", "वृद्धि सन्धि", "यण सन्धि"],
          "options_hi": ["व्यंजन सन्धि", "गुण सन्धि", "वृद्धि सन्धि", "यण सन्धि"],
          "answer": "व्यंजन सन्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 8,
          "question_en": "What is the root verb (धातु) in 'गच्छामि'?",
          "question_hi": "'गच्छामि' में धातु क्या है?",
          "options_en": ["गम्", "गच्छ", "गम", "गन्तुम्"],
          "options_hi": ["गम्", "गच्छ", "गम", "गन्तुम्"],
          "answer": "गम्",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 9,
          "question_en": "Which chapter in Class 10 NCERT Sanskrit discusses 'शुचिपर्यावरणम्'?",
          "question_hi": "कक्षा 10 NCERT संस्कृत में कौन-सा अध्याय 'शुचिपर्यावरणम्' पर चर्चा करता है?",
          "options_en": ["Chapter 2", "Chapter 5", "Chapter 7", "Chapter 10"],
          "options_hi": ["अध्याय 2", "अध्याय 5", "अध्याय 7", "अध्याय 10"],
          "answer": "Chapter 5",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 10,
          "question_en": "What is the meaning of 'अहं भारतीयः अस्मि'?",
          "question_hi": "'अहं भारतीयः अस्मि' का अर्थ क्या है?",
          "options_en": ["I am Indian", "I am happy", "I am student", "I am teacher"],
          "options_hi": ["मैं भारतीय हूँ", "मैं खुश हूँ", "मैं छात्र हूँ", "मैं शिक्षक हूँ"],
          "answer": "I am Indian",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 11,
          "question_en": "Which vibhakti (case) is used in 'रामाय'?",
          "question_hi": "'रामाय' में कौन-सी विभक्ति प्रयुक्त हुई है?",
          "options_en": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "options_hi": ["चतुर्थी", "षष्ठी", "सप्तमी", "तृतीया"],
          "answer": "चतुर्थी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 12,
          "question_en": "What is the opposite of 'शुभम्' (good) in Sanskrit?",
          "question_hi": "संस्कृत में 'शुभम्' (अच्छा) का विलोम क्या है?",
          "options_en": ["अशुभम्", "प्रशुभम्", "दुःशुभम्", "निर्शुभम्"],
          "options_hi": ["अशुभम्", "प्रशुभम्", "दुःशुभम्", "निर्शुभम्"],
          "answer": "अशुभम्",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 13,
          "question_en": "Which meter is used in most shlokas of the Bhagavad Gita?",
          "question_hi": "भगवद्गीता के अधिकांश श्लोकों में कौन-सा छंद प्रयुक्त होता है?",
          "options_en": ["Anushtup", "Tristup", "Jagati", "Gayatri"],
          "options_hi": ["अनुष्टुप", "त्रिष्टुप", "जगती", "गायत्री"],
          "answer": "Anushtup",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 14,
          "question_en": "What is the Sanskrit word for 'teacher'?",
          "question_hi": "'शिक्षक' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["गुरुः", "आचार्यः", "अध्यापकः", "All of these"],
          "options_hi": ["गुरुः", "आचार्यः", "अध्यापकः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 15,
          "question_en": "Which of these is an indeclinable (अव्यय)?",
          "question_hi": "इनमें से कौन अव्यय है?",
          "options_en": ["च", "वनम्", "पुस्तकम्", "फलानि"],
          "options_hi": ["च", "वनम्", "पुस्तकम्", "फलानि"],
          "answer": "च",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 16,
          "question_en": "What is the sandhi of 'तत् + अपि'?",
          "question_hi": "'तत् + अपि' की सन्धि क्या होगी?",
          "options_en": ["तदपि", "तत्तपि", "तदपि", "ततपि"],
          "options_hi": ["तदपि", "तत्तपि", "तदपि", "ततपि"],
          "answer": "तदपि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 17,
          "question_en": "Which chapter discusses 'व्याघ्रपथिककथा' in NCERT Class 10?",
          "question_hi": "NCERT कक्षा 10 में कौन-सा अध्याय 'व्याघ्रपथिककथा' पर चर्चा करता है?",
          "options_en": ["Chapter 3", "Chapter 6", "Chapter 9", "Chapter 12"],
          "options_hi": ["अध्याय 3", "अध्याय 6", "अध्याय 9", "अध्याय 12"],
          "answer": "Chapter 12",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 18,
          "question_en": "What is the Sanskrit word for 'computer'?",
          "question_hi": "'कंप्यूटर' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["संगणकः", "यन्त्रकः", "अभिकलित्रम्", "Both 1 and 3"],
          "options_hi": ["संगणकः", "यन्त्रकः", "अभिकलित्रम्", "1 और 3 दोनों"],
          "answer": "Both 1 and 3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 19,
          "question_en": "Which of these is a compound word (समास)?",
          "question_hi": "इनमें से कौन समास है?",
          "options_en": ["राजपुत्रः", "सुखं च", "विद्यालये", "पठन्ति"],
          "options_hi": ["राजपुत्रः", "सुखं च", "विद्यालये", "पठन्ति"],
          "answer": "राजपुत्रः",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 20,
          "question_en": "What type of samas is 'राजपुत्रः'?",
          "question_hi": "'राजपुत्रः' किस प्रकार का समास है?",
          "options_en": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "अव्ययीभाव"],
          "options_hi": ["तत्पुरुष", "कर्मधारय", "द्वन्द्व", "अव्ययीभाव"],
          "answer": "तत्पुरुष",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 21,
          "question_en": "What is the meaning of 'सत्यमेव जयते'?",
          "question_hi": "'सत्यमेव जयते' का अर्थ क्या है?",
          "options_en": ["Truth alone triumphs", "God is great", "Work is worship", "Knowledge is power"],
          "options_hi": ["सत्य की ही जीत होती है", "भगवान महान है", "कर्म ही पूजा है", "ज्ञान ही शक्ति है"],
          "answer": "Truth alone triumphs",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 22,
          "question_en": "Which verb form is 'पठितुम्'?",
          "question_hi": "'पठितुम्' किस क्रिया रूप है?",
          "options_en": ["Infinitive", "Past Participle", "Present Tense", "Imperative"],
          "options_hi": ["तुमुन् प्रत्यय", "भूतकालिक कृदन्त", "वर्तमान काल", "आज्ञार्थ"],
          "answer": "Infinitive",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 23,
          "question_en": "What is the Sanskrit word for 'hospital'?",
          "question_hi": "'अस्पताल' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "All of these"],
          "options_hi": ["चिकित्सालयः", "आरोग्यभवनम्", "रुग्णालयः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 24,
          "question_en": "Which of these is a 'भूतकाल' (past tense) form?",
          "question_hi": "इनमें से कौन 'भूतकाल' (भूत काल) रूप है?",
          "options_en": ["अपठत्", "पठति", "पठिष्यति", "पठ"],
          "options_hi": ["अपठत्", "पठति", "पठिष्यति", "पठ"],
          "answer": "अपठत्",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 25,
          "question_en": "What is the feminine of 'गुरुः'?",
          "question_hi": "'गुरुः' का स्त्रीलिंग रूप क्या है?",
          "options_en": ["गुर्वी", "गुरुः", "गुरू", "गुरुणी"],
          "options_hi": ["गुर्वी", "गुरुः", "गुरू", "गुरुणी"],
          "answer": "गुर्वी",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 26,
          "question_en": "Which sandhi is in 'न + अस्ति = नास्ति'?",
          "question_hi": "'न + अस्ति = नास्ति' में कौन-सी सन्धि है?",
          "options_en": ["स्वर सन्धि", "व्यंजन सन्धि", "विसर्ग सन्धि", "None"],
          "options_hi": ["स्वर सन्धि", "व्यंजन सन्धि", "विसर्ग सन्धि", "कोई नहीं"],
          "answer": "स्वर सन्धि",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 27,
          "question_en": "What is the meaning of 'यत्र विश्वं भवत्येकनीडम्'?",
          "question_hi": "'यत्र विश्वं भवत्येकनीडम्' का अर्थ क्या है?",
          "options_en": ["Where world becomes one nest", "God is one", "Truth is great", "Unity in diversity"],
          "options_hi": ["जहाँ विश्व एक घोंसला बन जाता है", "ईश्वर एक है", "सत्य महान है", "विविधता में एकता"],
          "answer": "Where world becomes one nest",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 28,
          "question_en": "Which chapter discusses 'सौहार्दं प्रकृतेः शोभा' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'सौहार्दं प्रकृतेः शोभा' पर चर्चा करता है?",
          "options_en": ["Chapter 4", "Chapter 8", "Chapter 11", "Chapter 14"],
          "options_hi": ["अध्याय 4", "अध्याय 8", "अध्याय 11", "अध्याय 14"],
          "answer": "Chapter 4",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 29,
          "question_en": "What is the Sanskrit word for 'science'?",
          "question_hi": "'विज्ञान' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["विज्ञानम्", "शास्त्रम्", "Both", "Neither"],
          "options_hi": ["विज्ञानम्", "शास्त्रम्", "दोनों", "कोई नहीं"],
          "answer": "Both",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 30,
          "question_en": "Which of these is a 'कृदन्त' (verbal derivative)?",
          "question_hi": "इनमें से कौन 'कृदन्त' (कृदंत) है?",
          "options_en": ["गन्तव्यम्", "गच्छति", "गमनम्", "1 and 3"],
          "options_hi": ["गन्तव्यम्", "गच्छति", "गमनम्", "1 और 3"],
          "answer": "1 and 3",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 31,
          "question_en": "What is the meaning of 'वसुधैव कुटुम्बकम्'?",
          "question_hi": "'वसुधैव कुटुम्बकम्' का अर्थ क्या है?",
          "options_en": ["World is one family", "Unity is strength", "Peace for all", "Knowledge is supreme"],
          "options_hi": ["विश्व एक परिवार है", "एकता में बल है", "सभी के लिए शांति", "ज्ञान सर्वोपरि है"],
          "answer": "World is one family",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 32,
          "question_en": "Which of these is a pronoun (सर्वनाम)?",
          "question_hi": "इनमें से कौन सर्वनाम है?",
          "options_en": ["सः", "रामः", "फलम्", "पठति"],
          "options_hi": ["सः", "रामः", "फलम्", "पठति"],
          "answer": "सः",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 33,
          "question_en": "What is the dual form of 'अश्वः' (horse)?",
          "question_hi": "'अश्वः' (घोड़ा) का द्विवचन रूप क्या है?",
          "options_en": ["अश्वौ", "अश्वाः", "अश्वान्", "अश्वेषु"],
          "options_hi": ["अश्वौ", "अश्वाः", "अश्वान्", "अश्वेषु"],
          "answer": "अश्वौ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 34,
          "question_en": "Which vibhakti is in 'रामेण'?",
          "question_hi": "'रामेण' में कौन-सी विभक्ति है?",
          "options_en": ["तृतीया", "प्रथमा", "षष्ठी", "चतुर्थी"],
          "options_hi": ["तृतीया", "प्रथमा", "षष्ठी", "चतुर्थी"],
          "answer": "तृतीया",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 35,
          "question_en": "What is the Sanskrit word for 'tree'?",
          "question_hi": "'पेड़' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["वृक्षः", "तरुः", "पादपः", "All of these"],
          "options_hi": ["वृक्षः", "तरुः", "पादपः", "ये सभी"],
          "answer": "All of these",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 36,
          "question_en": "Which chapter discusses 'जननी तुल्यवत्सला' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'जननी तुल्यवत्सला' पर चर्चा करता है?",
          "options_en": ["Chapter 1", "Chapter 3", "Chapter 7", "Chapter 9"],
          "options_hi": ["अध्याय 1", "अध्याय 3", "अध्याय 7", "अध्याय 9"],
          "answer": "Chapter 7",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 37,
          "question_en": "What is the meaning of 'अतिथि देवो भव'?",
          "question_hi": "'अतिथि देवो भव' का अर्थ क्या है?",
          "options_en": ["Guest is God", "God is great", "Respect elders", "Help others"],
          "options_hi": ["अतिथि देवता के समान है", "ईश्वर महान है", "बड़ों का सम्मान करो", "दूसरों की मदद करो"],
          "answer": "Guest is God",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 38,
          "question_en": "Which of these is a 'तद्धित' (secondary derivative)?",
          "question_hi": "इनमें से कौन 'तद्धित' (तद्धित) है?",
          "options_en": ["लौहित्यम्", "पाठकः", "गम्यम्", "All"],
          "options_hi": ["लौहित्यम्", "पाठकः", "गम्यम्", "सभी"],
          "answer": "All",
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
          "question_en": "Which of these is a 'भविष्यत्काल' (future tense) form?",
          "question_hi": "इनमें से कौन 'भविष्यत्काल' (भविष्य काल) रूप है?",
          "options_en": ["पठिष्यति", "अपठत्", "पठति", "पठ"],
          "options_hi": ["पठिष्यति", "अपठत्", "पठति", "पठ"],
          "answer": "पठिष्यति",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 41,
          "question_en": "What is the meaning of 'अयं निजः परो वेति गणना लघुचेतसाम्'?",
          "question_hi": "'अयं निजः परो वेति गणना लघुचेतसाम्' का अर्थ क्या है?",
          "options_en": ["Small minds discriminate 'mine' and 'yours'", "God is one", "Truth wins", "Knowledge is power"],
          "options_hi": ["छोटे मन 'अपना' और 'पराया' का भेद करते हैं", "ईश्वर एक है", "सत्य की जीत होती है", "ज्ञान ही शक्ति है"],
          "answer": "Small minds discriminate 'mine' and 'yours'",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 42,
          "question_en": "Which chapter discusses 'शास्त्रकाराः' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'शास्त्रकाराः' पर चर्चा करता है?",
          "options_en": ["Chapter 6", "Chapter 8", "Chapter 10", "Chapter 13"],
          "options_hi": ["अध्याय 6", "अध्याय 8", "अध्याय 10", "अध्याय 13"],
          "answer": "Chapter 8",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 43,
          "question_en": "What is the Sanskrit word for 'internet'?",
          "question_hi": "'इंटरनेट' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "All"],
          "options_hi": ["अन्तर्जालम्", "जालम्", "विश्वजालम्", "सभी"],
          "answer": "All",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 44,
          "question_en": "Which of these is a 'द्वन्द्व समास'?",
          "question_hi": "इनमें से कौन 'द्वन्द्व समास' है?",
          "options_en": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "None"],
          "options_hi": ["मातापितरौ", "राजपुरुषः", "यथाशक्ति", "कोई नहीं"],
          "answer": "मातापितरौ",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 45,
          "question_en": "What is the Sanskrit word for 'environment'?",
          "question_hi": "'पर्यावरण' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["पर्यावरणम्", "परिसरः", "वातावरणम्", "All"],
          "options_hi": ["पर्यावरणम्", "परिसरः", "वातावरणम्", "सभी"],
          "answer": "All",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 46,
          "question_en": "Which chapter discusses 'सुभाषितानि' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'सुभाषितानि' पर चर्चा करता है?",
          "options_en": ["Chapter 2", "Chapter 5", "Chapter 9", "Chapter 11"],
          "options_hi": ["अध्याय 2", "अध्याय 5", "अध्याय 9", "अध्याय 11"],
          "answer": "Chapter 11",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 47,
          "question_en": "What is the meaning of 'सा विद्या या विमुक्तये'?",
          "question_hi": "'सा विद्या या विमुक्तये' का अर्थ क्या है?",
          "options_en": ["Knowledge that liberates", "God is knowledge", "Learn everyday", "Wisdom is power"],
          "options_hi": ["ज्ञान जो मुक्ति दिलाए", "ईश्वर ज्ञान है", "प्रतिदिन सीखो", "बुद्धि ही शक्ति है"],
          "answer": "Knowledge that liberates",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 48,
          "question_en": "Which of these is a 'कर्मधारय समास'?",
          "question_hi": "इनमें से कौन 'कर्मधारय समास' है?",
          "options_en": ["नीलोत्पलम्", "राजपुरुषः", "पञ्चवटी", "None"],
          "options_hi": ["नीलोत्पलम्", "राजपुरुषः", "पञ्चवटी", "कोई नहीं"],
          "answer": "नीलोत्पलम्",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 49,
          "question_en": "What is the Sanskrit word for 'democracy'?",
          "question_hi": "'लोकतंत्र' के लिए संस्कृत शब्द क्या है?",
          "options_en": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "All"],
          "options_hi": ["प्रजातन्त्रम्", "लोकतन्त्रम्", "गणतन्त्रम्", "सभी"],
          "answer": "All",
          "attempted": false,
          "selected": ""
        },
        {
          "num": 50,
          "question_en": "Which chapter discusses 'प्राणेभ्योऽपि प्रियः सुहृद्' in NCERT?",
          "question_hi": "NCERT में कौन-सा अध्याय 'प्राणेभ्योऽपि प्रियः सुहृद्' पर चर्चा करता है?",
          "options_en": ["Chapter 10", "Chapter 12", "Chapter 14", "Chapter 15"],
          "options_hi": ["अध्याय 10", "अध्याय 12", "अध्याय 14", "अध्याय 15"],
          "answer": "Chapter 14",
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
