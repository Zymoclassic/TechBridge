function reverseAlphabetDecoder(input) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    // Convert input to uppercase to handle lowercase letters
    input = input.toUpperCase();

    let result = "";

    for (let char of input) {
        // Check if the character is a letter
        if (alphabet.includes(char)) {
            
            const position = alphabet.indexOf(char) + 1;
            const reversePosition = 27 - position;
            result += alphabet[reversePosition - 1];
        } else {
            // If not a letter, append the character as-is
            result += char;
        }
    }

    return result;
}


console.log(reverseAlphabetDecoder("JavaScript!"));
console.log(reverseAlphabetDecoder("Techbridge"));
console.log(reverseAlphabetDecoder("QZEZHXIRKG!"));
console.log(reverseAlphabetDecoder("GVXSYIRWTV"));

