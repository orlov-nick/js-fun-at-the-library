function shelfBook(title, shelf) {
if (shelf.length <= 2) {

  shelf.unshift(title)
}

}

function unshelfBook(title, shelf) {
shelf.pop(title)
}

function listTitles(shelf) {
var shelf2 = shelfBook(title, shelf)
return shelf2
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};