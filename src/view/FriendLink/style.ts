import styled from 'styled-components'

export const LinkStyled = styled.div`
  background-color: #fff;
  border-radius: var(--borderRadius);
  padding: var(--contentPadding);

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
    margin-top: 15px;

    .item {
      display: flex;
      align-items: center;
      height: 80px;
      border-radius: var(--borderRadius);
      padding: 10px;
      border: 1px solid #f2f2f2;
      transition: all 0.3s;

      &:hover {
        background-color: #f8f8f8;
      }

      .cover {
        width: 40%;
        height: 85%;
        flex-shrink: 0;
        margin-right: 8px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .info {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        width: 60%;
        font-size: 12px;

        .name {
          font-size: 14px;
          padding-bottom: 5px;
          border-bottom: 2px dashed #f2f2f2;
        }

        .synopsis {
          padding-top: 5px;
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
      width: 90%;
      margin: 0 auto;
    }
  }
`
