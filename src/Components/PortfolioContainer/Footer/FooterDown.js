import "./FooterDown.css";

function FooterDown() {
  return (
    <footer>
      <div className="footer-content">
        <div className="text-footer">Contact Me</div>
        <div className="footer-email">
          <p>raissa.dot@gmail.com</p>
        </div>
        <div className="icons">
          <a href="https://api.whatsapp.com/send?phone=351926973707">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="https://github.com/Raissa-Damasceno">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/raissa-damasceno/">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterDown;
