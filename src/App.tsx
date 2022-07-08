import { useState, useEffect } from 'react'
import { Read } from './components/read';
import { Triangle } from './components/read/styles';
import { CurrentBook } from './components/reading';

function App() {
  const [bookInfo, setBookInfo] = useState({ title: '', description: '', authors: '', image: '' });
  const [currentBook, setCurrentBook] = useState<string | null>('');

  const FetchBookData = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyD8XwuNOgYaPMojbEmjmUXNLq20CPkn_BE`
    );
    const json = await response.json();
    //const bookData = {title:}
    console.log(json.items[0].volumeInfo.imageLinks.thumbnail);
    const bookData = {
      title: json.items[0].volumeInfo.title,
      description: json.items[0].volumeInfo.description,
      authors: json.items[0].volumeInfo.authors[0],
      image: json.items[0].volumeInfo.imageLinks.thumbnail
    }
    setBookInfo(bookData)
  }

  useEffect(() => {
    FetchBookData()
    console.log(bookInfo)
  }, [bookInfo])

  return (
    <div>
      <section>

      </section>
      <section>
        <Read />
        <CurrentBook title={bookInfo.title} author={bookInfo.authors} description={bookInfo.description} imgurl={bookInfo.image}></CurrentBook>
      </section>

    </div>
  )
}

export default App
