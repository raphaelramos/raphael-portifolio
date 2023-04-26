/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Fale Comigo</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Localização</h6>
                    <p>Uberlândia/MG</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Contato</h6>
                    <p><a href={appData.social.linkedin}>Me chama no LinkedIn</a></p>
                  </div>
                </li>
                {/* <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Contato</h6>
                    <p>+55*********</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href={appData.social.linkedin}>
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href={appData.social.github}>
                  <i className="fab fa-github"></i>
                </a>
                <a href={appData.social.twitter}>
                  <i className="fab fa-twitter"></i>
                </a>
                <a href={appData.social.youtube}>
                  <i className="fab fa-youtube"></i>
                </a>
                <a href={appData.social.instagram}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  Blog e Portfólio Raphael Ramos. Desenvolvido com React e Next.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
