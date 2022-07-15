export interface EditorProps {
  onChange: (value: string) => void
  onSubmit: () => void
  submitting?: boolean
  value: string
  mainText: string
  isAvatar?: boolean
  isFocus?: boolean
  avatar?: string
}
