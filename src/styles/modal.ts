import styled from "styled-components";

export const CurrencyModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0 30px;
`

export const CurrencyModalContent = styled.div`
  min-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 5px;
  min-height: 400px;
`