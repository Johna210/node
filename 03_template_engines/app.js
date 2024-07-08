const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const app = express();

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: 'Page Not Found' });
});

app.listen(3000);
