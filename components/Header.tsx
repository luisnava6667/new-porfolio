'use client'
import Link from 'next/link'
import { ThemeToggle } from './'
import { navItems } from '@/utils'
export const Header = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault() // Evita el comportamiento de navegación del enlace
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <header className='fixed top-0 z-10 flex justify-center w-full mt-4'>
      <nav className='flex nav text-sm items-center  py-2 font-medium md:font-bold w-full sm:w-3/4 sm:text-lg justify-evenly mx-1   '>
        {navItems.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className='relative transition-colors hover:text-green-400 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'
            aria-label={item.label}
            onClick={(e) => handleLinkClick(e, item.url.substring(1))}>
            {item.title}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  )
}
