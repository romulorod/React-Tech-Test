import React from 'react'
import WomanOnPhone from './woman-on-phone.svg'
import { MainContent } from './styles'
import { P } from './styles'
import { Title } from './styles'
import { Section } from './styles'
import { Main } from './styles'
import { Button } from './styles'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import App from '../../App'

const FirstPage = () => {
    return (
        
            <BrowserRouter>
            <Route exact path="/">
                <Main>
                    <MainContent>
                        <img src={WomanOnPhone} width="200" height="200" alt="Woman-on-Phone"/>

                        <div> Bem vindos a Telzir!<br /> somos especializados em chamadas de longa distância nacional!</div></MainContent>
                    <P>Esta é uma página para divulgar nosso lançamento, o plano FaleMais ♥ </P>
                    <Title>Com nossos novos planos, você pode falar de graça com seus contatos, dentro dos limites do plano. Já pensou ?
                        E se passar dos limites, só cobramos os minutos com um acréscimo de 10%. É ou não é Telzacional ?
                    </Title>
                    <Section> E aí ? Quer fazer a melhor simulação da sua vida, hoje ? Clica no botão abaixo e seja redirecionado para
                        a página da simulação, sem atualizar a sua página, com o poder do Router ;)
                    </Section>
                    </Main>
                    <Button><Link to='/simulacao'>Clique Aqui!</Link></Button>
                    </Route>
                    <Switch> 
                        <Route exact path="/simulacao" component={App} />
                    </Switch>
                
            </BrowserRouter>
        
    )
}

export default FirstPage