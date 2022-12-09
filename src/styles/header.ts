import styled from "styled-components";


export const StyledHeader = styled.header`
  max-width: 100%;
  height: 120px;
  border-bottom: 1px solid rgba(166,164,168,0.98);
`
export const Wrapper = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
`

export const HeaderNavigation = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderNavigationItem = styled.ul<{ widthItem: string }>`
  width: ${({widthItem}) => widthItem};
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-family: monospace;
  font-size: 23px;
`