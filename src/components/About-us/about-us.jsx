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
                Raphael Ramos é Arquiteto de Soluções e software com mais de 10 anos de experiência em desenvolvimento, atuando em bancos e seguradoras,
                com destaque em agentes de IA, liderança técnica e soluções multicloud.
              </p>
              <br />
              <p>
                Atuação em integração de sistemas, governança, segurança e definição de soluções técnicas.
                Participação em consultoria em projetos de PIX no Bradesco, transformação digital no Itaú, crédito na Randon, pagamentos na Mapfre e arquitetura do app no Bradesco Seguros.
              </p>
              <br />
              <p>
                Experiência avançada em AWS com IaC, migração e várias arquiteturas.
                Expertise em desenvolvimento fullstack e mobile com Angular, Ionic, React, React Native, Node, Java, Python e PHP.
              </p>
              <p>
                Em projeto open source, desenvolvedor do <a href="https://mobifit.app">MobiFit</a>, superapp fitness com agentes IA, local-first e serverless, disponível nas lojas.
                Também é criador de conteúdo sobre tecnologia e carreira nas redes sociais.
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
