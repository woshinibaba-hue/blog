import styled from 'styled-components'

export const NavStyle = styled.div`
  width: 260px;
  height: 100%;
  overflow: auto;
  background-color: var(--main-bg);

  header {
    cursor: pointer;
    text-align: center;
    padding: 15px;

    .avatar {
      transition: all 0.5s;
      &:hover {
        transform: rotate(360deg);
      }
    }

    .info {
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom: 2px solid #fff;

      .name {
        font-size: 16px;
        font-weight: 700;
        color: #4c9b7d;
      }

      .typed-cursor,
      .introduce {
        font-size: 13px;
        color: #4c9b7d;
      }
    }

    p {
      margin: 6px 0;
      font-size: 13px;
      color: #837d7d;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;

    .title,
    a {
      padding: 0 15px;
      height: 40px;
      line-height: 40px;
    }

    .title {
      font-size: 12px;
      color: var(--nav-color);
    }

    a {
      color: var(--nav-color);
      transition: all 0.4s;

      .anticon {
        margin-right: 15px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }

    .active {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
`
