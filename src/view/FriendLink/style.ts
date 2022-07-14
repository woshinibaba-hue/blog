import styled from 'styled-components'

export const LinkStyled = styled.div`
  background-color: #fff;
  border-radius: 6px;
  padding: 40px;

  .title {
    text-align: center;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 40px;
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
    .title {
      margin-top: 40px;
    }

    .format {
      text-align: center;
      p {
        color: #888;
        margin-bottom: 10px;

        &:first-child {
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
