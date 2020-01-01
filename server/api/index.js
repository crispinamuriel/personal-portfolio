const router = require('express').Router();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const session = require("express-session");
const passport = require("passport");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("../db/db");
const sessionStore = new SequelizeStore({ db });
const PORT = process.env.PORT || 3000;
const app = express();
const socketio = require("socket.io");
module.exports = app;

router.use('/stories', require('./stories'));
router.use('/authors', require('./authors'));
router.use('/info', require('./info'));
// static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')))
module.exports = router;
