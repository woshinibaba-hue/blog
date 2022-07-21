import styled from 'styled-components'

export const ArticleItemStyle = styled.div`
  cursor: pointer;

  display: flex;

  height: 200px;
  margin-bottom: 15px;
  border-radius: var(--borderRadius);
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s;

  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: scale(1.02);
  }

  .cover {
    width: 30%;
    /* flex-shrink: 0; 解决，flex 布局中 ，如果另外的盒子超过父盒子的宽度，如果不设置该属性，会自动压缩该元素宽度 */
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  & .cover + .article-info {
    width: 70% !important;
  }

  .article-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 20px;
    width: 100%;
    font-size: 13px;

    .title {
      text-align: center;
      font-size: 25px;
      font-weight: 700;
    }

    .info {
      display: flex;
      justify-content: center;
      color: #86909c;

      .user,
      .options {
        display: flex;
        align-items: center;
      }

      .user {
        margin-right: 10px;

        img {
          width: 30px;
          height: 30px;
          object-fit: cover;
          margin-right: 5px;
        }
      }

      .options {
      }
    }
  }
`
