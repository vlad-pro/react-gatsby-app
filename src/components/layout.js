import React from "react";
import { Global,css } from "@emotion/core";

const Layout = ({children}) => {
    return (
        <>
        <Global styles={css`
        * {
            box-sizing: border-box;
        }
        
        * + * {
            margin-top: 1rem;
        }

        html, body {
            margin: 0;
            color: #555;
        }
        `} />
        </>
    )
}