const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const rootDir = require('./util/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { docTitle: 'Page Not Found', path: '404' });
});

app.listen(3000);
