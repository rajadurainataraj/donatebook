import styled from "styled-components"
import v from "../assets/v.mp4"
import v2 from "../assets/v2.mp4"
import v3 from "../assets/v3.mp4"
import v4 from "../assets/v4.mp4"
import v5 from "../assets/v5.mp4"
import vc from "../assets/vc.mp4"
import { useState } from "react"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`
const SmallContainer = styled.div`
  border: 1px solid gray;
  width: 100%;
  height: 500px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  border-radius: 10px;
  flex-direction: column;
`
const Screen = styled.div`
  height: 250px;
  width: 100%;
  border-radius: 10px;
  background-color: lightblue;
`
const Title = styled.div`
  width: 99%;
  height: 40px;
  background-color: blue;
  margin-top: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  align-self: center;
  border-radius: 10px;
  cursor: pointer;
`

const Youtube = () => {
  const [changeableText, setChangeableText] = useState(vc)

  const song = () => {
    setChangeableText(v)
  }
  const song2 = () => {
    setChangeableText(v2)
  }
  const song3 = () => {
    setChangeableText(v3)
  }
  const song4 = () => {
    setChangeableText(v4)
  }
  const song5 = () => {
    setChangeableText(v5)
  }
  console.log(changeableText)

  return (
    <Container>
      <SmallContainer>
        {/* {changeableText === "" && <ChooseVideo>Choose The Video</ChooseVideo>} */}
        {/* {changeableText !== "" && ( */}

        <>
          {changeableText === vc ? (
            <Screen>
              <video
                src={changeableText}
                width="100%"
                height="250"
                controls
                autoPlay
                muted
                loop
              />
            </Screen>
          ) : (
            <Screen>
              <video
                src={changeableText}
                width="100%"
                height="250"
                controls
                autoPlay
              />
            </Screen>
          )}
        </>

        <Title onClick={() => song()}>🎈</Title>
        <Title onClick={() => song2()}>🎁</Title>
        <Title onClick={() => song3()}>♥</Title>
        <Title onClick={() => song4()}>✨</Title>
        <Title onClick={() => song5()}>🎨</Title>
      </SmallContainer>
    </Container>
  )
}
export default Youtube
