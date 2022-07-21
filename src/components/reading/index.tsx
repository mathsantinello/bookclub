import React from "react";
import { Block, BookCover, ProgressBar } from "./styles";
import { ThemeProvider } from 'styled-components';
import fantasy from '../../styles/themes/fantasy';

interface Props {
    title: string;
    author: string;
    description: string;
    imgurl: string;
}
export function CurrentBook({ title, author, description, imgurl, ...rest }: Props) {
    return (
        <Block>
            <h1> Reading Now:</h1>
            <h1>{title}</h1>
            <h2> By {author}</h2>

            <BookCover>
                <div>
                    <p>{description}</p>
                    <img src={imgurl}></img>
                </div>
            </BookCover>
            <ProgressBar barSize="74"> <div></div></ProgressBar>

        </Block>

    )
}