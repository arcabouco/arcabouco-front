import { ArrowBack, KeyboardArrowDown } from 'styled-icons/material-sharp'

import styled from 'styled-components'
import { Add, Close } from 'styled-icons/material'

export const SoftwarePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: #e5e8ef;
  width: 100vw;
  height: 100vh;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: min(20vw, 5rem);
  background: #e5e8ef;
`

export const PageTitle = styled.h1`
  font: 500 6vw Sora, sans-serif;
  color: #000;
  margin-bottom: 5vw;
`

export const Arrow = styled(ArrowBack)`
  margin-left: 5vw;
  height: 40%;
  transition: all 0.3s;

  :active {
    color: #8695a0;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
  padding: 5vw 6vw 0 6vw;
  border-radius: 1.5rem 1.5rem 0 0;
  background: #fff;
`

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2vw;
  width: 100%;
  margin-bottom: 3vw;
`

export const GalleryLabel = styled.h2`
  width: 100%;
  text-align: left;
  color: #66696f;
  font: 400 4.8vw Sora, sans-serif;
`

export const Gallery = styled.div`
  display: flex;
  gap: 3vw;
  width: 100%;
  height: 30vw;
  max-height: 10rem;
  background: #eff1f6;
  padding: 4vw;
  border-radius: 3vw;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-align: start end;
`

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  height: 100%;

  border-radius: 0.5rem;
  background: #d9d9d9;
`

export const RemoveImageIcon = styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
  width: 22%;
  background: #cb3a3a;
  color: #fff;
  border-radius: 50%;
  transform: translate(40%, -40%);
`

export const Image = styled.img`
  object-fit: contain;
  width: max-content;
  max-width: 100%;
  max-height: 100%;
`

export const AddImageLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  aspect-ratio: 1;
  background: #d9d9d9;
  border-radius: 0.5rem;
  cursor: pointer;
  :active {
    background: #c9c9c9;
  }
`

export const AddImageInput = styled.input`
  display: none;
`

export const AddImageIcon = styled(Add)`
  height: 70%;
`

export const BasicInformationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
  width: 100%;
  font: 400 4.8vw Sora, sans-serif;
  color: #66696f;
`

export const Warring = styled.span`
  text-align: start;
  font: 400 3.2vw Sora, sans-serif;
  margin-top: 0.4vh;
  color: #dc1212;
  width: 100%;
  height: 8vw;
`

export const TitleInput = styled.input`
  width: 100%;
  font: 400 4.4vw Sora, sans-serif;
  padding: 1.4vw 0 1.4vw 5vw;
  border: solid 1px #dddcdf;
  border-radius: 2vw;

  ::placeholder {
    font: 400 4.4vw Sora, sans-serif;
    color: #dcdcdc;
  }
`

export const DescriptionInput = styled.textarea`
  width: 100%;
  font: 400 3.5vw Sora, sans-serif;
  text-align: start;
  text-justify: initial;
  padding: 3vw 1vw 3vw 3vw;
  border: solid 1px #dddcdf;
  border-radius: 2vw;
  width: 100%;
  resize: vertical;
  overflow: hidden;
  min-height: 20vw;
  max-height: 100vw;
`

export const LinkInput = styled.input`
  width: 100%;
  font: 400 3.5vw Sora, sans-serif;
  padding: 1.4vw 0 1.4vw 5vw;
  border: solid 1px #dddcdf;
  border-radius: 2vw;

  ::placeholder {
    font: 400 3.5vw Sora, sans-serif;
    color: #dcdcdc;
  }
`

export const FootInfo = styled.span`
  text-align: center;
  width: 100%;
  font: 400 3.4vw Sora, sans-serif;
  margin-bottom: 5vw;

  color: #66696f;
  b {
    color: #484aad;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  margin: 0 5vw;
  font: 400 4vw Sora, sans-serif;
  color: #dcdcdc;
  background: #484aad;
  padding: 3vw 0;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-bottom: 10vw;

  :active {
    background: #0e2750;
  }
`
