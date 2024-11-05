/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image'
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <Image
              src="/img/intro/developer.jpg"
              width="929"
              height="929"
              alt="Raphael Ramos"
            />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font">Sobre Mim</h3>
              <h5 className="co-tit mb-15">Arquiteto de Soluções e Dev</h5>
              <p>
                Sou Raphael Ramos, tenho atuado como arquiteto de soluções e
                possuo uma trajetória de 10 anos em desenvolvimento de software,
                sendo grande parte como fullstack. Nos últimos anos,
                concentrei-me em projetos utilizando Java, TypeScript, Angular,
                React, React Native, Next.js, Nest.js e PHP, com arquiteturas
                baseada em eventos, BFF e serviços cloud, participando
                ativamente em todas as etapas do desenvolvimento.
                <br />
                Em consultoria para o setor financeiro, na Capco, atuei
                diretamente com clientes renomados, como o banco Itaú
                (Modernização) e o banco Bradesco (Pix). Na DBServer, com o
                cliente banco Randon (capital de giro). Atualmente sou Lead
                Architect na NTT DATA, atuando com clientes como app Bradesco
                Seguros.
              </p>
              <br />
              <p>
                Também sou o criador do conhecido super app fitness{" "}
                <a href="https://mobifit.app">MobiFit</a> e criador de conteúdo
                nas redes sociais.
              </p>
              <br />
              <p>
                Aqui estão algumas tecnologias com as quais tenho trabalhado
                recentemente:
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Angular / React</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Node</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">PHP</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Java</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
