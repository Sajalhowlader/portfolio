import React from 'react';


const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='mt-5 py-3 text-center'>
            <p>All reserve by &copy; Sajal Howlader {year} </p>
        </div>
        
    );
};

export default Footer;