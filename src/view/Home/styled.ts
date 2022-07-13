import styled from 'styled-components'

export const HomeStyled = styled.div`
  .waterFall-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .notImg,
    img {
      width: 100%;
      height: 55%;
      overflow: hidden;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.08);
        transform-origin: center;
      }
    }

    img {
      object-fit: cover;
    }

    .notImg {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 26px;
    }

    .title,
    .synopsis,
    .tags,
    .info {
      padding: 0 10px;
      margin-bottom: 5px;
    }

    .title {
      margin-top: 8px;
      font-size: 18px;
      font-weight: 700;
    }

    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: #4e5969;

      .user,
      .options {
        flex: 1;
        display: flex;
      }

      .user {
        align-items: center;

        img {
          width: 35px;
          height: 35px;
          margin-right: 10px;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid #eee;
        }
      }

      .options {
        justify-content: space-around;
      }
    }
  }
`
