import styled from 'styled-components'

export const LinkStyled = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 40px;

  .title {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
  }

  .friend-box {
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 10px 10px;
    justify-content: center;
    max-height: 300px;
    overflow-y: auto;

    .item {
      cursor: pointer;

      display: flex;
      height: 80px;
      border-radius: 6px;
      padding: 10px;
      border: 1px solid #f2f2f2;
      transition: all 0.3s;

      &:hover {
        background-color: #f8f8f8;
      }

      .cover {
        width: 100px;
        flex-shrink: 0;

        img {
          width: 100%;
        }
      }

      .info {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        width: calc(100% - 100px - 10px);
        font-size: 12px;

        .name {
          font-size: 14px;

          padding-bottom: 5px;

          border-bottom: 2px dashed #f2f2f2;
        }
      }
    }
  }

  .applyLike {
    margin-bottom: 15px;
    border-bottom: 2px dashed #f2f2f2;

    .title {
      text-align: center;
      margin-top: 0;
    }

    .sub {
      text-align: center;
      font-size: 16px;
      color: #888;
      margin: 10px 0;
    }

    .format {
      text-align: center;
      p {
        color: #888;
        margin-bottom: 10px;

        &:first-child {
          color: #333;
          font-size: 20px;
        }
      }
    }

    .fillLike {
      width: 450px;
      margin: 0 auto;
    }
  }
`
