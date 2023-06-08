import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p><a href="https://github.com/SugarSD" className="copyright">&copy;SugarSD 2023</a> All Rights Reserved</p>
                <div className="footer-links">
                    <a href="https://github.com/SugarSD">Github</a>
                    <a href="https://www.linkedin.com/in/joshua-rice-1642ab253/">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;