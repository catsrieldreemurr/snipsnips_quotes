const greetings = [
  "hello",
  "howdy",
  "hey"
]

exports.getRandomGreeting = (req, res, next) => {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length) ]
  
  res.json({
    "greeting": randomGreeting
  })
}