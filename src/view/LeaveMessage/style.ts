import styled from 'styled-components'

import msgBg from '@/assets/img/msgBg.jpg'

export const LeaveMessageStyle = styled.div`
  overflow-x: hidden;
  padding: 40px;
  background-color: #fff;

  .synopsis {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    height: 320px;
    color: #fff;
    border-radius: 6px;
    overflow: hidden;
    background: url(${msgBg}) no-repeat center bottom;
    background-size: cover;

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';

      width: 100%;
      height: 100%;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.25);
      backdrop-filter: saturate(130%) contrast(80%) blur(10px);
    }

    p {
      text-align: center;
      margin-bottom: 18px;

      &:last-child {
        font-size: 18px;
      }

      &:first-child {
        font-size: 24px;
        font-family: 华文彩云;
      }
    }
  }

  .message-box {
    margin-top: 30px;

    .describe {
      padding: 30px 0;
      border-top: 2px dashed #f2f2f2;
    }
  }
`
