// Loads Node.js built-in encryption library
const crypto = require("crypto");

// Chooses AES-256-GCM as our encryption method
const algorithm = "aes-256-gcm";

// Gets our secret encryption key from the environment file
const key = Buffer.from(process.env.AES_KEY, "hex");

//encrypt hangouts location
if (key.length !== 32){
    throw new Error("AES_KEY must be 32 bytes");
}
function encryptAES(text){
    const iv = crypto.randomBytes(12);

    const cipher = crypto.createCipheriv(algorithm, key, iv);

    //encrypts the location text and converts it to hexadecimal
    let encrypted = cipher.update(text, "utf8", "hex");
    //finishes the encryption process
    encrypted += cipher.final("hex");
 
    //gets the authentication tag to check if data was changed 
    const authTag = cipher.getAuthTag();

    //returns everyhting needed to store and later decrypt the location
    return{
        encrypted,
        iv: iv.toString("hex"),
        authTag: authTag.toString("hex")
    };
}


//function to decrypt and encrypted hangout location
function decryptAES(encryptedData){

    //converts the saved Iv back into bytes 
    const iv = Buffer.from(encryptedData.iv, "hex");

    //converts the authentication tag back into bytes 
    const authTag = Buffer.from(encryptedData.authTag,"hex");

    //creates theAES decryption tool using out secret key and IV
    const decipher = crypto.createDecipheriv(algorithm, key, iv);

    //Sets the authentication tag to check the encrypted data 
    decipher.setAuthTag(authTag);

    //decrypts the location back into readable text
    let decrypted = decipher.update(encryptedData.encrypted, "hex", "utf8");

    //finished decryption and checks that tghe data has not been chnaged 
    decrypted += decipher.final("utf8");

    //return the oringal hangout location 
    return decrypted;
}

module.exports = {encryptAES, decryptAES};

/*
// Tests AES encryption and decryption using a hangout location
const originalLocation = "Dublin Castle";

// Encrypts the location using AES-256-GCM
const encryptedLocation = encryptAES(originalLocation);

// Decrypts the encrypted location back to normal
const decryptedLocation = decryptAES(encryptedLocation);

// Displays the results in the terminal
console.log("Original:", originalLocation);
console.log("Encrypted:", encryptedLocation);
console.log("Decrypted:", decryptedLocation);
*/