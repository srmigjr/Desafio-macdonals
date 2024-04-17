import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
`

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const Header = styled.header`

${center}
justify-content: space-between;
height: 15vh;
padding-left: 60px;


`
export const BtnApp = styled.div`

width: 40vw;
${center}

div{
    width: 15vw;
    
    ${center}
    height: 45px;
    font-size: 0.8rem;
    justify-content: space-evenly;
    
}
.mac1{

    background-color: #FFC72C;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.8rem;
    justify-content: space-evenly;
}
`
export const Boxproduto=styled.section`

height: 90vh;
background-color: #FFC72C;
${center}
flex-direction: column;
justify-content: space-around;



`
export const Hamburguer = styled.div`
height: 40vh;
img{
    width: 20vw;
}
`
export const Caixa = styled.div`
${center}
justify-content: space-around;
height: 50vh;
width: 90vw;


`
export const opcao = styled.figure`

width: 38vw;
${center}
justify-content: space-around;
img{
    cursor: pointer;
}
`
export const promocao = styled.section`
background-color: #FEB706;
height: 70vh;
${center}
flex-direction: column;
justify-content: space-around;
h2{
    color: white;
    height: 15vh;
    width: 18vw;
    ${center}
}
`
export const Center = styled.div`

width: 95vw;
height: 50vh;
${center}
justify-content: space-evenly;

img{
    width: 20vw;
}

div{
    height: 45vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: aliceblue;
    border-radius: 8px;

}
p{
    height: 15vh;
    width: 18vw;
    ${center}
}
button{
    background-color: #FEB706;
    border-radius: 8px;
    height: 5vh;
    width: 8vw;
    border: none;
    cursor: pointer;
}
`
export const footer = styled.section`

${center}
width: 95vw;
justify-content: space-between;
height: 15vh;
padding-left: 60px;

p{
    width: 55vw;
    font-family: roboto;
    font-size: 12px;
    font-weight: 18px;
    color:#000000 ;
}

`
export const pedireito = styled.div`
    width: 30vw;
    ${center}
    height: 45px;
    font-size: 0.8rem;
    justify-content: space-evenly;

`