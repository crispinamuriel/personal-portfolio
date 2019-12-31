const router = require('express').Router()
const {Story, Author} = require('../db')

// GET /api/stories
router.get('/', async (req, res, next) => {
  try {
    const stories = await Story.findAll({})
    res.json(stories)
  }
  catch (error) {
    next(error)
  }
})


module.exports = router
