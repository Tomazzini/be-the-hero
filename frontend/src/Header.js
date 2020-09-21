import React from 'react';
// variaveis java sempre passadas dentro de colchetes{props}
export default function Header({children}){
    return(
        <header>
            <h1>{children}</h1>
        </header>
    )
}

