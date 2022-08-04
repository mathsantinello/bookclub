import { useState, useEffect } from 'react';
import { BookMark } from './components/Bookmark';
import { BookCover } from './components/Bookcover';
import { BookSpine } from './components/Bookspine';
import { Container } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import books from './data/books';
import fantasy from './styles/themes/fantasy';
import scifi from './styles/themes/scifi';
import { Usercard } from './components/Usercard';
import users from './data/users';

function App() {
  const [bookInfo, setBookInfo] = useState<{title:string, authors:string, description: string, image:string, current:boolean}[]>([]);
  const [doneFetch, setDoneFetch] = useState(false);
  const [isReadOpen, setIsReadOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [chosenTheme, setChosenTheme] = useState<{ name: string, value: object }>({ name: 'fantasy', value: fantasy });
  const [cardData, setCardData] = useState< {name: string, favBook: string, favGenre: string, image: string}|undefined>({name:'', favBook:'', favGenre:'',image: ''});

  const themeList: any[] = [{ name: 'fantasy', value: fantasy }, { name: 'scifi', value: scifi }];

  useEffect(() => {
    const data = localStorage.getItem("book");
    const theme = localStorage.getItem("theme");
    if (data) {
      setBookInfo(JSON.parse(data));
      setDoneFetch(true);
    }
    if(theme){
      setChosenTheme(JSON.parse(theme));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(chosenTheme))
  },[chosenTheme]);

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
    };
    localStorage.setItem("book", JSON.stringify(bookInfoTemp));
    setBookInfo(bookInfoTemp);
    setDoneFetch(true);
  };

  useEffect(() => {
    !doneFetch && FetchBookData();
  }, [bookInfo]);

  const handleIsOpen = () => {
    setIsReadOpen(!isReadOpen);
  };

  const handleChangeTheme = (e: string) => {
    setChosenTheme(themeList.find(item => item.name === e));
  };

  const handleCardData = (e:string) => {
    setCardData(users.find(item => item.name === e));
    console.log(cardData)
  };

  const openCard = ()=>{
    setIsCardOpen(true);
  }

  const closeCard = ()=>{
    setIsCardOpen(false);
  }

  return (
    <>
    <Normalize/>
    <ThemeProvider theme={chosenTheme.value} >
      <Container>
        <BookSpine handleChangeTheme={handleChangeTheme} />
        
          {doneFetch && (
            <>
              <BookCover
                title={bookInfo[bookInfo.length - 1].title}
                author={bookInfo[bookInfo.length - 1].authors}
                description={bookInfo[bookInfo.length - 1].description}
                imgurl={bookInfo[bookInfo.length - 1].image}
                openCard={openCard}
                handleCardData={handleCardData}
                > 
              </BookCover>
              <BookMark isOpen={isReadOpen} handleIsOpen={handleIsOpen} bookInfo={bookInfo} />
            </>
          )}
          {isCardOpen && (
            <Usercard closeCard={closeCard} cardData={cardData}/>
          )}
      </Container>
    </ThemeProvider>
    </>
  );
};
export default App;