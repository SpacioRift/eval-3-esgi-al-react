const { bdd } = require('./connexion.js');
const User = require("./../model/user.model.js");

const sync = async () => {
    await bdd.sync({ force: true });
}

module.exports = sync;