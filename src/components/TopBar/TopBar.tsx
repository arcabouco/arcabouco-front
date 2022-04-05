import { MenuButton } from '../MenuButton/MenuButton.styles'
import { useSideNav } from '../SideNav/SideNav'
import { ArcaboucoLogo, Header, TopBarContainer } from './TopBar.style'

export const TopBar = () => {
  const { SideNav, switchMenuOpened } = useSideNav()

  return (
    <TopBarContainer>
      <SideNav></SideNav>
      <Header>
        <MenuButton onClick={switchMenuOpened} />
        <ArcaboucoLogo />
      </Header>
    </TopBarContainer>
  )
}
