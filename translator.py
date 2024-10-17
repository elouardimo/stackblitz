# Dictionnaire simple pour la démonstration
arabic_to_french = {
    "مرحبا": "bonjour",
    "شكرا": "merci",
    "نعم": "oui",
    "لا": "non"
}

arabic_to_english = {
    "مرحبا": "hello",
    "شكرا": "thank you",
    "نعم": "yes",
    "لا": "no"
}

def translate_word(word, target_language):
    if target_language == "french":
        return arabic_to_french.get(word, word)
    elif target_language == "english":
        return arabic_to_english.get(word, word)
    else:
        return "Langue cible non supportée"

def translate_sentence(sentence, target_language):
    words = sentence.split()
    translated_words = [translate_word(word, target_language) for word in words]
    return " ".join(translated_words)

# Test de l'application
arabic_sentence = "مرحبا شكرا"
print("Original:", arabic_sentence)
print("En français:", translate_sentence(arabic_sentence, "french"))
print("En anglais:", translate_sentence(arabic_sentence, "english"))