import users from "../../data/users";
import { CoverBlock, BookcoverStyle, CoverBlockContent, ProgressBar } from "./styles";


interface Props {
    title: string;
    author: string;
    description: string;
    imgurl: string;
    openCard: ()=>void;
    handleCardData: (e:string)=>void;
};

export function BookCover({ title, author, description, imgurl,openCard, handleCardData,...rest }: Props) {
    return (
        <BookcoverStyle>
        <CoverBlock>
            <h1>
                About the Club
            </h1>
            <CoverBlockContent>
                <div>
                    <p>
                        The Rush Club is a book discussion club made by a group of friends with the desire to improve our reading habit and add another layer of fun to it. 
                        We stablish weekly goals and reunite to discuss what we've read so far, where everybody can express their opinion. 
                    </p>
                </div>
            </CoverBlockContent>
        </CoverBlock>
        <CoverBlock>
            <h1> Reading Now: {title}</h1>
            <h2> By {author}</h2>
            <CoverBlockContent>
                <div>
                    <p>{description}</p>
                    <img src={imgurl}></img>
                </div>
            </CoverBlockContent>
            <ProgressBar barSize="74"> <div></div></ProgressBar>
        </CoverBlock>
        <CoverBlock>
            <h1>
                Our Lovely Members
            </h1>
            <CoverBlockContent>
                <ul>
                    {users.map(item => 
                        <img src={item.image} id={item.name} onClick={(e)=>handleCardData(e.target.id)}></img>
                    )}
                </ul>
            </CoverBlockContent>
        </CoverBlock>
        </BookcoverStyle>
    );
};