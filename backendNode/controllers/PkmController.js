const PKM = require('../models/pkm');

exports.create = (req, res) => {

    console.log(req.body);
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });
    console.log(postPkm);
    pkm.save()
        .then(data => {
            console.log(data)
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
}

exports.findAll = async (req, res) => {
    try {
        const pkms = await PKM.find();
        let htmlTable = '<h1>Liste des pokemon</h1><table>';
        htmlTable += '<tr><th>ID</th><th>Nom</th><th>Type</th></tr>';
        pkms.forEach(pkmon => {
            htmlTable += `<tr><td>${pkmon.id}</td><td>${pkmon.name}</td><td>${pkmon.type}</td></tr>`;
        });
        htmlTable += '</table>';
        res.send(htmlTable);
    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }
}


exports.findById = (req, res) => {
    const pkm_id = req.params._id;
    console.log(pkm_id);
    
    PKM.findById(pkm_id)
        .then(pkm => {
            if (!pkm) {
                return res.status(404).send({
                    message: "Aucun Pokémon trouvé avec cet ID."
                });
            }
            res.send(pkm);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.updateById = (req, res) => {
    const pkm_id = req.params._id;
    console.log(pkm_id);
    
    PKM.findByIdAndUpdate(pkm_id, req.body,{new: true})
        .then(pkm => {
            res.send(pkm);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.deleteById = (req, res) => {
    const pkm_id = req.params._id;
    console.log(pkm_id);
    
    PKM.findByIdAndRemove(pkm_id)
        .then(pkm => {
            res.send({ message: `Pokémon ${pkm.name} supprimé avec succès.` });
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}