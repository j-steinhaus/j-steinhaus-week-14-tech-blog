// variables 
const express = require('express')
const path = require('path');
const routes = require('./controller');
const sequelize = require('./config/config.js');
const helpers = require('./utils/helpers.js');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({
    helpers
});
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// time to check every 10 mins and expire after 30 mins 
const sess = {
    secret: process.env.DB_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
        checkExpirationInterval: 1000 * 60 * 10,
        expiration: 1000 * 60 * 30 
    })
};

// port to pathway 
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

sequelize.sync();

// connection 
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});