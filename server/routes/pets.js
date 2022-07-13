const express = require('express')

const db = require('../db/pets.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getPets()
    .then(results => {
      res.json({ pets: results.map(pet => pet.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router