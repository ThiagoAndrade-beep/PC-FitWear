import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { LuMenu, LuMessageCircle, LuX } from 'react-icons/lu'
import style from './Header.module.css'
import Button from '../Button/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuLinks = [
    { href: '#inicio', label: 'INÍCIO' },
    { href: '#produtos', label: 'PRODUTOS' },
    { href: '#colecoes', label: 'COLEÇÕES' },
    { href: '#sobre', label: 'SOBRE' },
    { href: '#contato', label: 'CONTATO' },
  ]

  return (
    <header className={style.headerContainer}>
      <div className={style.headerTitle}>
        <span>PC</span>
        <div className={style.headerTexts}>
          <p>PATRÍCIA CRUZ</p>
          <p>FITWEAR</p>
        </div>
      </div>

      <div className={style.headerActions}>
        <button
          type='button'
          className={style.menuToggle}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <LuX size={20} /> : <LuMenu size={20} />}
        </button>
      </div>

      <nav className={`${style.headerLinks} ${isMenuOpen ? style.headerLinksOpen : ''}`}>
        {menuLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

       <div className={style.headerContact}>
          <a href="https://www.instagram.com/pc.fitwear_26/" target='blank' aria-label="Instagram da Patrícia Cruz Fitwear">
            <FaInstagram />
          </a>
          <Button
            variant='gold'
            buttonSize='md'
            whatsappButton
            phone='5575992353232'
            message='Olá! Conheci a Patrícia Cruz Fitwear pelo site e gostaria de conhecer os produtos disponíveis.'
          >
            <LuMessageCircle size={17} />
            WHATSAPP
          </Button>
        </div>
    </header>
  )
}
