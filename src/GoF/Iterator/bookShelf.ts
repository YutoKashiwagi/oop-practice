interface IAggregate<T> {
  iterator: () => T
}

interface IIterator<T> {
  hasNext: () => boolean;
  next: () => T;
}

class Book {
  private readonly book: string
  
  constructor(book: string) {
    this.book = book
  }

  getName = (): string => {
    return this.book
  }
}

class BookShelf implements IAggregate<BookShelfIterator> {
  private books: Book[]
  private last: number

  constructor() {
    this.books = []
    this.last = 0
  }

  getBookAt = (index: number): Book => {
    return this.books[index]
  }

  appendBook = (book: Book): void => {
    this.books[this.last] = book
    this.last++
  }

  getLength = (): number => {
    return this.last
  }

  /**
   * BookShelfに対応するIteratorインスタンスを返す
   */
  iterator = (): BookShelfIterator => {
    return new BookShelfIterator(this)
  }
}

class BookShelfIterator implements IIterator<Book> {
  private bookShelf: BookShelf
  private index: number

  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf
    this.index = 0
  }

  hasNext = (): boolean => {
    return this.index < this.bookShelf.getLength()
  }

  next = (): Book => {
    const book = this.bookShelf.getBookAt(this.index)
    this.index++
    return book
  }
}

class Main {
  constructor() {
    let bookShelf = new BookShelf()

    bookShelf.appendBook(new Book('book A'))
    bookShelf.appendBook(new Book('book B'))
    bookShelf.appendBook(new Book('book C'))
    bookShelf.appendBook(new Book('book D'))

    const iterator = bookShelf.iterator()

    while (iterator.hasNext()) {
      const book = iterator.next()
      console.log(book.getName())
    }
  }
}

new Main()
// book A
// book B
// book C
// book D
