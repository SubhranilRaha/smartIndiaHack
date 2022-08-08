const dotenv = require('dotenv');
dotenv.config();

module.exports.DATABASE_URL = process.env.DATABASE_URL;

module.exports.PORT = process.env.PORT || 4000; // for this(express) server

module.exports.SESSION_SECRET = process.env.SESSION_SECRET;

// All necessary URLs
module.exports.CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';
module.exports.EXPRESS_SERVER_URL = process.env.SERVER_URL || 'http://localhost:4000';
module.exports.FLASK_SERVER_URL = process.env.SERVER_URL || 'http://localhost:5000';