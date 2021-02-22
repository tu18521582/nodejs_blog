const Course = require('../models/Course');
const { mutipleMongooseObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /

    //cach viet function
    // index(req, res) {
    //     // res.render('home');
    //     Course.find({}, function (err, courses) {
    //         if (!err) {
    //             res.json(courses);
    //         }
    //         else {
    //             res.status(400).json({ error: 'message' });
    //         }
    //     })
    // }

    //cach viet promise
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
