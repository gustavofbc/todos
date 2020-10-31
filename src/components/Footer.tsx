import React from 'react';
import { Link } from 'react-router-dom';
import heartIcon from '../assets/images/heart.svg'

const Footer = () => {
    return(
        <div className="footer">
            <span>Desenvolvido por
                <a target="_blank" className="link-footer" href="https://github.com/gustavofbc">Gustavo Felipe</a>
            </span>
             <img className="icon-text-footer" src={heartIcon} alt=""/> 
        </div>
    );
}

export default Footer;