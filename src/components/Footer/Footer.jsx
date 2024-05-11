import React from 'react';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer () {
    return (
        <div className="footer-container">
            <div className="footer-social-media-sec">
                <div><FacebookIcon/></div>
                <div><InstagramIcon/></div>
                <div><XIcon/></div>
                <div><YouTubeIcon/></div>
            </div>
            <div className="footer-main-grid-container">
                <div className="grid-item">Audio Description</div>
                <div className="grid-item">Help centre</div>
                <div className="grid-item">Gift Cards</div>
                <div className="grid-item">Media Centre</div>
                <div className="grid-item">Investor Relations</div>
                <div className="grid-item">Jobs</div>
                <div className="grid-item">Netflix Shop</div>
                <div className="grid-item">Terms of Use</div>
                <div className="grid-item">Privacy</div>
                <div className="grid-item">Legal Notices</div>
                <div className="grid-item">Cookie Preferences</div>
                <div className="grid-item">Corporate Information</div>
                <div className="grid-item">Contact Us</div>
                <div className="grid-item">Advert choices</div>
            </div>
            <div className="footer-servicecode-sec"><div>Service Code</div></div>
            <div className="footer-copyright-sec"> © 1997 - 2024 Netflix, Inc</div>
        </div>
    );
}

export default Footer;
