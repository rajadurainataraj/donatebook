import styled from "styled-components"
import { FaSearch, FaShoppingCart } from "react-icons/fa"
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  height: 15vh;
  font-size: 22px;
  justify-content: space-evenly;
  :nth-child(1) div {
    background-color: green;
  }
`
const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  font-size: 20px;
  &:focus,
  &:hover {
    outline: none;
    border-bottom: 3px solid purple;
  }
`
const Header = () => {
  return (
    <>
      <Container>
        <div>Purple Book House</div>
        <div>
          <FaSearch />
          <Input placeholder=" search ..." />
        </div>
        <div>whatsapp</div>
        <div>
          Login
          <FaShoppingCart />
        </div>
      </Container>
    </>
  )
}
export default Header
