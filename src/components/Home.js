import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'


function Home() {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main` // tells browser that this is the main content of the page
  min-height: calc(100vh - 70px); // 70px is the height of the Header component
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    position: absolute;
  }
`