//Caesar encryption

function encryptCaesar(text, shift = 3){
    return text.replace(/[a-z]/gi, (char )=> {
        const base = char === char.toUpperCase() ? 65 : 97;
        //Moves the letter forward by the shift amount(3)
        //%26 makes sure it loops through the alpabet A-Z
        return String.fromCharCode(
            ((char.charCodeAt(0) -base + shift) % 26) + base

        );
    });
}

//Caesar decryption
//reveres the caesar cipher shift
function decryptCaesar(text, shift = 3){
    //moves letters backwards to get orignal text 
    //26 -shift reverses the encryption
    return encryptCaesar(text,26 - shift);
}

//allows others files to use the caesar encryption and decryption functions 
module.exports = {encryptCaesar, decryptCaesar};

/*

// Tests Caesar Cipher encryption and decryption
const originalText = "Football in Dublin";

// Encrypts the original text using a shift of 3
const encryptedText = encryptCaesar(originalText, 3);

// Decrypts the encrypted text back to normal
const decryptedText = decryptCaesar(encryptedText, 3);

// Displays the results in the terminal
console.log("Original:", originalText);
console.log("Encrypted:", encryptedText);
console.log("Decrypted:", decryptedText);

*/
