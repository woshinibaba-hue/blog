import styled from 'styled-components'

export const AboutContainer = styled.div`
  background-color: #fff;
  border-radius: var(--borderRadius);
  overflow: hidden;

  .bg {
    width: 100%;
    height: 350px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .container {
    padding: 0 var(--contentPadding) var(--contentPadding);

    header {
      display: flex;

      .left {
        position: relative;
        top: -30px;
        margin-right: 15px;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
      }

      .right {
        font-family: 宋体;

        .name {
          margin: 10px 0;
          color: var(--main-color);
        }

        .info {
          font-size: 16px;
        }
      }
    }

    main {
      .date {
        text-align: center;
        margin: 50px 0;

        span {
          font-size: 17px;
        }
      }

      .ant-divider {
        color: var(--main-color);
        font-size: 20px;
      }

      p,
      li {
        text-indent: 2em;
        font-size: 16px;
        color: var(--blockquote-color);
        line-height: 2;
        margin-bottom: 10px;
      }

      ul {
        margin-left: 80px;

        li {
          text-indent: 0;
          color: #333;
          list-style: unset;
        }
      }
    }
  }
`
