import React from "react";
import featuresData from "../../data/sections/features.json";

const Services = ({ style, lines }) => {
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Sobre Mim
              </h6>
              <h3 className="wow color-font">
                Eu crio e codifico elementos da web para uma variedade de clientes
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item"
            ? featuresData.map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-delay={`${
                    feature.id == 1
                      ? ".5"
                      : feature.id === 2
                      ? ".7"
                      : feature.id === 3
                      ? ".9"
                      : "1.1"
                  }s`}
                >
                  <div className="item-box">
                    <div>
                      <span className={`icon ${feature.icon}`}></span>
                    </div>
                    <div className="cont">
                      <h6>{feature.title}</h6>
                      <p>{feature.content}</p>
                    </div>
                  </div>
                </div>
              ))
            : // max item 3 in Home page
              featuresData.slice(0, 3).map((feature) => (
                <div
                  key={feature.id}
                  className="col-lg-4 wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <div className="item-box md-mb50">
                    <span className={`icon ${feature.icon}`}></span>
                    <h6>{feature.title}</h6>
                    <p>{feature.content}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
