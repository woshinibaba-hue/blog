import styled from 'styled-components'

export const HeaderWrap = styled.div<{ isAffix: boolean }>`
  position: sticky;
  top: ${({ isAffix }) => (isAffix ? 0 : '-60px')};
  z-index: 99;
  background-color: var(--header-footer);
  box-sizing: border-box;
  height: var(--header-height);
  border-bottom: 1px solid #eee;
  transition: all 0.3s;

  .container {
    display: flex;
    align-items: center;
    width: var(--container);
    background-color: #fff;
    height: 100%;
    margin: 0 auto;
    transition: all 0.3s;

    .sidebar {
      display: none;

      i {
        font-size: 20px;
      }
    }

    .lable-right {
      display: flex;
      align-items: center;
    }

    @media screen and (max-width: 1140px) {
      .lable-search {
        margin-right: 15px;
      }
    }

    .lable-search {
      cursor: pointer;
      font-size: 20px;
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;

      /* width: 150px; */
      height: 100%;
      text-align: center;

      .title {
        position: relative;
        font-size: 20px;
        margin-left: 10px;

        &::after {
          position: absolute;
          right: -35px;
          content: 'BLOG';
          font-size: 12px;
        }
      }

      .img {
        img {
          width: 60px;
        }
      }
    }

    .lable-nav {
      flex: 1;
      margin: 0 50px;

      a {
        position: relative;

        font-size: 16px;
        width: 100px;
        height: 40px;
        line-height: 40px;
        padding: 0 4px 5px;
        margin: 0 20px;
        color: var(--nav-color);
        transition: all 0.3s;

        &:hover:not(.active) {
          color: var(--hover-color);
        }

        &::after {
          content: '';

          position: absolute;
          bottom: -5px;
          left: 0;

          width: 100%;
          height: 2px;

          transform: scaleX(0);
          transform-origin: center;
          transition: all 0.2s;
          background-color: var(--main-color);
        }
      }

      .active {
        color: var(--main-color);

        &::after {
          transform: scaleX(1);
        }
      }
    }

    .lable-dro-nav {
      display: none;
    }

    .login {
      cursor: pointer;
      margin-left: 20px;

      &:hover {
        color: var(--hover-color);
      }
    }
  }
`
