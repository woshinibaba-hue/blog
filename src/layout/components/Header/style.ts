import styled from 'styled-components'

export const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: var(--header-footer);
  box-sizing: border-box;
  height: var(--header-height);
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.15);

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
  }

  .nav {
    margin: 0 40px;
    flex: 1;

    a {
      text-decoration: none;
      color: var(--font-color);
      margin-right: 20px;
    }
  }
`
