import React from "react";
import { Block, ProgressBar } from "./styles";

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
            <h3>
                <div>{description}</div>
                <img src={imgurl}></img>
            </h3>
            <ProgressBar barSize="74"> <div></div></ProgressBar>
        </Block>
    )
}