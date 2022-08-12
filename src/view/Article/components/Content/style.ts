import styled from 'styled-components'

export const ContentStyle = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: var(--borderRadius);
  padding: var(--contentPadding);

  img {
    width: 100%;
    object-fit: cover;
    border-radius: var(--borderRadius);
  }

  .divider {
    margin: 25px 0;
    color: var(--hover-color);
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

    .cover {
      margin: 10px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .options,
  .fiex-bottom-options {
    .ant-badge {
      cursor: pointer;
      display: block;
      text-align: center;
      width: 50px;
      height: 50px;
      line-height: 50px;
      background-color: #fff;
      border-radius: 50%;
      margin-bottom: 20px;
      color: #8a919f;

      i {
        font-size: 20px;
      }

      &.active {
        color: var(--hover-color);
      }
    }
  }

  .options {
    position: fixed;
    top: 260px;
    left: 80px;

    transition: all 0.3s;
  }

  @media screen and (max-width: 1100px) {
    .options {
      left: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .options {
      display: none;
    }

    .fiex-bottom-options {
      display: flex !important;
    }
  }

  .fiex-bottom-options {
    display: none;
    position: fixed;
    z-index: 9999;
    bottom: 0;
    right: 0;
    left: 0;

    align-items: center;
    justify-content: space-around;

    height: 60px;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.2);
    background-color: #fff;

    font-size: 18px;
    color: #8a919f;

    .ant-badge {
      margin-bottom: 0;
    }
  }

  .tags {
    margin-top: 30px;
    font-size: 15px;
    color: #515767;
  }

  .copyright {
    font-size: 15px;
    margin-top: 20px;
    border-radius: 6px;
    padding-left: 10px;
    overflow: hidden;

    background: #f5f5f5
      url(http://rfz86pha6.hn-bkt.clouddn.com/Fi9bwm8_Rr-Bt4-EEfy2V-kDHuz-)
      no-repeat right center;
    background-size: 150px;

    transition: all 0.3s;

    p {
      margin: 8px 0;
    }

    /* &:hover {
      transform: translateY(-3px);
    } */
  }
`
