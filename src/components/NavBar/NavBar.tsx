import { useState, useEffect, HTMLAttributes } from 'react'
import Link from 'next/link'
import { NavBarContainer, NavBarButton } from './NavBar.styles'
import { useRouter } from 'next/dist/client/router'

type NavBarLinkProps = {
  page: string
  label: string
}

export const NavBar = (props: HTMLAttributes<HTMLDivElement>) => {
  const [selectedPage, setSelectedPage] = useState('/')
  const router = useRouter()

  useEffect(() => setSelectedPage(router.pathname), [])

  const NavBarLink = ({ page, label }: NavBarLinkProps) => (
    <Link href={page}>
      <NavBarButton type="button" selected={selectedPage === page}>
        {label}
      </NavBarButton>
    </Link>
  )

  return (
    <NavBarContainer {...props}>
      <NavBarLink page="/" label="Home" />
      <NavBarLink page="/about" label="Sobre" />
    </NavBarContainer>
  )
}
