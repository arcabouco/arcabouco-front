import { ComponentType, MouseEvent, MouseEventHandler, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as Material from 'styled-icons/material'
import {
  Bar,
  Container,
  GenericButton,
  Header,
  LogoutButton,
  LogoutIcon,
  LogoutLabel,
  Menu,
  MenuItemContainer,
  MenuItemIconStyle,
  ProfileContainer,
  UserEmail,
  UserImage,
  UserInfo,
  UserName,
  MenuItemLabel,
  LogoutInfo
} from './SidNav.styles'
import { useUser } from '../../Hook'

export const useSideNav = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenuOpened = (event: MouseEvent) => {
    event.preventDefault()
    setMenuOpened(!menuOpened)
  }

  const SideNav = () => {
    const { user, logout } = useUser()

    return (
      <>
        <Container opened={menuOpened} onClick={switchMenuOpened}></Container>
        <Bar opened={menuOpened}>
          <Header>
            {user ? (
              <>
                <LogoutButton onClick={logout}>
                  <LogoutLabel>Sair</LogoutLabel>
                  <LogoutIcon />
                </LogoutButton>

                <ProfileContainer>
                  <UserImage></UserImage>
                  <UserInfo>
                    <UserName>Jonathan</UserName>
                    <UserEmail>jonarc06@gmail.com</UserEmail>
                  </UserInfo>
                </ProfileContainer>

                <GenericButton>Sugerir Software</GenericButton>
                <GenericButton>Sugerir Atividade</GenericButton>
              </>
            ) : (
              <>
                <LogoutInfo>
                  Entre na sua conta para sugerir Softwares e Atividades.
                </LogoutInfo>
                <Link href="/app/auth/login">
                  <GenericButton>Entrar</GenericButton>
                </Link>
                <Link href={'/app/auth/signup'}>
                  <GenericButton>Criar conta</GenericButton>
                </Link>
              </>
            )}
          </Header>

          <Menu>
            <LinkButton icon={Material.Home} page={'/'} label={'Home'} />
            <LinkButton icon={Material.Info} page={'/about'} label={'Sobre'} />
          </Menu>
        </Bar>
      </>
    )
  }

  return { SideNav, switchMenuOpened }
}

type LintButtonProps = {
  page: string
  label: string
  icon: ComponentType<any>
}

const LinkButton = ({ label, page, icon }: LintButtonProps) => {
  const router = useRouter()

  const selected = router.pathname === page

  const MenuItemIcon = MenuItemIconStyle(icon)

  return (
    <Link href={page}>
      <MenuItemContainer>
        <MenuItemIcon selected={selected} />
        <MenuItemLabel selected={selected}>{label}</MenuItemLabel>
      </MenuItemContainer>
    </Link>
  )
}
