import styled from 'styled-components'

export const PigeonholeStyled = styled.div`
  &.pigeonhole {
    background-color: #fff;
    border-radius: var(--borderRadius);
    padding: var(--contentPadding);
  }

  .ant-timeline-item {
    padding-bottom: 40px;
    font-size: 18px;

    .ant-timeline-item-content {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &:first-child {
      .ant-timeline-item-content {
        font-size: 20px;
        top: -14px;
      }
    }
  }
`
