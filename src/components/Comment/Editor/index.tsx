import React from 'react'

import EditorInput from '../EditorInput'

import { EditorStyled } from './styled'

import { EditorProps } from './types'

const Editor: React.FC<EditorProps> = ({
  onChange,
  value,
  submitting,
  onSubmit,
  mainText = '评论'
}) => {
  return (
    <EditorStyled>
      {/* <div className="header">{mainText}</div> */}
      <EditorInput
        onChange={onChange}
        value={value}
        submitting={submitting}
        onSubmit={onSubmit}
        mainText={mainText}
      />
    </EditorStyled>
  )
}

export default React.memo(Editor)
