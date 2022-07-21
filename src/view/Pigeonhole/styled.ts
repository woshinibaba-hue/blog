import styled from 'styled-components'

export const PigeonholeStyled = styled.div`
  &.pigeonhole {
    background-color: #fff;
    border-radius: var(--borderRadius);
    padding: var(--contentPadding);

    .ant-timeline-item-last > .ant-timeline-item-content {
      min-height: unset;
    }
  }
`
