import {
  ContactInfo,
  DriveIcon,
  FigmaIcon,
  FooterContainer,
  GithubIcon,
  Icons,
  MainInfo,
  MoreInfo,
  Text,
  Title
} from './DefaultFooter.styles'

export const DefaultFooter = () => (
  <FooterContainer>
    <MainInfo>
      <Title>ARCABOUCO</Title>

      <ContactInfo>
        <Text>Páginas oficiais</Text>
        <Icons>
          <a
            href="https://github.com/arcabouco"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.figma.com/@arcabouco"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FigmaIcon />
          </a>

          <a
            href="https://drive.google.com/drive/folders/1maaa6caTUW65DBz0Rj0V0nN3Mqd-Ilef?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <DriveIcon />
          </a>
        </Icons>
      </ContactInfo>
    </MainInfo>

    <MoreInfo>
      <Text>
        Arcabouço é e sempre será uma plataforma gratuita, sem fins lucrativos e
        opensource
      </Text>
      <Text>Contato: Jonathan Rodrigues Cardoso - jonarc06@gmail.com</Text>
    </MoreInfo>
  </FooterContainer>
)
