function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    const vowels = 'aeiouAEIOU';


    if (sentence[sentence.length - 1] !== '.') {
        console.log("The sentence must end with a point.");
        return;
    }

    
    let inWord = false;


    for (let char of sentence) {
        lengthCounter++;

    
        if (vowels.includes(char)) {
            vowelCounter++;
        }

        
        if (char === ' ') {
            if (inWord) {
                wordCounter++;
                inWord = false;
            }
        } else if (char === '.') {
            if (inWord) {
                wordCounter++;
            }
        } else {
            inWord = true;
        }
    }

    console.log(`Length of the sentence: ${lengthCounter}`);
    console.log(`Number of words: ${wordCounter}`);
    console.log(`Number of vowels: ${vowelCounter}`);
}


const sentence = "This is an example sentence.";
analyzeSentence(sentence);
