import styled from 'styled-components'

export const MarkdownNavbarStyle = styled.div<{ isAffix: boolean }>`
  position: sticky;
  top: ${({ isAffix }) => (isAffix ? '70px' : '10px')};
  background-color: #fff;
  border-radius: var(--borderRadius);
  padding: 20px 0;

  transition: all 0.3s;

  .title {
    padding: 0 20px;
    font-size: 16px;
    color: #1d2129;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e4e6eb;
  }

  .markdown-navigation {
    width: 100%;
    /* height: 300px;
    overflow-y: auto; */

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
`
