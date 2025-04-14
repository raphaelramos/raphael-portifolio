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
                Sou Arquiteto de Soluções com mais de 10 anos de experiência em desenvolvimento de software, com atuação em bancos e seguradoras.
                Atuo tanto no desenvolvimento frontend e mobile utilizando Angular, Ionic e React Native quanto no backend com Node, Java e PHP, 
                e possuo experiência em arquiteturas baseadas em eventos, BFF, serverless, AWS, Azure e CI/CD.
                Possuo também experiência em liderança técnica e no uso de ferramentas de inteligência artificial.
              </p>
              <br />
              <p>
                Na Capco Wipro, atuei em projetos de modernização no Banco Itaú e de iniciativas relacionadas ao Pix no Banco Bradesco. 
                Na DBServer, atuei em projeto para o Banco Randon.
              </p>
              <p>
                Atualmente, sou Lead Architect na NTT DATA, atuando como Arquiteto do Mapfre Pay, 
                e fui responsável pelo desenho de soluções e pelo suporte técnico e de negócio para o app Bradesco Seguros.
              </p>
              <br />
              <p>
                Também sou o criador do super app fitness{" "}
                <a href="https://mobifit.app">MobiFit</a> que integra inteligência artificial e conceitos de local-first, serverless e edge functions. 
                Também sou criador de conteúdo técnico e carreira nas redes sociais.
              </p>
              <br />
              <p>
                Aqui estão algumas tecnologias com as quais tenho trabalhado
                recentemente:
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">AWS</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="100%"></div>
                  </div>
                </div>
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
