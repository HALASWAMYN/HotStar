import '../styles/footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer_logo">

            <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png" alt="" />

            </div>
            <div className="nav_links">
                <ul>
                    <li>Terms and Privacy Notice</li>
                    <li>Send us feedback</li>
                    <li>Help</li>
                </ul>

            </div>
            <div className="desc">
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
     );
}
 
export default Footer;