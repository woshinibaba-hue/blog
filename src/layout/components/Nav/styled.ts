import styled from 'styled-components'

export const NavStyle = styled.div`
  width: 260px;

  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }

  .social {
    cursor: url(https://yimiciji.top/linkSelect.cur), pointer;
    padding: 10px;
    border-radius: var(--borderRadius);
    margin-bottom: 10px;
    background-color: var(--main-bg);
  }

  .ant-collapse > .ant-collapse-item,
  .ant-collapse {
    border: 0;
  }

  .item {
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
    }
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 10px;
  }

  p {
    margin-bottom: 5px;
  }

  .ant-tag {
    margin-bottom: 5px;
  }
`
