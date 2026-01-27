/**
 * University Gyaan - First Aid & Health Official Question Bank
 * Total Questions: 187 (Bilingual)
 * Sources: Ambika Question Bank PDF
 */

const allQ = [
    // --- Mock Test 1 (Questions 1 - 100) ---
    {
        q: "Q1. पीड़ित के जले भाग को साफ ड्रेसिंग से क्यों ढका जाना चाहिए? (Why cover the burn with sterile dressing?)",
        a: ["गर्म रखने हेतु (To keep warm)", "ठंडा करने हेतु (To cool)", "संक्रमण रोकने हेतु (To prevent infection)", "(a) और (b) दोनों"],
        [span_2](start_span)[span_3](start_span)c: 2 //[span_2](end_span)[span_3](end_span)
    },
    {
        q: "Q2. किस जले पीड़ित के लिए तुरंत आपातकालीन नंबर पर कॉल करना चाहिए? (Call emergency for which burn victim?)",
        a: ["कॉफी से जला हाथ", "सनबर्न", "हाथ पर छाले (Blisters on hand/arm)", "उपरोक्त सभी"],
        [span_4](start_span)[span_5](start_span)c: 2 //[span_4](end_span)[span_5](end_span)
    },
    {
        q: "Q3. मानव शरीर में कितनी अंगुल्यस्थियाँ (Phalanges) होते हैं? (Total phalanges in human body?)",
        a: ["12", "15", "14", "10"],
        [span_6](start_span)[span_7](start_span)c: 2 //[span_6](end_span)[span_7](end_span)
    },
    {
        q: "Q4. दर्द कम करना किसका पहला उद्देश्य है? (Pain reduction is the first objective of?)",
        a: ["प्राथमिक उपचार (First Aid)", "दवा", "ICU उपचार", "सर्जरी"],
        [span_8](start_span)[span_9](start_span)c: 0 //[span_8](end_span)[span_9](end_span)
    },
    {
        q: "Q5. चेहरे पर केमिकल गिरने पर एम्बुलेंस आने तक आप क्या करेंगे? (What to do for chemical splash until help arrives?)",
        a: ["जले भाग को कवर करेंगे", "शांत रखेंगे", "अस्पताल ले जाएंगे", "बड़ी मात्रा में पानी से धोएँगे (Wash with water)"],
        [span_10](start_span)[span_11](start_span)c: 3 //[span_10](end_span)[span_11](end_span)
    },
    {
        q: "Q6. स्प्लिंट (Splint) का उपयोग कब करना चाहिए? (When to use a splint?)",
        a: ["स्थानांतरित करना हो", "बिना चोट पहुँचाए कर सकें", "(a) और (b) दोनों", "सामग्री उपलब्ध हो"],
        [span_12](start_span)[span_13](start_span)c: 2 //[span_12](end_span)[span_13](end_span)
    },
    {
        q: "Q7. मरीज की जांच करते समय सबसे पहले क्या कार्रवाई की जाती है? (First action while checking victim?)",
        a: ["सांस की जाँच", "बीमा की जाँच", "चोट की जाँच", "पीड़ित से बात करें और कंधे हिलाएं (Talk and shake shoulders)"],
        [span_14](start_span)[span_15](start_span)c: 3 //[span_14](end_span)[span_15](end_span)
    },
    {
        q: "Q8. दौरा पीड़ित (Seizure victim) की देखभाल में क्या ध्यान रखें? (Care for a seizure victim?)",
        a: ["सीधा पकड़ना", "दांतों में कपड़ा रखना", "आस-पास की हानिकारक वस्तुएं हटाना (Remove objects)", "उपरोक्त सभी"],
        [span_16](start_span)[span_17](start_span)c: 2 //[span_16](end_span)[span_17](end_span)
    },
    {
        q: "Q9. नुकीले हथियार से होने वाला घाव कौन-सा है? (Wound by sharp pointed object?)",
        a: ["कटे घाव", "पंचर घाव (Puncture)", "बंद घाव", "विदीर्ण घाव"],
        [span_18](start_span)[span_19](start_span)c: 1 //[span_18](end_span)[span_19](end_span)
    },
    {
        q: "Q10. फर्स्ट डिग्री बर्न (First Degree Burn) क्या है?",
        a: ["सभी परतें नष्ट", "लाल और छाला", "केवल ऊपरी परत शामिल (Top layer only)", "सबसे गंभीर"],
        [span_20](start_span)[span_21](start_span)c: 2 //[span_20](end_span)[span_21](end_span)
    },
    {
        q: "Q11. आंतरिक रक्तस्राव (Internal Bleeding) का संकेत क्या है?",
        a: ["कमजोर नाड़ी, प्यास", "ठंडी या नीली त्वचा", "सूजा हुआ पेट", "उपरोक्त सभी (All of these)"],
        [span_22](start_span)[span_23](start_span)c: 3 //[span_22](end_span)[span_23](end_span)
    },
    {
        q: "Q12. हाथ पर कोई वस्तु धंसी होने पर क्या करें? (What to do if object is embedded in hand?)",
        a: ["वस्तु हटाएँ", "वस्तु तोड़ दें", "ड्रेसिंग से वस्तु को स्थिर करें (Stabilize with dressing)", "कोई नहीं"],
        [span_24](start_span)[span_25](start_span)c: 2 //[span_24](end_span)[span_25](end_span)
    },
    {
        q: "Q13. निम्नलिखित में से सदमे (Shock) का लक्षण नहीं है?",
        a: ["तेज प्यास", "तेजी से श्वास", "बेचैनी", "छाती या पेट में दर्द (Chest/Abdomen pain)"],
        [span_26](start_span)[span_27](start_span)c: 3 //[span_26](end_span)[span_27](end_span)
    },
    {
        q: "Q14. छात्र का दांत टूट जाने पर क्या करेंगे? (Broken tooth of a student?)",
        a: ["रक्तस्त्राव नियंत्रित करें", "दूध या पानी में दाँत बचाएँ", "(a) और (b) दोनों", "सूखे कपड़े में लपेटें"],
        [span_28](start_span)[span_29](start_span)c: 2 //[span_28](end_span)[span_29](end_span)
    },
    {
        q: "Q15. किन घावों में टांके लगाने की आवश्यकता होती है? (When are stitches needed?)",
        a: ["1 इंच से लंबे", "अनियंत्रित रक्तस्त्राव", "पशु काटने पर", "उपरोक्त सभी (All of above)"],
        [span_30](start_span)[span_31](start_span)c: 3 //[span_30](end_span)[span_31](end_span)
    },
    {
        q: "Q16. नाक से खून बहने पर पीड़ित को कैसे बैठाएं? (Nosebleed seating position?)",
        a: ["सिर थोड़ा पीछे झुकाकर (PDF Key)", "सिर आगे झुकाकर (Modern Standard)", "लेटाकर", "पैर ऊपर करके"],
        [span_32](start_span)[span_33](start_span)c: 0 //[span_32](end_span)[span_33](end_span)
    },
    {
        q: "Q17. मनुष्य के दायें फेफड़े का वजन कितने ग्राम होता है? (Weight of right lung?)",
        a: ["620", "570", "470", "680"],
        [span_34](start_span)[span_35](start_span)c: 0 //[span_34](end_span)[span_35](end_span)
    },
    {
        q: "Q18. श्वसन क्रिया है- (Respiration is-)",
        a: ["अनावश्यक", "ऐच्छिक", "अनैच्छिक (Involuntary)", "कोई नहीं"],
        [span_36](start_span)[span_37](start_span)c: 2 //[span_36](end_span)[span_37](end_span)
    },
    {
        q: "Q19. मनुष्य सामान्यतया कितनी वायु ग्रहण करता है? (Normal air intake volume?)",
        a: ["1640 मिली", "500 मिली", "3500 मिली", "1200 मिली"],
        [span_38](start_span)[span_39](start_span)c: 1 //[span_38](end_span)[span_39](end_span)
    },
    {
        q: "Q20. जल रक्त को कैसा बनाये रखता है? (Water keeps blood?)",
        a: ["ठण्डा", "तरल (Liquid)", "गाढ़ा", "गर्म"],
        [span_40](start_span)c: 1 //[span_40](end_span)
    },
    {
        q: "Q21. स्वस्थ व्यक्ति एक मिनट में कितनी बार श्वास लेता है? (Breaths per minute?)",
        a: ["15-20", "10-20", "20-25", "12-14"],
        [span_41](start_span)c: 0 //[span_41](end_span)
    },
    {
        q: "Q22. मनुष्य शरीर में फुफ्फुसों (Lungs) की संख्या कितनी होती है?",
        a: ["4", "3", "2", "5"],
        [span_42](start_span)c: 2 //[span_42](end_span)
    },
    {
        q: "Q23. ऑक्सीजन को रक्त का कौन-सा भाग ग्रहण करता है? (Which blood part absorbs Oxygen?)",
        a: ["प्लाज्मा", "हीमोग्लोबिन", "WBC", "रक्त कणिकाएँ"],
        [span_43](start_span)[span_44](start_span)c: 1 //[span_43](end_span)[span_44](end_span)
    },
    {
        q: "Q24. प्रश्वसन (Inspiration) में सहायक होती है-",
        a: ["ऐच्छिक पेशियाँ", "अन्तः अन्तरापर्शक पेशियाँ", "बाह्य अन्तरापर्शक पेशियाँ", "हृदय पेशियाँ"],
        [span_45](start_span)c: 2 //[span_45](end_span)
    },
    {
        q: "Q25. मनुष्य के शरीर में फेफड़ों की संख्या कितनी होती है?",
        a: ["2", "4", "1", "अनेक"],
        [span_46](start_span)[span_47](start_span)c: 0 //[span_46](end_span)[span_47](end_span)
    },
    {
        q: "Q26. व्यक्ति के डूबने पर निम्न सहायता दी जाती है- (Drowning aid?)",
        a: ["स्नान", "पट्टी", "गर्म पेय", "कृत्रिम श्वास (Artificial Respiration)"],
        [span_48](start_span)c: 3 //[span_48](end_span)
    },
    {
        q: "Q27. वायु को श्वास द्वारा फेफड़ों में ग्रहण करना क्या कहलाता है?",
        a: ["श्वसन", "साँस लेना", "निःश्वसन", "प्रश्वसन"],
        [span_49](start_span)c: 3 //[span_49](end_span)
    },
    {
        q: "Q28. श्वसन का प्रमुख अंग कौन-सा है? (Main organ of respiration?)",
        a: ["त्वचा", "आमाशय", "फेफड़े (Lungs)", "मुखगुहा"],
        [span_50](start_span)[span_51](start_span)c: 2 //[span_50](end_span)[span_51](end_span)
    },
    {
        q: "Q29. ऑक्सीजन द्वारा रक्त का शुद्धीकरण कहाँ होता है? (Blood purification by Oxygen?)",
        a: ["पाचन अंग", "त्वचा", "हृदय", "फुफ्फुस / फेफड़े"],
        [span_52](start_span)[span_53](start_span)c: 3 //[span_52](end_span)[span_53](end_span)
    },
    {
        q: "Q30. अशुद्ध रक्त किस गैस को ग्रहण करके शुद्ध हो जाता है?",
        a: ["O2", "CO2", "H2O", "कोई नहीं"],
        [span_54](start_span)c: 0 //[span_54](end_span)
    },
    {
        q: "Q31. सिल्वेस्टर विधि में कितने व्यक्तियों की आवश्यकता होती है?",
        a: ["एक", "चार", "तीन", "दो"],
        [span_55](start_span)[span_56](start_span)c: 3 //[span_55](end_span)[span_56](end_span)
    },
    {
        q: "Q32. रक्त में ऑक्सीजन कम होने पर रंग कैसा हो जाता है?",
        a: ["लाल से बैंगनी (Red to Purple)", "नीला", "चमकीला लाल", "सभी"],
        [span_57](start_span)[span_58](start_span)c: 0 //[span_57](end_span)[span_58](end_span)
    },
    {
        q: "Q33. पेट में संकुचन और मुँह से खून आना किसके लक्षण हैं? (Abdominal contraction + mouth bleeding?)",
        a: ["सिर की चोट", "जहर", "ड्रग ओवरडोज", "आंतरिक रक्तस्त्राव (Internal Bleeding)"],
        [span_59](start_span)[span_60](start_span)c: 3 //[span_59](end_span)[span_60](end_span)
    },
    {
        q: "Q34. आपात स्थिति में तीन बुनियादी कदम क्या हैं? (3 Basic steps in emergency?)",
        a: ["चेक, कॉल, केयर (Check, Call, Care)", "कॉल, चेक, केयर", "पहचानें, निर्णय लें", "निर्णय लें, कॉल करें"],
        [span_61](start_span)[span_62](start_span)c: 0 //[span_61](end_span)[span_62](end_span)
    },
    {
        q: "Q35. आँख में काँटा लगने पर क्या करेंगे? (Splinter in eye?)",
        a: ["काँटा अंदर छोड़ दो, मदद बुलाओ (Leave it, call help)", "पानी से धोएँ", "चिमटी से निकालें", "दोनों आँखें ढकें"],
        [span_63](start_span)[span_64](start_span)c: 0 //[span_63](end_span)[span_64](end_span)
    },
    {
        q: "Q36. शुद्ध रक्त (Pure Blood) किसमें बहता है?",
        a: ["पश्च महाशिरा", "अग्र महाशिरा", "फुफ्फुस शिरा (Pulmonary Vein)", "सभी शिराओं में"],
        [span_65](start_span)[span_66](start_span)c: 2 //[span_65](end_span)[span_66](end_span)
    },
    {
        q: "Q37. बेहोश 8 साल के बच्चे का वायुमार्ग अवरुद्ध होने पर क्या करें?",
        a: ["बचाव श्वास", "सीपीआर शुरु करें (Start CPR)", "पेट पर जोर दें", "सभी"],
        [span_67](start_span)[span_68](start_span)c: 2 //[span_67](end_span)[span_68](end_span)
    },
    {
        q: "Q38. वयस्क पर सीपीआर करते समय छाती का संकुचन कितना गहरा हो? (Adult CPR depth?)",
        a: ["1.5 इंच", "2.5 इंच", "2 इंच (PDF Key)", "3 इंच"],
        [span_69](start_span)[span_70](start_span)c: 2 //[span_69](end_span)[span_70](end_span)
    },
    {
        q: "Q39. हृदय द्वारा महत्त्वपूर्ण कार्य किया जाता है- (Heart's main function?)",
        a: ["धड़कना", "पोषक तत्व संचित करना", "श्वसन सहायता", "शुद्ध रक्त शरीर में + अशुद्ध फेफड़ों में पहुँचाना"],
        [span_71](start_span)c: 3 //[span_71](end_span)
    },
    {
        q: "Q40. बेहोश पीड़ित ने मधुमेह (Diabetes) टैग पहना है, आप क्या करेंगे?",
        a: ["सांस और नाड़ी की जाँच (Check breath/pulse)", "सीपीआर", "इंसुलिन दें", "बचाव श्वास"],
        [span_72](start_span)[span_73](start_span)c: 0 //[span_72](end_span)[span_73](end_span)
    },
    {
        q: "Q41. एक बच्चे पर सीपीआर करते समय छाती का संकुचन कितना गहरा हो? (Child CPR depth?)",
        a: ["3 इंच", "2 इंच", "2.5 इंच", "1.5 इंच"],
        [span_74](start_span)[span_75](start_span)c: 3 //[span_74](end_span)[span_75](end_span)
    },
    {
        q: "Q42. अशुद्ध रक्त (Impure Blood) बहता है-",
        a: ["पृष्ठ महाधमनी", "प्लीहा धमनी", "यकृत धमनी", "फुफ्फुसीय धमनी (Pulmonary Artery)"],
        [span_76](start_span)[span_77](start_span)c: 3 //[span_76](end_span)[span_77](end_span)
    },
    {
        q: "Q43. परिसंचरण तन्त्र (Circulatory System) का मुख्यतम अंग है-",
        a: ["फेफड़े", "शिराएँ", "धमनियाँ", "हृदय (Heart)"],
        [span_78](start_span)c: 3 //[span_78](end_span)
    },
    {
        q: "Q44. स्वस्थ मनुष्य का सामान्य रुधिर दाब (BP) कितना होता है?",
        a: ["25-55", "105-130", "80-55", "120/80 (Approx in range 55-80 - PDF Key (d))"],
        [span_79](start_span)c: 3 //[span_79](end_span)
    },
    {
        q: "Q45. प्रोथ्रोम्बिन निर्माण के लिए किस विटामिन की आवश्यकता होती है? (Vitamin for Prothrombin?)",
        a: ["D", "B", "A", "K"],
        [span_80](start_span)c: 3 //[span_80](end_span)
    },
    {
        q: "Q46. लाल रक्त कणिकाओं (RBC) का लाल रंग किससे प्राप्त होता है?",
        a: ["हीमोग्लोबिन (Hemoglobin)", "जीवद्रव्य", "प्लाज्मा", "कोई नहीं"],
        [span_81](start_span)[span_82](start_span)c: 0 //[span_81](end_span)[span_82](end_span)
    },
    {
        q: "Q47. लाल रक्त कोशिकाओं के द्रव्य में पाया जाने वाला पदार्थ क्या है?",
        a: ["हीमोग्लोबिन", "प्लाज्मा", "प्रोटीन", "कोई नहीं"],
        [span_83](start_span)[span_84](start_span)c: 0 //[span_83](end_span)[span_84](end_span)
    },
    {
        q: "Q48. श्वेत रुधिर कणिकाओं (WBC) का कार्य है- (Function of WBC?)",
        a: ["रोगाणुओं को नष्ट करना", "प्रतिविष तैयार करना", "शरीर की रक्षा करना", "उपर्युक्त सभी (All of these)"],
        [span_85](start_span)c: 3 //[span_85](end_span)
    },
    {
        q: "Q49. एंटीजन A और B के आधार पर रक्त समूह कितने भागों में बाँटे गए हैं?",
        a: ["दो", "पाँच", "चार (Four: A, B, AB, O)", "छ:"],
        [span_86](start_span)c: 2 //[span_86](end_span)
    },
    {
        q: "Q50. शरीर-रक्षक कणिकाएँ हैं- (Body protector cells?)",
        a: ["प्लेटलेट्स", "लाल रक्त कणिकाएँ", "श्वेत रक्त कणिकाएँ (WBC)", "फाईब्रिनोजन"],
        [span_87](start_span)c: 2 //[span_87](end_span)
    },
    {
        q: "Q51. पोषक तत्व और ऑक्सीजन पहुँचाने वाले तन्त्र को क्या कहते हैं?",
        a: ["पाचन तन्त्र", "श्वसन तन्त्र", "परिसंचरण तन्त्र (Circulatory)", "विसर्जन तन्त्र"],
        [span_88](start_span)[span_89](start_span)c: 2 //[span_88](end_span)[span_89](end_span)
    },
    {
        q: "Q52. रक्त परिसंचरण संस्थान के कितने अंग हैं?",
        a: ["चार (Four)", "तीन", "दो", "पाँच"],
        [span_90](start_span)[span_91](start_span)c: 0 //[span_90](end_span)[span_91](end_span)
    },
    {
        q: "Q53. उम्र विशेष की स्थिति से अधिक रक्त दाब क्या कहलाता है? (High BP?)",
        a: ["उच्च रक्त दाब (Hypertension)", "अल्प रक्त दाब", "निम्न रक्त दाब", "कोई नहीं"],
        [span_92](start_span)[span_93](start_span)c: 0 //[span_92](end_span)[span_93](end_span)
    },
    {
        q: "Q54. रक्त परिभ्रमण का केन्द्र स्थल क्या है? (Center of blood circulation?)",
        a: ["वृक्क", "फेफड़े", "हृदय (Heart)", "कोशिका"],
        [span_94](start_span)[span_95](start_span)c: 2 //[span_94](end_span)[span_95](end_span)
    },
    {
        q: "Q55. बिजली का झटका (Electric Shock) लगने पर सबसे पहले क्या करें?",
        a: ["ड्रेसिंग से कवर करें", "बिजली बंद करें (Ensure power off)", "सिर नीचे रखें", "मदद मांगें"],
        [span_96](start_span)[span_97](start_span)c: 1 //[span_96](end_span)[span_97](end_span)
    },
    {
        q: "Q56. प्राथमिक उपचार के क्रम को व्यवस्थित करें: 1.श्वास, 2.रक्तस्त्राव, 3.सदमा, 4.कॉल",
        a: ["2, 4, 3, 1", "4, 3, 2, 1", "1, 2, 3, 4 (Correct Sequence)", "4, 2, 1, 3"],
        [span_98](start_span)c: 2 //[span_98](end_span)
    },
    {
        q: "Q57. जीवन सहायता में ABC का अर्थ है-",
        a: ["कोई नहीं", "Airway, Bridge, Canal", "Airway, Breathing, Circulation", "Action, Circulation, Breathing"],
        [span_99](start_span)[span_100](start_span)c: 2 //[span_99](end_span)[span_100](end_span)
    },
    {
        q: "Q58. निम्नलिखित में से कौन-सा प्राथमिक चिकित्सा का उद्देश्य है?",
        a: ["जीवन की रक्षा", "चोटों को सीमित करना", "स्वास्थ्य लाभ", "उपरोक्त सभी (All of these)"],
        [span_101](start_span)[span_102](start_span)c: 3 //[span_101](end_span)[span_102](end_span)
    },
    {
        q: "Q59. चिकित्सा प्राथमिक उपचार में DRAB का पूर्णरूप क्या है?",
        a: ["Drag, Response...", "Danger, React...", "Danger, Response, Airway, Breathing", "Drag, React..."],
        [span_103](start_span)[span_104](start_span)c: 2 //[span_103](end_span)[span_104](end_span)
    },
    {
        q: "Q60. प्राथमिक चिकित्सा में कौन-सी तकनीक का उपयोग किया जाता है?",
        a: ["पट्टी (Bandaging)", "परिवहन", "बैंडेज", "उपरोक्त सभी"],
        [span_105](start_span)c: 0 //[span_105](end_span) (Key: a)
    },
    {
        q: "Q61. एक अच्छी पट्टी कैसी होनी चाहिए?",
        a: ["कीटाणुओं वाली", "गीली", "तैलीय", "रोगाणु मुक्त (Germ-free)"],
        [span_106](start_span)[span_107](start_span)c: 3 //[span_106](end_span)[span_107](end_span)
    },
    {
        q: "Q62. दम घुटने वाले शिशु (Choking Infant) के लिए क्या करेंगे?",
        a: ["पीठ पर वार + छाती दबाव (Back blows + chest thrusts)", "सीपीआर", "हेमलिक प्रक्रिया", "उल्टा पकड़ें"],
        [span_108](start_span)[span_109](start_span)c: 0 //[span_108](end_span)[span_109](end_span)
    },
    {
        q: "Q63. बांह पर रक्त स्राव न रुकने पर दबाव कहाँ लागू करेंगे? (Pressure point?)",
        a: ["कंधे और कोहनी के बीच हाथ के अंदर", "कोहनी के अंदर", "कंधे-कोहनी के बाहर", "कोई नहीं"],
        [span_110](start_span)[span_111](start_span)c: 0 //[span_110](end_span)[span_111](end_span)
    },
    {
        q: "Q64. चोट के जोखिम को कम करने वाला व्यवहार क्या है? (Risk reduction?)",
        a: ["सुरक्षा बेल्ट पहनना", "शराब सीमित करना", "(a) और (b) दोनों", "कोलेस्ट्रॉल कम करना"],
        [span_112](start_span)[span_113](start_span)c: 2 //[span_112](end_span)[span_113](end_span)
    },
    {
        q: "Q65. अधिकांश चोटें किन स्थितियों के कारण होती हैं?",
        a: ["जिन पर आपका नियंत्रण था (Controllable/Preventable)", "पानी के खेल", "5+ लोग शामिल", "कोई नियंत्रण नहीं"],
        [span_114](start_span)[span_115](start_span)c: 0 //[span_114](end_span)[span_115](end_span)
    },
    {
        q: "Q66. खुले घावों की देखभाल करते समय संक्रमण का जोखिम कैसे कम करें?",
        a: ["हाथ धोएं", "सीधे संपर्क से बचें", "दस्ताने प्रयोग करें", "उपरोक्त सभी (All of these)"],
        [span_116](start_span)[span_117](start_span)c: 3 //[span_116](end_span)[span_117](end_span)
    },
    {
        q: "Q67. ड्रेसिंग और पट्टियों का उपयोग कब किया जाता है?",
        a: ["रक्तस्त्राव नियंत्रित + संक्रमण रोकने हेतु", "आंतरिक रक्तस्त्राव कम करने हेतु", "दर्द कम करने हेतु", "अस्पताल ले जाने हेतु"],
        [span_118](start_span)[span_119](start_span)c: 0 //[span_118](end_span)[span_119](end_span)
    },
    {
        q: "Q68. खून बहने वाले घावों की देखभाल में पहला कदम क्या है? (First step?)",
        a: ["ऊपर उठाना", "दबाव बिंदु दबाना", "भारी ड्रेसिंग", "साफ ड्रेसिंग के साथ सीधा दबाव (Direct Pressure)"],
        [span_120](start_span)c: 3 //[span_120](end_span)
    },
    {
        q: "Q69. आंतरिक रक्तस्राव (Internal Bleeding) के कारण हो सकते हैं-",
        a: ["दवा", "चोट", "बीमारी", "उपरोक्त सभी"],
        [span_121](start_span)c: 2 //[span_121](end_span) (Key: c - injury)
    },
    {
        q: "Q70. किसी पीड़ित को बचाव श्वास (Rescue Breathing) कब देनी चाहिए?",
        a: ["सचेत घुटन पीड़ित", "बेहोश, सांस नहीं ले रहा, लेकिन नाड़ी है (Pulse exists)", "बेहोश, कोई नाड़ी नहीं", "बेहोश घुटन"],
        [span_122](start_span)[span_123](start_span)c: 1 //[span_122](end_span)[span_123](end_span)
    },
    {
        q: "Q71. शीतदंश (Frostbite) पीड़ित की देखभाल में क्या 'नहीं' करना चाहिए?",
        a: ["गर्म पानी में भिगोना", "फफोले फोड़ना", "धीरे से संभालना", "त्वचा को जोर से रगड़ना (Do not rub)"],
        [span_124](start_span)[span_125](start_span)c: 3 //[span_124](end_span)[span_125](end_span)
    },
    {
        q: "Q72. आंतरिक रक्तस्त्राव वाले पीड़ित के लिए आप क्या करेंगे?",
        a: ["चुप कराकर लिटा दें", "घुटनों को मोड़कर आराम", "(a) और (b) दोनों", "कोई नहीं"],
        [span_126](start_span)[span_127](start_span)c: 2 //[span_126](end_span)[span_127](end_span)
    },
    {
        q: "Q73. ईएमएस (EMS) प्रणाली में आपकी भूमिका के चार चरण क्या हैं?",
        a: ["पहचानें, निर्णय लें, कॉल करें, प्रदान करें (Recognize, Decide, Call, Provide)", "चेक, कॉल...", "ऊँचा करना...", "कोई नहीं"],
        [span_128](start_span)[span_129](start_span)c: 0 //[span_128](end_span)[span_129](end_span)
    },
    {
        q: "Q74. लू लगना (Heat Stroke) क्या है? (Wh
