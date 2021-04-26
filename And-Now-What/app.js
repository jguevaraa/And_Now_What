require("dotenv").config();

const express = require("express");
const app = express();

require('./config/db.config');
require('./config/debugger.config');
require('./config/middleware.config')(app);
require('./config/views.config')(app);
require('./config/locals.config')(app);
require('./config/session.config')(app);
require('./config/passport.config')(app);

const index = require("./routes/index");
const authRouter = require('./routes/auth.routes');

app.use('/', index);
app.use('/auth', authRouter)

module.exports = app;
