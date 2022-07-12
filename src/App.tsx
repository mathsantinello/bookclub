import { useState, useEffect } from 'react';
import { Read } from './components/read';
import { CurrentBook } from './components/reading';
import books from './data/books';

function App() {
  const [bookInfo, setBookInfo] = useState<any[]>([]);
  const [doneFetch, setDoneFetch] = useState(false);
  const [isReadOpen, setIsReadOpen] = useState(false);

  const handleIsOpen = () => {
    setIsReadOpen(!isReadOpen);
  }

  const FetchBookData = async () => {
    let bookInfoTemp: any[] = [];

    for (var i = 0; i < books.length; i++) {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${books[i].query}&key=AIzaSyD8XwuNOgYaPMojbEmjmUXNLq20CPkn_BE`
      );
      const json = await response.json();

      const bookData = {
        title: json.items[0].volumeInfo.title,
        description: json.items[0].volumeInfo.description,
        authors: json.items[0].volumeInfo.authors[0],
        image: json.items[0].volumeInfo?.imageLinks?.thumbnail || 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/02/TAS-A-VER-O-MEU-PATO-shaman-king.jpg?resize=1024%2C576&ssl=1',
        current: books[i].current,
      }

      bookInfoTemp.push(bookData);
    }
    setBookInfo(bookInfoTemp)
    setDoneFetch(true)
  }

  useEffect(() => {
    !doneFetch && FetchBookData();
    console.log(bookInfo);
  }, [bookInfo]);

  return (
    <div>
      <section>

      </section>
      <section>

        {doneFetch && (
          <>
            <Read isOpen={isReadOpen} handleIsOpen={handleIsOpen} bookInfo={bookInfo} />
            <CurrentBook
              title={bookInfo[bookInfo.length - 1].title}
              author={bookInfo[bookInfo.length - 1].authors}
              description={bookInfo[bookInfo.length - 1].description}
              imgurl={bookInfo[bookInfo.length - 1].image}>
            </CurrentBook>
          </>
        )
        }

      </section>

    </div>
  )
};

export default App;
