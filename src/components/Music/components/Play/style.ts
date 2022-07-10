import styled from 'styled-components'

import cover from '@/assets/img/list_pan.e0442c05.png'

type Props = {
  isOpen: boolean
  bg?: string
}

export const PlayStyle = styled.div<Props>`
  user-select: none;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: url(${({ bg }) => bg}) center;
  background-size: cover;
  transition: all 0.5s;
  overflow: hidden;
  transform: translateX(${({ isOpen }) => (isOpen ? '0%' : '-100%')});

  /* 背景图片模糊 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.6);
    backdrop-filter: saturate(180%) contrast(80%) blur(50px);
  }

  main {
    width: var(--container);
    margin: 0 auto;
    color: #fff;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      border-bottom: 1px solid #fff;

      .left {
        display: flex;

        .pattern {
          margin: 0 50px;
        }
      }

      .close {
        font-size: 50px;
        cursor: pointer;
      }
    }

    .main {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      .nav {
        ul {
          li {
            cursor: pointer;
            width: 100px;
            height: 40px;
            line-height: 38px;
            text-align: center;
            border: 1px solid #fff;
            border-radius: 4px;
            margin: 15px 0;
            font-size: 12px;

            transition: all 0.2s;

            opacity: 0.6;

            &:first-child {
              margin-top: 0;
            }

            &.active {
              opacity: 1;
            }
          }
        }
      }

      .song {
        flex: 1;
        margin: 0 80px;

        th {
          background: unset;
        }

        .ant-table {
          background-color: unset;
          color: var(--song-color);
          font-size: 13px;
        }

        .ant-table-thead > tr > th {
          color: #fff;
        }

        .ant-table-tbody > tr.ant-table-placeholder:hover > td {
          background-color: unset;
        }

        .ant-table-row:hover > td {
          background-color: unset;
        }

        .ant-table-cell-scrollbar:not([rowspan]) {
          box-shadow: unset;
        }

        .ant-space-item {
          opacity: 0;
          cursor: pointer;
          font-size: 20px;

          transition: all 0.3s;
        }

        .ant-pagination-item-ellipsis {
          color: #fff;
        }

        .ant-table-row:hover {
          .ant-space-item {
            opacity: 1;
          }
        }
      }

      .detail {
        position: relative;
        width: 250px;
        text-align: center;

        .cover {
          margin-bottom: 15px;

          img {
            width: 175px;
            height: 175px;
            object-fit: cover;
          }

          .bg {
            position: absolute;
            top: 0;
            left: 36px;
            width: 210px;
            height: 200px;
            background: url(${cover}) no-repeat;
          }
        }

        p {
          font-size: 13px;
          margin: 5px 0;
        }

        .lyric {
          margin-top: 15px;
          height: 300px;
          overflow-y: auto;
          font-size: 16px;

          ::-webkit-scrollbar-thumb {
            background-color: transparent;
          }

          &:hover {
            ::-webkit-scrollbar-thumb {
              background-color: #cbcbcb;
            }
          }

          li {
            height: 30px;
            line-height: 30px;
            opacity: 0.5;
            transition: all 0.3s;

            &.active {
              opacity: 0.9;
            }
          }
        }
      }
    }
  }
`
