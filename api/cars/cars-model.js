const db = require("../../data/db-config.js");


const getAll = () => {
  return db('cars')
}

const getById = () => {
  return db("cars")
    .where("id", id)
    .first()
}

const create = (car) => {
  return db("cars")
    .insert(car)
    .then(ids => {
      return getById(ids[0])
    })
}

const getByVin = (vin) => {
  return db('cars')
  .where({ vin })
  .first()
}


module.exports = {
  getAll,
  getById,
  create,
  getByVin
}
