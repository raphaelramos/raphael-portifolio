 
import React from "react";
import Image from "next/image";
import initIsotope from "@/common/initIsotope";
import worksData from "@/data/works.json";
import IWork from "@/interfaces/IWork";

interface YouTubeModalProps {
  isOpen: boolean;
  videoId: string;
  onClose: () => void;
}

const YouTubeModal: React.FC<YouTubeModalProps> = ({ isOpen, videoId, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="youtube-modal-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div 
        className="youtube-modal-content"
        style={{
          width: "80%",
          maxWidth: "800px",
          position: "relative",
        }}
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="youtube-modal-close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "30px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
        <div 
          className="youtube-modal-video-container"
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

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
        <YouTubeModal
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
