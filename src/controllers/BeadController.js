const Bead = require("../models/Bead");
module.exports = {
    async index(req, res){
        const beads = await Bead.findAll();
        return res.json(beads)
    },
    async store(req,res){
        const {reference, value, amount, patch} = req.body;

        const bead = await Bead.create({reference, value, amount, patch});
        return res.json(bead);
    }
}