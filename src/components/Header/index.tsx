import { HeaderContainer } from './styles'
import logoImg from '../../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from '../ShoppingCart'

export function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>

      {/* Não exibe o carrinho de compras na pagina de success */}
      {window.location.pathname !== '/success' && <ShoppingCart />}
    </HeaderContainer>
  )
}
