const newsRouter = require('./news');
const meRouter = require('./me');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
}

module.exports = route;
