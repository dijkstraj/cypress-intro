exports.setup = function(app) {
    var controller = require('./autos.controller');

    app.route('/autos')
        .get(controller.getAutos)
        .post(controller.addAuto);

    app.route('/autos/:id')
        .get(controller.getAuto)
        .put(controller.updateAuto)
        .delete(controller.deleteAuto);
};
