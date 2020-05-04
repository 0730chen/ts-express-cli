const  middler = function (request, response, next) {
    console.log(response);
    next()
};

module.exports = middler