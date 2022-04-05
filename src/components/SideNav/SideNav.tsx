import {
  ComponentType,
  MouseEvent,
  MouseEventHandler,
  useContext,
  useState
} from 'react'
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
import { AuthContext } from '../../Context/Auth'

export const useSideNav = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenuOpened = (event: MouseEvent) => {
    event.preventDefault()
    setMenuOpened(!menuOpened)
  }

  const SideNav = () => {
    const { user, logout } = useContext(AuthContext)

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
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </UserInfo>
                </ProfileContainer>

                <Link href="/app/softwares/suggest">
                  <GenericButton>Sugerir Software</GenericButton>
                </Link>
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
