import React from "react";
import { Block } from "./styles";

interface Props {
    title: string;
    author: string;
    description: string;
    imgurl: string;
}
export function CurrentBook({ title, author, description, imgurl, ...rest }: Props) {
    return (
        <Block>
            <h1>{title}</h1>
            <h2> By {author}</h2>
            <h3>
                <div>{description}</div>
                <img src={imgurl}></img>
            </h3>

        </Block>
    )
}