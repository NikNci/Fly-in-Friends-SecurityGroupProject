This is an extension of a previous project to add in cryptographic methods into the codebase for CA1 of Security Fundamentals and Development module.

# __Contributed Changes__

Ryan - Added AES encryption for hangout location and Caesar cipher for activities, set up encryption and decryption, updated the database and tested that encrypted listings saved correctly. 

Sean - Developed the JavaScript encryption and decryption using Vigenère Cipher. Encrypt messages before they are stored in MongoDB and decrypt them when they are displayed to users. 

Nikolas - Encrypting JWT log-in tokens with AES-256 to make server's digital identity tracking format more hidden from potential attackers. Testing of said encryption function to see that it does not break user sessions. Specific changes in server.js , new functions are "encryptToken()", "decryptToken()" , modified functions createNewToken(), refreshToken(), and verifyToken() to implement specified encryption tokens.

Vincent - Built a better authentication system using argon2 with a memory cost of 2^16 to prevent GPU brute force attacks. I also encrypted their email address using AES-256-GCM before it saves MongoDB for their privacy.  
