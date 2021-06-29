import React from "react";
import WomanOnPhone from "../../assets/woman-on-phone.svg";
import { MainContent, Paragraph, Title, Section, Main, Button } from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Main>
      <MainContent>
        <img src={WomanOnPhone} width="200" height="200" alt="Woman-on-Phone" />

        <Title>
          {" "}
          Bem vindos a Telzir!
          <br />
          Somos especializados em chamadas de longa distância nacional!
        </Title>
      </MainContent>
      <Paragraph>
        Esta é uma página para divulgar nosso lançamento, o plano FaleMais ♥{" "}
      </Paragraph>
      <Title>
        Com nossos novos planos, você pode falar de graça com seus contatos,
        dentro dos limites do plano. Já pensou ? Caso os minutos grátis acabem,
        só cobramos os minutos extras com um acréscimo de 10%. É ou não é
        Telzacional ?
      </Title>
      <Section>
        {" "}
        E aí ? Quer fazer a melhor simulação da sua vida, hoje ? Clica no botão
        abaixo e seja redirecionado para a página da simulação, sem atualizar a
        sua página, com o poder do Router ;)
      </Section>
      <Button>
        <Link to="/simulation">Clique Aqui!</Link>
      </Button>
    </Main>
  );
};

export default Home;
