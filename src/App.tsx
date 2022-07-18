import { useState, useEffect } from 'react';
import { Read } from './components/read';
import { CurrentBook } from './components/reading';
import { Spine } from './components/spine';
import books from './data/books';
import { Bookcover, Container } from './styles/global';

function App() {
  const [bookInfo, setBookInfo] = useState<any[]>([]);
  const [doneFetch, setDoneFetch] = useState(false);
  const [isReadOpen, setIsReadOpen] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("book");
    if (data) {
      setBookInfo(JSON.parse(data));
      setDoneFetch(true);
    }
  }, []);

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
      };
      bookInfoTemp.push(bookData);
    }
    localStorage.setItem("book", JSON.stringify(bookInfoTemp));
    setBookInfo(bookInfoTemp);
    setDoneFetch(true);
  }

  useEffect(() => {
    !doneFetch && FetchBookData();
  }, [bookInfo]);

  const handleIsOpen = () => {
    setIsReadOpen(!isReadOpen);
  }

  return (
    <Container>
      <Spine />
      <Bookcover>
        {doneFetch && (
          <>
            <CurrentBook
              title={bookInfo[bookInfo.length - 1].title}
              author={bookInfo[bookInfo.length - 1].authors}
              description={bookInfo[bookInfo.length - 1].description}
              imgurl={bookInfo[bookInfo.length - 1].image}>
            </CurrentBook>
            <Read isOpen={isReadOpen} handleIsOpen={handleIsOpen} bookInfo={bookInfo} />
          </>
        )
        }
      </Bookcover>
    </Container>
  );
};

export default App;
