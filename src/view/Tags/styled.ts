import styled from 'styled-components'

export const TagStyled = styled.div`
  padding: var(--contentPadding);
  border-radius: var(--borderRadius);
  background-color: #fff;

  .title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .tags {
    max-height: 300px;
    overflow-y: auto;

    .item {
      display: inline-block;
      padding: 3px 10px;
      cursor: pointer;
      border-radius: 5px;

      &.active {
        color: #666;
        background-color: #f8f8f8;
      }
    }
  }

  .articles {
    .articles-title {
      text-align: center;
      font-size: 18px;
      border: 2px dashed #f8f8f8;
      border-radius: 6px;
      border-left: 0;
      border-right: 0;
      padding: 10px 0;
      margin: 15px 0;

      .sub-title {
        font-size: 14px;
      }
    }
  }
`
