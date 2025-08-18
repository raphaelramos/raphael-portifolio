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
                Sou Arquiteto de Soluções com mais de 10 anos de experiência em desenvolvimento de software, com atuação em bancos e seguradoras. Possuo também experiência em IA generativa (genAI) e liderança técnica.
                Atuei tanto no desenvolvimento frontend e mobile, utilizando Angular, Ionic, React e React Native, quanto no backend com Node, Java e PHP. Tenho experiência em diferentes arquiteturas, 
                migrações e serviços AWS com Infrastructure as Code (IaC).
              </p>
              <br />
              <p>
                Na Capco Wipro, participei de projetos de modernização no Banco Itaú e de iniciativas relacionadas ao Pix no Banco Bradesco. Na DBServer, atuei em um projeto para o Banco Randon.
                Atualmente, sou Lead Architect na NTT DATA, atuando como Arquiteto do Mapfre Pay. Também fui o arquiteto do aplicativo Bradesco Seguros, cuidando do desenho de soluções, sistemas e da comunicação com o time de negócios.
              </p>
              <p>
                Em projetos pessoais open source, desenvolvi o <a href="https://mobifit.app">MobiFit</a>, um superapp fitness com inteligência artificial que integra conceitos de local-first, serverless e edge functions.
                Sou também criador de conteúdo sobre tecnologia e carreira nas redes sociais.
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
