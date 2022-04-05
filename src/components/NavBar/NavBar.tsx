import { useState, useEffect, HTMLAttributes, useContext } from 'react'
import Link from 'next/link'
import {
  AuthOptionsContainer,
  GenericButton,
  LogoutButton,
  LogoutIcon,
  LogoutLabel,
  MenuButton,
  MenuContainer,
  NavBarContainer,
  ProfileOptionButton,
  ProfileOptionContainer,
  ProfilePhoto,
  Title
} from './NavBar.styles'
import { useRouter } from 'next/dist/client/router'
import * as Context from '../../Context'
import { Popover } from 'react-tiny-popover'

type NavBarLinkProps = {
  page: string
  label: string
}

export const NavBar = (props: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter()
  const { user, logout } = useContext(Context.Auth.AuthContext)

  const [selectedPage, setSelectedPage] = useState('/')
  const [profileOpened, setProfileOpened] = useState(false)

  useEffect(() => setSelectedPage(router.pathname), [router.pathname])

  const Button = ({ page, label }: NavBarLinkProps) => (
    <Link href={page}>
      <MenuButton selected={selectedPage === page}>{label}</MenuButton>
    </Link>
  )

  const ProfileOptionPopover = () => (
    <ProfileOptionContainer>
      <Link href={'/app/softwares/suggest'}>
        <ProfileOptionButton>Sugerir Software</ProfileOptionButton>
      </Link>
      <Link href={'/app/activities/suggest'}>
        <ProfileOptionButton>Sugerir Atividade</ProfileOptionButton>
      </Link>
      <LogoutButton onClick={() => logout()}>
        <LogoutLabel>Sair</LogoutLabel>
        <LogoutIcon />
      </LogoutButton>
    </ProfileOptionContainer>
  )

  return (
    <NavBarContainer {...props}>
      <Title>ARCABOUÇO</Title>

      <MenuContainer>
        <Button label="Home" page="/"></Button>
        <Button label="Softwares" page="/app/softwares"></Button>
        <Button label="Atividades" page="/app/activities"></Button>
        <Button label="Sobre" page="/about"></Button>

        {user ? (
          <Popover
            containerStyle={{ zIndex: '102' }}
            positions={['bottom', 'left']}
            padding={20}
            isOpen={profileOpened}
            content={<ProfileOptionPopover />}
            onClickOutside={() => setProfileOpened(false)}
          >
            <ProfilePhoto onClick={() => setProfileOpened(!profileOpened)} />
          </Popover>
        ) : (
          <AuthOptionsContainer>
            <Link href={'/app/auth/login'}>
              <GenericButton>Entrar</GenericButton>
            </Link>

            <Link href={'/app/auth/signup'}>
              <GenericButton>Criar conta</GenericButton>
            </Link>
          </AuthOptionsContainer>
        )}
      </MenuContainer>
    </NavBarContainer>
  )
}
