import styled from 'styled-components'

export const ArticleItemStyle = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  border-radius: var(--borderRadius);
  background-color: #fff;

  .ant-space-item {
    margin-right: 0 !important;
  }

  .articleItem-title {
    cursor: pointer;
    font-size: 25px;
    color: var(--hover-color);
  }

  .meta {
    width: 100%;

    .articleItem_tags {
      .icon {
        margin: 0 10px 0 5px;
      }
    }
  }

  .cover {
    cursor: pointer;
    width: 100%;
    height: 180px;
    overflow: hidden;
    line-height: 180px;

    img {
      width: 100%;
      height: 100%;
      margin: 10px 0;
      border-radius: 6px;
      object-fit: cover;
    }

    .not-cover {
      text-align: center;
      font-size: 23px;
    }

    img,
    .not-cover {
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .description {
    font-size: 15px;
  }
`
