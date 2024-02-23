const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
    { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { id: 6, title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { id: 7, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  
  ];

  const searchInput = document.getElementById('searchInput');
  const bookList = document.getElementById('bookList');

  function displayBooks(booksToShow) {
    bookList.innerHTML = '';
    if (booksToShow.length === 0) {
      const li = document.createElement('li');
      li.textContent = 'No books found';
      bookList.appendChild(li);
    } else {
      booksToShow.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book');
        li.innerHTML = `
          <p><strong>Title:</strong> ${book.title}</p>
          <p><strong>Author:</strong> ${book.author}</p>
        `;
        bookList.appendChild(li);
      });
    }
  }

  function highlightText(text, keyword) {
    const regex = new RegExp(keyword, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

  function searchBooks() {
    const keyword = searchInput.value.trim().toLowerCase();
    const matchedBooks = books.filter(book =>
      book.title.toLowerCase().includes(keyword) || 
      book.author.toLowerCase().includes(keyword)
    );
    displayBooks(matchedBooks.map(book => ({
      ...book,
      title: highlightText(book.title, keyword),
      author: highlightText(book.author, keyword)
    })));
  }

  searchInput.addEventListener('input', searchBooks);