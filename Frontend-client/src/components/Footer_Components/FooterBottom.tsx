import "./FooterBottom.scss";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="footer-bottom-content">
                <p className="copyright">
                    <strong>BHEL Training Program</strong>
                </p>
                <p className="developer-credit">
                    Designed & Developed by{" "}
                    <a
                        href="https://github.com/quarkshiv/SmartFactory-Scheduler"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="developer-link underline-hover"
                    >
                        Shivansh Shukla
                    </a>
                </p>
            </div>
        </div>
    );
};

export default FooterBottom;
