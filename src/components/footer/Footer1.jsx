import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="legal">
        <span>Designed</span> by{" "}
        <a href="https://github.com/Keiner-Delahoz">Keiner De La Hoz</a> and{" "}
        <a href="https://github.com/DanielMual">Daniel Muñoz</a> - Copyrigt &copy;2023.
      </p>

      <div className="wrapper1">
        <ul>
          <li className="facebook"><a href="https://www.facebook.com/Keiner.DeLaHoz.Coronado/"><i className="fa-brands fa-facebook fa-beat" aria-hidden="true"></i></a></li>
          <li className="instagram"><a href="https://www.instagram.com/keiner_delahoz26/"><i className="fa-brands fa-instagram fa-beat" aria-hidden="true"></i></a></li>
          <li className="twitter"><a href="https://twitter.com/KeinerDeLaHoz26"><i className="fa-brands fa-twitter fa-beat" aria-hidden="true"></i></a></li>
          <li className="whatsapp"><a href="#!"><i className="fa-brands fa-whatsapp fa-beat" aria-hidden="true"></i></a></li>
          <li className="youtube"><a href="https://www.youtube.com/channel/UCqkofQDJzaw2jNuD-qgaBxg"><i className="fa-brands fa-youtube fa-beat" aria-hidden="true"></i></a></li>
          <li className="tiktok"><a href="https://www.tiktok.com/@keiner_delahoz"><i className="fa-brands fa-tiktok fa-beat" aria-hidden="true"></i></a></li>
          <li className="github"><a href="https://github.com/Keiner-Delahoz"><i className="fa-brands fa-github fa-beat" aria-hidden="true"></i></a></li>
          <li className="linkedin"><a href="https://www.linkedin.com/in/keiner-fernando-de-la-hoz-coronado-0b196722b/"><i className="fa-brands fa-linkedin fa-beat" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
