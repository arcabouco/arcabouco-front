import styled from 'styled-components'
import Arcabouco from '../../assets/arcabouco-logo.svg'
import { media } from '../../utils/css'

export const TopBarContainer = styled.div`
  width: 100%;
  ${media.desktop} {
    display: none;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #0f2850;

  width: 100%;
  min-height: min-content;
  padding: 6vw 1.8rem 4vw 1.8rem;

  box-shadow: 0px 2.58418px 5.16835px rgba(16, 24, 64, 0.08);
`

export const ArcaboucoLogo = styled(Arcabouco)`
  width: max(9vw, 2rem);
  height: max(9vw, 2rem);
  filter: drop-shadow(0px 2.58418px 2.58418px rgba(0, 0, 0, 0.25));
`
