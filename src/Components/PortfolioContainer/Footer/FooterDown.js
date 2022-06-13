import "./FooterDown.css";

function FooterDown() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-email">
          <p>raissa.dot@gmail.com</p>
        </div>
        <div className="icons">
          <a href="https://api.whatsapp.com/send?phone=351926973707" target="_blank" rel="noreferrer">
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="https://github.com/Raissa-Damasceno" target="_blank" rel="noreferrer">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/raissa-damasceno/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="CV-RaissaDamasceno.pdf" download="RaissaDamascenoCV.pdf" target="_blank" rel="noreferrer">
            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterDown;
