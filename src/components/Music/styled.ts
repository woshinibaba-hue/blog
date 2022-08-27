import styled from 'styled-components'

export const MusicWrap = styled.div<{ isShowMusic: boolean }>`
  cursor: url(https://yimiciji.top/linkSelect.cur), pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  padding: 0 8px;

  position: fixed;
  right: ${({ isShowMusic }) => (isShowMusic ? '10px' : '-100%')};
  bottom: 200px;

  transition: all 0.3s;

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
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    line-height: 100px;

    text-align: center;

    .iconfont {
      font-size: 40px;
    }

    .icon-zanting1 {
      font-size: 33px;
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

  .lyric {
    text-align: center;
    width: 100%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: var(--lyric);
  }
`
