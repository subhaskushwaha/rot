const questions = [


    {
        "num": 1,
        "question_en": "Who is the author of 'Mijbil the Otter'?",
        "question_hi": "'मिजबिल द ऑटर' के लेखक कौन हैं?",
        "options_en": ["Gavin Maxwell", "Gerald Durrell", "James Herriot", "Jane Goodall"],
        "options_hi": ["गैविन मैक्सवेल", "गेराल्ड डुरेल", "जेम्स हेरियट", "जेन गुडॉल"],
        "answer": "Gavin Maxwell",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Where did the author get Mijbil from?",
        "question_hi": "लेखक को मिजबिल कहाँ से मिला?",
        "options_en": ["A pet shop in London", "The marshes of Iraq", "A zoo in Scotland", "His friend in Canada"],
        "options_hi": ["लंदन में एक पालतू जानवरों की दुकान से", "इराक के दलदल से", "स्कॉटलैंड के एक चिड़ियाघर से", "कनाडा में अपने दोस्त से"],
        "answer": "The marshes of Iraq",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What kind of creature was Mijbil?",
        "question_hi": "मिजबिल किस प्रकार का प्राणी था?",
        "options_en": ["A cat", "A dog", "An otter", "A squirrel"],
        "options_hi": ["एक बिल्ली", "एक कुत्ता", "एक ऊदबिलाव", "एक गिलहरी"],
        "answer": "An otter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What did the Arabs call the otter?",
        "question_hi": "अरब के लोग ऊदबिलाव को क्या कहते थे?",
        "options_en": ["Mij", "Mijbil", "Water dog", "River cat"],
        "options_hi": ["मिज", "मिजबिल", "वाटर डॉग", "रिवर कैट"],
        "answer": "Mijbil",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "How did Mijbil react to water initially?",
        "question_hi": "मिजबिल ने शुरू में पानी पर कैसी प्रतिक्रिया दी?",
        "options_en": ["He loved it instantly", "He was afraid of it", "He drank it thirstily", "He tried to swim in it"],
        "options_hi": ["उसे यह तुरंत पसंद आ गया", "वह इससे डर गया था", "उसने इसे प्यास से पिया", "उसने इसमें तैरने की कोशिश की"],
        "answer": "He was afraid of it",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What was Mijbil's favorite game?",
        "question_hi": "मिजबिल का पसंदीदा खेल क्या था?",
        "options_en": ["Catching mice", "Playing with a ball", "Marbles", "Fetching sticks"],
        "options_hi": ["चूहे पकड़ना", "एक गेंद के साथ खेलना", "कंचे", "लाठी लाना"],
        "answer": "Marbles",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "How did Mijbil behave on the airplane?",
        "question_hi": "हवाई जहाज पर मिजबिल का व्यवहार कैसा था?",
        "options_en": ["He was calm and quiet", "He caused chaos and escaped from his box", "He slept throughout the journey", "He played with the passengers"],
        "options_hi": ["वह शांत था", "उसने अराजकता फैलाई और अपने बॉक्स से भाग गया", "वह पूरी यात्रा में सोता रहा", "वह यात्रियों के साथ खेला"],
        "answer": "He caused chaos and escaped from his box",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "How did Mijbil finally get back into his box on the airplane?",
        "question_hi": "हवाई जहाज पर मिजबिल आखिरकार अपने बॉक्स में वापस कैसे आया?",
        "options_en": ["The author forced him", "A kind air hostess helped the author", "He got tired and went back himself", "Another passenger caught him"],
        "options_hi": ["लेखक ने उसे मजबूर किया", "एक दयालु एयर होस्टेस ने लेखक की मदद की", "वह थक गया और खुद वापस चला गया", "एक अन्य यात्री ने उसे पकड़ लिया"],
        "answer": "A kind air hostess helped the author",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "How did Londoners react to Mijbil?",
        "question_hi": "लंदन के लोगों ने मिजबिल पर कैसी प्रतिक्रिया दी?",
        "options_en": ["They ignored him", "They were curious and asked what it was", "They were scared of him", "They tried to catch him"],
        "options_hi": ["उन्होंने उसे अनदेखा कर दिया", "वे उत्सुक थे और पूछा कि यह क्या है", "वे उससे डर गए थे", "उन्होंने उसे पकड़ने की कोशिश की"],
        "answer": "They were curious and asked what it was",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What happened to Mijbil at the end of the story?",
        "question_hi": "कहानी के अंत में मिजबिल का क्या हुआ?",
        "options_en": ["He returned to Iraq", "He died in an accident", "He lived happily with the author in London", "He escaped and was never found"],
        "options_hi": ["वह इराक लौट गया", "उसकी एक दुर्घटना में मृत्यु हो गई", "वह लंदन में लेखक के साथ खुशी से रहा", "वह भाग गया और कभी नहीं मिला"],
        "answer": "He died in an accident",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Who is the author of 'The Necklace'?",
        "question_hi": "'द नेकलेस' के लेखक कौन हैं?",
        "options_en": ["Guy de Maupassant", "Victor Hugo", "Honore de Balzac", "Gustave Flaubert"],
        "options_hi": ["गाय डे मौपासाँ", "विक्टर ह्यूगो", "ऑनोरे डे बाल्ज़ाक", "गुस्ताव फ्लोबेयर"],
        "answer": "Guy de Maupassant",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What was Madame Loisel's first name?",
        "question_hi": "मैडम लोइसेल का पहला नाम क्या था?",
        "options_en": ["Mathilde", "Jeanne", "Sophie", "Marie"],
        "options_hi": ["मथिल्डे", "जीन", "सोफी", "मैरी"],
        "answer": "Mathilde",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Why was Madame Loisel unhappy with her life?",
        "question_hi": "मैडम लोइसेल अपने जीवन से क्यों नाखुश थी?",
        "options_en": ["She was poor", "She had a cruel husband", "She longed for a life of luxury and admiration", "She was sick"],
        "options_hi": ["वह गरीब थी", "उसका पति क्रूर था", "वह विलासिता और प्रशंसा के जीवन की लालसा रखती थी", "वह बीमार थी"],
        "answer": "She longed for a life of luxury and admiration",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What invitation did Monsieur Loisel bring home?",
        "question_hi": "मोंसियर लोइसेल घर पर क्या निमंत्रण लाए?",
        "options_en": ["To a wedding", "To a party at the Ministry of Public Instruction", "To a dinner with friends", "To a ball at the palace"],
        "options_hi": ["एक शादी में", "लोक निर्देश मंत्रालय में एक पार्टी में", "दोस्तों के साथ रात के खाने पर", "महल में एक गेंद पर"],
        "answer": "To a party at the Ministry of Public Instruction",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Why was Madame Loisel upset about the invitation at first?",
        "question_hi": "शुरुआत में मैडम लोइसेल निमंत्रण के बारे में क्यों परेशान थी?",
        "options_en": ["She didn't want to go", "She had nothing suitable to wear", "Her husband didn't want to go", "The party was too far away"],
        "options_hi": ["वह जाना नहीं चाहती थी", "उसके पास पहनने के लिए कुछ उपयुक्त नहीं था", "उसके पति जाना नहीं चाहते थे", "पार्टी बहुत दूर थी"],
        "answer": "She had nothing suitable to wear",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What did Monsieur Loisel suggest his wife should do about a dress?",
        "question_hi": "मोंसियर लोइसेल ने अपनी पत्नी को पोशाक के बारे में क्या करने का सुझाव दिया?",
        "options_en": ["Buy an expensive one", "Borrow one from a friend", "Make one herself", "Not go to the party"],
        "options_hi": ["एक महंगी खरीदना", "एक दोस्त से उधार लेना", "खुद बनाना", "पार्टी में न जाना"],
        "answer": "Borrow one from a friend",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "From whom did Madame Loisel borrow a necklace?",
        "question_hi": "मैडम लोइसेल ने किससे हार उधार लिया?",
        "options_en": ["Her sister", "Her mother", "Madame Forestier", "A neighbor"],
        "options_hi": ["उसकी बहन", "उसकी माँ", "मैडम फॉरेस्टियर", "एक पड़ोसी"],
        "answer": "Madame Forestier",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "How did Madame Loisel feel at the party?",
        "question_hi": "पार्टी में मैडम लोइसेल को कैसा महसूस हुआ?",
        "options_en": ["Bored and ignored", "Happy and admired by everyone", "Tired and sleepy", "Anxious about losing the necklace"],
        "options_hi": ["उदास और उपेक्षित", "खुश और सभी द्वारा सराही गई", "थकी हुई और नींद आ रही", "हार खोने के बारे में चिंतित"],
        "answer": "Happy and admired by everyone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What happened to the necklace after the party?",
        "question_hi": "पार्टी के बाद हार का क्या हुआ?",
        "options_en": ["Madame Loisel gave it back", "They lost it", "It was stolen", "It broke"],
        "options_hi": ["मैडम लोइसेल ने इसे वापस कर दिया", "उन्होंने इसे खो दिया", "यह चोरी हो गया था", "यह टूट गया"],
        "answer": "They lost it",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What did the Loisels do to replace the necklace?",
        "question_hi": "लोइसेल्स ने हार को बदलने के लिए क्या किया?",
        "options_en": ["They bought a new one", "They told Madame Forestier they lost it", "They borrowed money and bought a similar one", "They went to the police"],
        "options_hi": ["उन्होंने एक नया खरीदा", "उन्होंने मैडम फॉरेस्टियर को बताया कि उन्होंने इसे खो दिया है", "उन्होंने पैसे उधार लिए और एक समान खरीदा", "वे पुलिस के पास गए"],
        "answer": "They borrowed money and bought a similar one",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "How long did it take the Loisels to pay back the money they borrowed?",
        "question_hi": "लोइसेल्स को उधार लिए गए पैसे चुकाने में कितना समय लगा?",
        "options_en": ["One year", "Five years", "Ten years", "Twenty years"],
        "options_hi": ["एक साल", "पांच साल", "दस साल", "बीस साल"],
        "answer": "Ten years",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "How did Madame Loisel's life change after losing the necklace?",
        "question_hi": "हार खोने के बाद मैडम लोइसेल का जीवन कैसे बदल गया?",
        "options_en": ["She became richer", "She became more beautiful", "She had to work hard and live a life of poverty", "She became famous"],
        "options_hi": ["वह अमीर हो गई", "वह और सुंदर हो गई", "उसे कड़ी मेहनत करनी पड़ी और गरीबी का जीवन जीना पड़ा", "वह प्रसिद्ध हो गई"],
        "answer": "She had to work hard and live a life of poverty",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What did Madame Loisel find out about the necklace she had borrowed?",
        "question_hi": "मैडम लोइसेल को उस हार के बारे में क्या पता चला जो उसने उधार लिया था?",
        "options_en": ["It was very expensive", "It was fake", "It belonged to the royal family", "It was a family heirloom"],
        "options_hi": ["यह बहुत महंगा था", "यह नकली था", "यह शाही परिवार का था", "यह एक पारिवारिक विरासत थी"],
        "answer": "It was fake",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "How did Madame Forestier react when she found out the truth?",
        "question_hi": "जब मैडम फॉरेस्टियर को सच्चाई पता चली तो उन्होंने कैसी प्रतिक्रिया दी?",
        "options_en": ["She was angry", "She was indifferent", "She was surprised and told Madame Loisel that her necklace was an imitation", "She demanded compensation"],
        "options_hi": ["वह गुस्सा थी", "वह उदासीन थी", "वह हैरान थी और उसने मैडम लोइसेल को बताया कि उसका हार एक नकली था", "उसने मुआवजे की मांग की"],
        "answer": "She was surprised and told Madame Loisel that her necklace was an imitation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the theme of 'The Necklace'?",
        "question_hi": "'द नेकलेस' का विषय क्या है?",
        "options_en": ["The importance of wealth", "The dangers of honesty", "The consequences of vanity and the deceptive nature of appearances", "The value of hard work"],
        "options_hi": ["धन का महत्व", "ईमानदारी के खतरे", "अभिमान के परिणाम और दिखावे की भ्रामक प्रकृति", "कड़ी मेहनत का मूल्य"],
        "answer": "The consequences of vanity and the deceptive nature of appearances",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "Who is the author of 'The Sermon at Benares'?",
        "question_hi": "'द सरमन एट बनारस' के लेखक कौन हैं?",
        "options_en": ["Buddha", "Betty Renshaw (retold)", "Leo Tolstoy", "Oscar Wilde"],
        "options_hi": ["बुद्ध", "बेटी रेनशॉ (पुनर्कथित)", "लियो टॉल्स्टॉय", "ऑस्कर वाइल्ड"],
        "answer": "Betty Renshaw (retold)",
        "attempted": false,
        "selected": ""
    },

    {
        "num": 27,
        "question_en": "What is the real name of Buddha?",
        "question_hi": "बुद्ध का असली नाम क्या है?",
        "options_en": ["Siddhartha Gautama", "Mahavira", "Ashoka", "Chandragupta"],
        "options_hi": ["सिद्धार्थ गौतम", "महावीर", "अशोक", "चंद्रगुप्त"],
        "answer": "Siddhartha Gautama",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Where did Siddhartha Gautama attain enlightenment and become the Buddha?",
        "question_hi": "सिद्धार्थ गौतम ने कहाँ ज्ञान प्राप्त किया और बुद्ध बने?",
        "options_en": ["Benares", "Sarnath", "Bodh Gaya", "Kushinagar"],
        "options_hi": ["बनारस", "सारनाथ", "बोध गया", "कुशीनगर"],
        "answer": "Bodh Gaya",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the central idea of Buddha's first sermon at Benares?",
        "question_hi": "बनारस में बुद्ध के पहले उपदेश का केंद्रीय विचार क्या है?",
        "options_en": ["The importance of rituals", "The inevitability of death and suffering", "The path to material wealth", "The power of prayer"],
        "options_hi": ["अनुष्ठानों का महत्व", "मृत्यु और दुख की अनिवार्यता", "भौतिक धन का मार्ग", "प्रार्थना की शक्ति"],
        "answer": "The inevitability of death and suffering",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What did Kisa Gotami do to bring her dead child back to life?",
        "question_hi": "किसा गोतमी ने अपने मृत बच्चे को वापस जीवित करने के लिए क्या किया?",
        "options_en": ["She prayed to the gods", "She consulted a doctor", "She went from house to house asking for a mustard seed from a house where no one had died", "She performed a special ritual"],
        "options_hi": ["उसने देवताओं से प्रार्थना की", "उसने एक डॉक्टर से सलाह ली", "वह घर-घर जाकर ऐसे घर से एक सरसों का बीज माँगती रही जहाँ किसी की मृत्यु न हुई हो", "उसने एक विशेष अनुष्ठान किया"],
        "answer": "She went from house to house asking for a mustard seed from a house where no one had died",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What did Kisa Gotami realize after her futile search?",
        "question_hi": "अपनी व्यर्थ खोज के बाद किसा गोतमी ने क्या महसूस किया?",
        "options_en": ["That death is unavoidable and common to all", "That she should blame the gods", "That she was cursed", "That she should find a more powerful healer"],
        "options_hi": ["कि मृत्यु अपरिहार्य है और सभी के लिए आम है", "कि उसे देवताओं को दोष देना चाहिए", "कि वह शापित थी", "कि उसे एक अधिक शक्तिशाली वैद्य खोजना चाहिए"],
        "answer": "That death is unavoidable and common to all",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "According to Buddha, what is the greatest grief?",
        "question_hi": "बुद्ध के अनुसार, सबसे बड़ा दुख क्या है?",
        "options_en": ["Loss of wealth", "Loss of health", "Death of loved ones", "Poverty"],
        "options_hi": ["धन की हानि", "स्वास्थ्य की हानि", "प्रियजनों की मृत्यु", "गरीबी"],
        "answer": "Death of loved ones",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is the only way to obtain peace of mind, according to Buddha?",
        "question_hi": "बुद्ध के अनुसार, मन की शांति प्राप्त करने का एकमात्र तरीका क्या है?",
        "options_en": ["By accumulating wealth", "By avoiding all suffering", "By accepting death and sorrow as natural laws", "By praying constantly"],
        "options_hi": ["धन जमा करके", "सभी दुखों से बचकर", "मृत्यु और दुख को प्राकृतिक नियम के रूप में स्वीकार करके", "लगातार प्रार्थना करके"],
        "answer": "By accepting death and sorrow as natural laws",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What does Buddha compare the life of mortals to?",
        "question_hi": "बुद्ध मनुष्यों के जीवन की तुलना किससे करते हैं?",
        "options_en": ["A long and happy dream", "A ripe fruit that is in danger of falling", "A strong and sturdy tree", "A calm and peaceful river"],
        "options_hi": ["एक लंबा और सुखद सपना", "एक पका फल जो गिरने के खतरे में है", "एक मजबूत और टिकाऊ पेड़", "एक शांत और शांतिपूर्ण नदी"],
        "answer": "A ripe fruit that is in danger of falling",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the meaning of 'unfathomable' in the context of sorrow?",
        "question_hi": "दुख के संदर्भ में 'अनफेथोमेबल' का क्या अर्थ है?",
        "options_en": ["Easy to understand", "Very deep and impossible to fully understand", "Temporary", "Superficial"],
        "options_hi": ["समझने में आसान", "बहुत गहरा और पूरी तरह से समझना असंभव", "अस्थायी", "सतही"],
        "answer": "Very deep and impossible to fully understand",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the moral of 'The Sermon at Benares'?",
        "question_hi": "'द सरमन एट बनारस' का नैतिक क्या है?",
        "options_en": ["One should always mourn the dead", "Suffering is an inevitable part of life, and wisdom lies in accepting it", "Wealth can overcome sorrow", "Prayer is the only solace"],
        "options_hi": ["किसी को हमेशा मृतकों का शोक मनाना चाहिए", "दुख जीवन का एक अपरिहार्य हिस्सा है, और इसे स्वीकार करने में ही बुद्धिमत्ता है", "धन दुख पर विजय प्राप्त कर सकता है", "प्रार्थना ही एकमात्र सांत्वना है"],
        "answer": "Suffering is an inevitable part of life, and wisdom lies in accepting it",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Who is the author of 'The Proposal'?",
        "question_hi": "'द प्रपोजल' के लेखक कौन हैं?",
        "options_en": ["Anton Chekhov", "Henrik Ibsen", "George Bernard Shaw", "Oscar Wilde"],
        "options_hi": ["एंटोन चेखोव", "हेनरिक इब्सन", "जॉर्ज बर्नार्ड शॉ", "ऑस्कर वाइल्ड"],
        "answer": "Anton Chekhov",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What type of play is 'The Proposal'?",
        "question_hi": "'द प्रपोजल' किस प्रकार का नाटक है?",
        "options_en": ["Tragedy", "Comedy", "Farce", "Historical drama"],
        "options_hi": ["त्रासदी", "कॉमेडी", "प्रहसन", "ऐतिहासिक नाटक"],
        "answer": "Farce",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Who are the main characters in 'The Proposal'?",
        "question_hi": "'द प्रपोजल' के मुख्य पात्र कौन हैं?",
        "options_en": ["Romeo, Juliet, and Tybalt", "Hamlet, Claudius, and Gertrude", "Lomov, Natalya, and Chubukov", "Macbeth, Lady Macbeth, and Banquo"],
        "options_hi": ["रोमियो, जूलियट और टाइबाल्ट", "हैमलेट, क्लॉडियस और गर्ट्रूड", "लोमोव, नतालिया और चुबुकोव", "मैकबेथ, लेडी मैकबेथ और बैंको"],
        "answer": "Lomov, Natalya, and Chubukov",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Why does Lomov come to Chubukov's house?",
        "question_hi": "लोमोव चुबुकोव के घर क्यों आता है?",
        "options_en": ["To borrow money", "To ask for Natalya's hand in marriage", "To discuss business", "To complain about Chubukov's dog"],
        "options_hi": ["पैसे उधार लेने के लिए", "नतालिया का हाथ शादी के लिए मांगने के लिए", "व्यवसाय पर चर्चा करने के लिए", "चुबुकोव के कुत्ते के बारे में शिकायत करने के लिए"],
        "answer": "To ask for Natalya's hand in marriage",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the first argument between Lomov and Natalya about?",
        "question_hi": "लोमोव और नतालिया के बीच पहला तर्क किस बारे में है?",
        "options_en": ["Whose dog is better", "Ownership of Oxen Meadows", "Who is older", "The weather"],
        "options_hi": ["किसका कुत्ता बेहतर है", "ऑक्सन मीडोज का स्वामित्व", "कौन बड़ा है", "मौसम"],
        "answer": "Ownership of Oxen Meadows",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the second argument between Lomov and Natalya about?",
        "question_hi": "लोमोव और नतालिया के बीच दूसरा तर्क किस बारे में है?",
        "options_en": ["The quality of their hunting dogs", "The size of their land", "Their family history", "Their social status"],
        "options_hi": ["उनके शिकार कुत्तों की गुणवत्ता", "उनकी भूमि का आकार", "उनका पारिवारिक इतिहास", "उनकी सामाजिक स्थिति"],
        "answer": "The quality of their hunting dogs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What are the names of Lomov's and Natalya's dogs?",
        "question_hi": "लोमोव और नतालिया के कुत्तों के नाम क्या हैं?",
        "options_en": ["Rover and Spot", "Jump and Bite", "Guess and Squeezer", "Max and Bella"],
        "options_hi": ["रोवर और स्पॉट", "जंप और बाइट", "गेस और स्क्वीज़र", "मैक्स और बेला"],
        "answer": "Guess and Squeezer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "How does Chubukov react to Lomov's proposal?",
        "question_hi": "लोमोव के प्रस्ताव पर चुबुकोव कैसी प्रतिक्रिया देता है?",
        "options_en": ["He is angry and refuses", "He is overjoyed and supportive", "He is indifferent", "He asks for a bribe"],
        "options_hi": ["वह गुस्सा है और मना कर देता है", "वह बहुत खुश और सहायक है", "वह उदासीन है", "वह रिश्वत मांगता है"],
        "answer": "He is overjoyed and supportive",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What happens after Lomov and Natalya's second argument?",
        "question_hi": "लोमोव और नतालिया के दूसरे तर्क के बाद क्या होता है?",
        "options_en": ["Lomov leaves angrily", "They apologize to each other and Lomov proposes", "Chubukov kicks Lomov out", "They start fighting physically"],
        "options_hi": ["लोमोव गुस्से में चला जाता है", "वे एक-दूसरे से माफी मांगते हैं और लोमोव प्रस्ताव रखता है", "चुबुकोव लोमोव को बाहर निकाल देता है", "वे शारीरिक रूप से लड़ना शुरू कर देते हैं"],
        "answer": "They apologize to each other and Lomov proposes",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is ironic about Lomov's and Natalya's proposal?",
        "question_hi": "लोमोव और नतालिया के प्रस्ताव के बारे में विडंबना क्या है?",
        "options_en": ["They do not love each other", "They keep arguing even after the proposal", "Chubukov forces them to get married", "Lomov proposes to the wrong person"],
        "options_hi": ["वे एक-दूसरे से प्यार नहीं करते", "वे प्रस्ताव के बाद भी बहस करते रहते हैं", "चुबुकोव उन्हें शादी करने के लिए मजबूर करता है", "लोमोव गलत व्यक्ति को प्रपोज करता है"],
        "answer": "They keep arguing even after the proposal",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is Chubukov's role in the proposal?",
        "question_hi": "प्रस्ताव में चुबुकोव की क्या भूमिका है?",
        "options_en": ["He tries to sabotage the proposal", "He acts as a mediator and encourages the marriage", "He is unaware of Lomov's intentions", "He is secretly in love with Natalya"],
        "options_hi": ["वह प्रस्ताव को विफल करने की कोशिश करता है", "वह एक मध्यस्थ के रूप में कार्य करता है और विवाह को प्रोत्साहित करता है", "वह लोमोव के इरादों से अनजान है", "वह गुप्त रूप से नतालिया से प्यार करता है"],
        "answer": "He acts as a mediator and encourages the marriage",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What are the reasons for Chubukov wanting Natalya to marry Lomov?",
        "question_hi": "चुबुकोव के नतालिया से लोमोव से शादी करने की इच्छा के क्या कारण हैं?",
        "options_en": ["He thinks Lomov is wealthy and a good match", "He wants to get rid of Natalya", "He is afraid of Lomov", "He owes Lomov money"],
        "options_hi": ["वह सोचता है कि लोमोव अमीर है और एक अच्छा मैच है", "वह नतालिया से छुटकारा पाना चाहता है", "वह लोमोव से डरता है", "उस पर लोमोव का पैसा बकाया है"],
        "answer": "He thinks Lomov is wealthy and a good match",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the overall tone of 'The Proposal'?",
        "question_hi": "'द प्रपोजल' का समग्र स्वर कैसा है?",
        "options_en": ["Romantic", "Serious", "Humorous and absurd", "Tragic"],
        "options_hi": ["रोमांटिक", "गंभीर", "हास्यपूर्ण और बेतुका", "दुखद"],
        "answer": "Humorous and absurd",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What does 'The Proposal' satirize?",
        "question_hi": "'द प्रपोजल' किस पर व्यंग्य करता है?",
        "options_en": ["True love", "Arranged marriages based on social status and wealth", "The importance of land ownership", "The relationship between neighbors"],
        "options_hi": ["सच्चा प्यार", "सामाजिक स्थिति और धन के आधार पर तय विवाह", "भूमि स्वामित्व का महत्व", "पड़ोसियों के बीच संबंध"],
        "answer": "Arranged marriages based on social status and wealth",
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