import styled from 'styled-components'

export const FooterWrap = styled.div<{ isBottom: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;

  box-sizing: border-box;
  width: 100%;
  height: var(--footer-height);
  font-size: 14px;
  background-color: var(--header-footer);

  img {
    width: 50px;
    margin: 0 5px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${({ isBottom }) => (isBottom ? '70px' : '0px')};
  }
`
