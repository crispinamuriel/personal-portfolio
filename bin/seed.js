#!/usr/bin/env node

const hipsum = require('lorem-hipsum')
const {db, Author, Comment, Story, Info} = require('../server/db')

const loremHipsum = () => hipsum({
  count: 3,
  units: 'paragraphs',
  paragraphLowerBound: 3,
  paragraphUpperBound: 15,
  format: 'plain'
})

const seed = async () => {
  await db.sync({force: true})

  const jenn = await Author.create({name: 'Crispina', bio: 'Fullstack Dev', imageUrl: 'CrispinaMuriel.JPG'})


  const story1 = await Story.create({
    title: "Codewords",
    content: "A multiplayer game based of of the board game Codenames",
    imageUrl: "https://codewords-1909-gracehopper.herokuapp.com/codewords.png",
    projectUrl: "https://codewords-1909-gracehopper.herokuapp.com/",
    authorId: jenn.id
  });

  const story2 = await Story.create({
    title: "LoveLaces",
    content: "An e-commerce fullstack application for women’s shoes",
    imageUrl: "https://grace-shopper-lovelaces.herokuapp.com/Shoes.jpg",
    projectUrl: "https://grace-shopper-lovelaces.herokuapp.com/",
    authorId: jenn.id
  });

  const story3 = await Story.create({
    title: "Recipe App",
    content: "A single page application to store user recipes",
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80",
    projectUrl: "https://muriel-recipe-app.netlify.com/",
    authorId: jenn.id
  });

  const info1 = await Info.create({
    title: "Professional Background",
    content: "My passions are Tech, Learning, and Education. I have credentials to teach elementary school in California and New York. As a user of educational apps in my classroom, I was always inspired at how tech seemed to motivate my class to learn.  I loved my time spent working with children and hope to one day contribute to the EdTech field, that reaches thousands children in a meaningful way. I have been coding and building fullstack applications for over a year. JavaScript is fun to work with and I love how creative I can be with it.",
    imgUrl: "https://www.daydreameducation.co.uk/wp/wp-content/uploads/2017/11/582dee49a5ecf.image_.jpg"
  });

  const info2  = await Info.create({
    title:  "Personal Background",
    content: "I'm a transplant from Southern California. I grew up and attended college in Bakersfield, CA. My family is still living there now, and I fly home every chance I get. I'm now living in New York, with my wonderful husband. I like living here because I enjoy visiting all the diverse food options here.",
    imgUrl: "https://www.tripsavvy.com/thmb/Qf9aCYmkooieWAKQjOVv31cBsIY=/2119x1414/filters:no_upscale():max_bytes(150000):strip_icc()/mian-street--flushing-queens--ny--551882125-5c4548b4c9e77c000153009f.jpg"
  });

  const info3 = await Info.create({
    title: "Personal Interests",
    content:  "I love to cook, I bake my own pizza from scratch, and I roll my own sushi. I also love to play video games. My interest in gaming started when I was about 6 years old with an ATARI my parents borrowed from a relative. Ever since then I have been an avid gamer. Please ask me about NES/SNES games or soundtracks!",
    imgUrl: "https://img.huffingtonpost.com/asset/5a550848200000160057d38a.jpg?ops=scalefit_630_noupscale"
  });

  const info4 = await Info.create({
    title: "Professional Interests",
    content:
      "I've attended a few AWS Loft events and single-day 'bootcamps' about Machine Learning, Internet of Things, and Blockchain. I am interested in learning more about these topics. If you feel like you want to discuss TensorFlow, let's have some grab some tea and chat together! The next languages I'm looking to learn next  are Python, Typescript, and Java.",
    imgUrl:
      "https://images.idgesg.net/images/article/2019/02/iot_internet_of_things_mobile_connections_by_avgust01_gettyimages-1055659210_2400x1600-100788447-large.jpg"
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
