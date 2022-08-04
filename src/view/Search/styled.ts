import styled from 'styled-components'

export const SearchStyle = styled.div`
  background-color: #fff;
  border-radius: var(--borderRadius);
  padding: var(--contentPadding);

  color: #666;

  .search-header {
    display: flex;
    align-items: center;

    .search-input {
      width: 100%;
      height: 50px;
      padding-left: 30px;
      border-radius: 20px;
      background-color: var(--border-color);
      font-size: 16px;

      border: 0;
      outline: none;
    }

    .btn {
      cursor: pointer;
      font-size: 28px;
      padding: 0 16px;
      border-radius: 20px;
      margin-left: 30px;
      background-color: var(--border-color);
    }
  }

  .list {
    display: flex;
    margin: 25px 0;

    .search-res {
      margin-right: 20px;
    }

    .lately,
    .search-res {
      flex: 1;
    }
  }
`
