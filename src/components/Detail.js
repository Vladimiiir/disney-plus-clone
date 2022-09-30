import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {

  const { id } = useParams();
  const [ movie, setMovie ] = useState();

  useEffect(() => {
    // grab the movie info from db
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc) => {
      if(doc.exists) {
        // save the movie data
        setMovie(doc.data());
      } else {
        // redirect to homepage

      }
    })
  })

  // console.log("Movie is", movie);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt=''/>
          </Background>
          <ImgTitle>
            <img src={movie.titleImg} alt=''/>
          </ImgTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt=''/>
              <span>Play</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt=''/>
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="images/group-icon.png" alt=''/>
            </GroupWatchButton>
          </Controls>
          <Subtitle>
            {movie.subtitle}
          </Subtitle>
          <Description>
            {movie.description}
          </Description>
        </>
      )}
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

`

const Background = styled.image`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  // opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`

const ImgTitle = styled.image`
  img {
    transform: scale(0.5);
    object-fit: cover;
    margin: 0 0 0 -180px;
}

`

const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249,249,249);
  margin-right: 22px;
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198,198,198);
  }

`

const TrailerButton = styled(PlayButton)`
  // opacity: 0.4;
  border: 1px solid rgb(249,249,249);
  background: rgba(0,0,0,0.3)
`

const AddButton = styled.button`
  text-transform: uppercase;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  // opacity: 0.5;
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 16px;
    color: white;
  }
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);

`

const Subtitle = styled.div`
  margin-top: 20px;
  // margin-left: 3px;
  color: rgb(249,249,249);
  font-size: 15px;
`

const Description = styled.div`
  margin-top: 16px;
  // margin-left: 3px;
  color: rgb(249,249,249);
  font-size: 20px;
  line-height: 1.4; // line spacing
  max-width: 500px;
`