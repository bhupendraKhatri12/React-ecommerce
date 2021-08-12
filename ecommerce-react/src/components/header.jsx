import React from 'react';
import { Button } from 'react-bootstrap';
import "../App.css"


function Header ()
{
 
return(
    <header> <div><h2>Logo</h2></div>

    <nav>
        <ul>
            <li><Button variant="secondary">Home</Button></li>
            <li><Button variant="primary">About Us</Button></li>
            <li><Button variant="primary">Contact Us</Button></li>
            <li><Button variant="primary">Blog</Button></li>
        </ul>
    </nav>
    </header>
)

}

export default Header;