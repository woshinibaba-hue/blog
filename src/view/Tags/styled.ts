import styled from 'styled-components'

export const TagStyled = styled.div`
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .tags {
    display: grid;

    grid-template-columns: repeat(auto-fill, 80px);
    grid-template-rows: repeat(auto-fill, 80px);
    grid-gap: 15px 15px;
    justify-content: center;

    height: 300px;
    overflow-y: auto;

    .item {
      box-sizing: content-box;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        margin: 5px 0;
      }

      &.active {
        color: #666;
        background-color: #f8f8f8;
      }
    }
  }

  .articles {
    margin-top: 20px;

    .item {
      width: 100%;
      padding: 20px;
      border-radius: 6px;
      margin-bottom: 15px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);

      .articleItem {
        .title {
          font-size: 25px;
          margin: 30px 0;
        }

        .article-tags {
          margin: 15px 0;
        }

        .cover,
        .notImg {
          margin-right: 15px;
        }

        .article-info {
          width: calc(100% - 300px - 20px - 15px);
        }

        .options {
          justify-content: space-around;
        }
      }
    }
  }
`
