const autos = {};
let idGenerator = 1;

exports.getAutos = function(request, response) {
    response.send(Object.values(autos));
};

exports.addAuto = function(request, response) {
    const auto = request.body;
    if (!auto.merk) {
        throw new Error('Auto moet minstens een merk bevatten!');
    }
    const id = idGenerator++;
    auto.id = id;
    autos[id] = auto;
    response.send(auto.merk + ' toegevoegd met id ' + id);
};

exports.deleteAllAutos = function(request, response) {
    const ids = Object.keys(autos);
    ids.forEach(id => delete autos[id]);
    idGenerator = 1;
    response.send(ids.length + " auto's verwijderd");
};

function withValidId(request, handler) {
    const id = parseInt(request.params.id, 10);
    if (id > 0 && autos[id]) {
        handler(id);
    } else {
        throw new Error('Ongeldig id: ' + request.params.id);
    }
}

exports.getAuto = function(request, response) {
    withValidId(request, id => response.send(autos[id]));
};

exports.updateAuto = function(request, response) {
    withValidId(request, id => {
        const auto = request.body;
        Object.assign(autos[id], auto);
        response.send('Auto bijgewerkt: ' + id);
    });
};

exports.deleteAuto = function(request, response) {
    withValidId(request, id => {
        delete autos[id];
        response.send('Auto verwijderd: ' + id);
    })
};
