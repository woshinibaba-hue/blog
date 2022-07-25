import styled from 'styled-components'

export const MarkdownNavbarStyle = styled.div<{ isAffix: boolean }>`
  position: sticky;
  top: ${({ isAffix }) => (isAffix ? '70px' : '10px')};
  background-color: #fff;
  border-radius: var(--borderRadius);
  padding: 10px 0 20px 0;

  transition: all 0.3s;

  .title {
    font-size: 18px;
    color: var(--hover-color);
  }

  .markdown-navigation {
    width: 100%;

    .title-anchor {
      padding: 10px 20px;
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &.active {
        position: relative;
        color: var(--hover-color);

        &::before {
          content: '';
          position: absolute;
          top: 13px;
          left: 0;
          width: 4px;
          height: 16px;
          background: #1e80ff;
          border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
        }
      }

      &:last-child {
        padding-bottom: 0;
      }
    }
  }

  .not-nav {
    display: none;
    text-align: center;
    font-size: 16px;
    color: var(--hover-color);
  }

  /* css 小技巧 巧妙的运用 :empty 伪元素来实现 当.markdown-navigation元素内没有子元素的时候，让 .not-nav 展示出来  */
  .markdown-navigation:empty + .not-nav {
    display: block;
  }
`
