import styled from "styled-components";

export const MainContent = styled.main`
margin-top:5%;
display: flex;
font-size: 24px;
justify-content: center;
align-items: center;
text-align: center;
width:80%;
`

export const Title = styled.div`
display:block;
font-size: 24px;
justify-content: center;
align-items: center;
text-align: center;
width: 80%;
margin:0 auto;
`
export const P = styled.p`
font-size: 24px;
text-align: center;
margin-top: 5%;
margin-bottom: 3%;
`
export const Section = styled.section`
font-size: 24px;
text-align: center;
width: 80%;
margin:3% auto;
`

export const Main = styled.main`
background-color: lightsteelblue;
color:black;
@media (max-width:520px){
    Main,p,section,div{
        font-size:20px;
    }
    p{
        width:95%;
    }
    img{
        margin-left: 2%;
        width:150px;
        height:150px;
    }
}
@media (max-width:320px){
    Main,p,section,div{
        font-size:14px;
        display:block;
        margin:0 auto;
    }
    div,section{
        margin-top: 9%;
    }
    img{
        display:block;
        height:100px;
        margin:5% 25%;
    }
}
`

export const Button = styled.button`
background-color: limegreen;
border: 2px solid black;
padding:5px;
display:flex;
width: auto;
margin: 0 auto;
a{
text-decoration: none;
color:white;


}`

