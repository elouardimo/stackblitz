// Dictionnaires simples pour la démonstration
const arabicToFrench = {
    "مرحبا": "bonjour",
    "شكرا": "merci",
    "نعم": "oui",
    "لا": "non"
};

const arabicToEnglish = {
    "مرحبا": "hello",
    "شكرا": "thank you",
    "نعم": "yes",
    "لا": "no"
};

function translateWord(word, targetLanguage) {
    if (targetLanguage === "french") {
        return arabicToFrench[word] || word;
    } else if (targetLanguage === "english") {
        return arabicToEnglish[word] || word;
    } else {
        return "Langue cible non supportée";
    }
}

function translateSentence(sentence, targetLanguage) {
    const words = sentence.split(' ');
    const translatedWords = words.map(word => translateWord(word, targetLanguage));
    return translatedWords.join(' ');
}

function translate() {
    const input = document.getElementById('input').value;
    const language = document.getElementById('language').value;
    const output = document.getElementById('output');
    
    const translation = translateSentence(input, language);
    output.textContent = translation;
}