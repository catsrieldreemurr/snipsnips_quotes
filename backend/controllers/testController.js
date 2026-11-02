const quoteModel = require("../models/quote");

exports.getNewTestQuote = async (req, res, next) => {
  try {
    const quote = await quoteModel.create({
      quoteText: "He's telling me to die! I don't wanna listen!", 
      publishDate: new Date()
    })

    quote.save();

    res.status(201).json({
      message: "Successfully created Test User!"
    })
  } catch (err){
    res.status(500).json({
      message: "Something went wrong.", 
      error: err.message || err
    })
  }
  
}