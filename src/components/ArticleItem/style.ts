import styled from 'styled-components'

export const ArticleItemStyle = styled.div`
  cursor: pointer;
  height: 150px;
  margin-bottom: 15px;
  border-radius: var(--borderRadius);
  overflow: hidden;
  background-color: #fff;

  display: flex;

  font-weight: 400;

  .cover,
  .not-cover {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;

    width: 300px;
    height: 100%;
    flex-shrink: 0;

    margin-right: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .article-content {
    display: flex;
    flex-direction: column;
    padding: 10px;

    .title {
      font-size: 18px;

      .isTop {
        margin-right: 10px;
      }
    }

    .description {
      color: var(--minor);
    }

    .info {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      margin-top: auto;
      color: var(--minor);

      .left {
        display: flex;

        li {
          display: flex;
          align-items: center;

          &::after {
            font-size: 12px;
            margin: 0 6px;
            content: '/';
            color: #c0c4cc;
          }

          &:last-child {
            &::after {
              content: '';
            }
          }
        }
      }

      .iconfont {
        font-size: 12px;
        margin-right: 5px;
      }

      .right {
        width: 50%;
        text-align: right;

        .tag {
          margin-right: 6px;
        }
      }
    }
  }
`
