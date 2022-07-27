import React from "react";
import { Bookspine, SpineBlock, SpineBlockContent, ThemeButton } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scifilogo from '../../styles/images/SciFiLogo.png';
import fantasylogo from '../../styles/images/FantasyLogo.png';

interface Props {
    handleChangeTheme: (e: string) => void;
}

export function Spine({ handleChangeTheme, ...rest }: Props) {
    return (
        <Bookspine>
            <SpineBlock>
                <SpineBlockContent>
                    <FontAwesomeIcon icon={faUser}/>
                    <span>LOGIN</span>
                </SpineBlockContent>
            </SpineBlock>

            <SpineBlock>
                <SpineBlockContent>
                    <span>THEMES</span>
                    <ThemeButton themeName="Fantasy" id="fantasy" onClick={(event) => handleChangeTheme(event.target.id)}><img src={fantasylogo} id='fantasy'></img></ThemeButton>
                    <ThemeButton themeName="Science Fiction" id="scifi" onClick={(event) => handleChangeTheme(event.target.id)}><img src={scifilogo} id='scifi'></img></ThemeButton>
                </SpineBlockContent>
            </SpineBlock>

            <SpineBlock>
                <SpineBlockContent>
                    <span>Made by <a href='https://github.com/mathsantinello' target='_blank'>Matheus Santinello</a></span>
                    <span>Design inspired by <a href='https://www.vecteezy.com/vector-art/2001695-luxury-ornamental-book-cover-design' target='_blank'>Fotolia Stay </a></span>
                </SpineBlockContent>
            </SpineBlock>
        </Bookspine>
    );
};