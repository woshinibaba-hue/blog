import styled from 'styled-components'

export const MainStyle = styled.div<{ isShow: boolean }>`
  display: flex;
  width: var(--container);
  min-height: calc(100vh - 65px - 75px - 40px);
  margin: 15px auto;
  box-sizing: border-box;
  /* overflow: hidden; */

  .content,
  .nav {
    transition: all 0.3s;
  }

  .content {
    width: calc(100% - 260px);
    margin-right: 25px;

    transform: translateX(${({ isShow }) => (isShow ? '0%' : '-100%')});
  }
`
