import styled from 'styled-components'

export const ArticleStyle = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  padding: 40px;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .header {
    margin-bottom: 40px;

    .title {
      margin-bottom: 20px;
      font-weight: 700;
      padding-bottom: 20px;

      border-bottom: 1px solid #eee;
    }

    .info {
      display: flex;
      margin-bottom: 15px;
      .left {
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          margin-right: 15px;
        }
      }

      .right {
        color: #8a919f;
        font-size: 14px;
        .name {
          color: #515767;
          font-size: 16px;
        }
      }
    }
  }

  .options {
    position: fixed;
    top: 260px;
    left: 80px;

    .ant-badge {
      cursor: pointer;
      display: block;
      text-align: center;
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      background-color: #fff;
      border-radius: 50%;
      margin-bottom: 20px;
      color: #8a919f;

      &.active {
        color: var(--hover-color);
      }
    }
  }

  .tags {
    margin-top: 30px;
    font-size: 15px;
    color: #515767;
  }
`
