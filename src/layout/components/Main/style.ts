import styled from 'styled-components'

export const MainStyle = styled.div`
  display: flex;
  width: var(--container);
  min-height: calc(100vh - 65px);
  margin: 65px auto 0;
  box-sizing: border-box;
  overflow: auto;

  nav {
    position: fixed;
    top: 65px;
    bottom: 0;
  }

  main {
    position: relative;
    flex: 1;
    background-color: #f1f3f4;
    margin-left: 260px;
  }
`
