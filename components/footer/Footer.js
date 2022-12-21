import React from 'react';


function Footer() {
    let newDate = new Date()
    let year = newDate.getFullYear();

    return (
        <div className="gtr-title">
            <p>&copy; {year} Zapp&apos;s Guitar inventory</p>
        </div>
    );
}

export default Footer;
