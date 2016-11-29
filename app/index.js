
'use strict';

// Modules
var path          = require('path');
var express       = require('express');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookie_parser = require('cookie-parser');
var body_parser   = require('body-parser');
var moment        = require('moment');
var extend        = require('extend');
var hogan         = require('hogan-express');
var session       = require('express-session');
var raneto        = require('./core/lib/raneto.js');
var passport      = require('passport');

function initialize (config) {

  // Load Translations
  if (!config.locale) { config.locale = 'en'; }
  if (!config.lang) {
    config.lang = require('./translations/' + config.locale + '.json');
  }

  // Content_Dir requires trailing slash
  if (config.content_dir[config.content_dir.length - 1] !== path.sep) { config.content_dir += path.sep; }
  // Setup config
  extend(raneto.config, config);

  // Load Files
  var authenticate          = require('./middleware/authenticate.js')      (config);
  var always_authenticate   = require('./middleware/always_authenticate.js')      (config);
  var error_handler         = require('./middleware/error_handler.js')     (config);
  var oauth2                = require('./middleware/oauth2.js');
  var route_login           = require('./routes/login.route.js')           (config);
  var route_login_page      = require('./routes/login_page.route.js')      (config);
  var route_logout          = require('./routes/logout.route.js');
  var route_page_edit       = require('./routes/page.edit.route.js')       (config, raneto);
  var route_page_delete     = require('./routes/page.delete.route.js')     (config, raneto);
  var route_page_create     = require('./routes/page.create.route.js')     (config, raneto);
  var route_category_create = require('./routes/category.create.route.js') (config, raneto);
  var route_search          = require('./routes/search.route.js')          (config, raneto);
  var route_home            = require('./routes/home.route.js')            (config, raneto);
  var route_wildcard        = require('./routes/wildcard.route.js')        (config, raneto);
  var route_sitemap         = require('./routes/sitemap.route.js')         (config, raneto);

  // New Express App
  var app = express();

  // Setup Port
  app.set('port', process.env.PORT || 3000);

  // set locale as date and time format
  moment.locale(config.locale);

  // Setup Views
  if (!config.theme_dir)  { config.theme_dir  = path.join(__dirname, '..', 'themes'); }
  if (!config.theme_name) { config.theme_name = 'default'; }
  if (!config.public_dir) { config.public_dir = path.join(config.theme_dir, config.theme_name, 'public'); }
  app.set('views', path.join(config.theme_dir, config.theme_name, 'templates'));
  app.set('layout', 'layout');
  app.set('view engine', 'html');
  app.enable('view cache');
  app.engine('html', hogan);

  // Setup Express
  app.use(favicon(config.public_dir + '/favicon.ico'));
  app.use(logger('dev'));
  app.use(body_parser.json());
  app.use(body_parser.urlencoded({ extended : false }));
  app.use(cookie_parser());
  app.use(express.static(config.public_dir));
  if (config.theme_dir !== path.join(__dirname, '..', 'themes')) {
    app.use(express.static(path.join(config.theme_dir, config.theme_name, 'public')));
  }
  app.use(config.image_url, express.static(path.normalize(config.content_dir + config.image_url)));
  app.use('/translations',  express.static(path.normalize(__dirname + '/translations')));

  // HTTP Authentication
  if (config.authentication === true || config.authentication_for_edit) {
    app.use(session({
      secret            : config.secret,
      name              : 'raneto.sid',
      resave            : false,
      saveUninitialized : false
    }));

    // OAuth2
    if (config.googleoauth === true) {
      app.use(passport.initialize());
      app.use(passport.session());
      app.use(oauth2.router(config));
      app.use(oauth2.template);
    }

    app.post('/rn-login', route_login);
    app.get('/logout', route_logout);
    app.get('/login',     route_login_page);
  }

  // Online Editor Routes
  if (config.allow_editing === true) {

    var middlewareToUse = authenticate;
    if (config.authentication_for_edit === true) {
      middlewareToUse = always_authenticate;
    }
    if (config.googleoauth === true) {
      middlewareToUse = oauth2.required;
    }

    app.post('/rn-edit',         middlewareToUse, route_page_edit);
    app.post('/rn-delete',       middlewareToUse, route_page_delete);
    app.post('/rn-add-page',     middlewareToUse, route_page_create);
    app.post('/rn-add-category', middlewareToUse, route_category_create);

  }

  // Router for / and /index with or without search parameter
  if (config.googleoauth === true) {
    app.get('/:var(index)?', oauth2.required, route_search, route_home);
    app.get(/^([^.]*)/, oauth2.required, route_wildcard);
  }
  else {
    app.get('/sitemap.xml', route_sitemap);
    app.get('/:var(index)?', route_search, route_home);
    app.get(/^([^.]*)/, route_wildcard);
  }

  // Handle Errors
  app.use(error_handler);

  return app;

}

// Exports
module.exports = initialize;
