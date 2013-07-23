var mandible = require('mandible');

module.exports = function(dir, opts) {
    var emailer = mandible(dir)

    //mandible.html(name, locals, cb);
    //mandible.txt(name, locals, cb);

    return emailer;
};

