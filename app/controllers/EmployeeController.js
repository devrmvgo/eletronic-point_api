// const db = require("../../models");
// const Tutorial = db.tutorials;
// const Op = db.Sequelize.Op;

module.exports = {
  async create(req, res) {
    res.send('create')
  },

  async findAll(req, res) {
    res.send('findAll')
  },

  async findOne(req, res) {
    res.send('findOne')
  },

  async update(req, res) {
    res.send('update')
  },

  async delete(req, res) {
    res.send('delete')
  },
};