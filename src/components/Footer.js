import React from 'react'
import "./footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return (
        <>
            <footer>
                <div className="social">
                    <a href="https://ko-fi.com/maharnab" className="social-btn" target="_blank" rel="noreferrer">
                        <img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/61e1116779fc0a9bd5bdbcc7_Frame%206.png" alt="Support Me on Ko-fi" height="35px" />
                        <p id="link-txt">Support Me on Ko-fi</p>
                    </a>

                    <a href="https://github.com/Maharnab-Saikia/Glassmorphism" className="social-btn" target="_blank" rel="noreferrer">
                        <GitHubIcon fontSize="large" />
                        <p id="link-txt">Open Source</p>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer
