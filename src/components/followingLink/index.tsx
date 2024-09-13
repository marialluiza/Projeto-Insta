"use client"

import React from 'react';
import './styles.css';

export const PetLife: React.FC = () => {
  return (
    <>
      <header>
        <a href="/index.html">
          <img src="/images/logo-white.svg" alt="PetLife" />
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#clinica">Clínica</a>
          <a href="#farmacia">Farmácia</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
      </header>

      <main>
        <section id="inicio">
          <img src="/images/start-img.svg" alt="Imagem principal" width="500" height="500" className="imagem-principal"/>

          <div id="conteudo-escrito-inicio">
            <h1>Garanta uma vida longa e cheia de alegria para o seu melhor amigo</h1>
            <p className="paragrafo">
              A PetLife é o seu refúgio de confiança para o cuidado completo do seu pet. Com profissionais dedicados e serviços abrangentes, oferecemos uma experiência acolhedora e personalizada, garantindo o bem-estar, a saúde e a felicidade dos seus animais de estimação.
            </p>

            <a className="botao" href="https://wa.me/5522987654321" target="_blank" rel="noopener noreferrer">Marque uma consulta</a>
            <a className="botao-transparente" href="#clinica">Conheça nossa clínica</a>
          </div>
          <img className="chao" src="/images/shape.svg" alt="" />
        </section>

        <section id="clinica">
          <div>
            <h2>Cuidado Veterinário de Qualidade</h2>
            <p className="paragrafo">
              Nossa clínica veterinária é o local onde a paixão pelos animais se une à excelência em cuidados veterinários. Sob a liderança da Dra. Vivien Reid, uma profissional altamente qualificada e comprometida, oferecemos serviços de saúde e bem-estar para animais de estimação de todas as espécies. Venha conhecer nossa clínica e desfrute da atenção personalizada e do carinho que seu pet merece.
            </p>
            <ul className='lista'>
              <li>Consultas de rotina e exames de saúde abrangentes</li>
              <li>Vacinação e imunização</li>
              <li>Cirurgias e procedimentos veterinários</li>
              <li>Tratamento e controle de doenças</li>
              <li>Odontologia veterinária</li>
              <li>Atendimento de emergência 24 horas</li>
              <li>Nutrição e aconselhamento alimentar personalizado</li>
            </ul>
          </div>

          <img src="/images/clinic-img.svg" width="380" height="380" loading="lazy" alt="" />
        </section>

        <section id="farmacia">
          <h2>Venha conferir o nosso petshop e farmácia</h2>
          <img src="/images/shop-img.svg" width="645" height="430" loading="lazy" alt="" />
          <p className="paragrafo">
            Além de ser uma clínica veterinária de confiança, também contamos com um completo petshop e farmácia. Nosso petshop oferece uma ampla seleção de produtos de alta qualidade, desde alimentos balanceados e petiscos deliciosos até brinquedos divertidos e acessórios elegantes para o seu pet. Na nossa farmácia, você encontrará uma variedade de medicamentos, produtos de cuidados e suplementos recomendados pelos nossos veterinários, garantindo que o bem-estar e a saúde do seu amado pet estejam sempre em boas mãos. Tudo o que você precisa para cuidar e mimar o seu pet está aqui, no nosso petshop e farmácia, com a mesma dedicação e qualidade que nos tornou referência na área veterinária.
          </p>
        </section>

        <section id="duvidas">
          <img src="/images/faq-img.svg" width="480" height="480" loading="lazy" alt="" />
          <div>
            <h2>Ficou alguma dúvida?</h2>

            <div className="duvida">
              <h3>Quais serviços são oferecidos pela clínica veterinária da PetLife?</h3>
              <img src="/img/arrow-down.svg" alt="" />
              <p className="paragrafo">
                A clínica da PetLife oferece uma ampla gama de serviços, incluindo consultas de rotina, vacinação, cirurgias, tratamento de doenças, cuidados odontológicos, atendimento de emergência 24 horas, programas de prevenção de pulgas, carrapatos e vermes, entre outros. Nosso objetivo é fornecer cuidados abrangentes e personalizados para garantir a saúde e o bem-estar do seu pet.
              </p>
            </div>

            <div className="duvida">
              <h3>Quais espécies de animais a clínica veterinária atende?</h3>
              <img src="/img/arrow-down.svg" alt="" />
              <p className="paragrafo">
                A clínica veterinária da PetLife atende animais de estimação de todas as espécies, incluindo cães, gatos, pássaros, roedores e répteis. Nossos profissionais possuem conhecimento e experiência para cuidar de diferentes tipos de animais, oferecendo um atendimento especializado e dedicado a cada um deles.
              </p>
            </div>

            <div className="duvida">
              <h3>A clínica veterinária da PetLife possui serviços de emergência?</h3>
              <img src="/img/arrow-down.svg" alt="" />
              <p className="paragrafo">
                Sim, a clínica veterinária da PetLife oferece serviços de emergência 24 horas. Se o seu animal de estimação precisar de atendimento veterinário imediato fora do horário de expediente, nossa equipe está pronta para ajudar, fornecendo cuidados urgentes e tratamento adequado para garantir o bem-estar do seu pet.
              </p>
            </div>

            <div className="duvida">
              <h3>A clínica oferece serviços de banho e tosa?</h3>
              <img src="/img/arrow-down.svg" alt="" />
              <p className="paragrafo">
                Sim, a clínica veterinária da PetLife oferece serviços profissionais de banho e tosa. Nossa equipe de profissionais experientes garante que seu pet receba cuidados adequados, usando produtos de alta qualidade e técnicas seguras. O banho e tosa ajudam a manter a higiene, a saúde da pele e pelagem do seu pet, além de proporcionar uma experiência relaxante e agradável para eles.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <img src="/img/logo.svg" alt="PetLife" />
          <p>Cuidando com amor, vivendo com alegria: PetLife, onde a vida dos pets é mais feliz!</p>
        </div>

        <div>
          <strong className="titulo">Links rápidos</strong>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#clinica">Clínica</a>
            <a href="#farmacia">Farmácia</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
        </div>

        <div>
          <strong className="titulo">Encontre-nos</strong>
          <p>WhatsApp: <a href="https://wa.me/5522987654321" target="_blank" rel="noopener noreferrer">(22) 98765-4321</a></p>
          <p>Email: <a href="mailto:contato@petlife.com.br">contato@petlife.com.br</a></p>
          <p>Endereço: Av. 7 de Setembro, nº 42, Centro</p>
        </div>
      </footer>

      <div id="copyright">
        Desenvolvido por <a href="https://github.com/marialluiza" target="_blank" rel="noopener noreferrer">@marialluiza ✨</a>
      </div>
    </>
  );
};

export default PetLife;
