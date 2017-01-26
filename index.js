var
    express = require('express'),
    app = express()
    ejs = require('ejs'),
    ejsLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    passport = require('passport'),
    dotenv = require('dotenv').load({silent: true}),
    methodOverride = require('method-override'),
    request = require('request')

    var port = process.env.PORT || 3000

app.listen(port, function(){
	console.log("Server running on port: ", port)
})
