import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <Footer>
            <p>All reserve by &copy; Sajal Howlader {year}</p>
        </Footer>
    );
};

export default Footer;