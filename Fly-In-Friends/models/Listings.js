const mongoose = require("mongoose");
//schema for users hangoutlistings
//stores the text/ coordinats for the map
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    activity:{
        type: String,
        required: true
    },

    //stores the location encrypoted using AES
    encryptedLocation:{
        type: String
    },

    //stores the IV needed for AES decryption
    locationIv:{
        type: String
    },

    ////stores the authentication tag for AES
    locationAuthTag:{
        type: String
    },

    //stores the activity encrypted using Caesar cipher
    encryptedActivity:{
        type: String
    },
        
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    userId: {
        type: Number,
        required:true
    }

});
module.exports = mongoose.model("Listings", listingSchema);

