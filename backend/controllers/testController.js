const quoteModel = require("../models/quote");

exports.getNewTestQuote = async (req, res, next) => {
  try {
    const quote = await quoteModel.create({
      quoteText: "He's telling me to die! I don't wanna listen!", 
      publishDate: new Date().getDay()
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

exports.getAllQuotesTest = async (req, res, next) => {
  try {
    const quotes = await quoteModel.findAll({
      where: {
        publishDate: new Date().getDay()
      }
    })

    console.log(quotes);

    res.json({
      message: "Successfully found all Test Quotes today!",
      list: quotes
    })
  } catch (err){
    res.status(500).json({
      message: "Something went wrong.", 
      error: err.message || err
    })
  }
}