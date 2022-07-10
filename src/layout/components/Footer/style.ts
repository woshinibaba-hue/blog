import styled from 'styled-components'

export const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  box-sizing: border-box;
  height: var(--footer-height);
  font-size: 14px;
  background-color: var(--header-footer);

  .copyright {
    .like {
      color: #f00;
      padding: 0 8px;
      animation: like 0.6s infinite;
    }

    @keyframes like {
      0% {
        transform: scale(0.8, 0.8);
        opacity: 1;
      }

      50% {
        transform: scale(1.2, 1.2);
        opacity: 0.8;
      }

      100% {
        transform: scale(0.8, 0.8);
        opacity: 1;
      }
    }
  }
`