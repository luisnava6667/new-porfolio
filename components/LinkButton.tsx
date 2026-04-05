import Link from 'next/link'
import React from 'react'

interface LinkButtonProps {
  children: React.ReactNode
  classname?: string
  href: string
  download?: boolean
  variant?: 'default' | 'primary'
  ariaLabel?: string
}

export const LinkButton = ({ children, classname, href, download, variant = 'default', ariaLabel }: LinkButtonProps) => {
  const baseClass =
    'flex items-center gap-x-2 font-semibold rounded-xl px-5 py-2.5 me-2 mb-2 text-sm transition-all border border-white/10 backdrop-blur-sm'
  const variantClass =
    variant === 'primary'
      ? 'bg-green-500 text-black hover:bg-green-400'
      : 'bg-white/5 text-gray-900 dark:text-white hover:bg-white/10'

  return (
    <Link
      download={download}
      target='_blank'
      href={href}
      aria-label={ariaLabel}
      className={`${baseClass} ${variantClass} ${classname ?? ''}`}>
      {children}
    </Link>
  )
}
