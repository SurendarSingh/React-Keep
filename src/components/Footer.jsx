import React from "react";

function FooterF() {
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright @{year}</p>
        </footer>
    );
}

export default FooterF;