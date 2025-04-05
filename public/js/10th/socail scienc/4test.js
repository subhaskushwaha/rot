const questions = [

    {
        "num": 1,
        "question_en": "The 'Great Depression' occurred in which decade?",
        "question_hi": "'महामंदी' किस दशक में हुई?",
        "options_en": ["1910s", "1920s", "1930s", "1940s"],
        "options_hi": ["1910 के दशक", "1920 के दशक", "1930 के दशक", "1940 के दशक"],
        "answer": "1930s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of the following states is a major producer of jute in India?",
        "question_hi": "निम्नलिखित में से कौन सा राज्य भारत में जूट का एक प्रमुख उत्पादक है?",
        "options_en": ["Bihar", "Odisha", "West Bengal", "Assam"],
        "options_hi": ["बिहार", "ओडिशा", "पश्चिम बंगाल", "असम"],
        "answer": "West Bengal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which of the following is a feature of a 'federal' form of government?",
        "question_hi": "निम्नलिखित में से कौन सी 'संघीय' प्रकार की सरकार की विशेषता है?",
        "options_en": ["Single central authority", "Concentration of power", "Division of powers between different levels of government", "Absence of a written constitution"],
        "options_hi": ["एकल केंद्रीय प्राधिकरण", "शक्ति का संकेंद्रण", "सरकार के विभिन्न स्तरों के बीच शक्तियों का विभाजन", "लिखित संविधान का अभाव"],
        "answer": "Division of powers between different levels of government",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which of the following is a 'renewable' resource?",
        "question_hi": "निम्नलिखित में से कौन सा 'नवीकरणीय' संसाधन है?",
        "options_en": ["Coal", "Petroleum", "Natural gas", "Solar energy"],
        "options_hi": ["कोयला", "पेट्रोलियम", "प्राकृतिक गैस", "सौर ऊर्जा"],
        "answer": "Solar energy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The rate of interest on a loan is determined by:",
        "question_hi": "ऋण पर ब्याज दर किसके द्वारा निर्धारित की जाती है?",
        "options_en": ["The borrower's income", "The lender's expenses", "The risk involved in lending", "Government regulations only"],
        "options_hi": ["उधारकर्ता की आय", "उधारदाता का व्यय", "उधार देने में शामिल जोखिम", "केवल सरकारी नियम"],
        "answer": "The risk involved in lending",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The unification of Italy was completed in which year?",
        "question_hi": "इटली का एकीकरण किस वर्ष में पूरा हुआ था?",
        "options_en": ["1848", "1861", "1871", "1882"],
        "options_hi": ["1848", "1861", "1871", "1882"],
        "answer": "1871",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of the following states is known for its iron ore deposits?",
        "question_hi": "निम्नलिखित में से कौन सा राज्य अपने लौह अयस्क भंडार के लिए जाना जाता है?",
        "options_en": ["Rajasthan", "Gujarat", "Jharkhand", "Punjab"],
        "options_hi": ["राजस्थान", "गुजरात", "झारखंड", "पंजाब"],
        "answer": "Jharkhand",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The 'Directive Principles of State Policy' are included in which part of the Indian Constitution?",
        "question_hi": "'राज्य नीति के निर्देशक सिद्धांत' भारतीय संविधान के किस भाग में शामिल हैं?",
        "options_en": ["Part II", "Part III", "Part IV", "Part V"],
        "options_hi": ["भाग II", "भाग III", "भाग IV", "भाग V"],
        "answer": "Part IV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is a feature of a 'secular state'?",
        "question_hi": "निम्नलिखित में से कौन सी 'धर्मनिरपेक्ष राज्य' की विशेषता है?",
        "options_en": ["Promoting a particular religion", "Having an official state religion", "Equal respect for all religions", "Discrimination against religious minorities"],
        "options_hi": ["एक विशेष धर्म को बढ़ावा देना", "एक आधिकारिक राज्य धर्म होना", "सभी धर्मों के लिए समान सम्मान", "धार्मिक अल्पसंख्यकों के खिलाफ भेदभाव"],
        "answer": "Equal respect for all religions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The main aim of the 'World Trade Organization' (WTO) is:",
        "question_hi": "'विश्व व्यापार संगठन' (डब्ल्यूटीओ) का मुख्य उद्देश्य है:",
        "options_en": ["To provide financial aid to developing countries", "To promote international trade", "To regulate labor standards", "To control environmental pollution"],
        "options_hi": ["विकासशील देशों को वित्तीय सहायता प्रदान करना", "अंतरराष्ट्रीय व्यापार को बढ़ावा देना", "श्रम मानकों को विनियमित करना", "पर्यावरणीय प्रदूषण को नियंत्रित करना"],
        "answer": "To promote international trade",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "The 'Poona Sarvajanik Sabha' was founded by:",
        "question_hi": "'पूना सार्वजनिक सभा' की स्थापना किसने की थी?",
        "options_en": ["Mahatma Gandhi", "M.G. Ranade", "Gopal Krishna Gokhale", "Bal Gangadhar Tilak"],
        "options_hi": ["महात्मा गांधी", "एम.जी. रानाडे", "गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक"],
        "answer": "M.G. Ranade",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following types of farming is practiced to meet the needs of the farmer's family?",
        "question_hi": "निम्नलिखित में से किस प्रकार की खेती किसान परिवार की जरूरतों को पूरा करने के लिए की जाती है?",
        "options_en": ["Commercial farming", "Plantation agriculture", "Subsistence farming", "Intensive agriculture"],
        "options_hi": ["व्यावसायिक खेती", "बागान कृषि", "निर्वाह कृषि", "गहन कृषि"],
        "answer": "Subsistence farming",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The 'Seventh Schedule' of the Indian Constitution deals with:",
        "question_hi": "भारतीय संविधान की 'सातवीं अनुसूची' किससे संबंधित है?",
        "options_en": ["Languages", "Fundamental Rights", "Distribution of legislative powers", "Elections"],
        "options_hi": ["भाषाएँ", "मौलिक अधिकार", "विधायी शक्तियों का वितरण", "चुनाव"],
        "answer": "Distribution of legislative powers",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is NOT a feature of a 'market economy'?",
        "question_hi": "निम्नलिखित में से कौन सा 'बाजार अर्थव्यवस्था' की विशेषता नहीं है?",
        "options_en": ["Private ownership", "Free competition", "Government control", "Profit motive"],
        "options_hi": ["निजी स्वामित्व", "स्वतंत्र प्रतिस्पर्धा", "सरकारी नियंत्रण", "लाभ मकसद"],
        "answer": "Government control",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is a function of the 'Reserve Bank of India'?",
        "question_hi": "निम्नलिखित में से कौन सा 'भारतीय रिजर्व बैंक' का कार्य है?",
        "options_en": ["Accepting deposits from the public", "Providing loans to industries", "Issuing currency notes", "Collecting taxes"],
        "options_hi": ["जनता से जमा स्वीकार करना", "उद्योगों को ऋण प्रदान करना", "मुद्रा नोट जारी करना", "कर एकत्र करना"],
        "answer": "Issuing currency notes",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The 'Non-Cooperation Movement' was adopted by the Indian National Congress at its session held at:",
        "question_hi": "'असहयोग आंदोलन' भारतीय राष्ट्रीय कांग्रेस द्वारा अपने किस अधिवेशन में अपनाया गया था?",
        "options_en": ["Lahore", "Calcutta", "Nagpur", "Madras"],
        "options_hi": ["लाहौर", "कलकत्ता", "नागपुर", "मद्रास"],
        "answer": "Nagpur",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a major soil type found in India?",
        "question_hi": "निम्नलिखित में से कौन सा भारत में पाया जाने वाला एक प्रमुख मिट्टी का प्रकार है?",
        "options_en": ["Laterite soil", "Podzol soil", "Chernozem soil", "Tundra soil"],
        "options_hi": ["लैटेराइट मिट्टी", "पॉडज़ोल मिट्टी", "चेरनोज़म मिट्टी", "टुंड्रा मिट्टी"],
        "answer": "Laterite soil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The 'Constitution Assembly' of India was formed in which year?",
        "question_hi": "भारत की 'संविधान सभा' का गठन किस वर्ष हुआ था?",
        "options_en": ["1945", "1946", "1947", "1950"],
        "options_hi": ["1945", "1946", "1947", "1950"],
        "answer": "1946",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is a challenge to political parties in India?",
        "question_hi": "भारत में राजनीतिक दलों के लिए निम्नलिखित में से कौन सी चुनौती है?",
        "options_en": ["Lack of transparency", "Excessive public funding", "Strong internal democracy", "Ideological clarity"],
        "options_hi": ["पारदर्शिता की कमी", "अत्यधिक सार्वजनिक धन", "मजबूत आंतरिक लोकतंत्र", "वैचारिक स्पष्टता"],
        "answer": "Lack of transparency",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The process of rapid integration or interconnection between countries is known as:",
        "question_hi": "देशों के बीच तेजी से एकीकरण या अंतर्संबंध की प्रक्रिया को क्या कहा जाता है?",
        "options_en": ["Urbanization", "Industrialization", "Globalization", "Modernization"],
        "options_hi": ["शहरीकरण", "औद्योगीकरण", "वैश्वीकरण", "आधुनिकीकरण"],
        "answer": "Globalization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "The 'Treaty of Constantinople' (1832) recognized the independence of:",
        "question_hi": "'कॉन्स्टेंटिनोपल की संधि' (1832) ने किसकी स्वतंत्रता को मान्यता दी?",
        "options_en": ["Greece", "Italy", "Germany", "Poland"],
        "options_hi": ["ग्रीस", "इटली", "जर्मनी", "पोलैंड"],
        "answer": "Greece",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which of the following states is a major producer of spices in India?",
        "question_hi": "निम्नलिखित में से कौन सा राज्य भारत में मसालों का एक प्रमुख उत्पादक है?",
        "options_en": ["Rajasthan", "Gujarat", "Kerala", "Punjab"],
        "options_hi": ["राजस्थान", "गुजरात", "केरल", "पंजाब"],
        "answer": "Kerala",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "In a parliamentary form of government, the real executive power rests with:",
        "question_hi": "सरकार के संसदीय स्वरूप में, वास्तविक कार्यकारी शक्ति किसके पास होती है?",
        "options_en": ["The President", "The Prime Minister and the Council of Ministers", "The Parliament", "The Judiciary"],
        "options_hi": ["राष्ट्रपति", "प्रधान मंत्री और मंत्रिपरिषद", "संसद", "न्यायपालिका"],
        "answer": "The Prime Minister and the Council of Ministers",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Which of the following is a method of water conservation?",
        "question_hi": "निम्नलिखित में से कौन सा जल संरक्षण का एक तरीका है?",
        "options_en": ["Deforestation", "Over-irrigation", "Rainwater harvesting", "Industrial waste disposal"],
        "options_hi": ["वनोन्मूलन", "अति-सिंचाई", "वर्षा जल संचयन", "औद्योगिक अपशिष्ट निपटान"],
        "answer": "Rainwater harvesting",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of the following is a component of sustainable development?",
        "question_hi": "निम्नलिखित में से कौन सा सतत विकास का एक घटक है?",
        "options_en": ["Economic growth at the expense of environment", "Meeting the needs of the present without compromising the future", "Rapid industrialization without planning", "Focusing only on economic development"],
        "options_hi": ["पर्यावरण की कीमत पर आर्थिक विकास", "भविष्य से समझौता किए बिना वर्तमान की जरूरतों को पूरा करना", "बिना योजना के तेजी से औद्योगीकरण", "केवल आर्थिक विकास पर ध्यान केंद्रित करना"],
        "answer": "Meeting the needs of the present without compromising the future",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The 'Indian National Congress' was founded by:",
        "question_hi": "'भारतीय राष्ट्रीय कांग्रेस' की स्थापना किसने की थी?",
        "options_en": ["Mahatma Gandhi", "A.O. Hume", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        "options_hi": ["महात्मा गांधी", "ए.ओ. ह्यूम", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस"],
        "answer": "A.O. Hume",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is a fiber crop?",
        "question_hi": "निम्नलिखित में से कौन सी रेशेदार फसल है?",
        "options_en": ["Rice", "Wheat", "Cotton", "Sugarcane"],
        "options_hi": ["चावल", "गेहूं", "कपास", "गन्ना"],
        "answer": "Cotton",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The 'Government of India Act' of 1919 is also known as:",
        "question_hi": "'भारत सरकार अधिनियम' 1919 को किस नाम से भी जाना जाता है?",
        "options_en": ["Morley-Minto Reforms", "Montagu-Chelmsford Reforms", "Simon Commission", "Cabinet Mission"],
        "options_hi": ["मोर्ले-मिंटो सुधार", "मोंटागु-चेम्सफोर्ड सुधार", "साइमन कमीशन", "कैबिनेट मिशन"],
        "answer": "Montagu-Chelmsford Reforms",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 29,
        "question_en": "Which of the following is an example of a 'quaternary' activity?",
        "question_hi": "निम्नलिखित में से कौन सा 'चतुर्थक' गतिविधि का एक उदाहरण है?",
        "options_en": ["Agriculture", "Manufacturing", "Information technology", "Transportation"],
        "options_hi": ["कृषि", "विनिर्माण", "सूचना प्रौद्योगिकी", "परिवहन"],
        "answer": "Information technology",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The main objective of microfinance is to:",
        "question_hi": "माइक्रोफाइनेंस का मुख्य उद्देश्य है:",
        "options_en": ["Provide large loans to big industries", "Offer financial services to the poor and low-income households", "Regulate the stock market", "Control the national currency"],
        "options_hi": ["बड़े उद्योगों को बड़े ऋण प्रदान करना", "गरीब और कम आय वाले परिवारों को वित्तीय सेवाएं प्रदान करना", "शेयर बाजार को विनियमित करना", "राष्ट्रीय मुद्रा को नियंत्रित करना"],
        "answer": "Offer financial services to the poor and low-income households",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The 'Forward Bloc' was formed by:",
        "question_hi": "'फॉरवर्ड ब्लॉक' का गठन किसने किया था?",
        "options_en": ["Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Rajendra Prasad"],
        "options_hi": ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार वल्लभभाई पटेल", "राजेंद्र प्रसाद"],
        "answer": "Subhas Chandra Bose",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Which of the following crops is grown extensively in the black soil region of India?",
        "question_hi": "निम्नलिखित में से कौन सी फसल भारत के काली मिट्टी वाले क्षेत्र में बड़े पैमाने पर उगाई जाती है?",
        "options_en": ["Rice", "Wheat", "Cotton", "Maize"],
        "options_hi": ["चावल", "गेहूं", "कपास", "मक्का"],
        "answer": "Cotton",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The Constitution of India was adopted on:",
        "question_hi": "भारत का संविधान कब अपनाया गया था?",
        "options_en": ["August 15, 1947", "January 26, 1950", "November 26, 1949", "October 2, 1949"],
        "options_hi": ["15 अगस्त, 1947", "26 जनवरी, 1950", "26 नवंबर, 1949", "2 अक्टूबर, 1949"],
        "answer": "November 26, 1949",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which of the following is a developmental goal for an urban unemployed youth?",
        "question_hi": "निम्नलिखित में से कौन सा एक शहरी बेरोजगार युवा के लिए विकासात्मक लक्ष्य है?",
        "options_en": ["Better healthcare facilities", "More schools for children", "Employment opportunities", "Cleaner environment"],
        "options_hi": ["बेहतर स्वास्थ्य देखभाल सुविधाएं", "बच्चों के लिए अधिक स्कूल", "रोजगार के अवसर", "स्वच्छ वातावरण"],
        "answer": "Employment opportunities",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The term 'investment' refers to:",
        "question_hi": "'निवेश' शब्द का अर्थ है:",
        "options_en": ["Selling of goods", "Purchase of consumer goods", "Expenditure on assets to generate future income", "Borrowing money from banks"],
        "options_hi": ["वस्तुओं की बिक्री", "उपभोक्ता वस्तुओं की खरीद", "भविष्य में आय उत्पन्न करने के लिए संपत्तियों पर व्यय", "बैंकों से पैसे उधार लेना"],
        "answer": "Expenditure on assets to generate future income",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The 'Simon Commission' arrived in India in:",
        "question_hi": "'साइमन कमीशन' भारत कब पहुंचा?",
        "options_en": ["1927", "1928", "1929", "1930"],
        "options_hi": ["1927", "1928", "1929", "1930"],
        "answer": "1928",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is a non-metallic mineral?",
        "question_hi": "निम्नलिखित में से कौन सा एक गैर-धात्विक खनिज है?",
        "options_en": ["Iron ore", "Copper", "Manganese", "Mica"],
        "options_hi": ["लौह अयस्क", "तांबा", "मैंगनीज", "अभ्रक"],
        "answer": "Mica",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which of the following is a subject in the 'Union List' of the Indian Constitution?",
        "question_hi": "निम्नलिखित में से कौन सा भारतीय संविधान की 'संघ सूची' में एक विषय है?",
        "options_en": ["Police", "Agriculture", "Defense", "Public Health"],
        "options_hi": ["पुलिस", "कृषि", "रक्षा", "सार्वजनिक स्वास्थ्य"],
        "answer": "Defense",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which of the following is a major challenge to democracy in India?",
        "question_hi": "भारत में लोकतंत्र के लिए निम्नलिखित में से कौन सी एक प्रमुख चुनौती है?",
        "options_en": ["Holding regular elections", "Ensuring the right to vote", "Communalism", "An independent judiciary"],
        "options_hi": ["नियमित चुनाव कराना", "मताधिकार सुनिश्चित करना", "सांप्रदायिकता", "एक स्वतंत्र न्यायपालिका"],
        "answer": "Communalism",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The movement of goods, services, investment, and technology between countries is a key aspect of:",
        "question_hi": "देशों के बीच वस्तुओं, सेवाओं, निवेश और प्रौद्योगिकी की आवाजाही किसका एक प्रमुख पहलू है?",
        "options_en": ["Nationalism", "Regionalism", "Globalization", "Localism"],
        "options_hi": ["राष्ट्रवाद", "क्षेत्रीयतावाद", "वैश्वीकरण", "स्थानीयतावाद"],
        "answer": "Globalization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "The 'Salt Satyagraha' began from:",
        "question_hi": "'नमक सत्याग्रह' कहाँ से शुरू हुआ?",
        "options_en": ["Sabarmati Ashram", "Dandi", "Chauri Chaura", "Bardoli"],
        "options_hi": ["साबरमती आश्रम", "दांडी", "चौरी चौरा", "बारडोली"],
        "answer": "Sabarmati Ashram",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is a beverage crop?",
        "question_hi": "निम्नलिखित में से कौन सी पेय फसल है?",
        "options_en": ["Wheat", "Rice", "Tea", "Pulses"],
        "options_hi": ["गेहूं", "चावल", "चाय", "दालें"],
        "answer": "Tea",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The 'Eighth Schedule' of the Indian Constitution deals with:",
        "question_hi": "भारतीय संविधान की 'आठवीं अनुसूची' किससे संबंधित है?",
        "options_en": ["Land reforms", "Official languages", "Panchayati Raj", "Anti-defection law"],
        "options_hi": ["भूमि सुधार", "आधिकारिक भाषाएँ", "पंचायती राज", "दल-बदल विरोधी कानून"],
        "answer": "Official languages",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is a way in which pressure groups influence politics?",
        "question_hi": "निम्नलिखित में से कौन सा एक तरीका है जिससे दबाव समूह राजनीति को प्रभावित करते हैं?",
        "options_en": ["By directly contesting elections", "By forming coalition governments", "By lobbying and public campaigns", "By appointing government officials"],
        "options_hi": ["प्रत्यक्ष रूप से चुनाव लड़कर", "गठबंधन सरकारें बनाकर", "लॉबीइंग और सार्वजनिक अभियानों द्वारा", "सरकारी अधिकारियों की नियुक्ति करके"],
        "answer": "By lobbying and public campaigns",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The 'Consumer Protection Act' was enacted in India in:",
        "question_hi": "भारत में 'उपभोक्ता संरक्षण अधिनियम' कब लागू किया गया था?",
        "options_en": ["1986", "1991", "2000", "2019"],
        "options_hi": ["1986", "1991", "2000", "2019"],
        "answer": "1986",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The 'Quit India' resolution was passed by the Indian National Congress in:",
        "question_hi": "'भारत छोड़ो' प्रस्ताव भारतीय राष्ट्रीय कांग्रेस द्वारा कब पारित किया गया था?",
        "options_en": ["1940", "1941", "1942", "1943"],
        "options_hi": ["1940", "1941", "1942", "1943"],
        "answer": "1942",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is a geothermal energy resource?",
        "question_hi": "निम्नलिखित में से कौन सा भूतापीय ऊर्जा संसाधन है?",
        "options_en": ["Coal mines", "Oil fields", "Hot springs", "Wind farms"],
        "options_hi": ["कोयला खदानें", "तेल क्षेत्र", "गर्म झरने", "पवन फार्म"],
        "answer": "Hot springs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Which of the following countries has a unitary system of government?",
        "question_hi": "निम्नलिखित में से किस देश में एकात्मक सरकार प्रणाली है?",
        "options_en": ["India", "USA", "UK", "Canada"],
        "options_hi": ["भारत", "संयुक्त राज्य अमेरिका", "यूके", "कनाडा"],
        "answer": "UK",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which of the following is an example of a 'movement group'?",
        "question_hi": "निम्नलिखित में से कौन सा 'आंदोलन समूह' का एक उदाहरण है?",
        "options_en": ["A political party", "A trade union", "A women's rights group", "A business association"],
        "options_hi": ["एक राजनीतिक दल", "एक ट्रेड यूनियन", "एक महिला अधिकार समूह", "एक व्यापार संघ"],
        "answer": "A women's rights group",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The Human Development Index (HDI) is a composite statistic of:",
        "question_hi": "मानव विकास सूचकांक (एचडीआई) किसका एक संयुक्त सांख्यिकी है?",
        "options_en": ["Income and expenditure", "Population and area", "Life expectancy, education, and per capita income", "Imports and exports"],
        "options_hi": ["आय और व्यय", "जनसंख्या और क्षेत्र", "जीवन प्रत्याशा, शिक्षा और प्रति व्यक्ति आय", "आयात और निर्यात"],
        "answer": "Life expectancy, education, and per capita income",
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