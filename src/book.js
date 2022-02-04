function createTitle(book) {
  return 'The ' + book
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return character
}

function saveReview(message, messageList) {
  if (messageList.includes(message)) {
    return
  } else {

    messageList.push(message)
  }
  
  // console.log('ssssssssssssss ', messageList)
}
  
  // return reviews

   
    // take in the title which is a string and count how many letters it contains and multiply by 20.
    // We need to count the number of letters in a title?
  

  function calculatePageCount(title) {
    return title.length * 20
  
}



function writeBook(bookName, characterName, bookGenre) {
  var book = {
    title: bookName,
    mainCharacter: characterName,
    pageCount: calculatePageCount(bookName),
    genre: bookGenre,

  }
  return book
}


function editBook(bookName) {
 bookName.pageCount = bookName.pageCount * .75

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}