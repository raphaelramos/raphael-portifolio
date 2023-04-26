/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";
import appData from "../../data/app.json";

const FreelancreIntro = () => {
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src="/img/raphael.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                Sou Raphael, desenvolvedor e construo soluções para&nbsp;
                <span
                  style={{ fontSize: "35px", lineHeight: "49px" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings: [
                        "Web",
                        "Mobile Apps",
                        "Microserviços",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>10</h3>
                </div>
                <div className="text valign">
                  <p>
                    Anos <br /> de experiência
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>Vários</h3>
                </div>
                <div className="text valign">
                  <p>
                    Projetos <br /> completos
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href={appData.social.linkedin}>
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Fale comigo</p>
                        <h6>
                          Me chama no LinkedIn
                        </h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
