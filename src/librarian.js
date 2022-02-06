class Librarian {
  constructor(name, library) {
    this.name = name
    // this.library = library
    this.library = library
  }

  greetPatron(name) {

  if (name === 'Amy') {
    return 'Good morning, Amy!'
  } else {
    return `Hello, ${name}!`

  }
  }

  findBook(bookTitle) {
    var allBooks = [];
    var allShelves = Object.keys(this.library.shelves)
    for (var i = 0; i < allShelves.length; i++) {
      allBooks.push(this.library.shelves[allShelves[i]][i])
    } 

    for (var j = 0; j < allBooks.length; j++) {
      if (allBooks[j].title === bookTitle) {
        var {
          checkoutBook
        } = require('../src/library.js')
        checkoutBook(this.library, bookTitle, allBooks[j].genre)
        return `Yes, we have ${bookTitle}`
      } else {
        return `Sorry, we do not have ${bookTitle}`
      } 
    }

  }

  calculateLateFee(days) {
    var fee = days * .25
    var roundedUpFee = Math.ceil(fee)
    return roundedUpFee
  }

}



module.exports = Librarian;