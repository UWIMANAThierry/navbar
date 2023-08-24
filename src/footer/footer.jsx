import React from "react";
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links-div">
                    <h4>For business</h4>
                    <a href="/employer"><p>employer</p></a>
                    <a href="/healthplan"><p>healthplan</p></a>
                    <a href="/individual"><p>individual</p></a>
                </div>

                <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                    <a href="/resourse"><p>Resource Center</p></a>
                    <a href="/resourse"><p>Testimonials</p></a>
                    <a href="/resourses"><p>STV</p></a>
                </div>

                <div className="sb__footer-links_div">
                    <h4>Partners</h4>
                    <a href="/employer">
                        <p>Swing Tech</p>
                    </a>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
            <div className="sb__footer-copyright">
                <p>
                    @{new Date().getFullYear()} SOS-SUMMER_CODING. All right reserved.
                </p>
            </div>
            <div className="sb__footer-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>

        </div>

        </div>
    )
}

export default Footer;