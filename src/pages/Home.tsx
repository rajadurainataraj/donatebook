import styled from "styled-components"
// import Header from "../Layout/Header"
// import Youtube from "./YouTube"
import Youtube from "./YouTube"

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: space-between;
`
const Home = () => {
  return (
    <Container>
      {/* <Header />
      <div>Body</div>
      <div>Footer</div> */}
      <Youtube />
    </Container>
  )
}
export default Home
