import { UsercardStyle } from "./styles";
import vitor from '../../styles/images/members/vitor.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons'

interface Props{
    closeCard: ()=>void;
    cardData: {name: string; favBook: string; favGenre: string; image: string}|undefined;
}

export function Usercard({closeCard, cardData,...rest}:Props){
    return(
        <UsercardStyle>
            <button onClick={()=>closeCard()}><FontAwesomeIcon icon={faX} size='2x'></FontAwesomeIcon></button>
            <img src={vitor}></img>
            <ul>
                <li> Name: {cardData.name} </li>
                <li> Favorite Genre: {cardData.favGenre} </li>
                <li> Favorite Book: {cardData.favBook} </li>
            </ul>
        </UsercardStyle>
    )
}