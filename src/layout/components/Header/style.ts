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
      margin: 0 40px;

      a {
        padding: 0 15px;
        height: 40px;
        line-height: 40px;
        color: var(--nav-color);
        transition: all 0.4s;

        &:hover {
          color: var(--hover-color);
        }
      }

      .active {
        color: var(--hover-color);
      }
    }
  }
`
