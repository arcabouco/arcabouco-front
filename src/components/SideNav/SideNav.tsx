import { useState } from 'react'
import { Container, Menu, MenuItem, Title } from './SidNav.styles'
import Link from 'next/link'
import { useRouter } from 'next/router'

type SideNavProps = {
  opened: boolean
}

export const SideNav = ({ opened }: SideNavProps) => {
  const router = useRouter()

  type LintButtonProps = {
    page: string
    label: string
  }

  const LintButton = ({ label, page }: LintButtonProps) => (
    <Link href={page}>
      <MenuItem selected={router.route === page}>{label}</MenuItem>
    </Link>
  )

  return (
    <Container opened={opened}>
      <Title> Menu </Title>
      <Menu>
        <LintButton page={'/'} label={'Home'} />
        <LintButton page={'/about'} label={'Sobre'} />
      </Menu>
    </Container>
  )
}
