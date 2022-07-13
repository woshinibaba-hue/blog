import styled from 'styled-components'

export const HeaderWrap = styled.div`
  background-color: var(--header-footer);
  box-sizing: border-box;
  height: var(--header-height);
  border-bottom: 1px solid #eee;

  .container {
    display: flex;
    align-items: center;
    width: var(--container);
    height: 100%;
    margin: 0 auto;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 150px;
      height: 100%;
      text-align: center;

      .title {
        font-size: 20px;
        margin-left: 10px;
      }

      .img {
        img {
          width: 60px;
        }
      }
    }

    .nav {
      flex: 1;
      margin: 0 80px;

      a {
        position: relative;

        font-size: 16px;
        height: 40px;
        line-height: 40px;
        padding: 0 3px 5px;
        margin: 0 20px;
        color: var(--nav-color);
        transition: all 0.3s;

        &:hover {
          color: var(--hover-color);
        }

        &::after {
          content: '';

          position: absolute;
          bottom: -5px;
          left: 0;

          width: 38px;
          height: 2px;

          transform: scaleX(0);
          transform-origin: center;
          transition: all 0.2s;
          background-color: var(--hover-color);
        }
      }

      .active {
        color: var(--hover-color);
        &::after {
          transform: scaleX(1);
        }
      }
    }

    .login {
      cursor: pointer;
      margin-left: 40px;

      &:hover {
        color: var(--hover-color);
      }
    }
  }
`
