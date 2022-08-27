import styled from 'styled-components'

export const BaseNavStyle = styled.div`
  .blog_Info {
    text-align: center;
    cursor: url(https://yimiciji.top/linkSelect.cur), pointer;
    padding: 10px;
    border-radius: var(--borderRadius);
    margin-bottom: 10px;
    background-color: var(--main-bg);

    .info {
      margin-top: 10px;

      .name {
        font-size: 16px;
        font-weight: 700;
        color: #1890ff;
      }

      .typed-cursor,
      .introduce {
        font-size: 13px;
        color: #1890ff;
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

    .icon-dingxiang {
      font-size: 12px;
    }

    .relation {
      display: flex;
      justify-content: space-evenly;

      i {
        font-size: 25px;
      }

      & a:first-child i {
        font-size: 23px;
      }
    }
  }
`
