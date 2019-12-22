const db = require('./db')
const Author = require('./Author')
const Comment = require('./Comment')
const Story = require('./Story')
const Info = require('./Info');

Author.hasMany(Story)
Story.belongsTo(Author)

Author.hasMany(Comment)
Comment.belongsTo(Author)

Story.hasMany(Comment)
Comment.belongsTo(Story)

module.exports = {
  db,
  Author,
  Comment,
  Story,
  Info
}
