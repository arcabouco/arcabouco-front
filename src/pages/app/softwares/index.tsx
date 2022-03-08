import {
  IconContainer,
  List,
  SoftwareCard,
  SoftwareDescription,
  SoftwareInformation,
  SoftwareListPageContainer,
  SoftwareName,
  Title
} from './softwares.style'
import Image from 'next/image'
import TestImage from '../../../../public/image.png'
import { TopBar } from '../../../components/TopBar/TopBar'
import Link from 'next/link'

const SoftwareListPage = () => {
  return (
    <SoftwareListPageContainer>
      <TopBar />

      <Title>
        <b>+500</b> softwares listados
      </Title>

      <List>
        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>

        <Link href={'/app/softwares/1234'}>
          <SoftwareCard>
            <IconContainer>
              <Image src={TestImage} />
            </IconContainer>
            <SoftwareInformation>
              <SoftwareName>Converber</SoftwareName>
              <SoftwareDescription>
                Loren i consectetur adipiscing elit, sed do eiusmod tempor. fsda
                fs kf fkds fds fsd jkf fsk gsl fdsaf dsa fds fds fas d fdsf
                dsafd sfdsf asdf asd ffs fs fd fjkds hfjk f
              </SoftwareDescription>
            </SoftwareInformation>
          </SoftwareCard>
        </Link>
      </List>
    </SoftwareListPageContainer>
  )
}

export default SoftwareListPage
