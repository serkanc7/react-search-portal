import React from "react";
import "./Footer.scss";
import footerImg from "../../assets/img/footer-img.jpg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={footerImg} alt="study" />
      <address className="footer__info">
        <b>İletişim</b> <br />
        Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
        Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        <br />
        <br /> <b>Email: bilgi@tesodev.com</b>
      </address>
      <iframe
        className="footer__location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2795620386396!2d28.888759415417656!3d41.01913932670531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1651104808378!5m2!1str!2str"
       
        loading="lazy"

      ></iframe>
    </footer>
  );
}

export default Footer;
