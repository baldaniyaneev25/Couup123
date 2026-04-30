import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            {/* Top Section */}
            <div className="footer-top">

                {/* Left */}
                <div className="footer-left">
                    <p>Email:coupeasy@email.com</p>
                    <p>Based in: Ahmedabad,India</p>
                    <p>Available for: Freelance & Full-Time</p>
                </div>

                {/* Right */}
                <div className="footer-right">

                    {/* Pages */}
                    <div>
                        <h4>Pages</h4>
                        <a href="#Hero">Home</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Get in Touch    </a>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4>Socials</h4>
                        <a href="https://www.instagram.com/couup.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
                       
                        <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                </div>

            </div>

            {/* Divider */}
            <div className="footer-line"></div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© 2026 Couup Web Studio. All rights reserved</p>
            </div>

        </footer>
    );
}

export default Footer;