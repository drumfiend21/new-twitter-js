var express = require("express");
var app = express();
var morgan = require("morgan");
var chalk = require("chalk")
var swig = require('swig');

//configure templating
app.engine('html', swig.renderFile);
app.set('views', __dirname+'/views')
app.set('view engine', 'html')


swig.setDefaults({ cache: false }); //disable view cacheing for development

//configure logging
app.use(morgan(function (tokens, req, res) {
  return chalk.blue(tokens.method(req, res))
    + ' ' + chalk.green(tokens.url(req, res))
    + ' ' + chalk.red(tokens['response-time'](req, res))
}))

// mount the router on the app
var routes = require("./routes")
app.use('/', routes)

app.listen(3000);