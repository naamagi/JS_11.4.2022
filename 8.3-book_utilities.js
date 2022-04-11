let book1 = {
  name: "Islands in the Stream",
  author: "Hemingway",
  year: 1970,
};

let book2 = {
  name: "The Old Man and the Sea",
  author: "Hemingway",
  year: 1951,
};

let bookUtils = {};
console.log(bookUtils);

bookUtils.getFirstPublished = function (bookOne, bookTwo) {
  return bookOne.year < bookTwo.year ? bookOne : bookTwo;
};

console.log(bookUtils.getFirstPublished(book1, book2));

bookUtils.setNewEdition = function (book, editionYear) {
  book.latestEdition = editionYear;
};
bookUtils.setNewEdition(book1, 1980);
console.log(book1);

bookUtils.setLanguage = function (book, language) {
  book.language = language;
};

bookUtils.setLanguage(book1, "english");
console.log(book1);

bookUtils.setTranslation = function (book, language, translator) {
  book.translation = { translator: translator, language: language };
};

bookUtils.setTranslation(book1, "hebrew", "Aharon Amir");
console.log(book1);

bookUtils.setPublisher = function (book, name, location) {
  book.publisher = { name: name, location: location };
};

bookUtils.setPublisher(book2, "Am Oved", "Tel Aviv");
console.log(book2);

bookUtils.isSamePublisher = function (book1, book2) {
  const isSamePublisher =
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
      ? "same publisher"
      : "different publisher";
  console.log(isSamePublisher);
};
bookUtils.setPublisher(book1, "Orion", "Tel Aviv");

bookUtils.isSamePublisher(book1, book2);
