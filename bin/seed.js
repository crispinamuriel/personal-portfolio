#!/usr/bin/env node

const hipsum = require('lorem-hipsum')
const {db, Author, Comment, Story} = require('../server/db')

const loremHipsum = () => hipsum({
  count: 3,
  units: 'paragraphs',
  paragraphLowerBound: 3,
  paragraphUpperBound: 15,
  format: 'plain'
})

const seed = async () => {
  await db.sync({force: true})

  const jenn = await Author.create({name: 'Crispina', bio: 'Fullstack Dev', imageUrl: 'cody.jpg'})


  const story1 = await Story.create({
    title: 'Codewords',
    content: loremHipsum(),
    imageUrl: 'codewordsIcon.jpg',
    authorId: jenn.id
  })

  const story2 = await Story.create({
    title: 'LoveLaces',
    content: loremHipsum(),
    imageUrl: "",
    authorId: jenn.id
  });

  const story3 = await Story.create({
    title: "Recipe App",
    content: loremHipsum(),
    imageUrl: "",
    authorId: jenn.id
  });

  await Comment.create({
    content: "I love this article as much as I hate dogs",
    authorId: jenn.id,
    storyId: story1.id
  });

  await Comment.create({
    content: "I wish JavaScript variables were in snake_case!",
    authorId: jenn.id,
    storyId: story1.id
  });

  await Comment.create({
    content:
      "Do you have an example of using a constrictor...I mean, constructor function?",
    authorId: jenn.id,
    storyId: story2.id
  });

  await Comment.create({
    content: "I love this article as much as I love treats",
    authorId: jenn.id,
    storyId: story3.id
  });

  await Comment.create({
    content: "Angular's really in the doghouse!",
    authorId: jenn.id,
    storyId: story1.id
  });

  db.close()
  console.log(`

    Seeding successful!
    Time to blog!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
