import styled from 'styled-components'

export const MainStyle = styled.div`
  display: flex;
  width: 70%;
  min-height: calc(100vh - 65px - 75px - 40px);
  margin: 15px auto;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  .content,
  .nav {
    transition: all 0.3s;
  }

  .content {
    width: calc(100% - 260px - 25px);
    margin-right: 25px;
  }
`
