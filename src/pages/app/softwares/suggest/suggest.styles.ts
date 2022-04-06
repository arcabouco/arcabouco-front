import { ArrowBack, KeyboardArrowDown } from 'styled-icons/material-sharp'

import styled from 'styled-components'
import { Add, Close } from 'styled-icons/material'
import { media } from '../../../../utils/css'
import ScrollContainer from 'react-indiana-drag-scroll'

export const SoftwarePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background: #e5e8ef;
  height: 100vh;

  ${media.desktop} {
    /* justify-content: end; */
    gap: 0;
    height: unset;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: min(20vw, 5rem);
  background: #e5e8ef;

  ${media.desktop} {
    height: 5rem;
  }
`

export const PageTitle = styled.h1`
  font: 500 6vw Sora, sans-serif;
  color: #000;
  margin-bottom: 5vw;

  ${media.desktop} {
    font-size: 200%;
    margin-bottom: 1rem;
  }
`

export const Arrow = styled(ArrowBack)`
  margin-left: 5vw;
  height: 40%;
  transition: all 0.3s;

  :active {
    color: #8695a0;
  }

  ${media.desktop} {
    height: 3rem;
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

  ${media.desktop} {
    width: 25vw;
    min-width: 30rem;
    background: #fff;
    padding: 2%;
    height: unset;
    margin-bottom: 4rem;
  }
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

  ${media.desktop} {
    font-size: 180%;
  }
`

export const Gallery = styled(ScrollContainer)`
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

  ${media.desktop} {
    width: 100%;
    height: 30rem;
    padding: 5%;
    border-radius: 0;
    gap: 1rem;

    overflow-x: scroll;

    cursor: grab;

    user-select: none;

    ::-webkit-scrollbar {
      height: 0.4vw;
    }

    ::-webkit-scrollbar-track {
      background-color: #f5f6fb;
      border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #e4e4e4;
      border-radius: 100px;
    }
  }
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

  ${media.desktop} {
    /* width: 75%; */
  }
`
export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1.2vw;
  width: 100%;
  font: 400 4.8vw Sora, sans-serif;
  color: #66696f;

  ${media.desktop} {
    font-size: 140%;
    gap: 0.8rem;
  }
`

export const Warring = styled.span`
  text-align: start;
  font: 400 3.2vw Sora, sans-serif;
  margin-top: 0.4vh;
  color: #dc1212;
  width: 100%;
  height: 8vw;

  ${media.desktop} {
    font-size: 100%;
    height: unset;
  }
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

  ${media.desktop} {
    font-size: 80%;
    padding: 2% 0 2% 4%;
    border-radius: 0.4rem;

    ::placeholder {
      font-size: 80%;
    }
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

  ${media.desktop} {
    font-size: 80%;
    padding: 2% 0 2% 4%;
    border-radius: 0.4rem;
    min-height: 10rem;

    ::placeholder {
      font-size: 80%;
    }
  }
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

  ${media.desktop} {
    font-size: 80%;
    padding: 2% 0 2% 4%;
    border-radius: 0.4rem;

    ::placeholder {
      font-size: 80%;
    }
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

  ${media.desktop} {
    font-size: 120%;
    margin-bottom: 2rem;
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

  ${media.desktop} {
    font-size: 140%;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }
`
