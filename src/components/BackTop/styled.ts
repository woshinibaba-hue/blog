import styled from 'styled-components'

export const BackTopStyle = styled.div<{ show: boolean }>`
  cursor: url(https://yimiciji.top/linkSelect.cur), pointer;

  .bg,
  .icon-icon-test {
    position: fixed;
    right: 0;
    z-index: 99;
  }

  .bg {
    top: ${({ show }) => (show ? '0' : '-100%')};

    width: 100px;
    height: 75vh;

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
  }

  .icon-icon-test {
    display: none;
    opacity: ${({ show }) => (show ? '1' : '0')};
    right: ${({ show }) => (show ? '30px' : '-40px')};
    bottom: 120px;
    transition: all 0.3s;

    width: 40px;
    height: 40px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.05);

    text-align: center;
    font-size: 25px;
    color: red;

    border-radius: 50%;
    background-color: #fff;
  }
`
