import bigmac from '../assets/bigmac1.png'
import batata from '../assets/batata.png'
import sorvete from '../assets/sorvete.png'
import texto from '../assets/texto.png'
import sofa from '../assets/sofa.png'
import restaurante from '../assets/restaurante.png'
import banner from '../assets/banner.png'
import { useState } from 'react'
import * as S from './Styled'
export default function Main() {

const[item,setitem]=useState(bigmac)

  return (
    <main>
      <S.Boxproduto>
        <S.Caixa>
        <S.Hamburguer>
        <img src={item} alt="" />
        </S.Hamburguer>
        
          <img src={texto} alt="" />
        </S.Caixa>

        <S.opcao>
       <img onClick={()=>setitem(bigmac)} src={bigmac} alt="" />
       <img onClick={()=>setitem(batata)} src={batata} alt="" />
        <img onClick={()=>setitem(sorvete)} src={sorvete} alt="" />
        </S.opcao>
    

      </S.Boxproduto>
      <S.promocao>
        <h2>promoção</h2>
        <S.Center>
        <div>
          <img src={sofa} alt="" />
          <p>Que tal um #MéquiNoSofá?</p>
          <button>click aqui</button>
        </div>
        <div>
          <img src={restaurante} alt="" />
          <p>venha conhecer nossa nova loja</p>
          <button>click aqui</button>
        </div>     
         <div>
          <img src={banner} alt="" />
          <p>Confira as medidas que o Méqui adotou!</p>
          <button>click aqui</button>
        </div>
        </S.Center>
      </S.promocao>
    </main>
  )
}
