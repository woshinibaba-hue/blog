import styled from 'styled-components'

export const MainStyle = styled.div`
  display: flex;
  width: var(--container);
  min-height: calc(100vh - 65px - 75px - 40px);
  margin: 15px auto;
  box-sizing: border-box;

  .content {
    width: calc(100% - 260px);
    margin-right: 25px;
  }
`
