function shelfBook(title, shelf) {
if (shelf.length <= 2) {

  shelf.unshift(title)
}

}

function unshelfBook(title, shelf) {
for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title.includes(title)) {
    shelf.splice(i, 1)
  }
}
}

function listTitles(shelf) {
  // var titles = 

for (var i = 0; 0 < shelf.length; i++) {
  return shelf[i].title + ',' + ' ' + shelf[1].title + ',' + ' ' + shelf[2].title
  
}
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
  
     }
    }
    return false
  }


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};