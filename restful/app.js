var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');
var noticeRouter = require('./routes/notice');
var recommendRouter = require('./routes/recommend');
var activityRouter =  require('./routes/activity');
var templateRouter = require('./routes/templates');
var projectRouter = require('./routes/projects');
var contentRouter = require('./routes/contents');

var app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger.json');
const options = {
  swaggerDefinition: swaggerDefinition,
  authAction: { JWT: { name: "JWT", schema:
    {type: "apiKey", in: "header", name: "Authorization", description: ""},
    value: "Bearer <JWT>"}},
  apis: ['./routes/*']
}
const swaggerSpec = swaggerJSDoc(options);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test', testRouter);
app.use('/notice', noticeRouter);
app.use('/recommend', recommendRouter);
app.use('/activity', activityRouter);
app.use('/templates', templateRouter);
app.use('/projects', projectRouter);
app.use('/contents', contentRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {"showExplorer": true}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
