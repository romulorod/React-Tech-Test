import styled from "styled-components";
import img from './background.jpg'

export const BackgroundImg = styled.div`
background-image: url(${img});
background-size: cover;
height:100vh;
position: relative;
z-index: -1;
`