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
import { toast } from 'react-toastify'

type NavBarLinkProps = {
  page?: string
  label: string
}

export const NavBar = (props: HTMLAttributes<HTMLDivElement>) => {
  const router = useRouter()
  const { user, logout } = useContext(Context.Auth.AuthContext)

  const [selectedPage, setSelectedPage] = useState('/')
  const [profileOpened, setProfileOpened] = useState(false)

  useEffect(() => setSelectedPage(router.pathname), [router.pathname])

  const Button = ({ page, label }: NavBarLinkProps) =>
    page ? (
      <Link href={page}>
        <MenuButton selected={selectedPage === page}>{label}</MenuButton>
      </Link>
    ) : (
      <MenuButton
        selected={selectedPage === page}
        onClick={() => toast.warn('Em breve')}
      >
        {label}
      </MenuButton>
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
      <Link href={'/'}>
        <Title>ARCABOUÇO</Title>
      </Link>

      <MenuContainer>
        <Button label="Home" page="/"></Button>
        <Button label="Softwares" page="/app/softwares"></Button>
        <Button label="Atividades"></Button>
        <Button label="Sobre"></Button>

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
