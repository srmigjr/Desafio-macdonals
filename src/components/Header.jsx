import logo from '../assets/logo.png'
import app from '../assets/app.png'
import cell from '../assets/cell.png'
import * as S from './Styled'
export default function Header() {
  return (
    <S.Header>
        <img src={logo} alt="" />
        <S.BtnApp>
            <div>
            <img src={app} alt="" />
            <p>Baixe o App</p>
            </div>
            <div className="mac1">
            <p>Peça seu Méqui</p>
            <img src={cell} alt="" />
            </div>
        </S.BtnApp>
    </S.Header>
  )
}
