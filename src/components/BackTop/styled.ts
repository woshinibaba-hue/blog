import styled from 'styled-components'

export const BackTopStyle = styled.div<{ show: boolean }>`
  position: fixed;
  top: ${({ show }) => (show ? '0' : '-100%')};
  right: 0;
  z-index: 99999;
  width: 100px;
  height: 65vh;
  cursor: pointer;

  background: url(http://rfz86pha6.hn-bkt.clouddn.com/back_top.e9ad881.webp)
    no-repeat center bottom;

  transition: all 1s;

  animation: slowAction 1s linear infinite alternate;

  @keyframes slowAction {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-6px);
    }

    50% {
      transform: translateY(-10px);
    }

    75% {
      transform: translateY(-14px);
    }

    100% {
      transform: translateY(-18px);
    }
  }
`
