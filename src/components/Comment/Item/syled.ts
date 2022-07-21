import styled from 'styled-components'

type Props = {
  mainMarginBottom?: boolean
}

export const CommentItemStyle = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ mainMarginBottom }) => (mainMarginBottom ? 50 : 20)}px;

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
    }

    .comment {
      margin-bottom: 10px;
    }

    .handler {
      .ant-space-item {
        cursor: pointer;
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
      cursor: pointer;
      color: #f53f3f;
    }
  }
`
