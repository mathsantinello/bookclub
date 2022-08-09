import { BookspineStyle, SpineBlock, SpineBlockContent, ThemeButton } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scifilogo from '../../styles/images/SciFiLogo.png';
import fantasylogo from '../../styles/images/FantasyLogo.png';
import romancelogo from '../../styles/images/RomanceLogo.png';
import historylogo from '../../styles/images/HistoryLogo.png';
import mysterylogo from '../../styles/images/MysteryLogo.png';
import horrorlogo from '../../styles/images/HorrorLogo.png';


interface Props {
    handleChangeTheme: (e: string) => void;
}

export function BookSpine({ handleChangeTheme, ...rest }: Props) {
    return (
        <BookspineStyle>
            <h1> The Rush Club</h1>
            <SpineBlock>
                <SpineBlockContent>
                    <form>
                        User: <input type="text"></input>
                        Password: <input type="password"></input>
                        <button>LOGIN</button>
                    </form>
                </SpineBlockContent>
            </SpineBlock>

            <SpineBlock>
                <SpineBlockContent>
                    <span>THEMES</span>
                    <ThemeButton themeName="Fantasy" id="fantasy" onClick={(event) => handleChangeTheme(event.target.id)}><img src={fantasylogo} id='fantasy'></img></ThemeButton>
                    <ThemeButton themeName="Science Fiction" id="scifi" onClick={(event) => handleChangeTheme(event.target.id)}><img src={scifilogo} id='scifi'></img></ThemeButton>
                    <ThemeButton themeName="Romance" id="romance" onClick={(event) => handleChangeTheme(event.target.id)}><img src={romancelogo} id='romance'></img></ThemeButton>
                    <ThemeButton themeName="History/Science" id="history" onClick={(event) => handleChangeTheme(event.target.id)}><img src={historylogo} id='history'></img></ThemeButton>
                    <ThemeButton themeName="Mystery/Crime" id="mystery" onClick={(event) => handleChangeTheme(event.target.id)}><img src={mysterylogo} id='mystery'></img></ThemeButton>
                    <ThemeButton themeName="Horror/Thriller" id="horror" onClick={(event) => handleChangeTheme(event.target.id)}><img src={horrorlogo} id='horror'></img></ThemeButton>
                </SpineBlockContent>
            </SpineBlock>

            <SpineBlock>
                <SpineBlockContent>
                    <span>Made by <a href='https://github.com/mathsantinello' target='_blank'>Matheus Santinello</a></span>
                    <span>Design inspired by <a href='https://www.vecteezy.com/vector-art/2001695-luxury-ornamental-book-cover-design' target='_blank'>Fotolia Stay </a></span>
                </SpineBlockContent>
            </SpineBlock>
        </BookspineStyle>
    );
};