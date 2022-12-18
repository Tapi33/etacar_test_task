import styled from "styled-components";

export const CurrencyModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 30px;
`

export const CurrencyModalContent = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content: space-around;
  background: white;
  border-radius: 5px;
  min-height:200px;
  padding: 40px;
`

export const CurrencyModalItem = styled.div`
  width: 100%;
  min-height: 20px;
`

export const CurrencyModalInput = styled.input`
  width: 50%;
  height: 40px;
  font-size: 32px;
  font-family: monospace;
`

export const CurrencyMoadlBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: initial;
  border: 1px solid black;
  transition: 0.2s;
  &:hover{
    background-color: rgba(206,204,208,0.98);
  }
`