import styled from 'styled-components'

import { SkeletonProps } from './type'

function setStyle(
  place: 'height' | 'margin-bottom',
  numStyle?: number | number[]
) {
  let style: string[] | string = ''

  if (numStyle === undefined) return style

  if (typeof numStyle === 'number') {
    style = `li {
      ${place}: ${numStyle}px;
    }`
  } else {
    style = numStyle.map(
      (item, index) => `li:nth-child(${index + 1}){
          ${place}: ${item}px;
        }`
    )
  }

  return typeof style === 'string' ? style : style?.join('\n')
}

export const SkeletonStyle = styled.div<SkeletonProps>`
  box-sizing: border-box;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  padding: 20px;
  border-radius: var(--borderRadius);
  background-color: #fff;

  .ant-skeleton-paragraph {
    ${({ paragraphHeight }) => setStyle('height', paragraphHeight)}

    ${({ paragraphMarginBottom }) =>
      setStyle('margin-bottom', paragraphMarginBottom)}
  }

  .ant-skeleton-content
    .ant-skeleton-paragraph
    > li:last-child:not(:first-child):not(:nth-child(2)) {
    width: unset;
  }
`
