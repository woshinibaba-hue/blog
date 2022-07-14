import styled from 'styled-components'

import { StyleProps } from './type'

export const ArticleItemStyle = styled.div<StyleProps>`
  cursor: pointer;

  display: flex;
  ${({ flexDirCol }) => (flexDirCol ? 'flex-direction: column;' : '')}
  width: 100%;
  height: 100%;
  overflow: hidden;

  .cover,
  .notImg {
    width: ${({ coverStyle }) => coverStyle.width};
    height: ${({ coverStyle }) => coverStyle.height};

    /* flex-shrink: 0; 解决，flex 布局中 ，如果另外的盒子超过父盒子的宽度，如果不设置该属性，会自动压缩该元素宽度 */
    flex-shrink: 0;
    border-radius: 6px;
    overflow: hidden;
  }

  .notImg {
    display: flex;
    align-items: center;
    justify-content: center;

    height: ${({ notImg }) => notImg.height};

    font-size: 26px;
    font-weight: 700;
  }

  .cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .notImg,
  .cover img {
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
      transform-origin: center;
    }
  }

  .article-info {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .title {
      font-size: 16px;
      font-weight: 700;
    }

    .info {
      display: flex;
      justify-content: space-between;
      color: #4e5969;
      font-size: 12px;

      .user {
        display: flex;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          object-fit: cover;
          border: 1px solid #eee;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
      }
    }
  }
`
