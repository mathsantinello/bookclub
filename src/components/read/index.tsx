import React from "react";
import { Bookmark } from "./styles";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    isOpen: boolean;
    handleIsOpen: () => void;
    bookInfo: any[];
}
export function Read({ isOpen, handleIsOpen, bookInfo, ...rest }: Props) {
    return (
    <div>
    <Bookmark isOpen={isOpen}>
    <span> Finished Books</span>
    <div>
    {isOpen && bookInfo.filter(book =>
        !book.current).map(item =>
            <div>
                <img src={item.image}
                    alt='https://i0.wp.com/www.otakupt.com/wp-content/uploads/2022/02/TAS-A-VER-O-MEU-PATO-shaman-king.jpg?resize=1024%2C576&ssl=1'>
                </img>
                <span>{item.title}</span>
            </div>
        )}
    </div>
    <button onClick={handleIsOpen}><FontAwesomeIcon icon={faAngleDown} className='fa-2x' color="#EBA11C" /></button>
    </Bookmark>
    </div>
    );
};