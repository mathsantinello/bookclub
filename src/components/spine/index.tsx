import React from "react";
import { Bookspine, SpineBlock, SpineBlockContent, ThemeButton } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import scifilogo from '../../styles/images/SciFiLogo.png';
import fantasylogo from '../../styles/images/FantasyLogo.png';

export function Spine() {
    return (
        <Bookspine>
            <SpineBlock>
                <SpineBlockContent>
                    <FontAwesomeIcon icon={faUser} className='fa-3x' color="#AB8D59" />
                    <span>LOGIN</span>
                </SpineBlockContent>
            </SpineBlock>

            <SpineBlock>
                <SpineBlockContent>
                    <span>THEMES</span>
                    <ThemeButton themeName="Fantasy"><img src={fantasylogo}></img></ThemeButton>
                    <ThemeButton themeName="Science Fiction"><img src={scifilogo}></img></ThemeButton>
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