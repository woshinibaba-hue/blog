import styled from 'styled-components'

export const NavStyle = styled.div`
  width: 260px;
  height: 100%;

  .social,
  .blog_Info {
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 10px;
    background-color: var(--main-bg);
  }

  .blog_Info {
    text-align: center;

    .avatar {
      transition: all 0.5s;
      &:hover {
        transform: rotate(360deg);
      }
    }

    .info {
      margin-top: 10px;

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

    .social {
      .ant-divider {
        margin: 0;
      }
    }
  }

  .ant-collapse > .ant-collapse-item,
  .ant-collapse {
    border: 0;
  }

  .item {
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
    }
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  .ant-tag {
    margin-bottom: 5px;
  }
`
