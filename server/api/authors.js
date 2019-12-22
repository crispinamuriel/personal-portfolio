const router = require('express').Router()
const {Author, Comment, Story} = require('../db')

// GET /api/authors
router.get('/', async (req, res, next) => {
  try {
    const authors = await Author.findAll({
      attributes: ['id', 'name', 'imageUrl']
    })
    res.json(authors)
  }
  catch (error) {
    next(error)
  }
})


module.exports = router
