import styled from 'styled-components'

export const MusicWrap = styled.div`
  position: relative;
  cursor: pointer;

  position: absolute;
  bottom: 100px;
  left: 20px;

  .audio {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid #999;
    margin-bottom: 10px;

    &:hover .mask {
      display: block;
    }
  }

  img,
  .mask {
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 50%;
    animation: spin 6s linear infinite;
  }

  .mask {
    display: none;
    position: absolute;
    top: 10px;
    left: 0;
    line-height: 100px;

    text-align: center;

    .anticon {
      font-size: 40px;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
