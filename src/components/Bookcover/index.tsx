import React from "react";
import { CoverBlock, BookcoverStyle, CoverBlockContent, ProgressBar } from "./styles";

interface Props {
    title: string;
    author: string;
    description: string;
    imgurl: string;
};

export function BookCover({ title, author, description, imgurl, ...rest }: Props) {
    return (
        <BookcoverStyle>
        <CoverBlock>
            <h1> Reading Now:</h1>
            <h1>{title}</h1>
            <h2> By {author}</h2>
            <CoverBlockContent>
                <div>
                    <p>{description}</p>
                    <img src={imgurl}></img>
                </div>
            </CoverBlockContent>
            <ProgressBar barSize="74"> <div></div></ProgressBar>
        </CoverBlock>
        </BookcoverStyle>
    );
};