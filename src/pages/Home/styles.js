import styled from "styled-components";

export const MainContent = styled.main`
  margin-top: 5%;
  display: flex;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
`;

export const Title = styled.div`
  display: block;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  font-size: 24px;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 3%;
`;
export const Section = styled.section`
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin: 3% auto;
`;

export const Main = styled.main`
  background-color: lightsteelblue;
  color: black;
  @media (max-width: 2560px) {
    Main,
    p,
    section,
    div {
      overflow-x:hidden;
      width:70%;
      display: block;
      margin: 0 auto;
      font-size: 38px;
    }
    div,
    section {
      margin-top: 2%;
    }
    img {
      display: block;
      height: 200px;
      width: 200px;
      margin: 1% 46%;
    }
    button {
      font-size: 50px;
      width: 300px;
      height: 65px;
      margin-top: 3%;
      font-size: 40px;
      a {
        height: 100%;
        width: 100%;
        text-align: center;
      }
    }
  }
@media(max-width:1920px){
  img {
      display: block;
      height: 150px;
      margin: 2% 44%;
    }
    Main,
    p,
    section,
    div {
      font-size: 30px;
    }
    button{
      width:250px;
      height:60px;
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:30px;
      }
    }
}
  @media (max-width: 1440px) {
    Main,
    p,
    section,
    div {
      overflow-x:hidden;
      width:70%;
      display: block;
      margin: 0 auto;
    }
    div,
    section {
      margin-top: 3%;
    }
    img {
      display: block;
      height: 190px;
      margin: 2% 42%;
    }
    button {
      margin-top: 3%;
    }
  }
  @media (max-width: 1024px) {
    img {
      margin: 2% 38%;
      height:150px;
    }
    Main,
    p,
    section,
    div {
      font-size: 26px;
    }
      button{
      width:200px;
      height:50px;
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:24px;
      }
    }
  }
  @media (max-width: 768px) {
    Main,
    p,
    section,
    div {
      font-size: 27px;
    }
    img {
      margin: 2% 35%;
    }
    button{
      width:180px;
      height:45px;
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:20px;
      }
    }
  }
  @media (max-width: 520px) {
    Main,
    p,
    section,
    div {
      font-size: 16px;
      overflow-x:hidden;
    }
    p {
      margin-top:2%;
      width: 60%;
    }
    img {
      margin: 2% 40%;
      width: 120px;
      height: 120px;
    }
    button{
      width:130px;
      height:40px;
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:17px;
      }
    }
  }
  @media (max-width: 426px) {
    img {
      margin: 2% 33%;
    }
    button{
      width:100px;
      height:30px;
      a{
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:14px;
      }
    }
  }
  @media (max-width: 320px) {
    Main,
    p,
    section,
    div {
      font-size: 14px;
      display: block;
      margin: 0 auto;
    }
    div,
    section {
      margin-top: 6%;
    }
    img {
      display: block;
      height: 100px;
      margin: 5% 30%;
    }
    button{
      margin-top: 5%;
    }
  }
`;

export const Button = styled.button`
  background-color: limegreen;
  border: 2px solid black;
  padding: 5px;
  display: flex;
  width: auto;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: white;
  }
`;
