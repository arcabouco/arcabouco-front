import { MenuButton } from '../MenuButton/MenuButton.styles'
import { useSideNav } from '../SideNav/SideNav'
import { ArcaboucoLogo, Header } from './TopBar.style'

export const TopBar = () => {
  const { SideNav, switchMenuOpened } = useSideNav()

  return (
    <>
      <SideNav></SideNav>
      <Header>
        <MenuButton onClick={switchMenuOpened} />
        <ArcaboucoLogo />
      </Header>
    </>
  )
}
