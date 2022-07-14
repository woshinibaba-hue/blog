import styled from 'styled-components'

export const PigeonholeStyled = styled.div`
  &.pigeonhole {
    background-color: #fff;
    border-radius: 6px;
    padding: 40px;

    .ant-timeline-item-last > .ant-timeline-item-content {
      min-height: unset;
    }
  }
`
