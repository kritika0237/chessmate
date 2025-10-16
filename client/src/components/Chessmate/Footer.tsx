import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { PiInstagramLogoFill } from 'react-icons/pi'

function Footer() {
    return (
        <footer className='footer-content'>
            <div className="d-flex copyright">
                <p className="pt-3">
                    <span>&copy; 2025 Chessmate</span>
                </p>
            </div>
            <div className='dev-message'>
                <span><code> &lt;/&gt; </code> with ❤️ by Kritika Raj </span>
            </div>
            <div className="socials-links">
                <a href="https://github.com/kritika0237" target="_blank" rel="noreferrer">
                    <SiGithub className='social-icon' />
                </a>
                <a href="https://www.linkedin.com/in/kritika-raj-ba0b26232/" target="_blank" rel="noreferrer">
                    <SiLinkedin className='social-icon' />
                </a>
                
            </div>
        </footer>
    )
}

export default Footer