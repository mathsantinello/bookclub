import React from "react";
import { Bookspine } from "./styles";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Spine() {
    return (
        <Bookspine>
            <div>
                <FontAwesomeIcon icon={faUser} className='fa-3x' />
            </div>
        </Bookspine>
    );
};