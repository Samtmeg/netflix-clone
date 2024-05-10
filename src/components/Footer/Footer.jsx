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
                <div class="grid-item">Audio Description</div>
                <div class="grid-item">Help centre</div>
                <div class="grid-item">Gift Cards</div>
                <div class="grid-item">Media Centre</div>
                <div class="grid-item">Investor Relations</div>
                <div class="grid-item">Jobs</div>
                <div class="grid-item">Netflix Shop</div>
                <div class="grid-item">Terms of Use</div>
                <div class="grid-item">Privacy</div>
                <div class="grid-item">Legal Notices</div>
                <div class="grid-item">Cookie Preferences</div>
                <div class="grid-item">Corporate Information</div>
                <div class="grid-item">Contact Us</div>
                <div class="grid-item">Advert choices</div>
            </div>
            <div className="footer-servicecode-sec"><div>Service Code</div></div>
            <div className="footer-copyright-sec"> © 1997 - 2024 Netflix, Inc</div>
        </div>
    );
}

export default Footer;
