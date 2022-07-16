import React from "react";
const date = new Date();
const year = date.getFullYear();
function Footer() {
    return (
        <footer>
            <p>© <a href="https://bhavesh38.github.io/Bhavesh-s-Portfolio/">Bhavesh kumar</a> {year}</p>
        </footer>

    );
}
export default Footer;