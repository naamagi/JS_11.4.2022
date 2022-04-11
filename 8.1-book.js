
let book = {
  title: "Islands in the Stream",
  pages: 200,
  author: "Hemingway",
  year: 1970,
};

function returnBookInformation(book)
{
    return `The book ${book.title} was written by ${book.author} in
     the year ${book.year}`;
}

console.log(returnBookInformation(book));