const PKM = require('../models/pkm');
const USER = require('../models/user');

exports.findAll = async (req, res) => {
    try {
        const users = await USER.find();
        const pkms = await PKM.find();
        let userTable = '<h1>Liste des utilisateurs</h1><table>';
        userTable += '<tr><th>ID</th><th>Name</th><th>Email</th></tr>';
        users.forEach(user => {
            userTable += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
        });
        userTable += '</table>';

        let pkmTable = '<h1>Liste des pokemon</h1><table>';
        pkmTable += '<tr><th>ID</th><th>Nom</th><th>Type</th></tr>';
        pkms.forEach(pkmon => {
            pkmTable += `<tr><td>${pkmon.id}</td><td>${pkmon.name}</td><td>${pkmon.type}</td></tr>`;
        });
        pkmTable += '</table>';
        const combinedTables = `<div>${userTable}</div><div>${pkmTable}</div>`;
        res.send(combinedTables);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}

