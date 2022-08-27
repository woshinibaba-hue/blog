import styled from 'styled-components'

type Props = {
  mainMarginBottom?: boolean
}

export const CommentItemStyle = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ mainMarginBottom }) => (mainMarginBottom ? 50 : 30)}px;

  .avatar {
    width: 48px;
    height: 48px;
    margin-right: 15px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .content {
    flex: 1;

    &-header {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 15px;
      color: #252933;
      margin-bottom: 10px;

      .time {
        color: #8a919f;
      }

      .name {
        font-weight: 600;
        font-size: 15px;
        color: #252933;

        .reply {
          font-size: 16px;

          span {
            &:first-child {
              font-weight: 400;
              font-size: 13px;
              margin: 0 8px;
              color: #8a919f;
            }
          }
        }
      }
    }

    .reply-content {
      font-size: 13px;
      color: #8a919f;
      border-radius: 6px;
      padding: 8px;
      background-color: #f2f3f5;
      border: 1px solid #e4e6eb;
      margin-bottom: 6px;
    }

    .comment {
      margin-bottom: 10px;
    }

    .handler {
      .ant-space-item {
        cursor: url(https://yimiciji.top/linkSelect.cur), pointer;
        color: #8a919f;
      }
    }

    .active {
      .ant-space-item {
        color: var(--color-text);
      }
    }

    .reply-message {
      background-color: rgba(247, 248, 250, 0.7);
      border-radius: 6px;
      padding: 15px;
      margin-top: 15px;

      & > div:last-child {
        margin-bottom: 0;
      }
    }

    @media screen and (max-width: 768px) {
      .reply-message {
        padding: 8px;
      }
    }

    .del {
      cursor: url(https://yimiciji.top/linkSelect.cur), pointer;
      color: #f53f3f;
    }
  }
`
