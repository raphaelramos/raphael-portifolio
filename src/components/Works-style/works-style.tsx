/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import initIsotope from "@/common/initIsotope";
import worksData from "@/data/works.json";
import IWork from "@/interfaces/IWork";

const WorksStyle = () => {
  const [isOpenVideo, setOpenVideo] = React.useState(false);
  const [youtubeID, setYoutubeID] = React.useState("");
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  const works: IWork[] = worksData;
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsPageLoaded(true);
  }, [isPageLoaded]);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={isOpenVideo}
          videoId={youtubeID}
          onClose={() => setOpenVideo(false)}
        />
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfólio
              </h6>
              <h3 className="wow color-font">Algumas coisas que construí</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                Todos
              </span>
              <span data-filter=".web">Web</span>
              <span data-filter=".app">Mobile App</span>
            </div>
          </div>

          <div className="gallery full-width">
            {isPageLoaded &&
              works.map((item, i) => (
                <div
                  key={i}
                  className={`col-md-6 items ${item.type} lg-mr wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <div className="item-img">
                    <div className="cont">
                      <h6>{item.title}</h6>
                      <p>{item.description}</p>
                    </div>
                    {item.youtubeID ? (
                      <a
                        className="vid"
                        onClick={(e) => {
                          e.preventDefault();
                          setYoutubeID(item.youtubeID);
                          setOpenVideo(true);
                        }}
                      >
                        <Image
                          src={item.thumb}
                          width="460"
                          height="345"
                          alt="image"
                        />
                      </a>
                    ) : (
                      <a target="blank" href={item.url} className="rota">
                        <Image
                          src={item.thumb}
                          width="460"
                          height="345"
                          alt="image"
                        />
                        <div className="item-img-overlay"></div>
                      </a>
                    )}
                    <div className="tags">
                      {item.tags &&
                        item.tags.map((item, i) => <span key={i}>{item}</span>)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle;
