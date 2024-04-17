import mac from '../assets/mac.png'
import appstore from '../assets/appstore.png'
import plei from '../assets/pla.png'
import * as S from './Styled'

export default function Footer() {
  return (
   
        <S.footer>
            <img src={mac} alt="" />
            <p>@ MACDONALDS 2024</p>
            <S.pedireito>
                <div>
                <img src={plei} alt="" />
                </div>
                <div>
                <img src={appstore} alt="" />
                </div>
            </S.pedireito>
        </S.footer>
      )
    }