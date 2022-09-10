import styled from 'styled-components'

export const ItemStyle = styled.div<{ bg: string }>`
  cursor: pointer;
  position: relative;
  width: 49%;
  height: 250px;
  border-radius: 10px;
  z-index: 1;
  color: #fff;
  padding: 0 10px;
  background: url(${({ bg }) => bg}) no-repeat center center;
  background-size: cover;
  border: 1px solid #eee;

  transition: all 0.2s ease-in;
  overflow: hidden;
  margin-bottom: 2%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    content: '';

    transition: all 0.2s;
  }

  &:hover {
    transform: scale(0.97);
    &::before {
      margin: 0;
      padding: 0;
      background-color: rgba(0, 0, 0, 0.17);
      backdrop-filter: blur(7px);
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;

    .title {
      font-size: 26px;
      font-weight: 700;
      transform: translateY(100%);
      margin-bottom: 10px;
      opacity: 0;
      transition: all 0.3s;
    }

    .description {
      position: relative;
      font-size: 16px;
      transition: all 0.3s;

      bottom: -50%;
      opacity: 0;
    }

    &:hover {
      .description,
      .title {
        opacity: 1;
      }

      .description {
        bottom: 0;
      }

      .title {
        transform: translateY(0);
      }
    }
  }
`
