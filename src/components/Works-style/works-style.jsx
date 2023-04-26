/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from 'next/image'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import initIsotope from "../../common/initIsotope";

const WorksStyle = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfólio
              </h6>
              <h3 className="wow color-font">
                Algumas coisas que construí
              </h3>
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
              <span data-filter=".mobile">Mobile App</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items web lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Front-end Cobol Modernization</h6>
                  <p>Projeto em que colaborei em todas etapas como consultor no Itaú Unibanco.</p>
                </div>
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="7Q2NYQxN6KU"
                    onClose={() => setOpen(false)}
                  />
                )}
                <a
                  className="vid"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <Image src="/img/portfolio/tocobol.jpg" width="460" height="345" alt="image" />
                </a>
                <div className="tags">
                  <span>
                    <Link href="#">Site</Link>
                  </span>
                  <span>
                    <Link href="#">Angular</Link>
                  </span>
                  <span>
                    <Link href="#">Node</Link>
                  </span>
                  <span>
                    <Link href="#">AWS</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items mobile wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>e-Igrejas</h6>
                  <p>Aplicativo para gestão de igrejas. Disponibilizei no meu GitHub.</p>
                </div>
                {typeof window !== "undefined" && (
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="FOyng54s9Ig"
                    onClose={() => setOpen(false)}
                  />
                )}
                <a
                  className="vid"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                  }}
                >
                  <Image src="/img/portfolio/eigrejas.jpg" width="460" height="345" alt="e-igrejas" />
                </a>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Angular</Link>
                  </span>
                  <span>
                    <Link href="#">PHP</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items mobile wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Casas de Paz</h6>
                  <p>Aplicativo da editora Selah</p>
                </div>
                <a target="blank" href="https://casasdepaz.com.br" className="rota">
                  <Image src="/img/portfolio/casasdepaz.jpg" width="460" height="345" alt="Casas de Paz" />
                  <div className="item-img-overlay"></div>
                </a>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Java</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Intensivo de Missões</h6>
                  <p>Site de inscrição para o evento. Disponível também no meu GitHub.</p>
                </div>
                <a target="blank" href="https://intensivodemissoes.com.br/" className="rota">
                  <Image src="/img/portfolio/im.jpg" width="460" height="345" alt="Intensivo de Missões" />
                  <div className="item-img-overlay"></div>
                </a>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">Site</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Angular</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Node</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items mobile web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Aplicativo JornalCana e Anuário da Cana</h6>
                  <p>app do principal veículo de informações sucroenergéticas do Brasil e do mundo</p>
                </div>
                <a target="blank" href="https://www.jornalcana.com.br/" className="rota" rel="noopener noreferrer">
                  <Image src="/img/portfolio/jornalcana.jpg" width="460" height="345" alt="Jornal Cana" />
                  <div className="item-img-overlay"></div>
                </a>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                  <span>
                    <Link href="#">Web</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items mobile wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Aplicativo Shalom</h6>
                  <p>app para membros da Shalom Comunidade Cristã</p>
                </div>
                <a target="blank" href="https://scc.org.br/app" className="rota" rel="noopener noreferrer">
                  <Image src="/img/portfolio/shalomapp.jpg" width="460" height="345" alt="ShalomApp" />
                  <div className="item-img-overlay"></div>
                </a>
                <div className="tags">
                  <span>
                    <Link href="#">App</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle;
