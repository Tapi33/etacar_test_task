import styled from "styled-components";

export const CurrencyPage = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  background-color: rgba(67, 66, 68, 0.98);
`

export const CurrencyWrapper = styled.div`
  max-width: 900px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`

export const CurrencyContent = styled.div`
  width: 100%;
  min-height: 50%;
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const CurrencyContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 32px;
  &.currency-price{
    font-size: 38px;
    font-family: monospace;
  }
`

export const CurrencyContendInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const CurrencyContentBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: initial;
  border: 1px solid black;
  border-radius: 7px;
  transition: 0.2s;
  &:hover{
    background-color: rgba(206,204,208,0.98);
  }
`

export const StyledCurrencyItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
`

export const CurrencyItemInfo = styled.div`
  width: 200px;
`